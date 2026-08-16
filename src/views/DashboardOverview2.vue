<script lang="ts" setup>
import { ref } from 'vue'
import phoneIllustration from '@/assets/images/phone-illustration.svg'
import womanIllustration from '@/assets/images/woman-illustration.svg'
import { AlertRoot, AlertDescription, AlertCloseTrigger } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Lucide } from '@/components/ui/lucide'
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Bar1, Donut1 } from '@/components/chart-presets'
import { Transactions } from '@/components/transactions'
import { RecentActivities } from '@/components/recent-activities'
import { DailyNotes } from '@/components/daily-notes'
import { Schedules } from '@/components/schedules'
import { OfficialStores } from '@/components/official-stores'
import { WeeklyBestSellers } from '@/components/weekly-best-sellers'
import { WeeklyTopProducts } from '@/components/weekly-top-products'
</script>

<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: Notification -->
        <div class="col-span-12">
          <AlertRoot variant="warning" look="outline">
            <AlertDescription>
              Introducing new dashboard! Download now at
              <a
                class="underline decoration-dotted underline-offset-2"
                href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                target="blank"
              >
                themeforest.net
              </a>
              .
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
        </div>
        <!-- BEGIN: Notification -->
        <!-- BEGIN: General Report -->
        <div class="col-span-12 mt-2 lg:col-span-8 xl:col-span-6">
          <div class="items-center block h-10 sm:flex">
            <h2 class="mr-5 text-lg font-medium truncate">General Report</h2>
            <NativeSelect class="mt-3 box sm:ml-auto sm:mt-0 sm:w-auto">
              <NativeSelectOption value="daily">Daily</NativeSelectOption>
              <NativeSelectOption value="weekly">Weekly</NativeSelectOption>
              <NativeSelectOption value="monthly">Monthly</NativeSelectOption>
              <NativeSelectOption value="yearly">Yearly</NativeSelectOption>
              <NativeSelectOption value="custom-date">Custom Date</NativeSelectOption>
            </NativeSelect>
          </div>
          <Box raised="single" class="relative p-0 mt-12 sm:mt-5">
            <div class="sm:flex">
              <div class="flex flex-col justify-center flex-1 px-8 py-12">
                <Lucide class="w-10 h-10 stroke-1 text-warning" icon="ShoppingBag" />
                <div class="mt-12 text-2xl font-medium leading-8">$47,091.47</div>
                <Badge
                  variant="success"
                  look="outline"
                  class="mr-auto mt-3"
                  content="9% Higher than last month"
                >
                  47%
                  <Lucide class="ml-0.5" icon="ChevronUp" />
                </Badge>
                <div class="mt-4 opacity-70">
                  Sales earnings this month after associated author fees, & before taxes.
                </div>
                <Button
                  variant="ghost"
                  class="border border-foreground/15 relative justify-start mt-12 rounded-full"
                >
                  Download Reports
                  <div
                    class="border border-primary/30 bg-primary/15 absolute w-8 h-8 rounded-full right-1 grid place-items-center"
                  >
                    <Lucide icon="ArrowRight" />
                  </div>
                </Button>
              </div>
              <div
                class="flex flex-col justify-center flex-1 px-8 py-12 border-t border-foreground/15 border-dashed sm:border-l sm:border-t-0"
              >
                <div class="text-xs opacity-70">TOTAL TRANSACTION</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">4.501</div>
                  <Badge variant="success" look="text" content="9% Higher than last month">
                    2%
                    <Lucide class="ml-0.5" icon="ChevronDown" />
                  </Badge>
                </div>
                <div class="mt-6 text-xs opacity-70">CANCELATION CASE</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">2</div>
                  <Badge variant="danger" look="text" content="9% Higher than last month">
                    0.1%
                    <Lucide class="ml-0.5" icon="ChevronDown" />
                  </Badge>
                </div>
                <div class="mt-6 text-xs opacity-70">GROSS RENTAL VALUE</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">$72.000</div>
                  <Badge variant="success" look="text" content="9% Higher than last month">
                    0.1%
                    <Lucide class="ml-0.5" icon="ChevronUp" />
                  </Badge>
                </div>
                <div class="mt-6 text-xs opacity-70">GROSS RENTAL PROFIT</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">$54.000</div>
                  <Badge variant="success" look="text" content="9% Higher than last month">
                    52%
                    <Lucide class="ml-0.5" icon="ChevronUp" />
                  </Badge>
                </div>
                <div class="mt-6 text-xs opacity-70">NEW USERS</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">2.500</div>
                  <Badge variant="success" look="text" content="9% Higher than last month">
                    52%
                    <Lucide class="ml-0.5" icon="ChevronUp" />
                  </Badge>
                </div>
              </div>
            </div>
          </Box>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Visitors -->
        <div class="col-span-12 mt-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
          <div class="flex items-center h-10">
            <h2 class="mr-5 text-lg font-medium truncate">Visitors</h2>
            <a class="ml-auto truncate text-primary" href=""> View on Map </a>
          </div>
          <Box raised="single" class="mt-5">
            <div class="flex items-center">
              Realtime active users
              <MenuRoot class="ml-auto w-auto">
                <MenuTrigger as-child>
                  <Lucide class="opacity-70" icon="MoreVertical" />
                </MenuTrigger>
                <MenuPositioner>
                  <MenuContent>
                    <MenuItem value="0"><Lucide icon="FileText" /> Export</MenuItem>
                    <MenuItem value="1"><Lucide icon="Settings" /> Settings</MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
            </div>
            <div class="mt-2 text-2xl font-medium">214</div>
            <div class="flex pb-2 mt-4 border-b border-foreground/15">
              <div class="text-xs opacity-70">Page views per second</div>
              <Badge
                variant="success"
                look="text"
                class="ml-auto px-0"
                content="49% Higher than last month"
              >
                49%
                <Lucide class="ml-0.5" icon="ChevronDown" />
              </Badge>
            </div>
            <div class="mt-2 border-b border-foreground/15">
              <div class="-mb-1.5 -ml-2.5">
                <Bar1 class="h-[75px]" />
              </div>
            </div>
            <div class="flex pb-2 mt-4 mb-2 text-xs border-b border-foreground/15 opacity-70">
              <div>Top Active Pages</div>
              <div class="ml-auto">Active Users</div>
            </div>
            <div class="flex">
              <div>/letz-lara…review/2653</div>
              <div class="ml-auto">472</div>
            </div>
            <div class="mt-1.5 flex">
              <div>/midone…review/1674</div>
              <div class="ml-auto">294</div>
            </div>
            <div class="mt-1.5 flex">
              <div>/profile…review/46789</div>
              <div class="ml-auto">83</div>
            </div>
            <div class="mt-1.5 flex">
              <div>/profile…review/24357</div>
              <div class="ml-auto">21</div>
            </div>
            <Button
              variant="ghost"
              class="w-full mt-4 border border-foreground/15 border-dashed"
              size="sm"
            >
              Real-Time Report
            </Button>
          </Box>
        </div>
        <!-- END: Visitors -->
        <!-- BEGIN: Users By Age -->
        <div class="col-span-12 mt-2 sm:col-span-6 lg:col-span-4 lg:mt-6 xl:col-span-3 xl:mt-2">
          <div class="flex items-center h-10">
            <h2 class="mr-5 text-lg font-medium truncate">Users By Age</h2>
            <a class="ml-auto truncate text-primary" href=""> Show More </a>
          </div>
          <Box raised="single" class="relative mt-5">
            <TabsRoot defaultValue="0">
              <TabsList class="w-full">
                <TabsTrigger class="w-1/2" value="0"> Active </TabsTrigger>
                <TabsTrigger class="w-1/2" value="1"> Inactive </TabsTrigger>
              </TabsList>
              <TabsContent value="0">
                <div class="relative">
                  <Donut1 class="mt-3 h-[200px]" />
                  <div
                    class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full"
                  >
                    <div class="text-2xl font-medium">2.501</div>
                    <div class="mt-0.5 opacity-70">Active Users</div>
                  </div>
                </div>
                <div class="mx-auto mt-5 w-52 sm:w-auto">
                  <div class="flex items-center">
                    <div
                      class="bg-(--color)/20 border-(--color)/60 mr-3 size-2 rounded-full border [--color:var(--color-primary)]"
                    ></div>
                    <span class="truncate">17 - 30 Years old</span>
                    <span class="ml-auto">62%</span>
                  </div>
                  <div class="flex items-center mt-4">
                    <div
                      class="bg-(--color)/20 border-(--color)/60 mr-3 size-2 rounded-full border [--color:var(--color-pending)]"
                    ></div>
                    <span class="truncate">31 - 50 Years old</span>
                    <span class="ml-auto">33%</span>
                  </div>
                  <div class="flex items-center mt-4">
                    <div
                      class="bg-(--color)/20 border-(--color)/60 mr-3 size-2 rounded-full border [--color:var(--color-warning)]"
                    ></div>
                    <span class="truncate">&gt;= 50 Years old</span>
                    <span class="ml-auto">10%</span>
                  </div>
                </div>
              </TabsContent>
            </TabsRoot>
          </Box>
        </div>
        <!-- END: Users By Age -->
        <!-- BEGIN: Official Store -->
        <div class="col-span-12 mt-3 xl:col-span-8">
          <OfficialStores />
        </div>
        <!-- END: Official Store -->
        <!-- BEGIN: Weekly Best Sellers -->
        <div class="col-span-12 mt-3 xl:col-span-4">
          <WeeklyBestSellers />
        </div>
        <!-- END: Weekly Best Sellers -->
        <!-- BEGIN: Ads 1 -->
        <div class="col-span-12 mt-6 lg:col-span-6">
          <Box class="bg-(--color)/5 border-(--color)/15 p-px [--color:var(--color-primary)]">
            <div class="text-(--color) relative overflow-hidden rounded-xl px-8 pb-7 pt-6">
              <div class="w-full text-lg font-medium leading-relaxed sm:w-72">
                Transact Safely with Lender’s <br />
                Fund Account
              </div>
              <div class="w-full mt-1 opacity-70 sm:w-72">Apply now, quick registration.</div>
              <Button class="w-32 mt-6 sm:mt-8" look="outline" variant="primary" size="sm">
                Start Now
              </Button>
              <img
                class="absolute top-0 right-0 hidden w-2/5 mr-2 -mt-3 sm:block"
                :src="womanIllustration"
                alt="Midone - Tailwind Admin Dashboard Template"
              />
            </div>
          </Box>
        </div>
        <!-- END: Ads 1 -->
        <!-- BEGIN: Ads 2 -->
        <div class="col-span-12 mt-6 lg:col-span-6">
          <Box class="bg-(--color)/5 border-(--color)/15 p-px [--color:var(--color-warning)]">
            <div class="text-(--color) relative overflow-hidden rounded-xl px-8 pb-7 pt-5">
              <div class="w-full text-lg font-medium leading-relaxed sm:w-64">
                Invite Friends to Get
                <span class="font-medium">Free</span> Bonuses!
              </div>
              <div class="w-full mt-1 opacity-70 sm:w-60">Invite friends, get a $200 voucher!</div>
              <TooltipRoot>
                <TooltipTrigger as-child>
                  <div class="relative cursor-pointer mt-7 w-52">
                    <Input
                      class="bg-(--color)/5 border-(--color)/20 cursor-pointer"
                      type="text"
                      value="https://dashboard.in"
                    />
                    <Lucide
                      class="absolute top-0 bottom-0 right-0 my-auto mr-4 size-4"
                      icon="Copy"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipPositioner>
                  <TooltipContent>Copy referral link</TooltipContent>
                </TooltipPositioner>
              </TooltipRoot>
              <img
                class="absolute top-0 right-0 hidden w-1/2 mt-1 -mr-12 sm:block"
                :src="phoneIllustration"
                alt="Midone - Tailwind Admin Dashboard Template"
              />
            </div>
          </Box>
        </div>
        <!-- END: Ads 2 -->
        <!-- BEGIN: Weekly Top Products -->
        <div class="col-span-12 mt-6">
          <WeeklyTopProducts />
        </div>
        <!-- END: Weekly Top Products -->
      </div>
    </div>
    <div class="col-span-12 2xl:col-span-3">
      <div class="h-full pb-10 -mb-10 2xl:border-l border-foreground/15">
        <div class="grid grid-cols-12 gap-x-6 gap-y-6 2xl:gap-x-0 2xl:pl-6">
          <div class="col-span-12 md:col-span-6 xl:col-span-12">
            <DailyNotes />
          </div>
          <div class="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
            <RecentActivities />
          </div>
          <div class="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
            <Transactions />
          </div>
          <div
            class="col-span-12 mt-3 md:col-span-6 xl:col-span-4 xl:col-start-1 xl:row-start-2 2xl:col-span-12 2xl:col-start-auto 2xl:row-start-auto"
          >
            <Schedules />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
