<script setup lang="ts">
import { computed, ref, watch, type HTMLAttributes } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { cn } from '@/utils/cn'

interface Props {
  src?: string | null
  name?: string | null
  class?: HTMLAttributes['class']
  textClass?: string
}

const props = defineProps<Props>()
const authStore = useAuthStore()

const imageError = ref(false)

// Watch for src changes and reset error state
watch(
  () => [props.src, authStore.photoURL],
  () => {
    imageError.value = false
  }
)

const resolvedSrc = computed(() => {
  if (props.src !== undefined) {
    return props.src?.trim() || null
  }
  return authStore.photoURL?.trim() || null
})

const resolvedName = computed(() => {
  if (props.name !== undefined && props.name !== null) {
    return props.name
  }
  return authStore.displayName || authStore.email || 'User'
})

const initials = computed(() => {
  const name = resolvedName.value?.trim()
  if (!name) return 'U'

  if (name.includes('@')) {
    const handle = name.split('@')[0] || ''
    const parts = handle.split(/[._-]/).filter(Boolean)
    const p0 = parts[0]
    const p1 = parts[1]
    if (parts.length >= 2 && p0 && p1) {
      const c0 = p0[0] ?? ''
      const c1 = p1[0] ?? ''
      return (c0 + c1).toUpperCase()
    }
    return handle.slice(0, 2).toUpperCase() || 'U'
  }

  const words = name.split(/\s+/).filter(Boolean)
  const firstWord = words[0]
  const lastWord = words[words.length - 1]
  if (words.length === 1 && firstWord) {
    return firstWord.length >= 2 ? firstWord.slice(0, 2).toUpperCase() : firstWord.toUpperCase()
  }
  if (words.length >= 2 && firstWord && lastWord) {
    const first = firstWord[0] ?? ''
    const last = lastWord[0] ?? ''
    return (first + last).toUpperCase()
  }

  return 'U'
})

function onImageError() {
  imageError.value = true
}
</script>

<template>
  <div
    :class="
      cn(
        'relative inline-flex flex-none items-center justify-center overflow-hidden rounded-full select-none bg-primary/10 text-primary dark:bg-primary/20 dark:text-foreground font-semibold',
        props.class
      )
    "
  >
    <img
      v-if="resolvedSrc && !imageError"
      :src="resolvedSrc"
      :alt="resolvedName"
      class="h-full w-full object-cover"
      @error="onImageError"
    />
    <span
      v-else
      :class="cn('flex h-full w-full items-center justify-center tracking-tight leading-none', props.textClass)"
    >
      {{ initials }}
    </span>
  </div>
</template>
