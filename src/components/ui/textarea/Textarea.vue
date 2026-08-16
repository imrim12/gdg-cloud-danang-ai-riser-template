<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { textarea } from "@midoneui/core/styles/textarea.styles";

const model = defineModel<string | number>();

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <textarea v-model="model" :class="cn(textarea, className)" v-bind="{ ...props }" />
</template>
