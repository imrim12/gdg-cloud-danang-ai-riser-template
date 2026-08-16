<script lang="ts" setup>
import { CircleGauge } from "lucide-vue-next";
import { Box } from "@/components/ui/box";
import {
  Preview,
  SectionTitle,
  SectionContent,
  PreviewCode,
} from "@/components/docs";
</script>

<template>
<div id="preview" class="-mt-20">
        <Preview>
      <template #preview>
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/box/Box.vue">
          {{ `
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  raised,
  ...props
} = defineProps<
  BoxVariants & {
    class?: string;
    asChild?: boolean;
  }
>();
</script>

<template>
  <Slot
    :class="cn(boxVariants({ raised, className }), className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
              ` }}
        </PreviewCode>
        <PreviewCode title="components/ui/box/index.ts">
          {{ `
export { default as Box } from "./Box.vue";
              ` }}
        </PreviewCode>
        <SectionContent>
          Update the import paths to match your project setup.
        </SectionContent>
      </div>
      <div id="usage">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {{ `
import { Box } from "@/components/ui/box";
              ` }}
        </PreviewCode>
        <PreviewCode>
          {{ `
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
              ` }}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
      <template #preview>
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
        <Preview>
      <template #preview>
<Box raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Box raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
        <Preview>
      <template #preview>
<Box raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Box raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
      </div>
</template>
