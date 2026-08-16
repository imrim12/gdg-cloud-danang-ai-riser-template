<script lang="ts" setup>
import { ref } from 'vue'
import fakers from '@/utils/faker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Box } from '@/components/ui/box'
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { CheckboxRoot, CheckboxControl } from '@/components/ui/checkbox'
import {
  PaginationContext,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import { DialogRoot, DialogContent, DialogCloseTrigger } from '@/components/ui/dialog'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Lucide } from '@/components/ui/lucide'

const deleteConfirmationOpen = ref(false)

const stores = ['Themeforest', 'Codecanyon', 'Graphicriver']
</script>

<template>
  <div>
    <h2 class="text-lg font-medium">Seller List</h2>
    <div class="mt-5 grid grid-cols-12 gap-6">
      <div class="col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap">
        <div class="flex w-full sm:w-auto">
          <Button class="mr-2" look="outline" variant="primary"> Add New Seller </Button>
          <MenuRoot class="w-auto">
            <MenuTrigger as-child>
              <Box class="px-2" as-child>
                <Button variant="ghost" class="box flex items-center">
                  <span class="flex h-5 w-5 items-center justify-center">
                    <Lucide class="h-4 w-4" icon="Plus" />
                  </span>
                </Button>
              </Box>
            </MenuTrigger>
            <MenuPositioner>
              <MenuContent class="w-40">
                <MenuItem value="print">
                  <Lucide class="mr-2 h-4 w-4" icon="Printer" /> Print
                </MenuItem>
                <MenuItem value="excel">
                  <Lucide class="mr-2 h-4 w-4" icon="FileText" /> Export to Excel
                </MenuItem>
                <MenuItem value="pdf">
                  <Lucide class="mr-2 h-4 w-4" icon="FileText" /> Export to PDF
                </MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
        <div class="mx-auto hidden opacity-70 md:block">Showing 1 to 10 of 150 entries</div>
        <div class="mt-3 flex w-full items-center xl:mt-0 xl:w-auto">
          <div class="relative w-56">
            <Input class="w-56 pr-10" type="text" placeholder="Search..." />
            <Lucide class="absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4" icon="Search" />
          </div>
          <NativeSelect class="ml-2 w-56 xl:w-24">
            <NativeSelectOption value="Status">Status</NativeSelectOption>
            <NativeSelectOption value="Active">Active</NativeSelectOption>
            <NativeSelectOption value="Inactive">Inactive</NativeSelectOption>
          </NativeSelect>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="col-span-12 overflow-auto lg:overflow-visible">
        <Table class="-mt-2" variant="boxed">
          <TableHeader>
            <TableRow>
              <TableHead>
                <CheckboxRoot>
                  <CheckboxControl />
                </CheckboxRoot>
              </TableHead>
              <TableHead> SELLER </TableHead>
              <TableHead> STORE </TableHead>
              <TableHead> GENDER </TableHead>
              <TableHead class="text-center"> STATUS </TableHead>
              <TableHead class="text-right"> TOTAL PRODUCTS </TableHead>
              <TableHead class="text-center"> ACTIONS </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(faker, index) in fakers.slice(0, 9)" :key="index">
              <TableCell>
                <CheckboxRoot>
                  <CheckboxControl />
                </CheckboxRoot>
              </TableCell>
              <TableCell>
                <div class="flex items-center">
                  <div class="image-fit h-9 w-9">
                    <TooltipRoot>
                      <TooltipTrigger as-child>
                        <img
                          class="rounded-lg shadow-md"
                          :src="faker['images'][0]"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </TooltipTrigger>
                      <TooltipPositioner>
                        <TooltipContent>{{ 'Uploaded at ' + faker['dates'][0] }}</TooltipContent>
                      </TooltipPositioner>
                    </TooltipRoot>
                  </div>
                  <div class="ml-4">
                    <a class="whitespace-nowrap font-medium" href="">
                      {{ faker['users'][0]!['name'] }}
                    </a>
                    <div class="mt-0.5 whitespace-nowrap text-xs opacity-70">
                      {{ faker['users'][0]!['email'] }}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <a class="flex items-center underline decoration-dotted" href="#">
                  {{ stores[index % 3] }}
                </a>
              </TableCell>
              <TableCell>
                <div class="capitalize">{{ faker['users'][0]!['gender'] }}</div>
              </TableCell>
              <TableCell>
                <div
                  class="flex items-center justify-center"
                  :class="faker['trueFalse'][0] ? 'text-success' : 'text-danger'"
                >
                  <Lucide class="mr-2 h-4 w-4" icon="CheckSquare" />
                  {{ faker['trueFalse'][0] ? 'Active' : 'Inactive' }}
                </div>
              </TableCell>
              <TableCell class="text-right"> {{ faker['totals'][0] }} Items </TableCell>
              <TableCell>
                <div class="flex items-center justify-center">
                  <a class="mr-3 flex items-center" href="">
                    <Lucide class="mr-1 h-4 w-4" icon="CheckSquare" />
                    Edit
                  </a>
                  <a
                    class="text-danger flex items-center"
                    href="#"
                    @click.prevent="deleteConfirmationOpen = true"
                  >
                    <Lucide class="mr-1 h-4 w-4" icon="Trash" /> Delete
                  </a>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Pagination -->
      <div class="col-span-12 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
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
