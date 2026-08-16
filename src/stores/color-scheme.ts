import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

const colorSchemes = ['default', '1', '2', '3', '4', '5'] as const

export type ColorSchemes = (typeof colorSchemes)[number]

export const useColorSchemeStore = defineStore('colorScheme', () => {
  const storedColorScheme = useLocalStorage<string>('colorScheme', 'default')
  const colorSchemeValue = computed<ColorSchemes>(() =>
    colorSchemes.includes(storedColorScheme.value as ColorSchemes)
      ? (storedColorScheme.value as ColorSchemes)
      : 'default',
  )
  const colorScheme = computed(() => colorSchemeValue.value)

  const setColorScheme = (value: ColorSchemes) => {
    storedColorScheme.value = value
  }

  return { colorSchemeValue, colorScheme, setColorScheme }
})
