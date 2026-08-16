<script lang="ts" setup>
import { AlertRoot, AlertDescription, AlertCloseTrigger } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
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
import { Line3, Donut1, Bar2 } from '@/components/chart-presets'
import { Transactions } from '@/components/transactions'
import { RecentActivities } from '@/components/recent-activities'
import { OfficialStores } from '@/components/official-stores'
import { WeeklyBestSellers } from '@/components/weekly-best-sellers'
import { WeeklyTopProducts } from '@/components/weekly-top-products'
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-12 gap-6">
      <div class="z-20 col-span-12 xl:col-span-9 2xl:col-span-9">
        <div class="">
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
        <div class="grid grid-cols-12 mb-3 mt-10 sm:gap-12">
          <div
            class="relative col-span-12 py-6 text-center sm:col-span-6 sm:pl-5 sm:text-left md:col-span-4 md:pl-0 lg:pl-5"
          >
            <MenuRoot class="absolute right-0 top-0 mt-5 pt-0.5 2xl:mt-7 2xl:pt-0 w-auto">
              <MenuTrigger as-child>
                <Lucide class="opacity-70" icon="MoreVertical" />
              </MenuTrigger>
              <MenuPositioner>
                <MenuContent>
                  <MenuItem value="0"> <Lucide icon="FileText" /> Monthly Report </MenuItem>
                  <MenuItem value="1"> <Lucide icon="FileText" /> Annual Report </MenuItem>
                </MenuContent>
              </MenuPositioner>
            </MenuRoot>
            <div class="text-base">
              Hi <span class="italic text-primary">Shane</span>, welcome back!
            </div>
            <div class="flex items-center justify-center mt-14 sm:justify-start 2xl:mt-20">
              <div class="text-base opacity-70">My Assets Value</div>
              <TooltipRoot>
                <TooltipTrigger as-child>
                  <Lucide class="fill-(--color)/10 ml-2 size-3.5" icon="AlertCircle" />
                </TooltipTrigger>
                <TooltipPositioner>
                  <TooltipContent>Last updated 1 hour ago</TooltipContent>
                </TooltipPositioner>
              </TooltipRoot>
            </div>
            <div class="items-center my-3 2xl:flex">
              <div class="flex flex-wrap items-center justify-center gap-5 sm:justify-start">
                <div
                  class="[--color:var(--color-primary)]/20 w-full text-2xl font-medium 2xl:w-auto"
                >
                  <span class="relative -mr-0.5 inline-block size-3 text-lg">
                    <span class="absolute -mt-3.5">$</span>
                  </span>
                  977.713.302
                </div>
                <Badge variant="success" look="outline" content="9% Higher than last month">
                  47%
                  <Lucide class="ml-0.5" icon="ChevronUp" />
                </Badge>
                <a class="opacity-70" href="">
                  <Lucide class="size-4" icon="RefreshCcw" />
                </a>
              </div>
            </div>
            <div
              class="bg-foreground/[.02] box border-foreground/15 rounded-xl mt-5 border px-3.5 pb-3.5 pt-3 text-xs leading-normal 2xl:mr-3"
            >
              <span class="opacity-80">
                The value of your assets, calculated before any taxes are deducted, is:
              </span>
              <a
                class="decoration-foreground/50 text-primary mt-0.5 inline-block font-medium underline decoration-dotted underline-offset-2 opacity-70"
                href=""
              >
                $721,206,851 </a
              >.
            </div>
            <MenuRoot class="mt-14 2xl:mr-3 2xl:mt-24">
              <MenuTrigger class="bg-transparent shadow-none">
                <Lucide class="mr-0.5 size-4" icon="FileText" />
                Download Reports
              </MenuTrigger>
              <MenuPositioner>
                <MenuContent>
                  <MenuItem value="0"> <Lucide icon="FileText" /> Monthly Report </MenuItem>
                  <MenuItem value="1"> <Lucide icon="FileText" /> Annual Report </MenuItem>
                </MenuContent>
              </MenuPositioner>
            </MenuRoot>
          </div>
          <div
            class="col-span-12 row-start-2 px-10 py-6 -mx-6 border-t border-dashed border-foreground/20 sm:px-28 md:col-span-4 md:row-start-auto md:border-l md:border-r md:border-t-0 md:px-6"
          >
            <div class="flex flex-wrap items-center">
              <div
                class="flex items-center justify-center w-full mb-5 mr-auto sm:w-auto sm:justify-start 2xl:mb-0"
              >
                <div
                  class="bg-(--color)/20 border-(--color)/60 size-2 rounded-full border [--color:var(--color-primary)]"
                ></div>
                <div class="ml-3.5">
                  <div class="text-xl font-medium">$47,578.77</div>
                  <div class="mt-1 opacity-70">Yearly budget</div>
                </div>
              </div>
              <NativeSelect
                class="shadow-none box mx-auto -mt-2 w-auto bg-transparent px-3 py-1.5 sm:mx-0"
              >
                <NativeSelectOption value="daily">Daily</NativeSelectOption>
                <NativeSelectOption value="weekly">Weekly</NativeSelectOption>
                <NativeSelectOption value="monthly">Monthly</NativeSelectOption>
                <NativeSelectOption value="yearly">Yearly</NativeSelectOption>
                <NativeSelectOption value="custom-date">Custom Date</NativeSelectOption>
              </NativeSelect>
            </div>
            <div class="mt-10 opacity-70">You have spent about 35% of your annual budget.</div>
            <div class="mt-6">
              <Bar2 class="h-[270px]" />
            </div>
          </div>
          <div
            class="col-span-12 py-6 pl-4 -ml-4 border-t border-l border-dashed border-foreground/20 sm:col-span-6 sm:border-t-0 md:col-span-4 md:ml-0 md:border-l-0 md:pl-0"
          >
            <TabsRoot class="w-3/4 mx-auto 2xl:w-4/6" defaultValue="0">
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
          </div>
        </div>
      </div>
      <div
        :class="[
          'z-10 col-span-12 pt-8 relative pb-14',
          'before:content-[\'\'] before:rounded-[30px] before:bg-background before:absolute before:inset-0',
          'after:content-[\'\'] after:rounded-[30px] after:bg-foreground/[.03] after:border after:border-foreground/15 after:absolute after:inset-0',
        ]"
      >
        <div class="relative z-10 grid grid-cols-12 gap-6">
          <div class="col-span-12 px-0 sm:col-span-4 lg:px-6 xl:col-span-3 xl:px-0 2xl:px-6">
            <div class="flex flex-wrap items-center gap-3 lg:flex-nowrap">
              <div class="mr-auto text-lg font-medium truncate sm:w-full lg:w-auto">
                Summary Report
              </div>
              <Badge variant="secondary" look="outline" class="ml-auto whitespace-nowrap"
                >180 Campaign</Badge
              >
            </div>
            <div class="px-10 sm:px-0">
              <Line3 class="mt-8 -ml-1 mb-5 h-[110px]" />
            </div>
          </div>
          <div class="col-span-12 px-0 sm:col-span-4 lg:px-6 xl:col-span-3 xl:px-0 2xl:px-6">
            <div class="flex flex-wrap items-center gap-3 lg:flex-nowrap">
              <div class="mr-auto text-lg font-medium truncate sm:w-full lg:w-auto">
                Social Media
              </div>
              <a class="flex items-center text-primary" href="">
                <div class="truncate 2xl:mr-auto">View Details</div>
                <Lucide class="ml-3 size-4" icon="ArrowRight" />
              </a>
            </div>
            <div class="flex items-center justify-center mt-9">
              <div class="text-right">
                <div class="text-xl font-medium">71,234,149</div>
                <div class="mt-1 truncate opacity-70">Active Lenders</div>
              </div>
              <div
                class="w-px h-16 mx-4 border border-r border-dashed border-foreground/15 xl:mx-6"
              ></div>
              <div>
                <div class="text-xl font-medium">41,835,249</div>
                <div class="mt-1 truncate opacity-70">Total Lenders</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 px-0 sm:col-span-4 lg:px-6 xl:col-span-3 xl:px-0 2xl:px-6">
            <div class="flex flex-wrap items-center gap-3 lg:flex-nowrap">
              <div class="mr-auto text-lg font-medium truncate sm:w-full lg:w-auto">Posted Ads</div>
              <Badge variant="secondary" look="outline" class="ml-auto whitespace-nowrap">
                320 Followers</Badge
              >
            </div>
            <div class="px-10 sm:px-0">
              <Line3 class="mt-8 -ml-1 mb-5 h-[110px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="top-0 right-0 z-30 grid w-full h-full grid-cols-12 gap-6 pb-6 -mt-8 xl:absolute xl:z-auto xl:mt-0 xl:pb-0"
    >
      <div class="z-30 col-span-12 xl:col-span-3 xl:col-start-10 xl:pb-16">
        <div class="flex flex-col h-full">
          <Box raised="single">
            <div class="flex flex-wrap items-center gap-3">
              <div class="mr-auto">
                <div class="flex items-center text-xs opacity-70">
                  AVAILABLE FUNDS
                  <TooltipRoot>
                    <TooltipTrigger as-child>
                      <Lucide class="fill-(--color)/10 ml-2 size-3.5" icon="AlertCircle" />
                    </TooltipTrigger>
                    <TooltipPositioner>
                      <TooltipContent>Last updated 1 hour ago</TooltipContent>
                    </TooltipPositioner>
                  </TooltipRoot>
                </div>
                <div class="relative mt-3.5 text-xl font-medium leading-5">$447.957.877</div>
              </div>
              <Button variant="secondary" look="outline" class="rounded-full size-10">
                <Lucide class="size-6" icon="Plus" />
              </Button>
            </div>
          </Box>
          <Box raised="single" class="mt-5 xl:min-h-0">
            <div class="flex items-center">
              <div class="mr-5 text-lg font-medium truncate">Summary Report</div>
              <a class="flex items-center ml-auto text-primary" href="">
                <Lucide class="mr-3 size-4" icon="RefreshCcw" />
                Refresh
              </a>
            </div>
            <TabsRoot defaultValue="0" class="mt-5">
              <TabsList class="w-full">
                <TabsTrigger class="w-1/2" value="0"> Weekly </TabsTrigger>
                <TabsTrigger class="w-1/2" value="1"> Monthly </TabsTrigger>
              </TabsList>
              <TabsContent value="0">
                <div class="grid grid-cols-12 mt-6 gap-y-7">
                  <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                    <div class="text-xs opacity-70">UNPAID LOAN</div>
                    <div class="mt-1.5 flex items-center">
                      <div class="text-base">$155.430.000</div>
                      <Badge variant="success" look="text" content="9% Higher than last month">
                        2%
                        <Lucide class="ml-0.5" icon="ChevronUp" />
                      </Badge>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                    <div class="text-xs opacity-70">ACTIVE FUNDING PARTNER</div>
                    <div class="mt-1.5 flex items-center">
                      <div class="text-base">52 Partner</div>
                      <Badge variant="danger" look="text" content="9% Higher than last month">
                        49%
                        <Lucide class="ml-0.5" icon="ChevronDown" />
                      </Badge>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                    <div class="text-xs opacity-70">PAID INSTALLMENT</div>
                    <div class="mt-1.5 flex items-center">
                      <div class="text-base">$75.430.000</div>
                      <Badge variant="success" look="text" content="9% Higher than last month">
                        36%
                        <Lucide class="ml-0.5" icon="ChevronUp" />
                      </Badge>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                    <div class="text-xs opacity-70">SUCCESS PAYMENT</div>
                    <div class="mt-1.5 flex items-center">
                      <div class="text-base">100%</div>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                    <div class="text-xs opacity-70">WAITING FOR DISBURSEMENT</div>
                    <div class="mt-1.5 flex items-center">
                      <div class="text-base">2</div>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                    <div class="text-xs opacity-70">UNPAID LOAN</div>
                    <div class="mt-1.5 flex items-center">
                      <div class="text-base">$21.430.000</div>
                      <Badge variant="danger" look="text" content="9% Higher than last month">
                        23%
                        <Lucide class="ml-0.5" icon="ChevronDown" />
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    class="border border-foreground/15 relative justify-start col-span-12 border-dashed shadow-none"
                  >
                    <span class="mr-5 truncate"> My Portfolio Details </span>
                    <span
                      class="absolute bottom-0 right-0 top-0 my-auto ml-auto mr-0.5 flex h-8 w-8 items-center justify-center"
                    >
                      <Lucide class="size-4" icon="ArrowRight" />
                    </span>
                  </Button>
                </div>
              </TabsContent>
            </TabsRoot>
          </Box>
        </div>
      </div>
    </div>
  </div>
  <div
    :class="[
      'z-40 grid grid-cols-12 gap-6 relative min-h-[500px] 2xl:-mt-10 2xl:z-10 px-5 pb-5',
      'before:content-[\'\'] before:rounded-[30px] before:bg-background before:absolute before:inset-0',
      'after:content-[\'\'] after:rounded-[30px] after:bg-foreground/[.05] after:border after:border-foreground/15 after:absolute after:inset-0',
    ]"
  >
    <div class="relative z-20 col-span-12 2xl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: Official Store -->
        <div class="col-span-12 mt-6 xl:col-span-8">
          <OfficialStores />
        </div>
        <!-- END: Official Store -->
        <!-- BEGIN: Weekly Best Sellers -->
        <div class="col-span-12 mt-6 xl:col-span-4">
          <WeeklyBestSellers />
        </div>
        <!-- END: Weekly Best Sellers -->
        <!-- BEGIN: Weekly Top Products -->
        <div class="col-span-12 mt-6">
          <WeeklyTopProducts />
        </div>
        <!-- END: Weekly Top Products -->
      </div>
    </div>
    <div class="relative z-20 col-span-12 2xl:col-span-3">
      <div class="h-full pb-10 -mb-10 2xl:border-l border-foreground/15">
        <div class="grid grid-cols-12 gap-x-6 gap-y-6 2xl:gap-x-0 2xl:pl-6">
          <!-- BEGIN: Recent Activities -->
          <div class="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
            <RecentActivities />
          </div>
          <!-- END: Recent Activities -->
          <!-- BEGIN: Transactions -->
          <div class="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
            <Transactions />
          </div>
          <!-- END: Transactions -->
        </div>
      </div>
    </div>
  </div>
</template>
