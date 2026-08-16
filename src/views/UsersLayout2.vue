<script lang="ts" setup>
import fakers from '@/utils/faker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Box } from '@/components/ui/box'
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  PaginationContext,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import { Lucide } from '@/components/ui/lucide'
</script>

<template>
  <div>
    <h2 class="text-lg font-medium">Users Layout</h2>
    <div class="mt-5 grid grid-cols-12 gap-x-6 gap-y-8">
      <div class="col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap">
        <Button class="mr-2" look="outline" variant="primary"> Add New User </Button>
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
              <MenuItem value="group">
                <Lucide class="mr-2 h-4 w-4" icon="Users" /> Add Group
              </MenuItem>
              <MenuItem value="message">
                <Lucide class="mr-2 h-4 w-4" icon="MessageCircle" /> Send Message
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
      <!-- BEGIN: Users Layout -->
      <div v-for="(faker, index) in fakers" :key="index" class="col-span-12 md:col-span-6">
        <Box raised="single">
          <div class="flex flex-col items-center lg:flex-row">
            <AvatarRoot class="size-24 bg-background rounded-full lg:mr-1 lg:size-12">
              <AvatarFallback>IM</AvatarFallback>
              <AvatarImage :src="faker['images'][2]" :alt="'Uploaded at ' + faker['dates'][2]" />
            </AvatarRoot>
            <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:mt-0 lg:text-left">
              <a class="font-medium" href="">
                {{ faker['users'][0]!['name'] }}
              </a>
              <div class="mt-0.5 text-xs opacity-70">
                {{ faker['jobs'][0] }}
              </div>
            </div>
            <div class="mt-4 flex lg:mt-0">
              <Button class="mr-2" size="sm" look="outline"> View Profile </Button>
              <Button variant="primary" size="sm"> Message </Button>
            </div>
          </div>
        </Box>
      </div>
      <!-- END: Users Layout -->
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
  </div>
</template>
