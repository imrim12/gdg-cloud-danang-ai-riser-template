<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";

const model = defineModel<string | number>();

const {
  class: className,
  type,
  ...props
} = defineProps<{
  class?: HTMLAttributes['class'];
  type?: string;
}>();
</script>

<template>
  <input
    v-model="model"
    :type="type"
    :class="cn(input, className)"
    v-bind="{ ...props }"
  />
</template>
