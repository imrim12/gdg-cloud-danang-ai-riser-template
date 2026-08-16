<script lang="ts" setup>
import { ref } from 'vue'
import fakers from '@/utils/faker'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import {
  PaginationContext,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import { DialogRoot, DialogContent, DialogCloseTrigger } from '@/components/ui/dialog'
import { Lucide } from '@/components/ui/lucide'

const deleteConfirmationOpen = ref(false)
</script>

<template>
  <div>
    <div class="flex flex-col items-center sm:flex-row">
      <h2 class="mr-auto text-lg font-medium">Seller Details</h2>
      <div class="mt-4 flex w-full sm:mt-0 sm:w-auto">
        <Button class="mr-2" look="outline" variant="primary"> Print </Button>
        <MenuRoot class="ml-auto w-auto sm:ml-0">
          <MenuTrigger as-child>
            <Box class="px-2" as-child>
              <Button variant="ghost" class="box flex items-center">
                <span class="flex h-5 w-5 items-center justify-center">
                  <Lucide class="size-4" icon="Plus" />
                </span>
              </Button>
            </Box>
          </MenuTrigger>
          <MenuPositioner>
            <MenuContent class="w-40">
              <MenuItem value="print">
                <Lucide class="mr-2 size-4" icon="Printer" /> Print
              </MenuItem>
              <MenuItem value="word">
                <Lucide class="mr-2 size-4" icon="FileText" /> Export to Word
              </MenuItem>
              <MenuItem value="pdf">
                <Lucide class="mr-2 size-4" icon="FileText" /> Export to PDF
              </MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      </div>
    </div>
    <!-- BEGIN: Seller Details -->
    <div class="mt-5 grid grid-cols-11 gap-5">
      <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
        <Box>
          <div class="mb-5 flex items-center border-b border-foreground/[.08] pb-5">
            <div class="truncate text-base font-medium">User Details</div>
            <a class="text-primary ml-auto flex items-center" href="">
              <Lucide class="mr-2 h-4 w-4" icon="Edit" /> More Details
            </a>
          </div>
          <div class="flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Clipboard" />
            Unique ID:
            <a class="ml-1 underline decoration-dotted" href=""> SLR-20220217-2053411933 </a>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="User" />
            Name:
            <a class="ml-1 underline decoration-dotted" href="">
              {{ fakers[0]!['users'][0]!['name'] }}
            </a>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Calendar" />
            Phone Number: +71828273732
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="MapPin" />
            Address: 260 W. Storm Street New York, NY 10025.
          </div>
          <div class="mt-5 flex items-center border-t border-foreground/[.08] pt-5 font-medium">
            <Button look="outline" class="w-full px-2 py-1" type="button"> Message User </Button>
          </div>
        </Box>
        <Box class="mt-8">
          <div class="mb-5 flex items-center border-b border-foreground/[.08] pb-5">
            <div class="truncate text-base font-medium">Store Details</div>
            <a class="text-primary ml-auto flex items-center" href="">
              <Lucide class="mr-2 h-4 w-4" icon="Edit" /> More Details
            </a>
          </div>
          <div class="flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Clipboard" />
            Unique ID:
            <a class="ml-1 underline decoration-dotted" href=""> STR-2053411933-20220217 </a>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="ShoppingBag" />
            Name:
            <a class="ml-1 underline decoration-dotted" href=""> Themeforest </a>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Calendar" />
            Phone Number: +71828273732
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="MapPin" />
            Address: 260 W. Storm Street New York, NY 10025.
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Calendar" />
            Status:
            <Badge class="ml-2" variant="success"> Active </Badge>
          </div>
          <div class="mt-5 flex items-center border-t border-foreground/[.08] pt-5 font-medium">
            <Button look="outline" class="w-full px-2 py-1" type="button"> Change Status </Button>
          </div>
        </Box>
        <Box class="mt-8">
          <div class="mb-5 flex items-center border-b border-foreground/[.08] pb-5">
            <div class="truncate text-base font-medium">Transaction Reports</div>
            <a class="text-primary ml-auto flex items-center" href="">
              <Lucide class="mr-2 h-4 w-4" icon="Edit" /> More Details
            </a>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Clipboard" />
            Avg. Daily Transactions:
            <div class="ml-auto">$1,500.00</div>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Clipboard" />
            Avg. Monthly Transactions:
            <div class="ml-auto">$42,500.00</div>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Clipboard" />
            Avg. Annually Transactions:
            <div class="ml-auto">$1,012,500.00</div>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Star" />
            Average Rating:
            <div class="ml-auto">4.9+</div>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Album" />
            Total Products:
            <div class="ml-auto">7,120</div>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Archive" />
            Total Transactions:
            <div class="ml-auto">1.512.001</div>
          </div>
          <div class="mt-3 flex items-center">
            <Lucide class="mr-2 size-4 opacity-70" icon="Monitor" />
            Active Disputes:
            <div class="ml-auto">1</div>
          </div>
        </Box>
      </div>
      <div class="col-span-12 lg:col-span-7 2xl:col-span-8">
        <div class="grid grid-cols-12 gap-x-5 gap-y-8">
          <div
            v-for="(faker, index) in fakers.slice(0, 9)"
            :key="index"
            class="col-span-12 sm:col-span-6 2xl:col-span-4"
          >
            <Box class="p-0">
              <div class="p-5">
                <div
                  class="image-fit h-40 overflow-hidden rounded-xl before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black before:to-black/10 2xl:h-56"
                >
                  <img
                    class="rounded-xl"
                    :src="faker['images'][0]"
                    alt="Midone - Tailwind Admin Dashboard Template"
                  />
                  <Badge
                    v-if="faker['trueFalse'][0]"
                    class="absolute top-0 z-10 m-5 text-white"
                    look="filled"
                    variant="pending"
                  >
                    Featured
                  </Badge>
                  <div class="absolute bottom-0 z-10 px-5 pb-6 text-white">
                    <a class="block text-base font-medium" href="">
                      {{ faker['products'][0]!['name'] }}
                    </a>
                    <span class="mt-3 text-xs text-white/90">
                      {{ faker['products'][0]!['category'] }}
                    </span>
                  </div>
                </div>
                <div class="mt-5 opacity-70">
                  <div class="flex items-center">
                    <Lucide class="mr-2 h-4 w-4" icon="Link" /> Price: ${{ faker['totals'][0] }}
                  </div>
                  <div class="mt-2 flex items-center">
                    <Lucide class="mr-2 h-4 w-4" icon="Layers" /> Remaining Stock:
                    {{ faker['stocks'][0] }}
                  </div>
                  <div class="mt-2 flex items-center">
                    <Lucide class="mr-2 h-4 w-4" icon="CheckSquare" />
                    Status: {{ faker['trueFalse'][0] ? 'Active' : 'Inactive' }}
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center border-t border-foreground/[.08] p-5 lg:justify-end"
              >
                <a class="text-primary mr-auto flex items-center" href="#">
                  <Lucide class="mr-1 h-4 w-4" icon="Eye" /> Preview
                </a>
                <a class="mr-3 flex items-center" href="#">
                  <Lucide class="mr-1 h-4 w-4" icon="CheckSquare" /> Edit
                </a>
                <a
                  class="text-danger flex items-center"
                  href="#"
                  @click.prevent="deleteConfirmationOpen = true"
                >
                  <Lucide class="mr-1 h-4 w-4" icon="Trash" /> Delete
                </a>
              </div>
            </Box>
          </div>
        </div>
        <!-- BEGIN: Pagination -->
        <div class="col-span-11 mt-6 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
          <PaginationRoot
            :count="150"
            :pageSize="10"
            :siblingCount="1"
            class="w-full sm:mr-auto sm:w-auto"
          >
            <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
            <PaginationContext v-slot="{ pagination }">
              <template v-for="(page, index) in pagination?.pages" :key="index">
                <PaginationItem v-if="page.type === 'page'" v-bind="{ ...page }">
                  {{ page.value }}
                </PaginationItem>
                <PaginationEllipsis v-else :index="index" />
              </template>
            </PaginationContext>
            <PaginationNextTrigger>Next</PaginationNextTrigger>
          </PaginationRoot>
          <NativeSelect class="mt-3 w-20 sm:mt-0">
            <NativeSelectOption value="10">10</NativeSelectOption>
            <NativeSelectOption value="25">25</NativeSelectOption>
            <NativeSelectOption value="35">35</NativeSelectOption>
            <NativeSelectOption value="50">50</NativeSelectOption>
          </NativeSelect>
        </div>
        <!-- END: Pagination -->
      </div>
    </div>
    <!-- END: Seller Details -->
    <!-- BEGIN: Delete Confirmation Modal -->
    <DialogRoot
      :open="deleteConfirmationOpen"
      @openChange="(details) => (deleteConfirmationOpen = details.open)"
    >
      <DialogContent>
        <div class="p-5 text-center">
          <Lucide class="text-danger mx-auto mt-3 size-16 stroke-1" icon="CircleX" />
          <div class="mt-5 text-2xl font-medium">Are you sure?</div>
          <div class="mt-2 opacity-70">
            Do you really want to delete these records? <br />
            This process cannot be undone.
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <DialogCloseTrigger class="mr-2 w-24"> Cancel </DialogCloseTrigger>
          <Button class="w-24" type="button" variant="danger" look="outline"> Delete </Button>
        </div>
      </DialogContent>
    </DialogRoot>
    <!-- END: Delete Confirmation Modal -->
  </div>
</template>
