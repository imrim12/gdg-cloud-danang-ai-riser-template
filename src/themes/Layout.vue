<script setup lang="ts">
import { useThemeStore, getTheme, themes, type Themes } from '@/stores/theme'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'

const route = useRoute()
const themeStore = useThemeStore()
const Component = computed(() => getTheme(themeStore.theme).component)

const switchTheme = (theme: Themes['name']) => {
  themeStore.setTheme(theme)
}

onMounted(() => {
  const theme = route.query.theme as Themes['name']
  if (route.query.theme !== undefined && themes.map((theme) => theme.name).includes(theme)) {
    switchTheme(theme)
  }
})
</script>

<template>
  <div>
    <ThemeSwitcher />
    <component :is="Component" />
  </div>
</template>
