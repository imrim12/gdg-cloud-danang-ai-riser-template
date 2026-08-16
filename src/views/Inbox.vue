<script lang="ts" setup>
import fakers from '@/utils/faker'
import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { CheckboxRoot, CheckboxControl } from '@/components/ui/checkbox'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Lucide } from '@/components/ui/lucide'
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPositioner,
  PopoverContent,
} from '@/components/ui/popover'
</script>

<template>
  <div class="mt-8 grid grid-cols-10 gap-6">
    <div class="col-span-10 lg:col-span-2">
      <h2 class="mr-auto mt-2 text-lg font-medium">Inbox</h2>
      <!-- BEGIN: Inbox Menu -->
      <Box class="mt-6">
        <Button class="w-full" type="button" variant="primary">
          <Lucide class="size-4" icon="Edit" /> Compose
        </Button>
        <div class="mt-6 flex flex-col gap-2 border-t border-dashed border-foreground/[.08] pt-5">
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 active flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Mail" /> Inbox
            <Badge class="ms-auto" look="outline" variant="warning"> 214 </Badge>
          </a>
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Star" /> Marked
          </a>
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Inbox" /> Draft
            <Badge class="ms-auto" look="outline" variant="warning"> 21 </Badge>
          </a>
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Send" /> Sent
          </a>
          <a
            class="[&.active]:bg-foreground/5 [&.active]:border-foreground/10 flex items-center rounded-md border border-transparent px-3 py-2"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Trash" /> Trash
          </a>
        </div>
        <div class="mt-4 border-t border-dashed border-foreground/[.08] pt-4">
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
      <!-- END: Inbox Menu -->
    </div>
    <div class="col-span-10 lg:col-span-8">
      <!-- BEGIN: Inbox Filter -->
      <div class="flex flex-col-reverse items-center sm:flex-row">
        <div class="relative mr-auto mt-3 w-full sm:mt-0 sm:w-auto">
          <Lucide
            class="absolute inset-y-0 left-0 z-10 my-auto ml-3 size-4 opacity-70"
            icon="Search"
          />
          <Input class="w-full px-10 sm:w-64" type="text" placeholder="Search mail" />
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
                    <FieldLabel class="text-xs" for="input-filter-1">From</FieldLabel>
                    <Input id="input-filter-1" type="text" placeholder="example@gmail.com" />
                  </Field>
                  <Field class="col-span-6">
                    <FieldLabel class="text-xs" for="input-filter-2">To</FieldLabel>
                    <Input id="input-filter-2" type="text" placeholder="example@gmail.com" />
                  </Field>
                  <Field class="col-span-6">
                    <FieldLabel class="text-xs" for="input-filter-3">Subject</FieldLabel>
                    <Input id="input-filter-3" type="text" placeholder="Important Meeting" />
                  </Field>
                  <Field class="col-span-6">
                    <FieldLabel class="text-xs" for="input-filter-4">Has the Words</FieldLabel>
                    <Input id="input-filter-4" type="text" placeholder="Job, Work, Documentation" />
                  </Field>
                  <Field class="col-span-6">
                    <FieldLabel class="text-xs" for="input-filter-5">Doesn't Have</FieldLabel>
                    <Input id="input-filter-5" type="text" placeholder="Job, Work, Documentation" />
                  </Field>
                  <Field class="col-span-6">
                    <FieldLabel class="text-xs" for="input-filter-6">Size</FieldLabel>
                    <NativeSelect id="input-filter-6">
                      <NativeSelectOption value="10">10</NativeSelectOption>
                      <NativeSelectOption value="25">25</NativeSelectOption>
                      <NativeSelectOption value="35">35</NativeSelectOption>
                      <NativeSelectOption value="50">50</NativeSelectOption>
                    </NativeSelect>
                  </Field>
                  <div class="col-span-12 mt-3 flex items-center">
                    <Button look="outline" variant="secondary" class="ml-auto w-32">
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
          <Button class="mr-2" look="outline" variant="primary"> Start a Video Call </Button>
          <MenuRoot class="w-auto">
            <MenuTrigger as-child>
              <Box class="px-2" as-child>
                <Button variant="ghost" class="box flex items-center">
                  <span class="flex size-5 items-center justify-center">
                    <Lucide class="h-4 w-4" icon="Plus" />
                  </span>
                </Button>
              </Box>
            </MenuTrigger>
            <MenuPositioner>
              <MenuContent class="w-40">
                <MenuItem value="contacts">
                  <Lucide class="mr-2 h-4 w-4" icon="User" /> Contacts
                </MenuItem>
                <MenuItem value="settings">
                  <Lucide class="mr-2 h-4 w-4" icon="Settings" /> Settings
                </MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
      </div>
      <!-- END: Inbox Filter -->
      <!-- BEGIN: Inbox Content -->
      <Box class="mt-5 p-0">
        <div
          class="flex flex-col-reverse border-b border-foreground/15 px-5 py-6 opacity-70 sm:flex-row"
        >
          <div
            class="-mx-5 mt-3 flex items-center border-t border-foreground/15 px-5 pt-5 sm:mx-0 sm:mt-0 sm:border-0 sm:px-0 sm:pt-0"
          >
            <CheckboxRoot>
              <CheckboxControl />
            </CheckboxRoot>
            <MenuRoot class="ml-1" :positioning="{ placement: 'bottom-start' }">
              <MenuTrigger as-child>
                <a class="block size-5" href="#">
                  <Lucide class="size-5" icon="ChevronDown" />
                </a>
              </MenuTrigger>
              <MenuPositioner>
                <MenuContent class="w-32">
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="read">Read</MenuItem>
                  <MenuItem value="unread">Unread</MenuItem>
                  <MenuItem value="starred">Starred</MenuItem>
                  <MenuItem value="unstarred">Unstarred</MenuItem>
                </MenuContent>
              </MenuPositioner>
            </MenuRoot>
            <a class="ml-5 flex size-5 items-center justify-center" href="#">
              <Lucide class="size-4" icon="RefreshCw" />
            </a>
            <a class="ml-5 flex size-5 items-center justify-center" href="#">
              <Lucide class="size-4" icon="MoreHorizontal" />
            </a>
          </div>
          <div class="flex items-center sm:ml-auto">
            <div>1 - 50 of 5,238</div>
            <a class="ml-5 flex size-5 items-center justify-center" href="#">
              <Lucide class="size-4" icon="ChevronLeft" />
            </a>
            <a class="ml-5 flex size-5 items-center justify-center" href="#">
              <Lucide class="size-4" icon="ChevronRight" />
            </a>
            <a class="ml-5 flex size-5 items-center justify-center" href="#">
              <Lucide class="size-4" icon="Settings" />
            </a>
          </div>
        </div>
        <div class="overflow-x-auto sm:overflow-x-visible">
          <div
            v-for="(faker, index) in fakers"
            :key="index"
            :class="[
              'transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-foreground/[.08] mx-px',
              'hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded',
              !faker['trueFalse'][0] ? 'bg-foreground/5 opacity-90' : 'bg-background',
            ]"
          >
            <div class="flex px-5 py-3.5">
              <div class="mr-5 flex w-72 flex-none items-center">
                <CheckboxRoot>
                  <CheckboxControl />
                </CheckboxRoot>
                <a
                  class="ml-4 flex size-5 flex-none items-center justify-center opacity-60"
                  href="#"
                >
                  <Lucide class="size-4" icon="Star" />
                </a>
                <a
                  class="ml-2 flex size-5 flex-none items-center justify-center opacity-60"
                  href="#"
                >
                  <Lucide class="size-4" icon="Bookmark" />
                </a>
                <AvatarRoot class="ml-5 size-7 rounded-full">
                  <AvatarFallback>{{ faker['users'][0]!['name'].substring(0, 2) }}</AvatarFallback>
                  <AvatarImage :src="faker['photos'][0]" :alt="faker['users'][0]!['name']" />
                </AvatarRoot>
                <div :class="['ml-3 truncate', { 'font-medium': faker['trueFalse'][0] }]">
                  {{ faker['users'][0]!['name'] }}
                </div>
              </div>
              <div class="w-64 truncate sm:w-auto">
                <span :class="['ml-3 truncate', { 'font-medium': faker['trueFalse'][0] }]">
                  {{ faker['news'][0]!['superShortContent'] }}
                </span>
                {{ faker['news'][0]!['shortContent'] }}
              </div>
              <div
                :class="[
                  'pl-10 ml-auto whitespace-nowrap',
                  { 'font-medium': faker['trueFalse'][0] },
                ]"
              >
                {{ faker['times'][0] }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-center px-5 py-6 text-center opacity-70 sm:flex-row sm:text-left"
        >
          <div>4.41 GB (25%) of 17 GB used Manage</div>
          <div class="mt-2 sm:ml-auto sm:mt-0">Last account activity: 36 minutes ago</div>
        </div>
      </Box>
      <!-- END: Inbox Content -->
    </div>
  </div>
</template>
