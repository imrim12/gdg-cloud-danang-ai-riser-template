<script setup lang="ts">
import { computed } from 'vue'
import { Lucide } from '@/components/ui/lucide'
import { useAuthStore } from '@/stores/auth'
import { UserAvatar } from '@/components/user-avatar'

interface Props {
  class?: string
  innerClass?: any
  avatarClass?: string
  textClass?: string
}

const props = defineProps<Props>()
const authStore = useAuthStore()

const userName = computed(() => {
  if (authStore.isAuthenticated) {
    return authStore.displayName || authStore.email || 'User'
  }
  return 'Guest User'
})

const userRole = computed(() => {
  if (authStore.isAuthenticated) {
    return 'Administrator'
  }
  return 'Not logged in'
})
</script>

<template>
  <div :class="['side-menu__account group/profile transition-[width]', props.class]">
    <div :class="['flex cursor-pointer items-center transition', props.innerClass]">
      <UserAvatar
        :src="authStore.photoURL"
        :name="userName"
        :class="[
          'border-4',
          props.avatarClass ?? 'h-10 w-10 border-background/20 dark:border-foreground/20',
        ]"
        textClass="text-xs font-semibold text-primary dark:text-foreground"
      />
      <div
        class="ms-3 flex w-full items-center overflow-hidden transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:ms-3 group-[.side-menu--collapsed.side-menu--on-hover]:w-full group-[.side-menu--collapsed.side-menu--on-hover]:opacity-100 xl:group-[.side-menu--collapsed]:ms-0 xl:group-[.side-menu--collapsed]:w-0 xl:group-[.side-menu--collapsed]:opacity-0"
      >
        <div :class="['w-28', props.textClass]">
          <div class="w-full truncate font-medium">{{ userName }}</div>
          <div class="w-full truncate text-xs opacity-60">{{ userRole }}</div>
        </div>
        <Lucide class="me-4 ms-auto opacity-50 flex-none" icon="MoveRight" />
      </div>
    </div>
    <slot />
  </div>
</template>
