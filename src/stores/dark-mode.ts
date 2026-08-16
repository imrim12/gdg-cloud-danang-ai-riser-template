import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useDarkModeStore = defineStore('darkMode', () => {
  const darkModeValue = useLocalStorage('darkMode', false)
  const darkMode = computed(() => darkModeValue.value)

  const setDarkMode = (value: boolean) => {
    darkModeValue.value = value
  }

  return { darkModeValue, darkMode, setDarkMode }
})
