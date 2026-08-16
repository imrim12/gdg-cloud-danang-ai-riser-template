import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore'
import firebaseConfig from '../../firebase-applet-config.json'

const app = !getApps().length
  ? initializeApp({
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      projectId: firebaseConfig.projectId,
      storageBucket: firebaseConfig.storageBucket,
      messagingSenderId: firebaseConfig.messagingSenderId,
      appId: firebaseConfig.appId,
      measurementId: firebaseConfig.measurementId,
    })
  : getApp()

export const auth = getAuth(app)
export const db = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app)

export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'))
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase Firestore is offline or unreachable.')
    }
  }
}

// Test connection on boot
testConnection()

export default app
