<script lang="ts" setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import fakers from '@/utils/faker'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu'
import { UserAvatar } from '@/components/user-avatar'
import { SwitchRoot, SwitchControl } from '@/components/ui/switch'
import { ProgressRoot, ProgressTrack, ProgressRange } from '@/components/ui/progress-linear'
import { Lucide } from '@/components/ui/lucide'
import { Line2, Line3, Bar2 } from '@/components/chart-presets'

const authStore = useAuthStore()

const userName = computed(() => authStore.displayName || authStore.email || 'User')
const userEmail = computed(() => authStore.email || '')
</script>

<template>
  <div>
    <div class="flex items-center">
      <h2 class="mr-auto text-lg font-medium">Profile Layout</h2>
    </div>
    <TabsRoot defaultValue="0">
      <!-- BEGIN: Profile Info -->
      <Box raised="single" class="mt-5 p-0">
        <div class="flex flex-col border-b border-foreground/15 p-5 lg:flex-row">
          <div class="flex flex-1 items-center justify-center px-5 lg:justify-start">
            <div class="relative">
              <UserAvatar
                class="size-20 border-5 bg-background rounded-full sm:size-24 lg:size-32"
                textClass="text-2xl sm:text-3xl lg:text-4xl font-bold"
              />
              <div
                class="bg-(--color)/70 border-3 border-background absolute bottom-0 right-0 mb-1 mr-1 flex items-center justify-center rounded-full p-2 text-white [--color:var(--color-primary)]"
              >
                <Lucide class="size-4" icon="Camera" />
              </div>
            </div>
            <div class="ml-5">
              <div class="w-24 truncate text-lg font-medium sm:w-40 sm:whitespace-normal">
                {{ userName }}
              </div>
              <div class="opacity-70">{{ authStore.isAuthenticated ? 'Administrator' : 'Guest' }}</div>
            </div>
          </div>
          <div
            class="mt-6 flex-1 border-t border-l border-r border-foreground/15 px-5 pt-5 lg:mt-0 lg:border-t-0 lg:pt-0"
          >
            <div class="text-center font-medium lg:mt-3 lg:text-left">Contact Details</div>
            <div class="mt-4 flex flex-col items-center justify-center lg:items-start">
              <div class="flex items-center truncate sm:whitespace-normal">
                <Lucide class="mr-2 size-4" icon="Mail" />
                {{ userEmail }}
              </div>
              <div class="mt-3 flex items-center truncate sm:whitespace-normal">
                <Lucide class="mr-2 size-4" icon="Instagram" />
                Instagram {{ userName }}
              </div>
              <div class="mt-3 flex items-center truncate sm:whitespace-normal">
                <Lucide class="mr-2 size-4" icon="Twitter" />
                Twitter {{ userName }}
              </div>
            </div>
          </div>
          <div
            class="mt-6 flex-1 border-t border-foreground/15 px-5 pt-5 lg:mt-0 lg:border-0 lg:pt-0"
          >
            <div class="text-center font-medium lg:mt-5 lg:text-left">Sales Growth</div>
            <div class="mt-2 flex items-center justify-center lg:justify-start">
              <div class="mr-2 flex w-20">
                USP:
                <Badge look="outline" variant="success" class="ml-3">+23%</Badge>
              </div>
              <div class="ml-5 w-3/4">
                <Line2 class="h-[55px]" />
              </div>
            </div>
            <div class="flex items-center justify-center lg:justify-start">
              <div class="mr-2 flex w-20">
                STP:
                <Badge look="outline" variant="danger" class="ml-3">-2%</Badge>
              </div>
              <div class="ml-5 w-3/4">
                <Line3 class="h-[55px]" />
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 py-4">
          <TabsList class="w-full mb-0">
            <TabsTrigger class="w-1/4 inline-flex items-center justify-center" value="0">
              <Lucide class="mr-2 size-4" icon="Airplay" /> Dashboard
            </TabsTrigger>
            <TabsTrigger class="w-1/4 inline-flex items-center justify-center" value="1">
              <Lucide class="mr-2 size-4" icon="Aperture" /> Account & Profile
            </TabsTrigger>
            <TabsTrigger class="w-1/4 inline-flex items-center justify-center" value="2">
              <Lucide class="mr-2 size-4" icon="PackageCheck" /> Activities
            </TabsTrigger>
            <TabsTrigger class="w-1/4 inline-flex items-center justify-center" value="3">
              <Lucide class="mr-2 size-4" icon="Palette" /> Tasks
            </TabsTrigger>
          </TabsList>
        </div>
      </Box>
      <!-- END: Profile Info -->
      <TabsContent value="0" class="mt-8">
        <div class="grid grid-cols-12 gap-x-6 gap-y-8">
          <!-- BEGIN: Top Categories -->
          <Box raised="single" class="col-span-12 p-0 lg:col-span-6">
            <div class="flex items-center border-b border-foreground/15 p-5">
              <h2 class="mr-auto text-base font-medium">Top Categories</h2>
              <MenuRoot class="w-auto ml-auto">
                <MenuTrigger as-child>
                  <a class="block size-5" href="#">
                    <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                  </a>
                </MenuTrigger>
                <MenuPositioner>
                  <MenuContent class="w-40">
                    <MenuItem value="add">
                      <Lucide class="mr-2 size-4" icon="Plus" /> Add Category
                    </MenuItem>
                    <MenuItem value="settings">
                      <Lucide class="mr-2 size-4" icon="Settings" /> Settings
                    </MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
            </div>
            <div class="p-5">
              <div class="flex flex-col sm:flex-row">
                <div class="mr-auto">
                  <a class="font-medium" href="">Wordpress Template</a>
                  <div class="mt-1 opacity-70">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="-ml-2 mr-auto mt-5 w-32 sm:ml-0 sm:mr-5">
                    <Line3 class="h-[30px]" />
                  </div>
                  <div class="text-center">
                    <div class="font-medium">6.5k</div>
                    <Badge look="outline" variant="primary" class="mt-1.5">+150</Badge>
                  </div>
                </div>
              </div>
              <div class="mt-5 flex flex-col sm:flex-row">
                <div class="mr-auto">
                  <a class="font-medium" href="">Bootstrap HTML Template</a>
                  <div class="mt-1 opacity-70">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="-ml-2 mr-auto mt-5 w-32 sm:ml-0 sm:mr-5">
                    <Line3 class="h-[30px]" />
                  </div>
                  <div class="text-center">
                    <div class="font-medium">2.5k</div>
                    <Badge look="outline" variant="pending" class="mt-1.5">+150</Badge>
                  </div>
                </div>
              </div>
              <div class="mt-5 flex flex-col sm:flex-row">
                <div class="mr-auto">
                  <a class="font-medium" href="">Tailwind HTML Template</a>
                  <div class="mt-1 opacity-70">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="-ml-2 mr-auto mt-5 w-32 sm:ml-0 sm:mr-5">
                    <Line3 class="h-[30px]" />
                  </div>
                  <div class="text-center">
                    <div class="font-medium">3.4k</div>
                    <Badge look="outline" variant="success" class="mt-1.5">+150</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Box>
          <!-- END: Top Categories -->
          <!-- BEGIN: Work In Progress -->
          <Box raised="single" class="col-span-12 p-0 lg:col-span-6">
            <TabsRoot defaultValue="wip-0">
              <div class="relative flex items-center border-b border-foreground/15 p-5">
                <h2 class="mr-auto text-base font-medium">Work In Progress</h2>
                <MenuRoot class="w-auto ml-auto sm:hidden">
                  <MenuTrigger as-child>
                    <a class="block size-5" href="#">
                      <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                    </a>
                  </MenuTrigger>
                  <MenuPositioner>
                    <MenuContent class="w-40">
                      <MenuItem value="new">New</MenuItem>
                      <MenuItem value="last-week">Last Week</MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
                <TabsList
                  class="absolute inset-y-0 h-[2.8rem] right-5 my-auto hidden w-auto sm:flex"
                >
                  <TabsTrigger value="wip-0">New</TabsTrigger>
                  <TabsTrigger value="wip-1">Last Week</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="wip-0" class="p-5">
                <div>
                  <div class="flex">
                    <div class="mr-auto">Pending Tasks</div>
                    <div>20%</div>
                  </div>
                  <ProgressRoot :defaultValue="50" class="mt-2">
                    <ProgressTrack>
                      <ProgressRange />
                    </ProgressTrack>
                  </ProgressRoot>
                </div>
                <div class="mt-5">
                  <div class="flex">
                    <div class="mr-auto">Completed Tasks</div>
                    <div>2 / 20</div>
                  </div>
                  <ProgressRoot :defaultValue="25" class="mt-2">
                    <ProgressTrack>
                      <ProgressRange />
                    </ProgressTrack>
                  </ProgressRoot>
                </div>
                <div class="mt-5">
                  <div class="flex">
                    <div class="mr-auto">Tasks In Progress</div>
                    <div>42</div>
                  </div>
                  <ProgressRoot :defaultValue="75" class="mt-2">
                    <ProgressTrack>
                      <ProgressRange />
                    </ProgressTrack>
                  </ProgressRoot>
                </div>
                <div class="text-center">
                  <Button
                    variant="ghost"
                    class="border border-foreground/15 shadow-none mx-auto mt-5 inline-block"
                    as="a"
                    href=""
                  >
                    View More Details
                  </Button>
                </div>
              </TabsContent>
            </TabsRoot>
          </Box>
          <!-- END: Work In Progress -->
          <!-- BEGIN: Daily Sales -->
          <Box raised="single" class="col-span-12 p-0 lg:col-span-6">
            <div class="flex items-center border-b border-foreground/15 px-5 py-5 sm:py-3">
              <h2 class="mr-auto text-base font-medium">Daily Sales</h2>
              <MenuRoot class="w-auto ml-auto sm:hidden">
                <MenuTrigger as-child>
                  <a class="block size-5" href="#">
                    <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                  </a>
                </MenuTrigger>
                <MenuPositioner>
                  <MenuContent class="w-40">
                    <MenuItem value="download">
                      <Lucide class="mr-2 size-4" icon="File" /> Download Excel
                    </MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
              <Button
                variant="ghost"
                class="shadow-none border border-foreground/15 hidden sm:flex"
              >
                <Lucide class="mr-2 size-4" icon="File" /> Download Excel
              </Button>
            </div>
            <div class="p-5">
              <div
                v-for="(faker, index) in fakers.slice(0, 3)"
                :key="index"
                :class="{ 'mt-5': index > 0 }"
                class="relative flex items-center"
              >
                <AvatarRoot class="size-12 bg-background rounded-full">
                  <AvatarFallback>IM</AvatarFallback>
                  <AvatarImage :src="faker['photos'][0]" />
                </AvatarRoot>
                <div class="ml-4 mr-auto">
                  <a class="font-medium" href="">{{ faker['users'][0]!['name'] }}</a>
                  <div class="mr-5 opacity-70 sm:mr-5">
                    {{
                      index === 0
                        ? 'Bootstrap 4 HTML Admin Template'
                        : index === 1
                          ? 'Tailwind Admin Dashboard Template'
                          : 'Vuejs HTML Admin Template'
                    }}
                  </div>
                </div>
                <div class="font-medium">
                  {{ index === 0 ? '+$19' : index === 1 ? '+$25' : '+$21' }}
                </div>
              </div>
            </div>
          </Box>
          <!-- END: Daily Sales -->
          <!-- BEGIN: Latest Tasks -->
          <Box raised="single" class="col-span-12 p-0 lg:col-span-6">
            <TabsRoot defaultValue="lt-0">
              <div class="relative flex items-center border-b border-foreground/15 p-5">
                <h2 class="mr-auto text-base font-medium">Latest Tasks</h2>
                <MenuRoot class="w-auto ml-auto sm:hidden">
                  <MenuTrigger as-child>
                    <a class="block size-5" href="#">
                      <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                    </a>
                  </MenuTrigger>
                  <MenuPositioner>
                    <MenuContent class="w-40">
                      <MenuItem value="new">New</MenuItem>
                      <MenuItem value="last-week">Last Week</MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
                <TabsList
                  class="absolute inset-y-0 h-[2.8rem] right-5 my-auto hidden w-auto sm:flex"
                >
                  <TabsTrigger value="lt-0">New</TabsTrigger>
                  <TabsTrigger value="lt-1">Last Week</TabsTrigger>
                </TabsList>
              </div>
              <div class="p-5">
                <TabsContent value="lt-0">
                  <div class="flex items-center">
                    <div class="border-l-4 border-primary/20 pl-4">
                      <a class="font-medium" href="">Create New Campaign</a>
                      <div class="opacity-70">10:00 AM</div>
                    </div>
                    <div class="ml-auto">
                      <SwitchRoot>
                        <SwitchControl />
                      </SwitchRoot>
                    </div>
                  </div>
                  <div class="mt-5 flex items-center">
                    <div class="border-l-4 border-primary/20 pl-4">
                      <a class="font-medium" href="">Meeting With Client</a>
                      <div class="opacity-70">02:00 PM</div>
                    </div>
                    <div class="ml-auto">
                      <SwitchRoot>
                        <SwitchControl />
                      </SwitchRoot>
                    </div>
                  </div>
                  <div class="mt-5 flex items-center">
                    <div class="border-l-4 border-primary/20 pl-4">
                      <a class="font-medium" href="">Create New Repository</a>
                      <div class="opacity-70">04:00 PM</div>
                    </div>
                    <div class="ml-auto">
                      <SwitchRoot>
                        <SwitchControl />
                      </SwitchRoot>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </TabsRoot>
          </Box>
          <!-- END: Latest Tasks -->
          <!-- BEGIN: General Statistic -->
          <Box raised="single" class="col-span-12 p-0">
            <div class="flex items-center border-b border-foreground/15 px-5 py-5 sm:py-3">
              <h2 class="mr-auto text-base font-medium">General Statistics</h2>
              <MenuRoot class="w-auto ml-auto sm:hidden">
                <MenuTrigger as-child>
                  <a class="block size-5" href="#">
                    <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                  </a>
                </MenuTrigger>
                <MenuPositioner>
                  <MenuContent class="w-40">
                    <MenuItem value="xml">
                      <Lucide class="mr-2 size-4" icon="File" /> Download XML
                    </MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
              <Button
                variant="ghost"
                class="shadow-none border border-foreground/15 hidden sm:flex"
              >
                <Lucide class="mr-2 size-4" icon="File" /> Download XML
              </Button>
            </div>
            <div class="grid grid-cols-1 gap-6 p-5 2xl:grid-cols-7">
              <div class="2xl:col-span-2">
                <div class="grid grid-cols-2 gap-6">
                  <div
                    class="rounded-xl col-span-2 box border border-foreground/15 p-5 shadow sm:col-span-1 2xl:col-span-2"
                  >
                    <div class="font-medium">Net Worth</div>
                    <div class="mt-1 flex items-center sm:mt-0">
                      <div class="mr-4 flex w-20">
                        USP:
                        <Badge look="outline" variant="success" class="ml-3">+23%</Badge>
                      </div>
                      <div class="ml-5 w-5/6 overflow-auto">
                        <Line3 class="h-[51px]" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-xl col-span-2 box border border-foreground/15 p-5 shadow sm:col-span-1 2xl:col-span-2"
                  >
                    <div class="font-medium">Sales</div>
                    <div class="mt-1 flex items-center sm:mt-0">
                      <div class="mr-4 flex w-20">
                        USP:
                        <Badge look="outline" variant="pending" class="ml-3">-5%</Badge>
                      </div>
                      <div class="ml-5 w-5/6 overflow-auto">
                        <Line3 class="h-[51px]" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-xl col-span-2 box border border-foreground/15 p-5 shadow sm:col-span-1 2xl:col-span-2"
                  >
                    <div class="font-medium">Profit</div>
                    <div class="mt-1 flex items-center sm:mt-0">
                      <div class="mr-4 flex w-20">
                        USP:
                        <Badge look="outline" variant="danger" class="ml-3">-10%</Badge>
                      </div>
                      <div class="ml-5 w-5/6 overflow-auto">
                        <Line3 class="h-[51px]" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-xl col-span-2 box border border-foreground/15 p-5 shadow sm:col-span-1 2xl:col-span-2"
                  >
                    <div class="font-medium">Products</div>
                    <div class="mt-1 flex items-center sm:mt-0">
                      <div class="mr-4 flex w-20">
                        USP:
                        <Badge look="outline" variant="primary" class="ml-3">+55%</Badge>
                      </div>
                      <div class="ml-5 w-5/6 overflow-auto">
                        <Line3 class="h-[51px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full 2xl:col-span-5">
                <div class="mt-8 flex justify-center">
                  <div class="mr-5 flex items-center">
                    <div
                      class="bg-(--color)/20 border-(--color)/60 mr-3 size-2 rounded-full border [--color:var(--color-primary)]"
                    ></div>
                    <span>Product Profit</span>
                  </div>
                  <div class="flex items-center">
                    <div
                      class="bg-(--color)/20 border-(--color)/60 mr-3 size-2 rounded-full border [--color:var(--color-danger)]"
                    ></div>
                    <span>Author Sales</span>
                  </div>
                </div>
                <div class="mt-8">
                  <Bar2 class="h-[420px]" />
                </div>
              </div>
            </div>
          </Box>
          <!-- END: General Statistic -->
        </div>
      </TabsContent>
    </TabsRoot>
  </div>
</template>
