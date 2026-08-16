<script lang="ts" setup>
import fakers from '@/utils/faker'
import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Box } from '@/components/ui/box'
import { Lucide } from '@/components/ui/lucide'
import { Textarea } from '@/components/ui/textarea'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from '@/components/ui/tooltip'
</script>

<template>
  <Box class="p-5 xl:w-3/5">
    <!-- BEGIN: Blog Layout -->
    <h2 class="text-xl font-medium sm:text-2xl">
      {{ fakers[0]?.news[0]?.title }}
    </h2>
    <div class="mt-2 text-xs opacity-70 sm:text-sm">
      {{ fakers[0]?.dates[0] }} <span class="mx-1">•</span>
      <a class="text-primary" href="">
        {{ fakers[0]?.products[0]?.category }}
      </a>
      <span class="mx-1">•</span> 7 Min read
    </div>
    <div class="mt-6">
      <div class="image-fit h-[250px]">
        <img
          class="rounded-xl"
          :src="fakers[0]?.images[0]"
          alt="Midone - Tailwind Admin Dashboard Template"
        />
      </div>
    </div>
    <div class="relative flex items-center gap-3 pb-6 pt-16 sm:pt-6">
      <TooltipRoot>
        <TooltipTrigger as-child>
          <a
            class="bg-foreground/5 flex size-8 flex-none items-center justify-center rounded-full border border-foreground/15 sm:size-10"
            href=""
          >
            <Lucide class="size-3" icon="Bookmark" />
          </a>
        </TooltipTrigger>
        <TooltipPositioner>
          <TooltipContent>Bookmark</TooltipContent>
        </TooltipPositioner>
      </TooltipRoot>
      <div class="flex">
        <AvatarRoot
          class="bg-background size-8 sm:size-10 rounded-full"
          :title="`Uploaded at ${fakers[0]?.dates[0]}`"
        >
          <AvatarFallback>PA</AvatarFallback>
          <AvatarImage :src="fakers[0]?.photos[0]" alt="avatar" />
        </AvatarRoot>
        <AvatarRoot
          class="bg-background -ml-4 size-8 sm:size-10 rounded-full"
          :title="`Uploaded at ${fakers[0]?.dates[1]}`"
        >
          <AvatarFallback>PA</AvatarFallback>
          <AvatarImage :src="fakers[0]?.photos[1]" alt="avatar" />
        </AvatarRoot>
        <AvatarRoot
          class="bg-background -ml-4 size-8 sm:size-10 rounded-full"
          :title="`Uploaded at ${fakers[0]?.dates[2]}`"
        >
          <AvatarFallback>PA</AvatarFallback>
          <AvatarImage :src="fakers[0]?.photos[2]" alt="avatar" />
        </AvatarRoot>
      </div>
      <div
        class="absolute -mt-12 flex w-full gap-3 text-xs opacity-70 sm:relative sm:mt-0 sm:text-sm"
      >
        <div class="mr-1">
          Comments:
          <span class="font-medium">{{ fakers[0]?.totals[0] }}</span>
        </div>
        <div class="mr-1">
          Views:
          <span class="font-medium">{{ fakers[0]?.totals[1] }}k</span>
        </div>
        <div class="ml-auto">
          Likes:
          <span class="font-medium">{{ fakers[0]?.totals[2] }}k</span>
        </div>
      </div>
      <TooltipRoot>
        <TooltipTrigger as-child>
          <a
            class="bg-primary/10 border-primary/20 text-primary ml-auto flex size-8 flex-none items-center justify-center rounded-full border sm:size-10"
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
            class="bg-primary -ml-1 flex size-8 flex-none items-center justify-center rounded-full text-white sm:size-10"
            href=""
          >
            <Lucide class="size-3" icon="Download" />
          </a>
        </TooltipTrigger>
        <TooltipPositioner>
          <TooltipContent>Download PDF</TooltipContent>
        </TooltipPositioner>
      </TooltipRoot>
    </div>
    <div class="text-justify indent-8">
      <p class="mb-5">{{ fakers[1]?.news[0]?.content }}</p>
      <p class="mb-5">{{ fakers[2]?.news[0]?.content }}</p>
      <p>{{ fakers[3]?.news[0]?.content }}</p>
    </div>
    <div
      class="mt-5 flex flex-col items-center border-t border-foreground/10 pt-5 text-xs sm:flex-row sm:text-sm"
    >
      <div class="flex items-center">
        <AvatarRoot class="size-12 rounded-full">
          <AvatarFallback>PA</AvatarFallback>
          <AvatarImage :src="fakers[0]?.photos[0]" alt="avatar" />
        </AvatarRoot>
        <div class="ml-3.5 mr-auto">
          <a class="font-medium" href="">
            {{ fakers[0]?.users[0]?.name }}
          </a>
          <div class="mt-0.5 text-xs opacity-70">Senior Frontend Engineer</div>
        </div>
      </div>
      <div class="mt-5 flex items-center gap-2 sm:ml-auto sm:mt-0">
        <div class="mr-1">Share this post:</div>
        <TooltipRoot>
          <TooltipTrigger as-child>
            <a
              class="flex size-8 items-center justify-center rounded-full border border-foreground/15 sm:size-10"
              href=""
            >
              <Lucide class="size-3 fill-current opacity-70" icon="Facebook" />
            </a>
          </TooltipTrigger>
          <TooltipPositioner>
            <TooltipContent>Facebook</TooltipContent>
          </TooltipPositioner>
        </TooltipRoot>
        <TooltipRoot>
          <TooltipTrigger as-child>
            <a
              class="flex size-8 items-center justify-center rounded-full border border-foreground/15 sm:size-10"
              href=""
            >
              <Lucide class="size-3 fill-current opacity-70" icon="Twitter" />
            </a>
          </TooltipTrigger>
          <TooltipPositioner>
            <TooltipContent>Twitter</TooltipContent>
          </TooltipPositioner>
        </TooltipRoot>
        <TooltipRoot>
          <TooltipTrigger as-child>
            <a
              class="flex size-8 items-center justify-center rounded-full border border-foreground/15 sm:size-10"
              href=""
            >
              <Lucide class="size-3 fill-current opacity-70" icon="Linkedin" />
            </a>
          </TooltipTrigger>
          <TooltipPositioner>
            <TooltipContent>Linked In</TooltipContent>
          </TooltipPositioner>
        </TooltipRoot>
      </div>
    </div>
    <!-- END: Blog Layout -->
    <!-- BEGIN: Comments -->
    <div class="mt-5 border-t border-foreground/10 pt-5">
      <div class="text-base font-medium">2 Responses</div>
      <div class="h-18 relative mt-5">
        <Lucide
          class="absolute inset-y-0 left-0 my-auto ml-6 size-5 opacity-50 z-10"
          icon="MessageCircle"
        />
        <Textarea class="min-h-24 pl-16 pt-6" placeholder="Post a comment..."></Textarea>
      </div>
    </div>
    <div class="mt-5 pb-8">
      <div class="pt-5">
        <div class="flex">
          <AvatarRoot class="size-10 sm:size-12 rounded-full">
            <AvatarFallback>PA</AvatarFallback>
            <AvatarImage :src="fakers[0]?.photos[1]" alt="avatar" />
          </AvatarRoot>
          <div class="ml-3.5 flex-1">
            <div class="flex items-center">
              <a class="font-medium" href="">
                {{ fakers[0]?.users[1]?.name }}
              </a>
              <a class="ml-auto text-xs opacity-70" href=""> Reply </a>
            </div>
            <div class="mt-0.5 text-xs opacity-70">
              {{ fakers[0]?.formattedTimes[1] }}
            </div>
            <div class="mt-2">{{ fakers[0]?.news[1]?.shortContent }}</div>
          </div>
        </div>
      </div>
      <div class="mt-5 border-t border-foreground/10 pt-5">
        <div class="flex">
          <AvatarRoot class="size-10 sm:size-12 rounded-full">
            <AvatarFallback>PA</AvatarFallback>
            <AvatarImage :src="fakers[0]?.photos[2]" alt="avatar" />
          </AvatarRoot>
          <div class="ml-3.5 flex-1">
            <div class="flex items-center">
              <a class="font-medium" href="">
                {{ fakers[0]?.users[2]?.name }}
              </a>
              <a class="ml-auto text-xs opacity-70" href=""> Reply </a>
            </div>
            <div class="mt-0.5 text-xs opacity-70">
              {{ fakers[0]?.formattedTimes[2] }}
            </div>
            <div class="mt-2">{{ fakers[0]?.news[2]?.shortContent }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Comments -->
  </Box>
</template>
