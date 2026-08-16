<script lang="ts" setup>
import { twMerge } from "tailwind-merge";

const { class: className } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <p :class="twMerge(['mt-2 opacity-70', className])">
    <slot />
  </p>
</template>
