import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import RubickSideMenu from '@/themes/Rubick/SideMenu/SideMenu.vue'
import RubickTopMenu from '@/themes/Rubick/TopMenu/TopMenu.vue'
import IcewallSideMenu from '@/themes/Icewall/SideMenu/SideMenu.vue'
import IcewallTopMenu from '@/themes/Icewall/TopMenu/TopMenu.vue'
import TinkerSideMenu from '@/themes/Tinker/SideMenu/SideMenu.vue'
import TinkerTopMenu from '@/themes/Tinker/TopMenu/TopMenu.vue'
import EnigmaSideMenu from '@/themes/Enigma/SideMenu/SideMenu.vue'
import EnigmaTopMenu from '@/themes/Enigma/TopMenu/TopMenu.vue'

export const themes = [
  {
    name: 'rubick',
    layout: 'side-menu',
    component: RubickSideMenu,
  },
  {
    name: 'rubick',
    layout: 'top-menu',
    component: RubickTopMenu,
  },
  {
    name: 'icewall',
    layout: 'side-menu',
    component: IcewallSideMenu,
  },
  {
    name: 'icewall',
    layout: 'top-menu',
    component: IcewallTopMenu,
  },
  {
    name: 'tinker',
    layout: 'side-menu',
    component: TinkerSideMenu,
  },
  {
    name: 'tinker',
    layout: 'top-menu',
    component: TinkerTopMenu,
  },
  {
    name: 'enigma',
    layout: 'side-menu',
    component: EnigmaSideMenu,
  },
  {
    name: 'enigma',
    layout: 'top-menu',
    component: EnigmaTopMenu,
  },
] as const

export type Themes = (typeof themes)[number]

export const getTheme = (search: { name: Themes['name']; layout: Themes['layout'] }) => {
  return (
    themes.find((item) => item.name === search.name && item.layout === search.layout) || themes[0]
  )
}

export const useThemeStore = defineStore('theme', () => {
  const storedTheme = useLocalStorage<string>('theme', themes[0].name)
  const storedLayout = useLocalStorage<string>('layout', themes[0].layout)
  const themeValue = computed(() =>
    getTheme({
      name: storedTheme.value as Themes['name'],
      layout: storedLayout.value as Themes['layout'],
    }),
  )
  const theme = computed(() => themeValue.value)

  const setTheme = (value: Themes['name']) => {
    storedTheme.value = value
  }

  const setLayout = (value: Themes['layout']) => {
    storedLayout.value = value
  }

  return { themeValue, theme, setTheme, setLayout }
})
