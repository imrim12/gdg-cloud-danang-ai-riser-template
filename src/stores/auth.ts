import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile as updateFirebaseProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  type User,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db, googleProvider } from '@/firebase'

export interface UserProfile {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
  createdAt?: string
  lastLoginAt?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const profile = ref<UserProfile | null>(null)
  const loading = ref<boolean>(true)
  const actionLoading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const authInitialized = ref<boolean>(false)

  const isAuthenticated = computed(() => !!user.value)

  const displayName = computed(() => {
    return profile.value?.displayName || user.value?.displayName || user.value?.email?.split('@')[0] || 'User'
  })

  const email = computed(() => {
    return user.value?.email || profile.value?.email || ''
  })

  const photoURL = computed(() => {
    return profile.value?.photoURL || user.value?.photoURL || ''
  })

  const isEmailVerified = computed(() => {
    return !!user.value?.emailVerified
  })

  const isPasswordUser = computed(() => {
    if (!user.value) return false
    return user.value.providerData.some((p) => p.providerId === 'password')
  })

  // Synchronize user profile in Firestore
  async function syncUserProfile(firebaseUser: User, customDisplayName?: string) {
    try {
      const userDocRef = doc(db, 'users', firebaseUser.uid)
      const userSnapshot = await getDoc(userDocRef)

      const name = customDisplayName || firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User'

      if (userSnapshot.exists()) {
        const data = userSnapshot.data() as UserProfile
        profile.value = data
        // Update last login
        await setDoc(
          userDocRef,
          {
            lastLoginAt: new Date().toISOString(),
            displayName: data.displayName || name,
            photoURL: data.photoURL || firebaseUser.photoURL || '',
          },
          { merge: true }
        )
      } else {
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: name,
          photoURL: firebaseUser.photoURL || '',
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
        }
        await setDoc(userDocRef, newProfile)
        profile.value = newProfile
      }
    } catch (err) {
      console.warn('Could not sync user profile with Firestore:', err)
      // Fallback in memory
      profile.value = {
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: customDisplayName || firebaseUser.displayName || 'User',
        photoURL: firebaseUser.photoURL || '',
      }
    }
  }

  // Auth state listener
  onAuthStateChanged(auth, async (currentUser) => {
    user.value = currentUser
    if (currentUser) {
      await syncUserProfile(currentUser)
    } else {
      profile.value = null
    }
    loading.value = false
    authInitialized.value = true
  })

  // Sign In with Email & Password
  async function loginWithEmail(emailInput: string, passwordInput: string) {
    actionLoading.value = true
    error.value = null
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailInput.trim(), passwordInput)
      user.value = userCredential.user
      await syncUserProfile(userCredential.user)
      return userCredential.user
    } catch (err: any) {
      error.value = formatAuthError(err)
      throw err
    } finally {
      actionLoading.value = false
    }
  }

  // Register with Email & Password
  async function registerWithEmail(emailInput: string, passwordInput: string, nameInput?: string) {
    actionLoading.value = true
    error.value = null
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailInput.trim(), passwordInput)
      const registeredUser = userCredential.user

      const formattedName = nameInput?.trim() || emailInput.split('@')[0]
      if (formattedName) {
        try {
          await updateFirebaseProfile(registeredUser, {
            displayName: formattedName,
          })
        } catch (profileErr) {
          console.warn('Could not update profile display name:', profileErr)
        }
      }

      // Send Firebase verification email
      try {
        await sendEmailVerification(registeredUser)
      } catch (verificationErr) {
        console.warn('Could not send verification email immediately:', verificationErr)
      }

      user.value = registeredUser
      await syncUserProfile(registeredUser, formattedName)
      return registeredUser
    } catch (err: any) {
      error.value = formatAuthError(err)
      throw err
    } finally {
      actionLoading.value = false
    }
  }

  // Send or Resend Email Verification
  async function sendVerificationEmail() {
    actionLoading.value = true
    error.value = null
    try {
      const targetUser = auth.currentUser || user.value
      if (!targetUser) {
        throw new Error('No user is currently signed in.')
      }
      await sendEmailVerification(targetUser)
      return true
    } catch (err: any) {
      error.value = formatAuthError(err)
      throw err
    } finally {
      actionLoading.value = false
    }
  }

  // Reload current user to check verification status
  async function reloadUser() {
    try {
      if (auth.currentUser) {
        await auth.currentUser.reload()
        user.value = auth.currentUser
        return auth.currentUser.emailVerified
      }
      return false
    } catch (err: any) {
      console.warn('Error reloading user:', err)
      return false
    }
  }

  // Sign In with Google
  async function loginWithGoogle() {
    actionLoading.value = true
    error.value = null
    try {
      const userCredential = await signInWithPopup(auth, googleProvider)
      user.value = userCredential.user
      await syncUserProfile(userCredential.user)
      return userCredential.user
    } catch (err: any) {
      error.value = formatAuthError(err)
      throw err
    } finally {
      actionLoading.value = false
    }
  }

  // Sign Out
  async function logout() {
    actionLoading.value = true
    error.value = null
    try {
      await signOut(auth)
      user.value = null
      profile.value = null
    } catch (err: any) {
      error.value = formatAuthError(err)
      throw err
    } finally {
      actionLoading.value = false
    }
  }

  // Change user password
  async function changeUserPassword(oldPasswordInput: string, newPasswordInput: string) {
    actionLoading.value = true
    error.value = null
    try {
      const currentUser = auth.currentUser || user.value
      if (!currentUser) {
        throw new Error('Please sign in to update your password.')
      }

      // If user has email/password provider, re-authenticate first to verify old password
      if (currentUser.email && oldPasswordInput) {
        const credential = EmailAuthProvider.credential(currentUser.email, oldPasswordInput)
        await reauthenticateWithCredential(currentUser, credential)
      }

      await updatePassword(currentUser, newPasswordInput)
      return true
    } catch (err: any) {
      error.value = formatAuthError(err)
      throw err
    } finally {
      actionLoading.value = false
    }
  }

  // Password reset
  async function resetPassword(emailInput: string) {
    actionLoading.value = true
    error.value = null
    try {
      await sendPasswordResetEmail(auth, emailInput.trim())
    } catch (err: any) {
      error.value = formatAuthError(err)
      throw err
    } finally {
      actionLoading.value = false
    }
  }

  // Helper to convert Firebase error codes to friendly messages
  function formatAuthError(err: any): string {
    const code = err?.code || ''
    switch (code) {
      case 'auth/invalid-email':
        return 'The email address is invalid.'
      case 'auth/user-disabled':
        return 'This account has been disabled.'
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Incorrect password or credentials.'
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.'
      case 'auth/weak-password':
        return 'The password is too weak. Please use at least 6-8 characters with numbers and symbols.'
      case 'auth/requires-recent-login':
        return 'For security reasons, this action requires recent login. Please log out and sign in again before updating password.'
      case 'auth/operation-not-allowed':
        return 'Email/Password sign-in is not enabled in Firebase Authentication. Please enable Email/Password provider in the Firebase Console (Authentication > Sign-in method).'
      case 'auth/popup-closed-by-user':
        return 'The Google sign-in popup was closed before completing.'
      case 'auth/cancelled-popup-request':
        return 'Google sign-in was cancelled.'
      case 'auth/popup-blocked':
        return 'Sign-in popup was blocked by the browser. Please allow popups.'
      case 'auth/network-request-failed':
        return 'Network connection failed. Please check your internet connection.'
      case 'auth/too-many-requests':
        return 'Too many attempts. Please try again in a few moments.'
      default:
        return err?.message || 'An unexpected error occurred. Please try again.'
    }
  }

  return {
    user,
    profile,
    loading,
    actionLoading,
    error,
    authInitialized,
    isAuthenticated,
    isEmailVerified,
    isPasswordUser,
    displayName,
    email,
    photoURL,
    loginWithEmail,
    registerWithEmail,
    sendVerificationEmail,
    reloadUser,
    loginWithGoogle,
    logout,
    resetPassword,
    changeUserPassword,
  }
})

/**
 * Returns a promise that resolves with the current Firebase user once initialized.
 */
export function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}
