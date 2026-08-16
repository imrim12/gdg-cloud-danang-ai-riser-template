<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import logoUrl from '@/assets/images/logo.svg'
import illustrationUrl from '@/assets/images/illustration.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Box } from '@/components/ui/box'
import { AlertRoot, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Lucide } from '@/components/ui/lucide'

const router = useRouter()
const authStore = useAuthStore()

// Form states
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeTerms = ref(true)

// UI & Step states
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const isSubmitting = ref(false)
const isGoogleSubmitting = ref(false)
const isResending = ref(false)
const isCheckingStatus = ref(false)

const errorMessage = ref<string | null>(null)
const successMessage = ref<string | null>(null)
const verificationNotice = ref<string | null>(null)

// Step: 'form' | 'verification'
const currentStep = ref<'form' | 'verification'>('form')
const registeredEmail = ref('')

// Resend timer countdown
const resendCooldown = ref(0)
const { pause: stopResendCountdown, resume: runResendCountdown } = useIntervalFn(
  () => {
    if (resendCooldown.value > 0) {
      resendCooldown.value--
    } else {
      stopResendCountdown()
    }
  },
  1000,
  { immediate: false },
)

function startResendCountdown(seconds = 60) {
  stopResendCountdown()
  resendCooldown.value = seconds
  runResendCountdown()
}

// Detailed password criteria
const hasMinLength = computed(() => password.value.length >= 8)
const hasLowerCase = computed(() => /[a-z]/.test(password.value))
const hasUpperCase = computed(() => /[A-Z]/.test(password.value))
const hasNumber = computed(() => /[0-9]/.test(password.value))
const hasSpecialChar = computed(() => /[^A-Za-z0-9]/.test(password.value))

// Password strength calculation (0 to 4)
const passwordCriteriaCount = computed(() => {
  if (!password.value) return 0
  let count = 0
  if (hasMinLength.value) count++
  if (hasLowerCase.value && hasUpperCase.value) count++
  if (hasNumber.value) count++
  if (hasSpecialChar.value) count++
  return count
})

const passwordStrengthScore = computed(() => {
  if (!password.value) return 0
  if (password.value.length < 6) return 1
  return passwordCriteriaCount.value
})

const passwordStrengthLabel = computed(() => {
  switch (passwordStrengthScore.value) {
    case 1:
      return 'Weak'
    case 2:
      return 'Fair'
    case 3:
      return 'Good'
    case 4:
      return 'Strong'
    default:
      return 'None'
  }
})

const passwordStrengthColor = computed(() => {
  switch (passwordStrengthScore.value) {
    case 1:
      return 'text-danger'
    case 2:
      return 'text-warning'
    case 3:
      return 'text-pending'
    case 4:
      return 'text-success'
    default:
      return 'text-foreground/40'
  }
})

const isPasswordMatching = computed(() => {
  if (!confirmPassword.value) return true
  return password.value === confirmPassword.value
})

const isValidEmail = computed(() => {
  if (!email.value) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
})

// Registration handler
async function handleRegister() {
  errorMessage.value = null
  successMessage.value = null

  const trimmedFirst = firstName.value.trim()
  const trimmedLast = lastName.value.trim()
  const trimmedEmail = email.value.trim()

  if (!trimmedFirst) {
    errorMessage.value = 'Please enter your first name.'
    return
  }

  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }

  if (password.value.length < 8) {
    errorMessage.value = 'Password must be at least 8 characters long.'
    return
  }

  if (passwordStrengthScore.value < 2) {
    errorMessage.value =
      'Please choose a stronger password using a combination of letters, numbers, and symbols.'
    return
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

  if (!agreeTerms.value) {
    errorMessage.value = 'Please agree to the Privacy Policy and Terms of Service.'
    return
  }

  isSubmitting.value = true
  try {
    const fullName = `${trimmedFirst} ${trimmedLast}`.trim()
    await authStore.registerWithEmail(trimmedEmail, password.value, fullName)

    registeredEmail.value = trimmedEmail
    currentStep.value = 'verification'
    startResendCountdown(60)
  } catch (err: any) {
    errorMessage.value = authStore.error || err?.message || 'Registration failed. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

// Google Sign In
async function handleGoogleRegister() {
  errorMessage.value = null
  successMessage.value = null
  isGoogleSubmitting.value = true

  try {
    await authStore.loginWithGoogle()
    successMessage.value = 'Signed up with Google! Redirecting...'
    setTimeout(() => {
      router.push('/')
    }, 500)
  } catch (err: any) {
    errorMessage.value = authStore.error || err?.message || 'Failed to sign up with Google.'
  } finally {
    isGoogleSubmitting.value = false
  }
}

// Resend verification email
async function handleResendVerification() {
  if (resendCooldown.value > 0 || isResending.value) return
  isResending.value = true
  verificationNotice.value = null

  try {
    await authStore.sendVerificationEmail()
    verificationNotice.value = 'A new verification email has been sent! Please check your inbox.'
    startResendCountdown(60)
  } catch (err: any) {
    verificationNotice.value = authStore.error || 'Could not resend email. Please try again later.'
  } finally {
    isResending.value = false
  }
}

// Check verification status
async function checkVerificationStatus() {
  isCheckingStatus.value = true
  verificationNotice.value = null

  try {
    const isVerified = await authStore.reloadUser()
    if (isVerified) {
      verificationNotice.value = 'Email verified successfully! Taking you to your dashboard...'
      setTimeout(() => {
        router.push('/')
      }, 1000)
    } else {
      verificationNotice.value =
        'Your email is not verified yet. Please click the link in your email, then check again.'
    }
  } catch (err: any) {
    verificationNotice.value = 'Failed to check verification status. Please try again.'
  } finally {
    isCheckingStatus.value = false
  }
}

function proceedToDashboard() {
  router.push('/')
}

async function handleLogoutAndLogin() {
  await authStore.logout()
  router.push('/login')
}
</script>

<template>
  <div
    :class="[
      'relative min-h-screen lg:overflow-hidden bg-primary bg-noise xl:bg-background xl:bg-none',
      'before:hidden before:xl:block before:content-[\'\'] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[12%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[6deg] before:bg-primary/[.95] before:bg-noise before:rounded-[35%]',
      'after:hidden after:xl:block after:content-[\'\'] after:w-[57%] after:-mt-[28%] after:-mb-[16%] after:-ml-[12%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[6deg] after:border after:bg-accent after:bg-cover after:blur-xl after:rounded-[35%] after:border-[20px] after:border-primary',
    ]"
  >
    <div
      :class="[
        'p-3 sm:px-8 relative h-full',
        'before:hidden before:xl:block before:w-[57%] before:-mt-[20%] before:-mb-[13%] before:-ml-[12%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-6deg] before:bg-primary/40 before:bg-noise before:border before:border-primary/50 before:opacity-60 before:rounded-[20%]',
      ]"
    >
      <div class="container relative z-10 mx-auto sm:px-20">
        <div class="block grid-cols-2 gap-4 xl:grid">
          <!-- BEGIN: Register Info -->
          <div class="hidden min-h-screen flex-col xl:flex">
            <router-link class="flex items-center pt-10" to="/">
              <img class="w-6" :src="logoUrl" alt="Midone - Tailwind Admin Dashboard Template" />
              <span class="ml-3 text-xl font-medium text-white">
                Midone <span class="font-light opacity-70">Admin</span>
              </span>
            </router-link>
            <div class="my-auto">
              <img
                class="-mt-16 w-1/2"
                :src="illustrationUrl"
                alt="Midone - Tailwind Admin Dashboard Template"
              />
              <div class="mt-10 text-4xl font-medium leading-tight text-white">
                A few more clicks to <br />
                sign up to your account.
              </div>
              <div class="mt-5 text-lg text-white opacity-70">
                Join our admin ecosystem with secure Firebase authentication and email verification
              </div>
            </div>
          </div>
          <!-- END: Register Info -->

          <!-- BEGIN: Register Box Container -->
          <div class="my-10 flex min-h-screen py-5 xl:my-0 xl:h-auto xl:py-0">
            <Box
              raised="double"
              class="mx-auto my-auto w-full px-5 py-8 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-24 xl:w-auto xl:p-0 xl:before:hidden xl:after:hidden xl:shadow-none xl:border-none xl:bg-none"
            >
              <!-- STEP 1: REGISTRATION FORM -->
              <div v-if="currentStep === 'form'">
                <h2 class="text-center text-2xl font-semibold xl:text-left xl:text-3xl">
                  Create Account
                </h2>
                <div class="mt-2 text-center opacity-70 xl:text-left">
                  Sign up for your starter account with verified email protection
                </div>

                <!-- Error Alert -->
                <AlertRoot v-if="errorMessage" variant="danger" look="outline" class="mt-5 text-sm">
                  <Lucide icon="AlertCircle" class="size-4" />
                  <AlertTitle>Registration Error</AlertTitle>
                  <AlertDescription>{{ errorMessage }}</AlertDescription>
                </AlertRoot>

                <!-- Success Alert -->
                <AlertRoot
                  v-if="successMessage"
                  variant="success"
                  look="outline"
                  class="mt-5 text-sm"
                >
                  <Lucide icon="CheckCircle" class="size-4" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{{ successMessage }}</AlertDescription>
                </AlertRoot>

                <!-- Google Sign In Button -->
                <div class="mt-6">
                  <Button
                    type="button"
                    look="outline"
                    class="box flex w-full items-center justify-center gap-3 px-4 py-3.5 font-medium transition hover:bg-foreground/5"
                    :disabled="isGoogleSubmitting || isSubmitting"
                    @click="handleGoogleRegister"
                  >
                    <svg class="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>{{ isGoogleSubmitting ? 'Signing up...' : 'Sign up with Google' }}</span>
                  </Button>
                </div>

                <!-- Divider -->
                <div class="relative my-6 flex items-center justify-center">
                  <div class="border-foreground/15 absolute inset-0 flex items-center">
                    <div class="w-full border-t"></div>
                  </div>
                  <div class="bg-background relative px-3 text-xs uppercase opacity-60">
                    Or register with email
                  </div>
                </div>

                <!-- Form Fields -->
                <form @submit.prevent="handleRegister" class="flex flex-col gap-4">
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Input
                        v-model="firstName"
                        class="box block min-w-full px-4 py-3.5"
                        type="text"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        v-model="lastName"
                        class="box block min-w-full px-4 py-3.5"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      v-model="email"
                      class="box block min-w-full px-4 py-3.5 xl:min-w-[28rem]"
                      :class="{ 'border-danger': email && !isValidEmail }"
                      type="email"
                      placeholder="Email address"
                      autocomplete="email"
                      required
                    />
                    <div v-if="email && !isValidEmail" class="mt-1 text-xs text-danger">
                      Please enter a valid email format (e.g. name@domain.com)
                    </div>
                  </div>

                  <!-- Password Input & Strength -->
                  <div>
                    <div class="relative">
                      <Input
                        v-model="password"
                        class="box block min-w-full px-4 py-3.5 pr-10 xl:min-w-[28rem]"
                        :type="showPassword ? 'text' : 'password'"
                        placeholder="Create Password (min 8 characters)"
                        autocomplete="new-password"
                        required
                      />
                      <button
                        type="button"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground p-1"
                        @click="showPassword = !showPassword"
                        tabindex="-1"
                        aria-label="Toggle password visibility"
                      >
                        <Lucide :icon="showPassword ? 'EyeOff' : 'Eye'" class="size-4" />
                      </button>
                    </div>

                    <!-- Password Strength Meter -->
                    <div class="mt-3">
                      <div class="grid grid-cols-4 gap-1.5 h-1.5 w-full">
                        <div
                          class="rounded-full transition-all duration-300"
                          :class="passwordStrengthScore >= 1 ? 'bg-danger' : 'bg-foreground/10'"
                        ></div>
                        <div
                          class="rounded-full transition-all duration-300"
                          :class="passwordStrengthScore >= 2 ? 'bg-warning' : 'bg-foreground/10'"
                        ></div>
                        <div
                          class="rounded-full transition-all duration-300"
                          :class="passwordStrengthScore >= 3 ? 'bg-pending' : 'bg-foreground/10'"
                        ></div>
                        <div
                          class="rounded-full transition-all duration-300"
                          :class="passwordStrengthScore >= 4 ? 'bg-success' : 'bg-foreground/10'"
                        ></div>
                      </div>

                      <div class="mt-1.5 flex items-center justify-between text-xs">
                        <span class="opacity-70">Password strength:</span>
                        <span class="font-medium" :class="passwordStrengthColor">
                          {{ password ? passwordStrengthLabel : 'Enter password' }}
                        </span>
                      </div>

                      <!-- Password Criteria Checklist -->
                      <div
                        class="mt-2.5 grid grid-cols-2 gap-1.5 text-xs bg-foreground/[0.03] p-2.5 rounded-lg border border-foreground/10"
                      >
                        <div
                          class="flex items-center gap-1.5"
                          :class="hasMinLength ? 'text-success font-medium' : 'text-foreground/50'"
                        >
                          <Lucide :icon="hasMinLength ? 'Check' : 'Circle'" class="size-3.5" />
                          <span>8+ characters</span>
                        </div>
                        <div
                          class="flex items-center gap-1.5"
                          :class="
                            hasLowerCase && hasUpperCase
                              ? 'text-success font-medium'
                              : 'text-foreground/50'
                          "
                        >
                          <Lucide
                            :icon="hasLowerCase && hasUpperCase ? 'Check' : 'Circle'"
                            class="size-3.5"
                          />
                          <span>Upper & lowercase</span>
                        </div>
                        <div
                          class="flex items-center gap-1.5"
                          :class="hasNumber ? 'text-success font-medium' : 'text-foreground/50'"
                        >
                          <Lucide :icon="hasNumber ? 'Check' : 'Circle'" class="size-3.5" />
                          <span>At least 1 number</span>
                        </div>
                        <div
                          class="flex items-center gap-1.5"
                          :class="
                            hasSpecialChar ? 'text-success font-medium' : 'text-foreground/50'
                          "
                        >
                          <Lucide :icon="hasSpecialChar ? 'Check' : 'Circle'" class="size-3.5" />
                          <span>Special symbol</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Confirm Password Input -->
                  <div>
                    <div class="relative">
                      <Input
                        v-model="confirmPassword"
                        class="box block min-w-full px-4 py-3.5 pr-10 xl:min-w-[28rem]"
                        :class="{ 'border-danger': confirmPassword && !isPasswordMatching }"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        placeholder="Confirm Password"
                        autocomplete="new-password"
                        required
                      />
                      <button
                        type="button"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground p-1"
                        @click="showConfirmPassword = !showConfirmPassword"
                        tabindex="-1"
                        aria-label="Toggle confirm password visibility"
                      >
                        <Lucide :icon="showConfirmPassword ? 'EyeOff' : 'Eye'" class="size-4" />
                      </button>
                    </div>
                    <div
                      v-if="confirmPassword && !isPasswordMatching"
                      class="mt-1 text-xs text-danger"
                    >
                      Passwords do not match
                    </div>
                    <div
                      v-else-if="confirmPassword && isPasswordMatching"
                      class="mt-1 text-xs text-success flex items-center gap-1"
                    >
                      <Lucide icon="Check" class="size-3" /> Passwords match
                    </div>
                  </div>

                  <!-- Terms Agreement -->
                  <div class="flex text-xs sm:text-sm mt-1">
                    <label class="flex cursor-pointer items-start gap-2.5">
                      <input
                        type="checkbox"
                        v-model="agreeTerms"
                        class="mt-0.5 rounded border-foreground/30 text-primary focus:ring-primary h-4 w-4"
                        required
                      />
                      <span class="opacity-80 leading-snug">
                        I agree to the
                        <span class="text-primary hover:underline font-medium">Privacy Policy</span>
                        and
                        <span class="text-primary hover:underline font-medium"
                          >Terms of Service</span
                        >.
                      </span>
                    </label>
                  </div>

                  <!-- Submit Buttons -->
                  <div class="mt-2 text-center xl:text-left">
                    <Button
                      type="submit"
                      class="box w-full px-4 py-4 font-semibold shadow-md"
                      variant="primary"
                      :disabled="
                        isSubmitting || isGoogleSubmitting || !isPasswordMatching || !agreeTerms
                      "
                    >
                      <Lucide
                        v-if="isSubmitting"
                        icon="Loader2"
                        class="mr-2 inline size-4 animate-spin"
                      />
                      {{
                        isSubmitting
                          ? 'Creating account & sending verification...'
                          : 'Create Account'
                      }}
                    </Button>

                    <Button
                      type="button"
                      class="box mt-3 w-full px-4 py-3.5 font-medium"
                      look="outline"
                      @click="handleLogoutAndLogin"
                    >
                      Already have an account? Sign In
                    </Button>
                  </div>
                </form>
              </div>

              <!-- STEP 2: EMAIL VERIFICATION NOTICE SCREEN -->
              <div v-else-if="currentStep === 'verification'" class="py-2">
                <div class="text-center">
                  <div
                    class="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                  >
                    <Lucide icon="MailCheck" class="size-8" />
                  </div>

                  <h2 class="mt-5 text-2xl font-semibold sm:text-3xl">Verify Your Email</h2>

                  <p class="mt-3 text-sm opacity-80 leading-relaxed max-w-md mx-auto">
                    We've sent a verification link to:
                  </p>

                  <div
                    class="mt-2 inline-flex items-center gap-2 rounded-lg bg-foreground/[0.05] border border-foreground/10 px-4 py-2 text-sm font-semibold text-foreground"
                  >
                    <Lucide icon="Mail" class="size-4 text-primary" />
                    <span>{{ registeredEmail }}</span>
                  </div>

                  <p class="mt-3 text-xs opacity-70 max-w-sm mx-auto">
                    Please check your inbox (and junk/spam folder) and click the link to verify your
                    account.
                  </p>
                </div>

                <!-- Verification Notice Feedback -->
                <AlertRoot
                  v-if="verificationNotice"
                  variant="primary"
                  look="outline"
                  class="mt-6 text-xs text-left"
                >
                  <Lucide icon="Info" class="size-4" />
                  <AlertDescription>{{ verificationNotice }}</AlertDescription>
                </AlertRoot>

                <!-- Actions -->
                <div class="mt-8 flex flex-col gap-3">
                  <!-- Check Status Button -->
                  <Button
                    type="button"
                    variant="primary"
                    class="box w-full px-4 py-3.5 font-medium flex items-center justify-center gap-2 shadow"
                    :disabled="isCheckingStatus"
                    @click="checkVerificationStatus"
                  >
                    <Lucide v-if="isCheckingStatus" icon="Loader2" class="size-4 animate-spin" />
                    <Lucide v-else icon="RefreshCw" class="size-4" />
                    <span>{{
                      isCheckingStatus ? 'Checking status...' : "I've Verified My Email"
                    }}</span>
                  </Button>

                  <!-- Resend Verification Link -->
                  <Button
                    type="button"
                    look="outline"
                    class="box w-full px-4 py-3.5 font-medium flex items-center justify-center gap-2"
                    :disabled="resendCooldown > 0 || isResending"
                    @click="handleResendVerification"
                  >
                    <Lucide v-if="isResending" icon="Loader2" class="size-4 animate-spin" />
                    <Lucide v-else icon="Send" class="size-4" />
                    <span v-if="resendCooldown > 0">Resend email in {{ resendCooldown }}s</span>
                    <span v-else>{{
                      isResending ? 'Sending...' : 'Resend Verification Link'
                    }}</span>
                  </Button>

                  <!-- Proceed to Dashboard -->
                  <Button
                    type="button"
                    look="outline"
                    class="box w-full px-4 py-3.5 font-medium"
                    @click="proceedToDashboard"
                  >
                    Proceed to Dashboard
                  </Button>

                  <!-- Switch Account -->
                  <div class="mt-2 text-center">
                    <button
                      type="button"
                      class="text-xs opacity-70 hover:opacity-100 hover:underline"
                      @click="handleLogoutAndLogin"
                    >
                      Sign in with a different account
                    </button>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <!-- END: Register Box Container -->
        </div>
      </div>
    </div>
  </div>
</template>
