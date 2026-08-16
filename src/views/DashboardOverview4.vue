<script lang="ts" setup>
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Lucide } from '@/components/ui/lucide'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Donut1 } from '@/components/chart-presets'
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
        <!-- BEGIN: General Report -->
        <div class="col-span-12 xl:col-span-9">
          <div class="flex items-center h-10">
            <h2 class="mr-5 text-lg font-medium truncate">General Report</h2>
            <a class="ml-auto truncate text-primary" href=""> Show More </a>
          </div>
          <Box class="p-0 mt-5">
            <div class="grid grid-cols-12">
              <div class="flex flex-col justify-center col-span-12 px-8 py-12 lg:col-span-4">
                <Lucide class="stroke-1 text-pending size-10" icon="PieChart" />
                <div class="flex items-center justify-start mt-12">
                  <div class="opacity-90">My Total Assets</div>
                  <TooltipRoot>
                    <TooltipTrigger as-child>
                      <Lucide class="fill-(--color)/10 ml-2 size-3.5" icon="AlertCircle" />
                    </TooltipTrigger>
                    <TooltipPositioner>
                      <TooltipContent>Total value of your sales: $158.409.416</TooltipContent>
                    </TooltipPositioner>
                  </TooltipRoot>
                </div>
                <div class="flex items-center justify-start mt-3">
                  <div class="relative text-2xl font-medium">$1,413,102.02</div>
                  <a class="ml-4 opacity-70" href="">
                    <Lucide class="size-4" icon="RefreshCcw" />
                  </a>
                </div>
                <div class="mt-4 text-xs opacity-70">Last updated 1 hour ago</div>
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
                class="col-span-12 p-8 border-t border-dashed border-foreground/15 lg:col-span-8 lg:border-l lg:border-t-0"
              >
                <TabsRoot defaultValue="0" class="flex-flex-col items-center">
                  <TabsList class="w-60">
                    <TabsTrigger class="w-1/2" value="0"> Weekly </TabsTrigger>
                    <TabsTrigger class="w-1/2" value="1"> Monthly </TabsTrigger>
                  </TabsList>
                  <TabsContent value="0">
                    <div class="grid grid-cols-12 mt-6 gap-x-10 gap-y-9">
                      <div class="col-span-6 sm:col-span-6 md:col-span-4">
                        <div class="text-xs opacity-70">UNPAID LOAN</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-base">4.501</div>
                          <Badge
                            look="text"
                            variant="success"
                            as="x-base.badge"
                            content="9% Higher than last month"
                          >
                            2%
                            <Lucide class="ml-0.5" icon="ChevronDown" />
                          </Badge>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div class="text-xs opacity-70">ACTIVE PARTNER</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-base">2</div>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div class="text-xs opacity-70">PAID INSTALLMENT</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-base">$72.000</div>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div class="text-xs opacity-70">DISBURSEMENT</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-base">$54.000</div>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div class="text-xs opacity-70">SUCCESS PAYMENT</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-base">2.500</div>
                          <Badge
                            look="text"
                            variant="danger"
                            as="x-base.badge"
                            content="9% Higher than last month"
                          >
                            52%
                            <Lucide class="ml-0.5" icon="ChevronDown" />
                          </Badge>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div class="text-xs opacity-70">UNPAID LOAN</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-base">$72.000</div>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div class="text-xs opacity-70">POSTED CAMPAIGN</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-base">4.501</div>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div class="text-xs opacity-70">SOCIAL MEDIA</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-base">2</div>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4">
                        <div class="text-xs opacity-70">NET MARGIN</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-base">$72.000</div>
                          <Badge
                            look="text"
                            variant="success"
                            as="x-base.badge"
                            content="9% Higher than last month"
                          >
                            49%
                            <Lucide class="ml-0.5" icon="ChevronDown" />
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </TabsRoot>
              </div>
            </div>
          </Box>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-3">
          <div class="flex items-center h-10">
            <h2 class="mr-5 text-lg font-medium truncate">Sales Report</h2>
            <a class="ml-auto truncate text-primary" href=""> Show More </a>
          </div>
          <Box class="p-5 mt-5">
            <div class="mt-3">
              <Donut1 class="h-[192px]" />
            </div>
            <div class="mx-auto mt-8 w-52 sm:w-auto">
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
          </Box>
        </div>
        <!-- END: Sales Report -->
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
        <!-- BEGIN: Visitors -->
        <div class="col-span-12 mt-6 md:col-span-6 lg:col-span-4">
          <div class="items-center block h-10 sm:flex">
            <h2 class="mr-5 text-lg font-medium truncate">Visitors</h2>
            <NativeSelect class="mt-3 box sm:ml-auto sm:mt-0 sm:w-auto">
              <NativeSelectOption value="daily">Daily</NativeSelectOption>
              <NativeSelectOption value="weekly">Weekly</NativeSelectOption>
              <NativeSelectOption value="monthly">Monthly</NativeSelectOption>
              <NativeSelectOption value="yearly">Yearly</NativeSelectOption>
              <NativeSelectOption value="custom-date">Custom Date</NativeSelectOption>
            </NativeSelect>
          </div>
          <Box class="p-5 mt-12 sm:mt-5">
            <div class="flex pb-3 mb-3 border-b border-dashed opacity-70 border-foreground/15">
              <div>Parameters</div>
              <div class="ml-auto">Report Values</div>
            </div>
            <div class="flex items-center mb-5">
              <div class="flex items-center">
                <div>Site Visits</div>
                <Badge variant="danger" look="text" content="49% Higher than last month">
                  -2%
                  <Lucide class="ml-0.5 size-4" icon="ChevronDown" />
                </Badge>
              </div>
              <div class="ml-auto">4.500</div>
            </div>
            <div class="flex items-center mb-5">
              <div class="flex items-center">
                <div>Unique Visitors</div>
              </div>
              <div class="ml-auto">21</div>
            </div>
            <div class="flex items-center mb-5">
              <div class="flex items-center">
                <div>Page Views</div>
                <Badge variant="success" look="text" content="49% Higher than last month">
                  5%
                  <Lucide class="ml-0.5 size-4" icon="ChevronUp" />
                </Badge>
              </div>
              <div class="ml-auto">500</div>
            </div>
            <div class="flex items-center mb-5">
              <div class="flex items-center">
                <div>Bounce Rate</div>
              </div>
              <div class="ml-auto">3.420</div>
            </div>
            <div class="flex items-center mb-5">
              <div class="flex items-center">
                <div>% New Visits</div>
                <Badge variant="danger" look="text" content="49% Higher than last month">
                  -9%
                  <Lucide class="ml-0.5 size-4" icon="ChevronDown" />
                </Badge>
              </div>
              <div class="ml-auto">32%</div>
            </div>
            <div class="flex items-center mb-5">
              <div class="flex items-center">
                <div>Average Tim On Site</div>
              </div>
              <div class="ml-auto">1.5M</div>
            </div>
            <Button
              variant="ghost"
              class="relative justify-start w-full mb-2 border border-dashed border-foreground/15 shadow-none"
            >
              <span class="mr-5 truncate">View Full Report</span>
              <span
                class="absolute bottom-0 right-0 top-0 my-auto ml-auto mr-0.5 flex h-8 w-8 items-center justify-center"
              >
                <Lucide class="size-4" icon="ArrowRight" />
              </span>
            </Button>
          </Box>
        </div>
        <!-- END: Visitors -->
        <!-- BEGIN: Most Viewed Pages -->
        <div class="col-span-12 mt-6 md:col-span-6 lg:col-span-4">
          <div class="items-center block h-10 sm:flex">
            <h2 class="mr-5 text-lg font-medium truncate">Most Viewed Pages</h2>
            <NativeSelect class="mt-3 box sm:ml-auto sm:mt-0 sm:w-auto">
              <NativeSelectOption value="daily">Daily</NativeSelectOption>
              <NativeSelectOption value="weekly">Weekly</NativeSelectOption>
              <NativeSelectOption value="monthly">Monthly</NativeSelectOption>
              <NativeSelectOption value="yearly">Yearly</NativeSelectOption>
              <NativeSelectOption value="custom-date">Custom Date</NativeSelectOption>
            </NativeSelect>
          </div>
          <Box class="p-5 mt-12 sm:mt-5">
            <div class="flex pb-3 mb-3 border-b border-dashed opacity-70 border-foreground/15">
              <div>Page Names</div>
              <div class="ml-auto">Page Views</div>
            </div>
            <div class="flex items-center mb-5">
              <div>/letz-lara…review/2653</div>
              <div class="ml-auto">472</div>
            </div>
            <div class="flex items-center mb-5">
              <div>/midone…review/1674</div>
              <div class="ml-auto">294</div>
            </div>
            <div class="flex items-center mb-5">
              <div>/profile…review/46789</div>
              <div class="ml-auto">500</div>
            </div>
            <div class="flex items-center mb-5">
              <div>/profile…review/24357</div>
              <div class="ml-auto">3.420</div>
            </div>
            <div class="flex items-center mb-5">
              <div>/letz-lara…review/2653</div>
              <div class="ml-auto">83</div>
            </div>
            <div class="flex items-center mb-5">
              <div>/icewall…review/1674</div>
              <div class="ml-auto">21</div>
            </div>
            <Button
              variant="ghost"
              class="relative justify-start w-full mb-2 border border-dashed border-foreground/15 shadow-none"
            >
              <span class="mr-5 truncate">View Full Report</span>
              <span
                class="absolute bottom-0 right-0 top-0 my-auto ml-auto mr-0.5 flex h-8 w-8 items-center justify-center"
              >
                <Lucide class="size-4" icon="ArrowRight" />
              </span>
            </Button>
          </Box>
        </div>
        <!-- END: Most Viewed Pages -->
        <!-- BEGIN: Top Search Items -->
        <div class="col-span-12 mt-6 md:col-span-6 lg:col-span-4">
          <div class="items-center block h-10 sm:flex">
            <h2 class="mr-5 text-lg font-medium truncate">Top Search Items</h2>
            <NativeSelect class="mt-3 box sm:ml-auto sm:mt-0 sm:w-auto">
              <NativeSelectOption value="daily">Daily</NativeSelectOption>
              <NativeSelectOption value="weekly">Weekly</NativeSelectOption>
              <NativeSelectOption value="monthly">Monthly</NativeSelectOption>
              <NativeSelectOption value="yearly">Yearly</NativeSelectOption>
              <NativeSelectOption value="custom-date">Custom Date</NativeSelectOption>
            </NativeSelect>
          </div>
          <Box class="p-5 mt-12 sm:mt-5">
            <div class="flex pb-3 mb-3 border-b border-dashed opacity-70 border-foreground/15">
              <div>Keywords</div>
              <div class="ml-auto">Searched</div>
            </div>
            <div class="flex items-center mb-5">
              <div>Laravel 8</div>
              <div class="ml-auto">200</div>
            </div>
            <div class="flex items-center mb-5">
              <div>Eloquent</div>
              <div class="ml-auto">50</div>
            </div>
            <div class="flex items-center mb-5">
              <div>CKEditor Source Build</div>
              <div class="ml-auto">31</div>
            </div>
            <div class="flex items-center mb-5">
              <div>Midone Docs</div>
              <div class="ml-auto">405</div>
            </div>
            <div class="flex items-center mb-5">
              <div>Vue 3 Release Date</div>
              <div class="ml-auto">201</div>
            </div>
            <div class="flex items-center mb-5">
              <div>Install Vite Vue</div>
              <div class="ml-auto">42</div>
            </div>
            <Button
              variant="ghost"
              class="relative justify-start w-full mb-2 border border-dashed border-foreground/15 shadow-none"
            >
              <span class="mr-5 truncate">View Full Report</span>
              <span
                class="absolute bottom-0 right-0 top-0 my-auto ml-auto mr-0.5 flex h-8 w-8 items-center justify-center"
              >
                <Lucide class="size-4" icon="ArrowRight" />
              </span>
            </Button>
          </Box>
        </div>
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
          <!-- BEGIN: Daily Notes -->
          <div
            class="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto"
          >
            <DailyNotes />
          </div>
          <!-- END: Daily Notes -->
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
          <!-- BEGIN: Schedules -->
          <div
            class="col-span-12 mt-3 md:col-span-6 xl:col-span-4 xl:col-start-1 xl:row-start-2 2xl:col-span-12 2xl:col-start-auto 2xl:row-start-auto"
          >
            <Schedules />
          </div>
          <!-- END: Schedules -->
        </div>
      </div>
    </div>
  </div>
</template>
