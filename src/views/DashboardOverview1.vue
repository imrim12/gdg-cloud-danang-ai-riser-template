<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertRoot, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Lucide } from '@/components/ui/lucide'

const router = useRouter()
const authStore = useAuthStore()

const isResending = ref(false)
const isChecking = ref(false)
const verificationMessage = ref<string | null>(null)
const resendSuccess = ref(false)

const userGreeting = computed(() => {
  return authStore.displayName || 'User'
})

const userEmail = computed(() => {
  return authStore.email || 'user@example.com'
})

const isEmailVerified = computed(() => {
  return authStore.isEmailVerified
})

async function handleLogout() {
  await authStore.logout()
  router.push('/login')
}

async function resendVerification() {
  isResending.value = true
  verificationMessage.value = null
  try {
    await authStore.sendVerificationEmail()
    resendSuccess.value = true
    verificationMessage.value = 'A new verification link has been sent to your email address.'
  } catch (err: any) {
    resendSuccess.value = false
    verificationMessage.value = authStore.error || 'Failed to send verification email. Please try again later.'
  } finally {
    isResending.value = false
  }
}

async function checkVerification() {
  isChecking.value = true
  verificationMessage.value = null
  try {
    const verified = await authStore.reloadUser()
    if (verified) {
      resendSuccess.value = true
      verificationMessage.value = 'Your email is verified! Thank you.'
    } else {
      resendSuccess.value = false
      verificationMessage.value = 'Your email is still not verified. Please click the link sent to your inbox.'
    }
  } catch (err: any) {
    resendSuccess.value = false
    verificationMessage.value = 'Could not refresh verification status.'
  } finally {
    isChecking.value = false
  }
}
</script>

<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12">
      <div class="intro-y flex items-center justify-between mt-8">
        <h2 class="text-lg font-medium">Dashboard</h2>
        <div class="flex items-center gap-2">
          <Badge
            :variant="isEmailVerified ? 'success' : 'warning'"
            look="outline"
            class="gap-1.5 px-3 py-1 font-medium text-xs"
          >
            <span
              class="size-2 rounded-full"
              :class="isEmailVerified ? 'bg-success' : 'bg-warning animate-pulse'"
            ></span>
            {{ isEmailVerified ? 'Email Verified' : 'Unverified Email' }}
          </Badge>
          <Badge variant="secondary" look="outline" class="gap-1.5 px-3 py-1 font-medium text-xs">
            <span class="size-2 rounded-full bg-success"></span>
            Starter Ready
          </Badge>
        </div>
      </div>

      <!-- Email Verification Notice Banner (if unverified) -->
      <div v-if="!isEmailVerified" class="intro-y mt-4">
        <AlertRoot variant="warning" look="outline" class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4">
          <div class="flex items-start gap-3">
            <Lucide icon="AlertTriangle" class="size-5 text-warning shrink-0 mt-0.5" />
            <div>
              <AlertTitle class="font-semibold text-sm">Please verify your email address</AlertTitle>
              <AlertDescription class="text-xs opacity-80 mt-0.5">
                We've sent a verification link to <span class="font-medium text-foreground">{{ userEmail }}</span>. Please check your inbox or spam folder.
              </AlertDescription>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <Button
              size="sm"
              look="outline"
              class="text-xs px-3 py-1.5 flex items-center gap-1.5"
              :disabled="isChecking"
              @click="checkVerification"
            >
              <Lucide v-if="isChecking" icon="Loader2" class="size-3.5 animate-spin" />
              <Lucide v-else icon="RefreshCw" class="size-3.5" />
              Check Status
            </Button>
            <Button
              size="sm"
              variant="warning"
              class="text-xs px-3 py-1.5 flex items-center gap-1.5"
              :disabled="isResending"
              @click="resendVerification"
            >
              <Lucide v-if="isResending" icon="Loader2" class="size-3.5 animate-spin" />
              <Lucide v-else icon="Mail" class="size-3.5" />
              Resend Link
            </Button>
          </div>
        </AlertRoot>

        <div v-if="verificationMessage" class="mt-2 text-xs" :class="resendSuccess ? 'text-success font-medium' : 'text-danger font-medium'">
          {{ verificationMessage }}
        </div>
      </div>

      <!-- Welcome Card -->
      <div class="intro-y mt-5">
        <Box class="p-8 sm:p-10 relative overflow-hidden">
          <div class="max-w-2xl">
            <div class="flex items-center gap-3">
              <div class="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Lucide icon="Sparkles" class="size-6" />
              </div>
              <div>
                <h1 class="text-2xl font-semibold sm:text-3xl">
                  Welcome, {{ userGreeting }}!
                </h1>
                <p class="text-sm opacity-70">
                  Signed in as <span class="font-medium text-foreground">{{ userEmail }}</span>
                </p>
              </div>
            </div>

            <div class="mt-6 text-base opacity-80 leading-relaxed">
              Your starter dashboard is clean, configured, and protected by Firebase authentication with email verification. All original view components remain available in the codebase to build out your modules.
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                class="px-5 py-2.5 font-medium flex items-center gap-2"
                @click="router.push('/update-profile')"
              >
                <Lucide icon="UserCheck" class="size-4" />
                Edit Profile
              </Button>
              <Button
                look="outline"
                class="px-5 py-2.5 font-medium flex items-center gap-2"
                @click="router.push('/profile-overview-1')"
              >
                <Lucide icon="FileText" class="size-4" />
                View Profile
              </Button>
              <Button
                look="outline"
                class="px-5 py-2.5 font-medium text-danger hover:bg-danger/10 flex items-center gap-2"
                @click="handleLogout"
              >
                <Lucide icon="LogOut" class="size-4" />
                Sign Out
              </Button>
            </div>
          </div>

          <!-- Subtle Background Decoration -->
          <div
            class="pointer-events-none absolute -bottom-10 -right-10 opacity-5 dark:opacity-10"
            aria-hidden="true"
          >
            <Lucide icon="LayoutDashboard" class="size-64" />
          </div>
        </Box>
      </div>
    </div>
  </div>
</template>
