<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Box } from '@/components/ui/box'
import { Lucide } from '@/components/ui/lucide'
import { useAuthStore } from '@/stores/auth'

interface Props {
  class?: string
  boxClass?: string
}

const props = defineProps<Props>()
const router = useRouter()
const authStore = useAuthStore()

async function handleLogout() {
  await authStore.logout()
  router.push('/login')
}

function navigateTo(path: string) {
  router.push(path)
}
</script>

<template>
  <div
    v-bind="$attrs"
    :class="[
      'invisible opacity-0 scale-95 transition-all duration-200 delay-0 group-hover/profile:visible group-hover/profile:opacity-100 group-hover/profile:scale-100 group-hover/profile:delay-200',
      props.class,
    ]"
  >
    <Box
      :class="`text-foreground before:shadow-foreground/5 flex w-64 flex-col gap-2.5 px-6 py-5 before:rounded-2xl before:shadow-xl before:backdrop-blur after:rounded-2xl ${props.boxClass ?? ''}`"
    >
      <div v-if="authStore.isAuthenticated" class="flex flex-col gap-0.5">
        <div class="font-medium truncate">{{ authStore.displayName }}</div>
        <div class="mt-0.5 text-xs opacity-70 truncate">{{ authStore.email }}</div>
      </div>
      <div v-else class="flex flex-col gap-0.5">
        <div class="font-medium">Guest User</div>
        <div class="mt-0.5 text-xs opacity-70">Not authenticated</div>
      </div>

      <div class="bg-foreground/5 h-px"></div>

      <div class="flex flex-col gap-0.5">
        <button
          type="button"
          class="hover:bg-foreground/5 -mx-3 flex items-center gap-2.5 rounded-lg px-4 py-1.5 text-left text-sm"
          @click="navigateTo('/profile-overview-1')"
        >
          <Lucide icon="Users" /> Profile
        </button>
        <button
          type="button"
          class="hover:bg-foreground/5 -mx-3 flex items-center gap-2.5 rounded-lg px-4 py-1.5 text-left text-sm"
          @click="navigateTo('/update-profile')"
        >
          <Lucide icon="ShieldAlert" /> Edit Profile
        </button>
        <button
          type="button"
          class="hover:bg-foreground/5 -mx-3 flex items-center gap-2.5 rounded-lg px-4 py-1.5 text-left text-sm"
          @click="navigateTo('/change-password')"
        >
          <Lucide icon="FileLock" /> Change Password
        </button>
        <button
          type="button"
          class="hover:bg-foreground/5 -mx-3 flex items-center gap-2.5 rounded-lg px-4 py-1.5 text-left text-sm"
          @click="navigateTo('/faq-layout-1')"
        >
          <Lucide icon="FileQuestion" /> Help / FAQ
        </button>
      </div>

      <div class="bg-foreground/5 h-px"></div>

      <div class="flex flex-col gap-0.5">
        <button
          v-if="authStore.isAuthenticated"
          type="button"
          class="hover:bg-danger/10 text-danger -mx-3 flex items-center gap-2.5 rounded-lg px-4 py-1.5 text-left text-sm font-medium transition"
          @click="handleLogout"
        >
          <Lucide icon="Power" class="text-danger" /> Logout
        </button>
        <button
          v-else
          type="button"
          class="hover:bg-primary/10 text-primary -mx-3 flex items-center gap-2.5 rounded-lg px-4 py-1.5 text-left text-sm font-medium transition"
          @click="navigateTo('/login')"
        >
          <Lucide icon="LogIn" class="text-primary" /> Sign In
        </button>
      </div>
    </Box>
  </div>
</template>
