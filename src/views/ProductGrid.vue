<script lang="ts" setup>
import { ref } from 'vue'
import fakers from '@/utils/faker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
    <h2 class="text-lg font-medium">Product List</h2>
    <div class="mt-5 grid grid-cols-12 gap-x-6 gap-y-8">
      <div class="col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap">
        <Button class="mr-2" look="outline" variant="primary"> Add New Product </Button>
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
        <div class="mx-auto hidden opacity-70 md:block">Showing 1 to 10 of 150 entries</div>
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative w-56">
            <Input class="w-56 pr-10" type="text" placeholder="Search..." />
            <Lucide class="absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4" icon="Search" />
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div
        v-for="(faker, index) in fakers.slice(0, 12)"
        :key="index"
        class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
      >
        <Box class="p-0">
          <div class="p-5">
            <div
              class="image-fit h-40 overflow-hidden rounded-lg before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black before:to-black/10 2xl:h-56"
            >
              <img
                class="rounded-lg"
                :src="faker['images'][0]"
                alt="Midone - Tailwind Admin Dashboard Template"
              />
              <Badge
                v-if="faker['trueFalse'][0]"
                class="absolute top-0 z-10 m-5"
                look="outline"
                variant="pending"
              >
                Featured
              </Badge>
              <div class="absolute bottom-0 z-10 px-5 pb-6 text-white">
                <a class="block text-base font-medium" href="">
                  {{ faker['products'][0]!['name'] }}
                </a>
                <span class="mt-3 text-xs opacity-70">
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
                Status:
                {{ faker['trueFalse'][0] ? 'Active' : 'Inactive' }}
              </div>
            </div>
          </div>
          <div
            class="flex items-center justify-center border-t border-foreground/[0.08] p-5 lg:justify-end"
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
