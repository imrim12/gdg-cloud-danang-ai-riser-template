<script lang="ts" setup>
import fakers from '@/utils/faker'
import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
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
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from '@/components/ui/tooltip'
</script>

<template>
  <div class="flex flex-col items-center sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">Blog Layout</h2>
    <div class="mt-4 flex w-full sm:mt-0 sm:w-auto">
      <Button look="outline" class="mr-2 shadow-sm" variant="primary"> Add New Post </Button>
      <MenuRoot class="w-auto ml-auto sm:ml-0">
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
            <MenuItem value="share">
              <Lucide class="mr-2 size-4" icon="Share" /> Share Post
            </MenuItem>
            <MenuItem value="download">
              <Lucide class="mr-2 size-4" icon="Download" /> Download Post
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </MenuRoot>
    </div>
  </div>
  <div class="mt-5 grid grid-cols-12 gap-x-6 gap-y-8">
    <!-- BEGIN: Blog Layout -->
    <template v-for="(faker, fakerKey) in fakers.slice(0, 9)" :key="fakerKey">
      <Box class="col-span-12 p-0 md:col-span-6 xl:col-span-4">
        <div class="flex items-center border-b border-foreground/15 px-5 py-4">
          <AvatarRoot class="size-10 rounded-full">
            <AvatarFallback>PA</AvatarFallback>
            <AvatarImage :src="faker.photos[0]" alt="avatar" />
          </AvatarRoot>
          <div class="ml-3 mr-auto">
            <a class="font-medium" href="">
              {{ faker.users[0]?.name }}
            </a>
            <div class="mt-0.5 flex truncate text-xs opacity-70">
              <a class="text-primary inline-block truncate" href="">
                {{ faker.products[0]?.category }}
              </a>
              <span class="mx-1">•</span> {{ faker.formattedTimes[0] }}
            </div>
          </div>
          <MenuRoot class="w-auto ml-3">
            <MenuTrigger as-child>
              <a href="#">
                <Lucide class="size-5 opacity-70" icon="MoreVertical" />
              </a>
            </MenuTrigger>
            <MenuPositioner>
              <MenuContent class="w-40">
                <MenuItem value="edit">
                  <Lucide class="mr-2 size-4" icon="Edit" /> Edit Post
                </MenuItem>
                <MenuItem value="delete">
                  <Lucide class="mr-2 size-4" icon="Trash" /> Delete Post
                </MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
        <div class="p-5">
          <div class="image-fit h-40 2xl:h-56">
            <img
              class="rounded-md"
              :src="faker.images[0]"
              alt="Midone - Tailwind Admin Dashboard Template"
            />
          </div>
          <a class="mt-5 block text-base font-medium" href="">
            {{ faker.news[0]?.title }}
          </a>
          <div class="mt-2 text-foreground/70">
            {{ faker.news[0]?.shortContent }}
          </div>
        </div>
        <div class="flex items-center border-t border-foreground/15 px-5 py-3">
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                class="bg-foreground/5 mr-2 flex size-8 items-center justify-center rounded-full border border-foreground/15"
                href=""
              >
                <Lucide class="size-3" icon="Bookmark" />
              </a>
            </TooltipTrigger>
            <TooltipPositioner>
              <TooltipContent>Bookmark</TooltipContent>
            </TooltipPositioner>
          </TooltipRoot>
          <div class="mr-2 flex">
            <AvatarRoot
              class="bg-background size-8 rounded-full"
              :title="`Uploaded at ${faker.dates[0]}`"
            >
              <AvatarFallback>PA</AvatarFallback>
              <AvatarImage :src="faker.images[0]" alt="avatar" />
            </AvatarRoot>
            <AvatarRoot
              class="bg-background -ml-4 size-8 rounded-full"
              :title="`Uploaded at ${faker.dates[1]}`"
            >
              <AvatarFallback>PA</AvatarFallback>
              <AvatarImage :src="faker.images[1]" alt="avatar" />
            </AvatarRoot>
            <AvatarRoot
              class="bg-background -ml-4 size-8 rounded-full"
              :title="`Uploaded at ${faker.dates[2]}`"
            >
              <AvatarFallback>PA</AvatarFallback>
              <AvatarImage :src="faker.images[2]" alt="avatar" />
            </AvatarRoot>
          </div>
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                class="bg-primary/10 border-primary/20 text-primary ml-auto flex size-8 items-center justify-center rounded-full border"
                href=""
              >
                <Lucide class="size-3" icon="Share" />
              </a>
            </TooltipTrigger>
            <TooltipPositioner>
              <TooltipContent>Share</TooltipContent>
            </TooltipPositioner>
          </TooltipRoot>
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                class="bg-primary ml-2 flex size-8 items-center justify-center rounded-full text-white"
                href=""
              >
                <Lucide class="size-3" icon="Share" />
              </a>
            </TooltipTrigger>
            <TooltipPositioner>
              <TooltipContent>Download PDF</TooltipContent>
            </TooltipPositioner>
          </TooltipRoot>
        </div>
        <div class="border-t border-foreground/15 px-5 pb-5 pt-3">
          <div class="flex w-full text-xs opacity-70 sm:text-sm">
            <div class="mr-2">
              Comments:
              <span class="font-medium">{{ faker.totals[0] }}</span>
            </div>
            <div class="mr-2">
              Views: <span class="font-medium">{{ faker.totals[1] }}k</span>
            </div>
            <div class="ml-auto">
              Likes: <span class="font-medium">{{ faker.totals[2] }}k</span>
            </div>
          </div>
          <div class="mt-3 flex w-full items-center">
            <AvatarRoot class="mr-3 size-10 rounded-full">
              <AvatarFallback>PA</AvatarFallback>
              <AvatarImage :src="faker.photos[0]" alt="avatar" />
            </AvatarRoot>
            <div class="relative flex-1">
              <Input class="rounded-full" type="text" placeholder="Post a comment..." />
              <Lucide
                class="absolute inset-y-0 right-0 my-auto mr-3 size-4 opacity-70"
                icon="Smile"
              />
            </div>
          </div>
        </div>
      </Box>
    </template>
    <!-- END: Blog Layout -->

    <!-- BEGIN: Pagination -->
    <div class="col-span-12 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
      <PaginationRoot
        :count="5000"
        :pageSize="10"
        :siblingCount="2"
        class="w-full sm:mr-auto sm:w-auto"
      >
        <PaginationPrevTrigger>
          <Lucide class="size-4" icon="ChevronLeft" />
        </PaginationPrevTrigger>
        <PaginationContext v-slot="{ pagination }">
          <template v-for="(page, index) in pagination?.pages" :key="index">
            <PaginationItem v-if="page.type === 'page'" v-bind="{ ...page }">
              {{ page.value }}
            </PaginationItem>
            <PaginationEllipsis v-else :index="index" />
          </template>
        </PaginationContext>
        <PaginationNextTrigger>
          <Lucide class="size-4" icon="ChevronRight" />
        </PaginationNextTrigger>
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
</template>
