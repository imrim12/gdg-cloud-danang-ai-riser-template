import { ref } from 'vue'
import { useEventListener, useLocalStorage } from '@vueuse/core'

export const useSideMenu = () => {
  const compactMenu = useLocalStorage('compactMenu', false)
  const compactMenuOnHover = ref(false)
  const mobileMenuOpen = ref(false)
  const scrolled = ref(false)

  const toggleCompactMenu = (event: MouseEvent) => {
    event.preventDefault()
    compactMenu.value = !compactMenu.value
  }

  const onMouseEnterSideMenu = () => {
    compactMenuOnHover.value = true
  }

  const onMouseLeaveSideMenu = () => {
    compactMenuOnHover.value = false
  }

  const openMobileMenu = (event: MouseEvent) => {
    event.preventDefault()
    mobileMenuOpen.value = true
  }

  const closeMobileMenu = (event: MouseEvent) => {
    event.preventDefault()
    mobileMenuOpen.value = false
  }

  const onScrollContent = (event: Event) => {
    const target = event.target as HTMLElement
    scrolled.value = target.scrollTop > 0
  }

  const onResize = () => {
    if (window.innerWidth <= 1600) {
      compactMenu.value = true
    }
  }

  useEventListener('resize', onResize)
  onResize()

  return {
    compactMenu,
    compactMenuOnHover,
    mobileMenuOpen,
    scrolled,
    toggleCompactMenu,
    onMouseEnterSideMenu,
    onMouseLeaveSideMenu,
    openMobileMenu,
    closeMobileMenu,
    onScrollContent,
  }
}
