import { ref } from 'vue'
import { useEventListener } from '@vueuse/core'

export const useQuickSearch = () => {
  const quickSearchDialogOpen = ref(false)

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      if (event.key === 'k') {
        event.preventDefault()
        quickSearchDialogOpen.value = true
      }
    }

    if (event.key === 'Escape') {
      quickSearchDialogOpen.value = false
    }
  }

  useEventListener('keydown', handleKeyDown)

  return {
    quickSearchDialogOpen,
  }
}
