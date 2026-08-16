<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { UserAvatar } from '@/components/user-avatar'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { AlertRoot, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Lucide } from '@/components/ui/lucide'
import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  MenuSeparator,
} from '@/components/ui/menu'

const router = useRouter()
const authStore = useAuthStore()

// Form states
const oldPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

// Visibility toggles
const showOldPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)

// Action & feedback states
const isSubmitting = ref(false)
const isSendingReset = ref(false)
const errorMessage = ref<string | null>(null)
const successMessage = ref<string | null>(null)
const resetNotice = ref<string | null>(null)

// User info
const userName = computed(() => authStore.displayName || authStore.email || 'User')
const userEmail = computed(() => authStore.email || '')
const userRole = computed(() => (authStore.isAuthenticated ? 'Administrator' : 'Guest'))

// Detailed password criteria
const hasMinLength = computed(() => newPassword.value.length >= 8)
const hasLowerCase = computed(() => /[a-z]/.test(newPassword.value))
const hasUpperCase = computed(() => /[A-Z]/.test(newPassword.value))
const hasNumber = computed(() => /[0-9]/.test(newPassword.value))
const hasSpecialChar = computed(() => /[^A-Za-z0-9]/.test(newPassword.value))

// Password strength calculation (0 to 4)
const passwordCriteriaCount = computed(() => {
  if (!newPassword.value) return 0
  let count = 0
  if (hasMinLength.value) count++
  if (hasLowerCase.value && hasUpperCase.value) count++
  if (hasNumber.value) count++
  if (hasSpecialChar.value) count++
  return count
})

const passwordStrengthScore = computed(() => {
  if (!newPassword.value) return 0
  if (newPassword.value.length < 6) return 1
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
  return newPassword.value === confirmPassword.value
})

// Handle reset form
function handleResetForm() {
  oldPassword.value = ''
  newPassword.value = ''
  confirmPassword.value = ''
  errorMessage.value = null
  successMessage.value = null
  resetNotice.value = null
}

// Handle change password submission
async function handleChangePassword() {
  errorMessage.value = null
  successMessage.value = null
  resetNotice.value = null

  if (!authStore.isAuthenticated) {
    errorMessage.value = 'Please sign in to update your account password.'
    return
  }

  // Validate Old Password if user is on password auth
  if (authStore.isPasswordUser && !oldPassword.value) {
    errorMessage.value = 'Please enter your current (old) password.'
    return
  }

  if (!newPassword.value) {
    errorMessage.value = 'Please enter a new password.'
    return
  }

  if (newPassword.value.length < 8) {
    errorMessage.value = 'New password must be at least 8 characters long.'
    return
  }

  if (!isPasswordMatching.value) {
    errorMessage.value = 'New password and confirmation do not match.'
    return
  }

  if (oldPassword.value && oldPassword.value === newPassword.value) {
    errorMessage.value = 'New password must be different from your current password.'
    return
  }

  isSubmitting.value = true
  try {
    await authStore.changeUserPassword(oldPassword.value, newPassword.value)
    successMessage.value = 'Your password has been changed successfully.'
    oldPassword.value = ''
    newPassword.value = ''
    confirmPassword.value = ''
  } catch (err: any) {
    errorMessage.value = authStore.error || err?.message || 'Failed to change password. Please verify your current password.'
  } finally {
    isSubmitting.value = false
  }
}

// Send password reset email fallback
async function handleSendResetEmail() {
  if (!userEmail.value) {
    errorMessage.value = 'No email address found for this user.'
    return
  }

  isSendingReset.value = true
  resetNotice.value = null
  errorMessage.value = null

  try {
    await authStore.resetPassword(userEmail.value)
    resetNotice.value = `A password reset link has been dispatched to ${userEmail.value}. Check your inbox.`
  } catch (err: any) {
    errorMessage.value = authStore.error || 'Failed to send password reset email.'
  } finally {
    isSendingReset.value = false
  }
}

function navigateTo(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="flex items-center">
    <h2 class="mr-auto text-lg font-medium">Change Password</h2>
  </div>

  <div class="grid grid-cols-12 gap-6">
    <!-- BEGIN: Profile Menu -->
    <div class="col-span-12 flex flex-col-reverse lg:col-span-4 lg:block 2xl:col-span-3">
      <Box class="mt-5 p-0">
        <div class="relative flex items-center p-5">
          <UserAvatar class="size-12 rounded-full border" textClass="text-sm font-semibold" />
          <div class="ml-4 mr-auto">
            <div class="text-base font-medium">
              {{ userName }}
            </div>
            <div class="opacity-70 text-xs">{{ userRole }}</div>
          </div>
          <MenuRoot
            class="w-auto"
            :positioning="{
              placement: 'bottom',
            }"
          >
            <MenuTrigger as-child>
              <Lucide class="size-5 opacity-70 cursor-pointer hover:opacity-100" icon="MoreHorizontal" />
            </MenuTrigger>
            <MenuPositioner>
              <MenuContent class="w-64">
                <div class="font-medium px-3 py-1.5 text-xs text-foreground/70">Quick Actions</div>
                <MenuSeparator />
                <MenuItem value="0" @click="navigateTo('/profile-overview-1')">
                  <Lucide icon="User" />
                  View Profile
                </MenuItem>
                <MenuItem value="1" @click="navigateTo('/update-profile')">
                  <Lucide icon="Shield" />
                  Edit Profile
                </MenuItem>
                <MenuItem value="2" @click="navigateTo('/users-layout-1')">
                  <Lucide icon="Users" />
                  Users List
                </MenuItem>
                <MenuSeparator />
                <div class="flex p-2">
                  <Button
                    class="text-xs"
                    type="button"
                    variant="primary"
                    look="outline"
                    size="sm"
                    @click="navigateTo('/update-profile')"
                  >
                    Edit Profile
                  </Button>
                  <Button
                    class="ml-auto text-xs"
                    type="button"
                    variant="secondary"
                    look="outline"
                    size="sm"
                    @click="navigateTo('/profile-overview-1')"
                  >
                    View Profile
                  </Button>
                </div>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>

        <div class="flex flex-col gap-1 border-t border-foreground/10 p-3">
          <button
            type="button"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition hover:bg-foreground/5"
            @click="navigateTo('/profile-overview-1')"
          >
            <Lucide class="size-4 text-foreground/70" icon="Activity" />
            <span>Personal Information</span>
          </button>
          <button
            type="button"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition hover:bg-foreground/5"
            @click="navigateTo('/update-profile')"
          >
            <Lucide class="size-4 text-foreground/70" icon="Box" />
            <span>Account Settings</span>
          </button>
          <button
            type="button"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm font-medium text-primary bg-primary/10 transition"
          >
            <Lucide class="size-4 text-primary" icon="Lock" />
            <span>Change Password</span>
            <Badge variant="primary" size="sm" class="ml-auto">Active</Badge>
          </button>
          <button
            type="button"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition hover:bg-foreground/5"
            @click="navigateTo('/users-layout-1')"
          >
            <Lucide class="size-4 text-foreground/70" icon="Settings" />
            <span>User Settings</span>
          </button>
        </div>

        <div class="flex flex-col gap-1 border-t border-foreground/10 p-3">
          <button
            type="button"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition hover:bg-foreground/5 opacity-80"
            @click="navigateTo('/update-profile')"
          >
            <Lucide class="size-4" icon="Mail" />
            <span>Email Settings</span>
          </button>
          <button
            type="button"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition hover:bg-foreground/5 opacity-80"
            @click="navigateTo('/pricing-layout-1')"
          >
            <Lucide class="size-4" icon="CreditCard" />
            <span>Saved Billing Cards</span>
          </button>
          <button
            type="button"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition hover:bg-foreground/5 opacity-80"
            @click="navigateTo('/profile-overview-2')"
          >
            <Lucide class="size-4" icon="Share2" />
            <span>Social Networks</span>
          </button>
          <button
            type="button"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition hover:bg-foreground/5 opacity-80"
            @click="navigateTo('/invoice-layout-1')"
          >
            <Lucide class="size-4" icon="FileText" />
            <span>Tax & Invoices</span>
          </button>
        </div>

        <div class="flex border-t border-foreground/10 p-4">
          <Button
            size="sm"
            variant="ghost"
            class="shadow-none border border-foreground/15 text-xs"
            type="button"
            @click="navigateTo('/profile-overview-1')"
          >
            My Overview
          </Button>
          <Button
            size="sm"
            variant="ghost"
            class="shadow-none border border-foreground/15 ml-auto text-xs"
            type="button"
            @click="navigateTo('/update-profile')"
          >
            Edit Profile
          </Button>
        </div>
      </Box>
    </div>
    <!-- END: Profile Menu -->

    <!-- BEGIN: Change Password Form -->
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <Box class="p-0 lg:mt-5">
        <div class="flex items-center justify-between border-b border-foreground/15 p-5">
          <div>
            <h2 class="text-base font-medium">Security & Password</h2>
            <p class="text-xs text-foreground/60 mt-0.5">
              Update your account password and security credentials
            </p>
          </div>
          <Badge variant="primary" look="outline" class="hidden sm:inline-flex gap-1.5 items-center">
            <Lucide icon="ShieldCheck" class="size-3.5" />
            Firebase Secured
          </Badge>
        </div>

        <div class="p-5 sm:p-7">
          <!-- Error Alert -->
          <AlertRoot
            v-if="errorMessage"
            variant="danger"
            look="outline"
            class="mb-6 text-sm"
          >
            <Lucide icon="AlertCircle" class="size-4" />
            <AlertTitle>Password Update Error</AlertTitle>
            <AlertDescription>{{ errorMessage }}</AlertDescription>
          </AlertRoot>

          <!-- Success Alert -->
          <AlertRoot
            v-if="successMessage"
            variant="success"
            look="outline"
            class="mb-6 text-sm"
          >
            <Lucide icon="CheckCircle" class="size-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{{ successMessage }}</AlertDescription>
          </AlertRoot>

          <!-- Reset Notice Alert -->
          <AlertRoot
            v-if="resetNotice"
            variant="pending"
            look="outline"
            class="mb-6 text-sm"
          >
            <Lucide icon="Mail" class="size-4" />
            <AlertTitle>Reset Email Dispatched</AlertTitle>
            <AlertDescription>{{ resetNotice }}</AlertDescription>
          </AlertRoot>

          <form @submit.prevent="handleChangePassword">
            <FieldGroup class="space-y-6">
              <!-- Old Password Field -->
              <Field>
                <div class="flex items-center justify-between">
                  <FieldLabel for="old-password" class="font-medium">Old Password</FieldLabel>
                  <button
                    type="button"
                    class="text-xs text-primary hover:underline font-medium transition disabled:opacity-50"
                    :disabled="isSendingReset"
                    @click="handleSendResetEmail"
                  >
                    <span v-if="isSendingReset">Sending link...</span>
                    <span v-else>Forgot current password?</span>
                  </button>
                </div>
                <div class="relative mt-1.5">
                  <Input
                    id="old-password"
                    v-model="oldPassword"
                    :type="showOldPassword ? 'text' : 'password'"
                    placeholder="Enter your current password"
                    autocomplete="current-password"
                    class="pr-10"
                    required
                  />
                  <button
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground p-1 transition"
                    @click="showOldPassword = !showOldPassword"
                    tabindex="-1"
                    aria-label="Toggle old password visibility"
                  >
                    <Lucide :icon="showOldPassword ? 'EyeOff' : 'Eye'" class="size-4" />
                  </button>
                </div>
              </Field>

              <!-- New Password Field -->
              <Field>
                <FieldLabel for="new-password" class="font-medium">New Password</FieldLabel>
                <div class="relative mt-1.5">
                  <Input
                    id="new-password"
                    v-model="newPassword"
                    :type="showNewPassword ? 'text' : 'password'"
                    placeholder="Enter new password (min 8 characters)"
                    autocomplete="new-password"
                    class="pr-10"
                    required
                  />
                  <button
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground p-1 transition"
                    @click="showNewPassword = !showNewPassword"
                    tabindex="-1"
                    aria-label="Toggle new password visibility"
                  >
                    <Lucide :icon="showNewPassword ? 'EyeOff' : 'Eye'" class="size-4" />
                  </button>
                </div>

                <!-- Password Strength Meter -->
                <div class="mt-3.5">
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

                  <div class="mt-2 flex items-center justify-between text-xs">
                    <span class="text-foreground/70">Password strength:</span>
                    <span class="font-medium" :class="passwordStrengthColor">
                      {{ newPassword ? passwordStrengthLabel : 'Enter new password' }}
                    </span>
                  </div>

                  <!-- Password Criteria Checklist -->
                  <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-foreground/[0.03] p-3 rounded-lg border border-foreground/10">
                    <div class="flex items-center gap-1.5" :class="hasMinLength ? 'text-success font-medium' : 'text-foreground/50'">
                      <Lucide :icon="hasMinLength ? 'Check' : 'Circle'" class="size-3.5 flex-none" />
                      <span>8+ characters</span>
                    </div>
                    <div class="flex items-center gap-1.5" :class="(hasLowerCase && hasUpperCase) ? 'text-success font-medium' : 'text-foreground/50'">
                      <Lucide :icon="(hasLowerCase && hasUpperCase) ? 'Check' : 'Circle'" class="size-3.5 flex-none" />
                      <span>Upper & lowercase</span>
                    </div>
                    <div class="flex items-center gap-1.5" :class="hasNumber ? 'text-success font-medium' : 'text-foreground/50'">
                      <Lucide :icon="hasNumber ? 'Check' : 'Circle'" class="size-3.5 flex-none" />
                      <span>At least 1 number</span>
                    </div>
                    <div class="flex items-center gap-1.5" :class="hasSpecialChar ? 'text-success font-medium' : 'text-foreground/50'">
                      <Lucide :icon="hasSpecialChar ? 'Check' : 'Circle'" class="size-3.5 flex-none" />
                      <span>Special character</span>
                    </div>
                  </div>
                </div>
              </Field>

              <!-- Confirm New Password Field -->
              <Field>
                <FieldLabel for="confirm-password" class="font-medium">Confirm New Password</FieldLabel>
                <div class="relative mt-1.5">
                  <Input
                    id="confirm-password"
                    v-model="confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    placeholder="Re-enter your new password"
                    autocomplete="new-password"
                    class="pr-10"
                    :class="{ 'border-danger': confirmPassword && !isPasswordMatching }"
                    required
                  />
                  <button
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground p-1 transition"
                    @click="showConfirmPassword = !showConfirmPassword"
                    tabindex="-1"
                    aria-label="Toggle confirm password visibility"
                  >
                    <Lucide :icon="showConfirmPassword ? 'EyeOff' : 'Eye'" class="size-4" />
                  </button>
                </div>
                <div v-if="confirmPassword && !isPasswordMatching" class="mt-1.5 text-xs text-danger flex items-center gap-1">
                  <Lucide icon="AlertCircle" class="size-3" />
                  <span>Passwords do not match</span>
                </div>
                <div v-else-if="confirmPassword && isPasswordMatching && newPassword" class="mt-1.5 text-xs text-success flex items-center gap-1">
                  <Lucide icon="Check" class="size-3" />
                  <span>Passwords match</span>
                </div>
              </Field>

              <!-- Action Buttons -->
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  :disabled="isSubmitting || !newPassword || !oldPassword || !isPasswordMatching"
                  class="gap-2"
                >
                  <svg
                    v-if="isSubmitting"
                    class="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <Lucide v-else icon="Lock" class="size-4" />
                  <span>{{ isSubmitting ? 'Updating Password...' : 'Change Password' }}</span>
                </Button>

                <Button
                  type="button"
                  look="outline"
                  @click="handleResetForm"
                  :disabled="isSubmitting"
                >
                  Reset
                </Button>
              </div>
            </FieldGroup>
          </form>
        </div>
      </Box>
    </div>
    <!-- END: Change Password Form -->
  </div>
</template>
