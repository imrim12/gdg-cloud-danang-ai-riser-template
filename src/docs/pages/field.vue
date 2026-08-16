<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
    CheckboxRoot,
    CheckboxLabel,
    CheckboxControl,
} from "@/components/ui/checkbox";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
    FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    SelectRoot,
    SelectControl,
    SelectTrigger,
    SelectValueText,
    SelectContent,
    SelectItemGroup,
    SelectItemGroupLabel,
    SelectItem,
    SelectItemText,
} from "@/components/ui/select";
import * as select from "@zag-js/select";
import { Textarea } from "@/components/ui/textarea";
import {
    RadioGroupRoot,
    RadioGroupItem,
    RadioGroupItemControl,
} from "@/components/ui/radio-group";
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
<div class="w-full max-w-md">                                
<form>
  <FieldGroup>
    <FieldSet>
      <FieldLegend>Payment Method</FieldLegend>
      <FieldDescription>
        All transactions are secure and encrypted
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel for="card-name">Name on Card</FieldLabel>
          <Input id="card-name" placeholder="Evil Rabbit" required />
        </Field>
        <Field>
          <FieldLabel for="card-number">Card Number</FieldLabel>
          <Input id="card-number" placeholder="1234 5678 9012 3456" required />
          <FieldDescription>Enter your 16-digit card number</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
    <FieldSeparator />
    <FieldSet>
      <FieldLegend>Billing Address</FieldLegend>
      <FieldDescription>
        The billing address associated with your payment method
      </FieldDescription>
      <CheckboxRoot>
        <CheckboxControl />
        <CheckboxLabel class="font-normal">
          Same as shipping address
        </CheckboxLabel>
      </CheckboxRoot>
    </FieldSet>
    <Field orientation="horizontal">
      <Button look="outline" type="submit">Submit</Button>
      <Button type="button">Cancel</Button>
    </Field>
  </FieldGroup>
</form>
</div>
      </template>
      <template #code>
<PreviewCode>
                                {{ `
<div class="w-full max-w-md">                                
<form>
  <FieldGroup>
    <FieldSet>
      <FieldLegend>Payment Method</FieldLegend>
      <FieldDescription>
        All transactions are secure and encrypted
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel for="card-name">Name on Card</FieldLabel>
          <Input id="card-name" placeholder="Evil Rabbit" required />
        </Field>
        <Field>
          <FieldLabel for="card-number">Card Number</FieldLabel>
          <Input id="card-number" placeholder="1234 5678 9012 3456" required />
          <FieldDescription>Enter your 16-digit card number</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
    <FieldSeparator />
    <FieldSet>
      <FieldLegend>Billing Address</FieldLegend>
      <FieldDescription>
        The billing address associated with your payment method
      </FieldDescription>
      <CheckboxRoot>
        <CheckboxControl />
        <CheckboxLabel class="font-normal">
          Same as shipping address
        </CheckboxLabel>
      </CheckboxRoot>
    </FieldSet>
    <Field orientation="horizontal">
      <Button look="outline" type="submit">Submit</Button>
      <Button type="button">Cancel</Button>
    </Field>
  </FieldGroup>
</form>
</div>
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
                <PreviewCode title="components/ui/field/Field.vue">
                    {{ `
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  fieldVariants,
  type FieldVariants,
} from "@midoneui/core/styles/field.styles";

const {
  class: className,
  orientation = "vertical",
  ...props
} = defineProps<
  FieldVariants & {
    class?: string;
  }
>();
</script>

<template>
  <div
    role="group"
    data-part="field"
    :data-orientation="orientation"
    :class="cn(fieldVariants({ orientation }), className)"
    v-bind="{ ...props }"
  >
    <slot />
  </div>
</template>
          ` }}
                </PreviewCode>
                <PreviewCode title="components/ui/field/FieldContent.vue">
                    {{ `
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldContent } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    data-part="field-content"
    :class="cn(fieldContent, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </div>
</template>
          ` }}
                </PreviewCode>
                <PreviewCode title="components/ui/field/FieldDescription.vue">
                    {{ `
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldDescription } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <p
    data-part="field-description"
    :class="cn(fieldDescription, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </p>
</template>
          ` }}
                </PreviewCode>
                <PreviewCode title="components/ui/field/FieldLabel.vue">
                    {{ `
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { Label } from "@/components/ui/label";
import { fieldLabel } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <Label
    data-part="field-label"
    :class="cn(fieldLabel, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </Label>
</template>
          ` }}
                </PreviewCode>
                <PreviewCode title="components/ui/field/FieldSeparator.vue">
                    {{ `
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldSeparator } from "@midoneui/core/styles/field.styles";
import { Separator } from "@/components/ui/separator";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    data-part="field-separator"
    :data-content="!!$slots.default"
    :class="cn(fieldSeparator, className)"
    v-bind="{ ...props }"
  >
    <Separator class="absolute inset-0 top-1/2" />
    <span v-if="$slots.default" data-part="field-separator-content">
      <slot />
    </span>
  </div>
</template>
          ` }}
                </PreviewCode>
                <PreviewCode title="components/ui/field/index.ts">
                    {{ `
export { default as Field } from "./Field.vue";
export { default as FieldContent } from "./FieldContent.vue";
export { default as FieldDescription } from "./FieldDescription.vue";
export { default as FieldError } from "./FieldError.vue";
export { default as FieldGroup } from "./FieldGroup.vue";
export { default as FieldLabel } from "./FieldLabel.vue";
export { default as FieldLegend } from "./FieldLegend.vue";
export { default as FieldSeparator } from "./FieldSeparator.vue";
export { default as FieldSet } from "./FieldSet.vue";
export { default as FieldTitle } from "./FieldTitle.vue";
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
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
          ` }}
                </PreviewCode>
                <PreviewCode>
                    {{ `
<Field>
  <FieldLabel for="email">Email</FieldLabel>
  <Input id="email" placeholder="Enter your email" />
  <FieldDescription>We'll never share your email.</FieldDescription>
</Field>
          ` }}
                </PreviewCode>
            </div>
            <div id="variants">
                <SectionTitle>Variants</SectionTitle>
                <SectionContent>A collection of components you can use.</SectionContent>
                <Preview>
      <template #preview>
<form>
  <FieldGroup>
    <FieldSet>
      <FieldLegend>Payment Method</FieldLegend>
      <FieldDescription>
        All transactions are secure and encrypted
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel for="card-name">Name on Card</FieldLabel>
          <Input id="card-name" placeholder="Evil Rabbit" required />
        </Field>
        <Field>
          <FieldLabel for="card-number">Card Number</FieldLabel>
          <Input id="card-number" placeholder="1234 5678 9012 3456" required />
          <FieldDescription>Enter your 16-digit card number</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
    <FieldSeparator />
    <FieldSet>
      <FieldLegend>Billing Address</FieldLegend>
      <FieldDescription>
        The billing address associated with your payment method
      </FieldDescription>
      <CheckboxRoot>
        <CheckboxControl />
        <CheckboxLabel class="font-normal">
          Same as shipping address
        </CheckboxLabel>
      </CheckboxRoot>
    </FieldSet>
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel for="comments">Comments</FieldLabel>
          <Textarea
            id="comments"
            placeholder="Add any additional comments"
            class="resize-none"
          />
        </Field>
      </FieldGroup>
    </FieldSet>
    <Field orientation="horizontal">
      <Button look="outline" type="submit">Submit</Button>
      <Button type="button">Cancel</Button>
    </Field>
  </FieldGroup>
</form>
      </template>
      <template #code>
<PreviewCode>
                                {{ `
<form>
  <FieldGroup>
    <FieldSet>
      <FieldLegend>Payment Method</FieldLegend>
      <FieldDescription>
        All transactions are secure and encrypted
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel for="card-name">Name on Card</FieldLabel>
          <Input id="card-name" placeholder="Evil Rabbit" required />
        </Field>
        <Field>
          <FieldLabel for="card-number">Card Number</FieldLabel>
          <Input id="card-number" placeholder="1234 5678 9012 3456" required />
          <FieldDescription>Enter your 16-digit card number</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
    <FieldSeparator />
    <FieldSet>
      <FieldLegend>Billing Address</FieldLegend>
      <FieldDescription>
        The billing address associated with your payment method
      </FieldDescription>
      <CheckboxRoot>
        <CheckboxControl />
        <CheckboxLabel class="font-normal">
          Same as shipping address
        </CheckboxLabel>
      </CheckboxRoot>
    </FieldSet>
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel for="comments">Comments</FieldLabel>
          <Textarea
            id="comments"
            placeholder="Add any additional comments"
            class="resize-none"
          />
        </Field>
      </FieldGroup>
    </FieldSet>
    <Field orientation="horizontal">
      <Button look="outline" type="submit">Submit</Button>
      <Button type="button">Cancel</Button>
    </Field>
  </FieldGroup>
</form>
                ` }}
                            </PreviewCode>
      </template>
    </Preview>
                <Preview>
      <template #preview>
<FieldGroup class="w-full max-w-xs">
  <FieldSet>
    <FieldLegend variant="label">Compute Environment</FieldLegend>
    <FieldDescription>
      Select the compute environment for your cluster.
    </FieldDescription>
    <RadioGroupRoot defaultValue="React">
      <FieldLabel>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Kubernetes</FieldTitle>
            <FieldDescription>
              Run GPU workloads on a K8s cluster.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="React">
            <RadioGroupItemControl />
          </RadioGroupItem>
        </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Virtual Machine</FieldTitle>
            <FieldDescription>
              Access a cluster to run GPU workloads.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="Solid">
            <RadioGroupItemControl />
          </RadioGroupItem>
        </Field>
      </FieldLabel>
    </RadioGroupRoot>
  </FieldSet>
</FieldGroup>
      </template>
      <template #code>
<PreviewCode>
                                {{ `
<FieldGroup class="w-full max-w-xs">
  <FieldSet>
    <FieldLegend variant="label">Compute Environment</FieldLegend>
    <FieldDescription>
      Select the compute environment for your cluster.
    </FieldDescription>
    <RadioGroupRoot defaultValue="React">
      <FieldLabel>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Kubernetes</FieldTitle>
            <FieldDescription>
              Run GPU workloads on a K8s cluster.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="React">
            <RadioGroupItemControl />
          </RadioGroupItem>
        </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Virtual Machine</FieldTitle>
            <FieldDescription>
              Access a cluster to run GPU workloads.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="Solid">
            <RadioGroupItemControl />
          </RadioGroupItem>
        </Field>
      </FieldLabel>
    </RadioGroupRoot>
  </FieldSet>
</FieldGroup>
                ` }}
                            </PreviewCode>
      </template>
    </Preview>
            </div>
</template>
