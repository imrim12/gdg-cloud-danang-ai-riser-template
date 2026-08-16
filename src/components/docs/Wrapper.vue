<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
</script>

<template>
  <div
    :class="
      cn([
        'p-7 sm:p-10 lg:px-20 lg:py-14 sm:mx-10 lg:ml-0 xl:mr-0 col-span-10 xl:col-span-8 border-x sm:border-y border-foreground/20 bg-background/50 mb-10 relative',
        'before:absolute before:inset-0 before:bg-background/50 before:z-[-1]',
      ])
    "
  >
    <div
      class="after:bg-accent after:bg-center after:bg-no-repeat after:fixed after:size-[50rem] after:inset-x-0 after:mx-auto after:top-0 after:blur-2xl dark:after:opacity-50"
    >
      <div class="z-50 relative">
        <slot />
      </div>
    </div>
  </div>
</template>
