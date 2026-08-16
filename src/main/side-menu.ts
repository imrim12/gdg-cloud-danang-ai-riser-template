import { type Icon } from '@/components/ui/lucide'

export interface Menu {
  icon?: Icon
  title?: string
  route_name?: string
  params?: any
  badge?: number
  sub_menu?: Menu[]
}

const mainMenu: (string | Menu)[] = [
  'MAIN MENU',
  {
    icon: 'Home',
    route_name: 'dashboard-overview-1',
    title: 'Dashboard',
  },
]

export default mainMenu
