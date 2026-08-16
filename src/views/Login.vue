<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { CheckboxRoot, CheckboxControl, CheckboxLabel } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { AlertRoot, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Lucide } from '@/components/ui/lucide'
import logoUrl from '@/assets/images/logo.svg'
import illustrationUrl from '@/assets/images/illustration.svg'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const errorMessage = ref<string | null>(null)
const successMessage = ref<string | null>(null)
const isSubmitting = ref(false)
const isGoogleSubmitting = ref(false)
const showResetModal = ref(false)
const resetEmail = ref('')
const resetSending = ref(false)
const resetStatus = ref<string | null>(null)
const rememberedEmail = useLocalStorage<string | null>('midone_remembered_email', null)

onMounted(() => {
  if (rememberedEmail.value) {
    email.value = rememberedEmail.value
    rememberMe.value = true
  }

  // If already logged in, redirect
  if (authStore.isAuthenticated) {
    const redirect = (route.query.redirect as string) || '/'
    router.push(redirect)
  }
})

async function handleEmailLogin() {
  errorMessage.value = null
  successMessage.value = null

  if (!email.value.trim()) {
    errorMessage.value = 'Please enter your email address.'
    return
  }
  if (!password.value) {
    errorMessage.value = 'Please enter your password.'
    return
  }

  isSubmitting.value = true
  try {
    if (rememberMe.value) {
      rememberedEmail.value = email.value.trim()
    } else {
      rememberedEmail.value = null
    }

    await authStore.loginWithEmail(email.value, password.value)
    successMessage.value = 'Sign in successful! Redirecting...'
    const redirect = (route.query.redirect as string) || '/'
    setTimeout(() => {
      router.push(redirect)
    }, 400)
  } catch (err: any) {
    errorMessage.value = authStore.error || err?.message || 'Failed to sign in.'
  } finally {
    isSubmitting.value = false
  }
}

async function handleGoogleLogin() {
  errorMessage.value = null
  successMessage.value = null
  isGoogleSubmitting.value = true

  try {
    await authStore.loginWithGoogle()
    successMessage.value = 'Signed in with Google! Redirecting...'
    const redirect = (route.query.redirect as string) || '/'
    setTimeout(() => {
      router.push(redirect)
    }, 400)
  } catch (err: any) {
    errorMessage.value = authStore.error || err?.message || 'Failed to sign in with Google.'
  } finally {
    isGoogleSubmitting.value = false
  }
}

async function handleResetPassword() {
  if (!resetEmail.value.trim()) {
    resetStatus.value = 'Please enter your email.'
    return
  }
  resetSending.value = true
  resetStatus.value = null
  try {
    await authStore.resetPassword(resetEmail.value)
    resetStatus.value = 'Password reset email sent! Check your inbox.'
    setTimeout(() => {
      showResetModal.value = false
      resetStatus.value = null
    }, 2500)
  } catch (err: any) {
    resetStatus.value = authStore.error || 'Failed to send reset link.'
  } finally {
    resetSending.value = false
  }
}

function navigateToRegister() {
  router.push('/register')
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
          <!-- BEGIN: Login Info -->
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
                sign in to your account.
              </div>
              <div class="mt-5 text-lg text-white opacity-60">
                Manage all your dashboard modules and data securely with Firebase
              </div>
            </div>
          </div>
          <!-- END: Login Info -->

          <!-- BEGIN: Login Form -->
          <div class="my-10 flex min-h-screen py-5 xl:my-0 xl:h-auto xl:py-0">
            <Box
              raised="double"
              class="mx-auto my-auto w-full px-5 py-8 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-24 xl:w-auto xl:p-0 xl:before:hidden xl:after:hidden xl:shadow-none xl:border-none xl:bg-none"
            >
              <h2 class="text-center text-2xl font-semibold xl:text-left xl:text-3xl">Sign In</h2>
              <div class="mt-2 text-center opacity-70 xl:hidden">
                A few more clicks to sign in to your account. Access your dashboard securely.
              </div>

              <!-- Error Alert -->
              <AlertRoot v-if="errorMessage" variant="danger" look="outline" class="mt-5 text-sm">
                <Lucide icon="AlertCircle" class="size-4" />
                <AlertTitle>Authentication Error</AlertTitle>
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
                  class="box flex w-full items-center justify-center gap-3 px-4 py-4 font-medium transition hover:bg-foreground/5"
                  :disabled="isGoogleSubmitting || isSubmitting"
                  @click="handleGoogleLogin"
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
                  <span>{{ isGoogleSubmitting ? 'Signing in...' : 'Sign in with Google' }}</span>
                </Button>
              </div>

              <!-- Divider -->
              <div class="relative my-6 flex items-center justify-center">
                <div class="border-foreground/15 absolute inset-0 flex items-center">
                  <div class="w-full border-t"></div>
                </div>
                <div class="bg-background relative px-3 text-xs uppercase opacity-60">
                  Or continue with email
                </div>
              </div>

              <!-- Form Fields -->
              <form @submit.prevent="handleEmailLogin" class="flex flex-col gap-4">
                <div>
                  <Input
                    v-model="email"
                    class="box block min-w-full px-5 py-4 xl:min-w-[28rem]"
                    type="email"
                    placeholder="Email address"
                    autocomplete="email"
                    required
                  />
                </div>
                <div class="relative">
                  <Input
                    v-model="password"
                    class="box block min-w-full px-5 py-4 pr-10 xl:min-w-[28rem]"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Password"
                    autocomplete="current-password"
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

                <div class="flex items-center justify-between text-xs sm:text-sm">
                  <label class="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      v-model="rememberMe"
                      class="rounded border-foreground/30 text-primary focus:ring-primary h-4 w-4"
                    />
                    <span class="opacity-80">Remember me</span>
                  </label>
                  <button
                    type="button"
                    class="text-primary hover:underline opacity-80"
                    @click="showResetModal = true"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div class="mt-2 text-center xl:text-left">
                  <Button
                    type="submit"
                    class="login-button box w-full px-4 py-4 font-semibold"
                    variant="primary"
                    :disabled="isSubmitting || isGoogleSubmitting"
                  >
                    <Lucide
                      v-if="isSubmitting"
                      icon="Loader2"
                      class="mr-2 inline size-4 animate-spin"
                    />
                    {{ isSubmitting ? 'Signing in...' : 'Login' }}
                  </Button>

                  <Button
                    type="button"
                    class="box mt-3 w-full px-4 py-4"
                    look="outline"
                    @click="navigateToRegister"
                  >
                    Don't have an account? Register
                  </Button>
                </div>
              </form>

              <!-- Reset Password Popover/Modal -->
              <div
                v-if="showResetModal"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
              >
                <Box class="w-full max-w-md p-6">
                  <h3 class="text-lg font-semibold">Reset Password</h3>
                  <p class="mt-1 text-sm opacity-70">
                    Enter your email address and we'll send you a password reset link.
                  </p>
                  <div class="mt-4">
                    <Input
                      v-model="resetEmail"
                      type="email"
                      placeholder="Your email address"
                      class="w-full px-4 py-3"
                    />
                  </div>
                  <div
                    v-if="resetStatus"
                    class="mt-3 text-sm"
                    :class="resetStatus.includes('sent') ? 'text-success' : 'text-danger'"
                  >
                    {{ resetStatus }}
                  </div>
                  <div class="mt-5 flex justify-end gap-3">
                    <Button
                      type="button"
                      look="outline"
                      @click="showResetModal = false"
                      :disabled="resetSending"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      @click="handleResetPassword"
                      :disabled="resetSending"
                    >
                      {{ resetSending ? 'Sending...' : 'Send Link' }}
                    </Button>
                  </div>
                </Box>
              </div>

              <div class="mt-8 text-center text-xs opacity-70 xl:mt-12 xl:text-left">
                By signing in, you agree to our
                <span class="text-primary cursor-pointer hover:underline">
                  Terms and Conditions
                </span>
                &amp;
                <span class="text-primary cursor-pointer hover:underline"> Privacy Policy </span>
              </div>
            </Box>
          </div>
          <!-- END: Login Form -->
        </div>
      </div>
    </div>
  </div>
</template>
