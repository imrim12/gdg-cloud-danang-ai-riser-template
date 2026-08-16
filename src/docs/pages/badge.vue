<script lang="ts" setup>
import { ChevronDown, CheckSquare } from "lucide-vue-next";
import { Badge } from "@/components/ui/badge";
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
<Badge variant="primary">12%</Badge>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Badge variant="primary">12%</Badge>
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
        <PreviewCode title="components/ui/badge/Badge.vue">
          {{ `
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  badgeVariants,
  type BadgeVariants,
} from "@midoneui/core/styles/badge.styles";

const {
  class: className,
  look,
  variant,
  content,
  ...props
} = defineProps<
  BadgeVariants & {
    class?: string;
    content?: string;
  }
>();
</script>

<template>
  <TooltipRoot :disabled="!content">
    <TooltipTrigger as-child>
      <span
        :class="cn(badgeVariants({ look, variant, className }))"
        v-bind="{ ...props, ...$attrs }"
      >
        <slot />
      </span>
    </TooltipTrigger>
    <TooltipPositioner>
      <TooltipContent>\{\{ content \}\}</TooltipContent>
    </TooltipPositioner>
  </TooltipRoot>
</template>
              ` }}
        </PreviewCode>
        <PreviewCode title="components/ui/badge/index.ts">
          {{ `
export { default as Badge } from "./Badge.vue";
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
import { Badge } from "@/components/ui/badge";
              ` }}
        </PreviewCode>
        <PreviewCode>
          {{ `
<Badge>12%</Badge>
              ` }}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
      <template #preview>
<Badge variant="primary">12%</Badge>
<Badge variant="secondary">12%</Badge>
<Badge variant="success">12%</Badge>
<Badge variant="danger">12%</Badge>
<Badge variant="pending">12%</Badge>
<Badge variant="warning">12%</Badge>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Badge variant="primary">12%</Badge>
<Badge variant="secondary">12%</Badge>
<Badge variant="success">12%</Badge>
<Badge variant="danger">12%</Badge>
<Badge variant="pending">12%</Badge>
<Badge variant="warning">12%</Badge>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
        <Preview>
      <template #preview>
<Badge variant="primary"> 12% <ChevronDown /> </Badge>
<Badge variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge variant="success"> 12% <ChevronDown /> </Badge>
<Badge variant="danger"> 12% <ChevronDown /> </Badge>
<Badge variant="pending"> 12% <ChevronDown /> </Badge>
<Badge variant="warning"> 12% <ChevronDown /> </Badge>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Badge variant="primary"> 12% <ChevronDown /> </Badge>
<Badge variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge variant="success"> 12% <ChevronDown /> </Badge>
<Badge variant="danger"> 12% <ChevronDown /> </Badge>
<Badge variant="pending"> 12% <ChevronDown /> </Badge>
<Badge variant="warning"> 12% <ChevronDown /> </Badge>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
        <Preview>
      <template #preview>
<Badge look="outline" variant="primary"> 12% </Badge>
<Badge look="outline" variant="secondary"> 12% </Badge>
<Badge look="outline" variant="success"> 12% </Badge>
<Badge look="outline" variant="danger"> 12% </Badge>
<Badge look="outline" variant="pending"> 12% </Badge>
<Badge look="outline" variant="warning"> 12% </Badge>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Badge look="outline" variant="primary"> 12% </Badge>
<Badge look="outline" variant="secondary"> 12% </Badge>
<Badge look="outline" variant="success"> 12% </Badge>
<Badge look="outline" variant="danger"> 12% </Badge>
<Badge look="outline" variant="pending"> 12% </Badge>
<Badge look="outline" variant="warning"> 12% </Badge>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
        <Preview>
      <template #preview>
<Badge look="outline" variant="primary"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="success"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="danger"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="pending"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="warning"> 12% <ChevronDown /> </Badge>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Badge look="outline" variant="primary"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="success"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="danger"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="pending"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="warning"> 12% <ChevronDown /> </Badge>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
        <Preview>
      <template #preview>
<Badge look="filled" variant="primary"> 12% </Badge>
<Badge look="filled" variant="secondary"> 12% </Badge>
<Badge look="filled" variant="success"> 12% </Badge>
<Badge look="filled" variant="danger"> 12% </Badge>
<Badge look="filled" variant="pending"> 12% </Badge>
<Badge look="filled" variant="warning"> 12% </Badge>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Badge look="filled" variant="primary"> 12% </Badge>
<Badge look="filled" variant="secondary"> 12% </Badge>
<Badge look="filled" variant="success"> 12% </Badge>
<Badge look="filled" variant="danger"> 12% </Badge>
<Badge look="filled" variant="pending"> 12% </Badge>
<Badge look="filled" variant="warning"> 12% </Badge>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
        <Preview>
      <template #preview>
<Badge look="filled" variant="primary"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="success"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="danger"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="pending"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="warning"> 12% <ChevronDown /> </Badge>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Badge look="filled" variant="primary"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="success"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="danger"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="pending"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="warning"> 12% <ChevronDown /> </Badge>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
        <Preview>
      <template #preview>
<Badge look="outline" variant="primary" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="secondary" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="success" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="danger" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="pending" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="warning" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
      </template>
      <template #code>
<PreviewCode>
                {{ `
<Badge look="outline" variant="primary" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="secondary" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="success" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="danger" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="pending" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="warning" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
                ` }}
              </PreviewCode>
      </template>
    </Preview>
      </div>
</template>
