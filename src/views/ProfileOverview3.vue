<script lang="ts" setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import fakers from '@/utils/faker'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  MenuSeparator,
} from '@/components/ui/menu'
import { UserAvatar } from '@/components/user-avatar'
import { SwitchRoot, SwitchControl } from '@/components/ui/switch'
import { ProgressRoot, ProgressTrack, ProgressRange } from '@/components/ui/progress-linear'
import {
  CarouselRoot,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselItemGroup,
  CarouselItem,
} from '@/components/ui/carousel'
import { Lucide } from '@/components/ui/lucide'
import { Line1 } from '@/components/chart-presets'

const authStore = useAuthStore()

const userName = computed(() => authStore.displayName || authStore.email || 'User')
const userEmail = computed(() => authStore.email || '')
</script>

<template>
  <div>
    <div class="flex items-center">
      <h2 class="mr-auto text-lg font-medium">Profile Layout</h2>
    </div>
    <div class="mt-5 grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <div class="col-span-12 flex flex-col-reverse lg:col-span-4 lg:block 2xl:col-span-3">
        <Box raised="single" class="mt-5 p-0 lg:mt-0">
          <div class="relative flex items-center p-5">
            <UserAvatar class="size-12 rounded-full border" textClass="text-sm font-semibold" />
            <div class="ml-4 mr-auto">
              <div class="text-base font-medium">
                {{ userName }}
              </div>
              <div class="opacity-70">{{ authStore.isAuthenticated ? 'Administrator' : 'Guest' }}</div>
            </div>
            <MenuRoot class="w-auto">
              <MenuTrigger as-child>
                <a class="block size-5" href="#">
                  <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                </a>
              </MenuTrigger>
              <MenuPositioner>
                <MenuContent class="w-56">
                  <MenuItem value="header" class="py-3 font-medium">Export Options</MenuItem>
                  <MenuSeparator />
                  <MenuItem value="english-1">
                    <Lucide class="mr-2" icon="Activity" /> English
                  </MenuItem>
                  <MenuItem value="indonesia-1">
                    <Lucide class="mr-2" icon="Box" /> Indonesia
                    <Badge look="outline" variant="danger" class="ml-auto">10</Badge>
                  </MenuItem>
                  <MenuItem value="english-2">
                    <Lucide class="mr-2" icon="Layout" /> English
                  </MenuItem>
                  <MenuItem value="indonesia-2">
                    <Lucide class="mr-2" icon="Sidebar" /> Indonesia
                  </MenuItem>
                  <MenuSeparator />
                  <div class="flex px-2 py-1.5">
                    <Button class="text-xs" type="button" variant="ghost" size="sm">
                      Settings
                    </Button>
                    <Button class="ml-auto text-xs" type="button" variant="secondary" size="sm">
                      View Profile
                    </Button>
                  </div>
                </MenuContent>
              </MenuPositioner>
            </MenuRoot>
          </div>
          <div class="flex flex-col gap-5 border-t border-foreground/15 p-5">
            <a
              class="[&.active]:text-primary active flex items-center [&.active]:font-medium"
              href=""
            >
              <Lucide class="mr-2 size-4" icon="Activity" /> Personal Information
            </a>
            <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
              <Lucide class="mr-2 size-4" icon="Box" /> Account Settings
            </a>
            <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
              <Lucide class="mr-2 size-4" icon="Lock" /> Change Password
            </a>
            <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
              <Lucide class="mr-2 size-4" icon="Settings" /> User Settings
            </a>
          </div>
          <div class="flex flex-col gap-5 border-t border-foreground/15 p-5">
            <a class="flex items-center" href="">
              <Lucide class="mr-2 size-4" icon="Activity" /> Email Settings
            </a>
            <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
              <Lucide class="mr-2 size-4" icon="Box" /> Saved Credit Cards
            </a>
            <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
              <Lucide class="mr-2 size-4" icon="Lock" /> Social Networks
            </a>
            <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
              <Lucide class="mr-2 size-4" icon="Settings" /> Tax Information
            </a>
          </div>
          <div class="flex border-t border-foreground/15 p-5">
            <Button variant="ghost" class="border border-foreground/15 shadow-none" type="button"
              >New Group</Button
            >
            <Button
              variant="ghost"
              class="border border-foreground/15 shadow-none ml-auto"
              type="button"
              >New Quick Link</Button
            >
          </div>
        </Box>
        <Box
          class="text-(--color) bg-(--color)/5 border-(--color)/15 [--color:var(--color-warning)] mt-8"
        >
          <div class="flex items-center">
            <div class="text-lg font-medium">Latest Updates</div>
            <Badge look="outline" variant="warning" class="ml-auto">New</Badge>
          </div>
          <div class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s.
          </div>
          <div class="mt-5 flex font-medium">
            <Button
              look="outline"
              size="sm"
              class="bg-transparent w-28"
              type="button"
              variant="warning"
            >
              Take Action
            </Button>
            <Button
              look="outline"
              size="sm"
              class="bg-transparent ml-auto w-28"
              type="button"
              variant="warning"
            >
              Dismiss
            </Button>
          </div>
        </Box>
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
        <div class="grid grid-cols-12 gap-x-6 gap-y-8">
          <!-- BEGIN: Daily Sales -->
          <Box raised="single" class="col-span-12 p-0 2xl:col-span-6">
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
          <!-- BEGIN: Announcement -->
          <Box raised="single" class="col-span-12 p-0 2xl:col-span-6">
            <CarouselRoot :default-page="0" :slide-count="3">
              <div class="flex items-center border-b border-foreground/15 px-5 py-3">
                <h2 class="mr-auto text-base font-medium">Announcement</h2>
                <CarouselPrevTrigger as-child>
                  <Button variant="ghost" class="shadow-none border border-foreground/15 mr-2">
                    <Lucide class="size-4" icon="ChevronLeft" />
                  </Button>
                </CarouselPrevTrigger>
                <CarouselNextTrigger as-child>
                  <Button variant="ghost" class="shadow-none border border-foreground/15">
                    <Lucide class="size-4" icon="ChevronRight" />
                  </Button>
                </CarouselNextTrigger>
              </div>
              <div class="px-5">
                <CarouselItemGroup class="py-5">
                  <CarouselItem v-for="n in 3" :key="n" :index="n - 1" class="px-5" as-child>
                    <div>
                      <div class="text-lg font-medium">Midone Admin Template</div>
                      <div class="mt-2 opacity-70">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever. <br /><br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        since the 1500s.
                      </div>
                      <div class="mt-5 flex items-center">
                        <Badge look="outline" class="mr-3 px-3 py-2"> 02 June 2045 </Badge>
                        <Button
                          variant="ghost"
                          class="border border-foreground/15 shadow-none ml-auto"
                          >View Details</Button
                        >
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselItemGroup>
              </div>
            </CarouselRoot>
          </Box>
          <!-- END: Announcement -->
          <!-- BEGIN: Projects -->
          <Box raised="single" class="col-span-12 p-0 2xl:col-span-6">
            <CarouselRoot :default-page="0" :slide-count="3">
              <div class="flex items-center border-b border-foreground/15 px-5 py-3">
                <h2 class="mr-auto text-base font-medium">Projects</h2>
                <CarouselPrevTrigger as-child>
                  <Button variant="ghost" class="shadow-none border border-foreground/15 mr-2">
                    <Lucide class="size-4" icon="ChevronLeft" />
                  </Button>
                </CarouselPrevTrigger>
                <CarouselNextTrigger as-child>
                  <Button variant="ghost" class="shadow-none border border-foreground/15">
                    <Lucide class="size-4" icon="ChevronRight" />
                  </Button>
                </CarouselNextTrigger>
              </div>
              <div class="px-5">
                <CarouselItemGroup class="py-5">
                  <CarouselItem v-for="n in 3" :key="n" :index="n - 1" class="px-5" as-child>
                    <div>
                      <div class="text-lg font-medium">Midone Admin Template</div>
                      <div class="mt-2 opacity-70">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s.
                      </div>
                      <div class="mt-5">
                        <div class="flex opacity-70">
                          <div class="mr-auto">Pending Tasks</div>
                          <div>20%</div>
                        </div>
                        <ProgressRoot :defaultValue="50" class="mt-2">
                          <ProgressTrack>
                            <ProgressRange />
                          </ProgressTrack>
                        </ProgressRoot>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselItemGroup>
              </div>
            </CarouselRoot>
          </Box>
          <!-- END: Projects -->
          <!-- BEGIN: Today Schedules -->
          <Box raised="single" class="col-span-12 p-0 2xl:col-span-6">
            <CarouselRoot :default-page="0" :slide-count="3">
              <div class="flex items-center border-b border-foreground/15 px-5 py-3">
                <h2 class="mr-auto text-base font-medium">Today Schedules</h2>
                <CarouselPrevTrigger as-child>
                  <Button variant="ghost" class="shadow-none border border-foreground/15 mr-2">
                    <Lucide class="size-4" icon="ChevronLeft" />
                  </Button>
                </CarouselPrevTrigger>
                <CarouselNextTrigger as-child>
                  <Button variant="ghost" class="shadow-none border border-foreground/15">
                    <Lucide class="size-4" icon="ChevronRight" />
                  </Button>
                </CarouselNextTrigger>
              </div>
              <div class="px-5">
                <CarouselItemGroup class="py-5">
                  <CarouselItem
                    v-for="n in 3"
                    :key="n"
                    :index="n - 1"
                    class="px-5 text-center sm:text-left"
                    as-child
                  >
                    <div>
                      <div class="text-lg font-medium">Developing rest API with Laravel 7</div>
                      <div class="mt-2 opacity-70">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                      </div>
                      <div class="mt-2">11:15AM - 12:30PM</div>
                      <div class="mt-5 flex flex-col items-center sm:flex-row">
                        <div class="flex items-center opacity-70">
                          <Lucide class="mr-2 hidden size-4 sm:block" icon="MapPin" />
                          1396 Pooh Bear Lane, New Market
                        </div>
                        <Button
                          variant="ghost"
                          class="border border-foreground/15 shadow-none mt-3 sm:ml-auto sm:mt-0"
                          >View On Map</Button
                        >
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselItemGroup>
              </div>
            </CarouselRoot>
          </Box>
          <!-- END: Today Schedules -->
          <!-- BEGIN: Top Products -->
          <Box raised="single" class="col-span-12 p-0 2xl:col-span-6">
            <div class="flex items-center border-b border-foreground/15 p-5">
              <h2 class="mr-auto text-base font-medium">Top Products</h2>
              <MenuRoot class="w-auto ml-auto">
                <MenuTrigger as-child>
                  <a class="block size-5" href="#">
                    <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                  </a>
                </MenuTrigger>
                <MenuPositioner>
                  <MenuContent class="w-40">
                    <MenuItem value="chat">
                      <Lucide class="mr-2 size-4" icon="Edit" /> New Chat
                    </MenuItem>
                    <MenuItem value="delete">
                      <Lucide class="mr-2 size-4" icon="Trash" /> Delete
                    </MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
            </div>
            <div class="p-5">
              <TabsRoot defaultValue="tp-0">
                <TabsList class="w-full">
                  <TabsTrigger class="w-1/3 inline-flex items-center justify-center" value="tp-0">
                    <Lucide class="mr-2" icon="Box" /> Laravel
                  </TabsTrigger>
                  <TabsTrigger class="w-1/3 inline-flex items-center justify-center" value="tp-1">
                    <Lucide class="mr-2" icon="Inbox" /> Symfony
                  </TabsTrigger>
                  <TabsTrigger class="w-1/3 inline-flex items-center justify-center" value="tp-2">
                    <Lucide class="mr-2" icon="Activity" /> Bootstrap
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tp-0" class="mt-8">
                  <div class="flex flex-col items-center sm:flex-row">
                    <div class="mr-auto">
                      <a class="font-medium" href="">Wordpress Template</a>
                      <div class="mt-1 opacity-70">HTML, PHP, Mysql</div>
                    </div>
                    <div class="mt-3 flex w-full items-center sm:mt-0 sm:w-auto">
                      <Badge look="outline" variant="warning" class="mr-5">+20%</Badge>
                      <ProgressRoot :defaultValue="50" class="sm:w-40">
                        <ProgressTrack>
                          <ProgressRange />
                        </ProgressTrack>
                      </ProgressRoot>
                    </div>
                  </div>
                  <div class="mt-5 flex flex-col items-center sm:flex-row">
                    <div class="mr-auto">
                      <a class="font-medium" href="">Laravel Template</a>
                      <div class="mt-1 opacity-70">PHP, Mysql</div>
                    </div>
                    <div class="mt-3 flex w-full items-center sm:mt-0 sm:w-auto">
                      <Badge look="outline" variant="warning" class="mr-5">+55%</Badge>
                      <ProgressRoot :defaultValue="50" class="sm:w-40">
                        <ProgressTrack>
                          <ProgressRange />
                        </ProgressTrack>
                      </ProgressRoot>
                    </div>
                  </div>
                  <div class="mt-5 flex flex-col items-center sm:flex-row">
                    <div class="mr-auto">
                      <a class="font-medium" href="">Tailwind HTML Template</a>
                      <div class="mt-1 opacity-70">HTML, CSS, JS</div>
                    </div>
                    <div class="mt-3 flex w-full items-center sm:mt-0 sm:w-auto">
                      <Badge look="outline" variant="warning" class="mr-5">+40%</Badge>
                      <ProgressRoot :defaultValue="50" class="sm:w-40">
                        <ProgressTrack>
                          <ProgressRange />
                        </ProgressTrack>
                      </ProgressRoot>
                    </div>
                  </div>
                </TabsContent>
              </TabsRoot>
            </div>
          </Box>
          <!-- END: Top Products -->
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
                <div class="mt-5">
                  <div class="flex">
                    <div class="mr-auto">Tasks In Review</div>
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
          <!-- BEGIN: General Statistics -->
          <Box raised="single" class="col-span-12 p-0 2xl:col-span-6">
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
                    <MenuItem value="export-header" class="py-3 font-medium">Export Tools</MenuItem>
                    <MenuSeparator />
                    <MenuItem value="print">
                      <Lucide class="mr-2 size-4" icon="Printer" /> Print
                    </MenuItem>
                    <MenuItem value="excel">
                      <Lucide class="mr-2 size-4" icon="ExternalLink" /> Excel
                    </MenuItem>
                    <MenuItem value="csv">
                      <Lucide class="mr-2 size-4" icon="FileText" /> CSV
                    </MenuItem>
                    <MenuItem value="pdf">
                      <Lucide class="mr-2 size-4" icon="Archive" /> PDF
                    </MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
              <MenuRoot class="w-auto hidden sm:block">
                <MenuTrigger> Export </MenuTrigger>
                <MenuPositioner>
                  <MenuContent class="w-40">
                    <MenuItem value="print">
                      <Lucide class="mr-2 size-4" icon="Printer" /> Print
                    </MenuItem>
                    <MenuItem value="excel">
                      <Lucide class="mr-2 size-4" icon="ExternalLink" /> Excel
                    </MenuItem>
                    <MenuItem value="csv">
                      <Lucide class="mr-2 size-4" icon="FileText" /> CSV
                    </MenuItem>
                    <MenuItem value="pdf">
                      <Lucide class="mr-2 size-4" icon="Archive" /> PDF
                    </MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
            </div>
            <div class="p-5">
              <div class="flex flex-col items-center sm:flex-row">
                <div class="mr-auto flex flex-wrap sm:flex-nowrap">
                  <div class="mb-1 mr-5 flex items-center sm:mb-0">
                    <div
                      class="bg-(--color)/20 border-(--color)/60 mr-3 size-2 rounded-full border [--color:var(--color-pending)]"
                    ></div>
                    <span>Author Sales</span>
                  </div>
                  <div class="mb-1 mr-5 flex items-center sm:mb-0">
                    <div
                      class="bg-(--color)/20 border-(--color)/60 mr-3 size-2 rounded-full border [--color:var(--color-primary)]"
                    ></div>
                    <span>Product Profit</span>
                  </div>
                </div>
                <MenuRoot class="mr-auto mt-3 sm:mr-0 sm:mt-0 w-auto">
                  <MenuTrigger> Filter by Month </MenuTrigger>
                  <MenuPositioner>
                    <MenuContent class="w-40">
                      <MenuItem value="jan">January</MenuItem>
                      <MenuItem value="feb">February</MenuItem>
                      <MenuItem value="mar">March</MenuItem>
                      <MenuItem value="jun">June</MenuItem>
                      <MenuItem value="jul">July</MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </div>
              <div class="relative mt-8">
                <Line1 class="h-[212px]" />
              </div>
            </div>
          </Box>
          <!-- END: General Statistics -->
        </div>
      </div>
    </div>
  </div>
</template>
