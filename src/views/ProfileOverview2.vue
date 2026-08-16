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
import {
  CarouselRoot,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselItemGroup,
  CarouselItem,
} from '@/components/ui/carousel'
import { Lucide } from '@/components/ui/lucide'
import { FileIcon } from '@/components/ui/file-icon'

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
            class="mt-6 flex flex-1 items-center justify-center border-t border-foreground/15 px-5 pt-5 lg:mt-0 lg:border-0 lg:pt-0"
          >
            <div class="grid grid-cols-3 gap-5">
              <div class="text-center">
                <div class="text-xl font-medium">201</div>
                <div class="opacity-70">Orders</div>
              </div>
              <div class="text-center">
                <div class="text-xl font-medium">1k</div>
                <div class="opacity-70">Purchases</div>
              </div>
              <div class="text-center">
                <div class="text-xl font-medium">492</div>
                <div class="opacity-70">Reviews</div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 py-4">
          <TabsList class="w-full mb-0">
            <TabsTrigger class="w-1/4 inline-flex items-center justify-center" value="0">
              <Lucide class="mr-2 size-4" icon="Airplay" /> Profile
            </TabsTrigger>
            <TabsTrigger class="w-1/4 inline-flex items-center justify-center" value="1">
              <Lucide class="mr-2 size-4" icon="Aperture" /> Account
            </TabsTrigger>
            <TabsTrigger class="w-1/4 inline-flex items-center justify-center" value="2">
              <Lucide class="mr-2 size-4" icon="PackageCheck" /> Change Password
            </TabsTrigger>
            <TabsTrigger class="w-1/4 inline-flex items-center justify-center" value="3">
              <Lucide class="mr-2 size-4" icon="Palette" /> Settings
            </TabsTrigger>
          </TabsList>
        </div>
      </Box>
      <!-- END: Profile Info -->
      <TabsContent value="0" class="mt-8">
        <div class="grid grid-cols-12 gap-x-6 gap-y-8">
          <!-- BEGIN: Latest Uploads -->
          <Box raised="single" class="col-span-12 p-0 lg:col-span-6">
            <div class="flex items-center border-b border-foreground/15 px-5 py-5 sm:py-3">
              <h2 class="mr-auto text-base font-medium">Latest Uploads</h2>
              <MenuRoot class="w-auto ml-auto sm:hidden">
                <MenuTrigger as-child>
                  <a class="block size-5" href="#">
                    <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                  </a>
                </MenuTrigger>
                <MenuPositioner>
                  <MenuContent class="w-40">
                    <MenuItem value="all">All Files</MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
              <Button variant="ghost" class="shadow-none border border-foreground/15 hidden sm:flex"
                >All Files</Button
              >
            </div>
            <div class="p-5">
              <div class="flex items-center">
                <FileIcon class="w-12" variant="directory" />
                <div class="ml-4">
                  <a class="font-medium" href="">Documentation</a>
                  <div class="mt-0.5 text-xs opacity-70">40 KB</div>
                </div>
                <MenuRoot class="w-auto ml-auto">
                  <MenuTrigger as-child>
                    <a class="block size-5" href="#">
                      <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                    </a>
                  </MenuTrigger>
                  <MenuPositioner>
                    <MenuContent class="w-40">
                      <MenuItem value="share">
                        <Lucide class="mr-2 size-4" icon="Users" /> Share File
                      </MenuItem>
                      <MenuItem value="delete">
                        <Lucide class="mr-2 size-4" icon="Trash" /> Delete
                      </MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </div>
              <div class="mt-5 flex items-center">
                <FileIcon class="w-12 text-xs" variant="file" type="MP3" />
                <div class="ml-4">
                  <a class="font-medium" href="">Celine Dion - Ashes</a>
                  <div class="mt-0.5 text-xs opacity-70">40 KB</div>
                </div>
                <MenuRoot class="w-auto ml-auto">
                  <MenuTrigger as-child>
                    <a class="block size-5" href="#">
                      <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                    </a>
                  </MenuTrigger>
                  <MenuPositioner>
                    <MenuContent class="w-40">
                      <MenuItem value="share">
                        <Lucide class="mr-2 size-4" icon="Users" /> Share File
                      </MenuItem>
                      <MenuItem value="delete">
                        <Lucide class="mr-2 size-4" icon="Trash" /> Delete
                      </MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </div>
              <div class="mt-5 flex items-center">
                <FileIcon class="w-12" variant="empty-directory" />
                <div class="ml-4">
                  <a class="font-medium" href="">Resources</a>
                  <div class="mt-0.5 text-xs opacity-70">0 KB</div>
                </div>
                <MenuRoot class="w-auto ml-auto">
                  <MenuTrigger as-child>
                    <a class="block size-5" href="#">
                      <Lucide class="size-5 opacity-70" icon="MoreHorizontal" />
                    </a>
                  </MenuTrigger>
                  <MenuPositioner>
                    <MenuContent class="w-40">
                      <MenuItem value="share">
                        <Lucide class="mr-2 size-4" icon="Users" /> Share File
                      </MenuItem>
                      <MenuItem value="delete">
                        <Lucide class="mr-2 size-4" icon="Trash" /> Delete
                      </MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </div>
            </div>
          </Box>
          <!-- END: Latest Uploads -->
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
          <Box raised="single" class="col-span-12 p-0">
            <CarouselRoot :default-page="0" :slide-count="fakers.slice(0, 5).length">
              <div class="flex items-center border-b border-foreground/15 px-5 py-3">
                <h2 class="mr-auto text-base font-medium">New Products</h2>
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
                    v-for="(faker, index) in fakers.slice(0, 5)"
                    :key="index"
                    :index="index"
                    class="px-5"
                    as-child
                  >
                    <div>
                      <div class="flex flex-col items-center pb-5 lg:flex-row">
                        <div
                          class="flex flex-col items-center pr-5 sm:flex-row lg:border-r border-foreground/15"
                        >
                          <div class="sm:mr-5">
                            <AvatarRoot class="size-20 bg-background rounded-full">
                              <AvatarFallback>IM</AvatarFallback>
                              <AvatarImage :src="faker['images'][0]" />
                            </AvatarRoot>
                          </div>
                          <div class="mr-auto mt-3 text-center sm:mt-0 sm:text-left">
                            <a class="text-lg font-medium" href="">
                              {{ faker['products'][0]!['name'] }}
                            </a>
                            <div class="mt-1 opacity-70 sm:mt-0">
                              {{ faker['news'][0]!['shortContent'] }}
                            </div>
                          </div>
                        </div>
                        <div
                          class="mt-6 flex w-full flex-1 items-center justify-center border-t border-foreground/15 px-5 pt-4 lg:mt-0 lg:w-auto lg:border-t-0 lg:pt-0"
                        >
                          <div class="w-20 rounded-md py-3 text-center">
                            <div class="text-xl font-medium">{{ faker['totals'][0] }}</div>
                            <div class="opacity-70">Orders</div>
                          </div>
                          <div class="w-20 rounded-md py-3 text-center">
                            <div class="text-xl font-medium">{{ faker['totals'][1] }}k</div>
                            <div class="opacity-70">Purchases</div>
                          </div>
                          <div class="w-20 rounded-md py-3 text-center">
                            <div class="text-xl font-medium">{{ faker['totals'][0] }}</div>
                            <div class="opacity-70">Reviews</div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="flex flex-col items-center border-t border-foreground/15 pt-5 sm:flex-row"
                      >
                        <div
                          class="flex w-full items-center justify-center border-b border-foreground/15 pb-5 sm:w-auto sm:justify-start sm:border-b-0 sm:pb-0"
                        >
                          <Badge look="outline" class="mr-3 px-3 py-2">{{
                            faker['dates'][0]
                          }}</Badge>
                          <div class="opacity-70">Date of Release</div>
                        </div>
                        <div class="mt-5 flex sm:ml-auto sm:mt-0">
                          <Button
                            variant="ghost"
                            class="border border-foreground/15 shadow-none ml-auto"
                            >Preview</Button
                          >
                          <Button
                            variant="ghost"
                            class="border border-foreground/15 shadow-none ml-2"
                            >Details</Button
                          >
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselItemGroup>
              </div>
            </CarouselRoot>
          </Box>
          <!-- END: New Products -->
          <Box raised="single" class="col-span-12 p-0">
            <CarouselRoot :default-page="0" :slide-count="fakers.slice(0, 5).length">
              <div class="flex items-center border-b border-foreground/15 px-5 py-3">
                <h2 class="mr-auto text-base font-medium">New Authors</h2>
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
                    v-for="(faker, index) in fakers.slice(0, 5)"
                    :key="index"
                    :index="index"
                    class="px-5"
                    as-child
                  >
                    <div>
                      <div class="flex flex-col items-center pb-5 lg:flex-row">
                        <div
                          class="flex flex-1 flex-col items-center pr-5 sm:flex-row lg:border-r border-foreground/15"
                        >
                          <div class="sm:mr-5">
                            <AvatarRoot class="size-20 bg-background rounded-full">
                              <AvatarFallback>IM</AvatarFallback>
                              <AvatarImage :src="faker['photos'][0]" />
                            </AvatarRoot>
                          </div>
                          <div class="mr-auto mt-3 text-center sm:mt-0 sm:text-left">
                            <a class="text-lg font-medium" href="">
                              {{ faker['users'][0]!['name'] }}
                            </a>
                            <div class="mt-1 opacity-70 sm:mt-0">
                              {{ faker['jobs'][0] }}
                            </div>
                          </div>
                        </div>
                        <div
                          class="mt-6 flex w-full flex-1 flex-col items-center justify-center border-t border-foreground/15 px-5 pt-4 lg:mt-0 lg:w-auto lg:items-start lg:border-t-0 lg:pt-0"
                        >
                          <div class="flex items-center">
                            <a
                              class="mr-3 flex size-8 items-center justify-center rounded-full border border-foreground/15"
                              href=""
                            >
                              <Lucide class="size-3 fill-current opacity-70" icon="Facebook" />
                            </a>
                            {{ faker['users'][0]!['email'] }}
                          </div>
                          <div class="mt-2 flex items-center">
                            <a
                              class="mr-3 flex size-8 items-center justify-center rounded-full border border-foreground/15"
                              href=""
                            >
                              <Lucide class="size-3 fill-current opacity-70" icon="Twitter" />
                            </a>
                            {{ faker['users'][0]!['name'] }}
                          </div>
                        </div>
                      </div>
                      <div
                        class="flex flex-col items-center border-t border-foreground/15 pt-5 sm:flex-row"
                      >
                        <div
                          class="flex w-full items-center justify-center border-b border-foreground/15 pb-5 sm:w-auto sm:justify-start sm:border-b-0 sm:pb-0"
                        >
                          <Badge look="outline" class="mr-3 px-3 py-2">{{
                            faker['dates'][0]
                          }}</Badge>
                          <div class="opacity-70">Joined Date</div>
                        </div>
                        <div class="mt-5 flex sm:ml-auto sm:mt-0">
                          <Button
                            variant="ghost"
                            class="border border-foreground/15 shadow-none ml-auto"
                            >Message</Button
                          >
                          <Button
                            variant="ghost"
                            class="border border-foreground/15 shadow-none ml-2"
                            >Profile</Button
                          >
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselItemGroup>
              </div>
            </CarouselRoot>
          </Box>
          <!-- END: New Authors -->
        </div>
      </TabsContent>
    </TabsRoot>
  </div>
</template>
