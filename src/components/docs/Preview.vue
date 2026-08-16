<script lang="ts" setup>
import * as tabs from "@zag-js/tabs";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { computed } from "vue";
import { cn } from "@midoneui/core/utils/cn";

const { class: className } = defineProps<{
  class?: string;
}>();

const service = useMachine(tabs.machine, {
  id: crypto.randomUUID(),
  defaultValue: "preview",
});

const api = computed(() => tabs.connect(service, normalizeProps));
</script>

<template>
  <div class="mt-10" v-bind="api.getRootProps()">
    <div class="flex px-3" v-bind="api.getListProps()">
      <button
        v-bind="api.getTriggerProps({ value: 'preview' })"
        class="px-2.5 opacity-70 cursor-pointer data-[selected]:opacity-100"
      >
        Preview
      </button>
      <button
        v-bind="api.getTriggerProps({ value: 'code' })"
        class="px-2.5 opacity-70 cursor-pointer data-[selected]:opacity-100"
      >
        Code
      </button>
    </div>
    <div
      v-bind="api.getContentProps({ value: 'preview' })"
      :class="
        cn([
          'mt-4 backdrop-blur-md border border-foreground/20 bg-background/50 min-h-100 flex flex-col md:flex-row gap-3 items-center justify-center px-5 py-8 sm:p-8 lg:py-20 lg:px-20',
          className,
        ])
      "
    >
      <slot name="preview" />
    </div>
    <div v-bind="api.getContentProps({ value: 'code' })" class="-mt-4">
      <slot name="code" />
    </div>
  </div>
</template>
