<script lang="ts" setup>
import fakers from '@/utils/faker'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { CheckboxRoot, CheckboxControl } from '@/components/ui/checkbox'
import { Field, FieldLabel } from '@/components/ui/field'
import { FileIcon } from '@/components/ui/file-icon'
import { Input } from '@/components/ui/input'
import { Lucide } from '@/components/ui/lucide'
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
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPositioner,
  PopoverContent,
} from '@/components/ui/popover'
</script>

<template>
  <div class="grid grid-cols-10 gap-6">
    <div class="col-span-10 lg:col-span-2">
      <h2 class="mr-auto mt-2 text-lg font-medium">File Manager</h2>
      <!-- BEGIN: File Manager Menu -->
      <Box class="mt-6">
        <div class="flex flex-col gap-2">
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 active flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Image" /> Images
            <Badge variant="warning" look="outline" class="ms-auto">412</Badge>
          </a>
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Video" /> Videos
          </a>
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="File" /> Documents
            <Badge variant="warning" look="outline" class="ms-auto">34</Badge>
          </a>
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Users" /> Shared
          </a>
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Trash" /> Trash
          </a>
        </div>
        <div class="mt-4 border-t border-foreground/15 pt-4">
          <a class="flex items-center truncate px-3 py-2" href="">
            <div
              class="bg-(--color)/20 border-(--color)/60 me-3 mr-3 h-2 w-2 rounded-full border [--color:var(--color-pending)]"
            ></div>
            Custom Work
          </a>
          <a class="mt-2 flex items-center truncate rounded-md px-3 py-2" href="">
            <div
              class="bg-(--color)/20 border-(--color)/60 me-3 mr-3 h-2 w-2 rounded-full border [--color:var(--color-success)]"
            ></div>
            Important Meetings
          </a>
          <a class="mt-2 flex items-center truncate rounded-md px-3 py-2" href="">
            <div
              class="bg-(--color)/20 border-(--color)/60 me-3 mr-3 h-2 w-2 rounded-full border [--color:var(--color-warning)]"
            ></div>
            Work
          </a>
          <a class="mt-2 flex items-center truncate rounded-md px-3 py-2" href="">
            <div
              class="bg-(--color)/20 border-(--color)/60 me-3 mr-3 h-2 w-2 rounded-full border [--color:var(--color-pending)]"
            ></div>
            Design
          </a>
          <a class="mt-2 flex items-center truncate rounded-md px-3 py-2" href="">
            <div
              class="bg-(--color)/20 border-(--color)/60 me-3 mr-3 h-2 w-2 rounded-full border [--color:var(--color-danger)]"
            ></div>
            Next Week
          </a>
          <a class="mt-2 flex items-center truncate rounded-md px-3 py-2" href="">
            <Lucide class="mr-2 size-4" icon="Plus" /> Add New Label
          </a>
        </div>
      </Box>
      <!-- END: File Manager Menu -->
    </div>
    <div class="col-span-10 lg:col-span-8">
      <!-- BEGIN: File Manager Filter -->
      <div class="flex flex-col-reverse items-center sm:flex-row">
        <div class="relative mr-auto mt-3 w-full sm:mt-0 sm:w-auto">
          <Lucide
            class="absolute inset-y-0 left-0 z-10 my-auto ml-3 size-4 opacity-70"
            icon="Search"
          />
          <Input class="box w-full px-10 sm:w-64" type="text" placeholder="Search files" />
          <PopoverRoot>
            <PopoverTrigger as-child>
              <a class="absolute inset-y-0 right-0 mr-3 flex items-center" href="#">
                <Lucide class="size-4 cursor-pointer opacity-70" icon="ChevronDown" />
              </a>
            </PopoverTrigger>
            <PopoverPositioner>
              <PopoverContent class="ml-2 w-[30rem]">
                <div class="grid grid-cols-12 gap-4 gap-y-3 p-3">
                  <Field class="col-span-6">
                    <FieldLabel class="text-xs" for="input-filter-1">File Name</FieldLabel>
                    <Input id="input-filter-1" type="text" placeholder="Type the file name" />
                  </Field>
                  <Field class="col-span-6">
                    <FieldLabel class="text-xs" for="input-filter-2">Shared With</FieldLabel>
                    <Input id="input-filter-2" type="text" placeholder="example@gmail.com" />
                  </Field>
                  <Field class="col-span-6">
                    <FieldLabel class="text-xs" for="input-filter-3">Created At</FieldLabel>
                    <Input id="input-filter-3" type="text" placeholder="Important Meeting" />
                  </Field>
                  <Field class="col-span-6">
                    <FieldLabel class="text-xs" for="input-filter-4">Size</FieldLabel>
                    <NativeSelect id="input-filter-4">
                      <NativeSelectOption>10</NativeSelectOption>
                      <NativeSelectOption>25</NativeSelectOption>
                      <NativeSelectOption>35</NativeSelectOption>
                      <NativeSelectOption>50</NativeSelectOption>
                    </NativeSelect>
                  </Field>
                  <div class="col-span-12 mt-3 flex items-center">
                    <Button class="ml-auto w-32" look="outline" variant="secondary">
                      Create Filter
                    </Button>
                    <Button class="ml-2 w-32" variant="primary"> Search </Button>
                  </div>
                </div>
              </PopoverContent>
            </PopoverPositioner>
          </PopoverRoot>
        </div>
        <div class="flex w-full sm:w-auto">
          <Button class="box mr-2" look="outline" variant="primary"> Upload New Files </Button>
          <MenuRoot class="w-auto">
            <MenuTrigger as-child>
              <Box as-child>
                <Button variant="ghost" class="box flex items-center px-2">
                  <span class="flex size-5 items-center justify-center">
                    <Lucide class="size-4" icon="Plus" />
                  </span>
                </Button>
              </Box>
            </MenuTrigger>
            <MenuPositioner>
              <MenuContent class="w-40">
                <MenuItem value="share">
                  <Lucide class="mr-2 size-4" icon="File" /> Share Files
                </MenuItem>
                <MenuItem value="settings">
                  <Lucide class="mr-2 size-4" icon="Settings" /> Settings
                </MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
      </div>
      <!-- END: File Manager Filter -->
      <!-- BEGIN: Directory & Files -->
      <div class="mt-5 grid grid-cols-2 gap-3 gap-y-8 sm:gap-x-5 md:grid-cols-4 lg:grid-cols-5">
        <div v-for="(faker, fakerKey) in fakers" :key="fakerKey">
          <Box class="relative rounded-md px-3 pb-5 pt-8 sm:px-5">
            <div class="absolute left-0 top-0 ml-3 mt-3">
              <CheckboxRoot :checked="faker.trueFalse[0]">
                <CheckboxControl />
              </CheckboxRoot>
            </div>
            <FileIcon
              v-if="faker.files[0]!.type === 'Empty Folder'"
              class="mx-auto w-3/5"
              variant="empty-directory"
            />
            <FileIcon
              v-else-if="faker.files[0]!.type === 'Folder'"
              class="mx-auto w-3/5"
              variant="directory"
            />
            <FileIcon
              v-else-if="faker.files[0]!.type === 'Image'"
              class="mx-auto w-3/5"
              :src="faker.files[0]!.fileName"
              variant="image"
            />
            <FileIcon v-else class="mx-auto w-3/5" :type="faker.files[0]!.type" variant="file" />
            <a class="mt-4 block truncate text-center font-medium" href="">
              {{ faker.files[0]!.fileName.split('/').pop() }}
            </a>
            <div class="mt-0.5 text-center text-xs opacity-70">
              {{ faker.files[0]!.size }}
            </div>
            <MenuRoot class="absolute right-0 top-0 ml-auto mr-2 mt-3 w-auto">
              <MenuTrigger as-child>
                <a class="block size-4" href="#">
                  <Lucide class="size-4 opacity-70" icon="MoreVertical" />
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
          </Box>
        </div>
      </div>
      <!-- END: Directory & Files -->
      <!-- BEGIN: Pagination -->
      <div class="mt-6 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
        <PaginationRoot
          :count="5000"
          :pageSize="10"
          :siblingCount="2"
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
        <NativeSelect class="box mt-3 w-20 sm:mt-0">
          <NativeSelectOption>10</NativeSelectOption>
          <NativeSelectOption>25</NativeSelectOption>
          <NativeSelectOption>35</NativeSelectOption>
          <NativeSelectOption>50</NativeSelectOption>
        </NativeSelect>
      </div>
      <!-- END: Pagination -->
    </div>
  </div>
</template>
