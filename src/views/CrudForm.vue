<script lang="ts" setup>
import { ref, computed } from 'vue'
import * as combobox from '@zag-js/combobox'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import {
  ComboboxRoot,
  ComboboxControl,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItem,
  ComboboxItemText,
} from '@/components/ui/combobox'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { SwitchRoot, SwitchControl } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'

const categoryData = [
  { label: 'Sport & Outdoor', code: 'sport' },
  { label: 'PC & Laptop', code: 'pc' },
  { label: 'Smartphone & Tablet', code: 'smartphone' },
  { label: 'Photography', code: 'photography' },
]

const categoryValue = ref(['Sport & Outdoor', 'Smartphone & Tablet'])
const categoryOptions = ref(categoryData)

const categoryCollection = computed(() =>
  combobox.collection({
    items: categoryOptions.value,
    itemToValue: (item) => item.label,
  }),
)
</script>

<template>
  <div class="flex items-center">
    <h2 class="mr-auto text-lg font-medium">Form Layout</h2>
  </div>
  <div class="mt-5 grid grid-cols-12 gap-6">
    <div class="col-span-12 lg:col-span-6">
      <!-- BEGIN: Form Layout -->
      <Box>
        <Field>
          <FieldLabel for="crud-form-1">Product Name</FieldLabel>
          <Input class="w-full" id="crud-form-1" type="text" placeholder="Product name" />
        </Field>
        <Field class="mt-3">
          <FieldLabel>Category</FieldLabel>
          <ComboboxRoot
            :collection="categoryCollection"
            :value="categoryValue"
            @value-change="(details) => (categoryValue = details.value)"
            @input-value-change="
              ({ inputValue }) => {
                const filtered = categoryData.filter((item) =>
                  item.label.toLowerCase().includes(inputValue.toLowerCase()),
                )
                categoryOptions = filtered.length > 0 ? filtered : categoryData
              }
            "
            class="w-full"
            multiple
          >
            <ComboboxControl>
              <ComboboxTrigger />
            </ComboboxControl>
            <ComboboxContent>
              <ComboboxInput placeholder="Search category..." />
              <ComboboxItemGroup>
                <ComboboxItemGroupLabel>Categories</ComboboxItemGroupLabel>
                <ComboboxItem
                  v-for="item in categoryCollection.items"
                  :key="item.code"
                  :item="item"
                >
                  <ComboboxItemText>{{ item.label }}</ComboboxItemText>
                </ComboboxItem>
              </ComboboxItemGroup>
            </ComboboxContent>
          </ComboboxRoot>
        </Field>
        <Field class="mt-3">
          <FieldLabel for="crud-form-3">Quantity</FieldLabel>
          <div class="flex">
            <Input class="rounded-e-none border-e-0" type="text" placeholder="Quantity" />
            <div
              class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-e-lg border [--color:var(--color-foreground)]"
            >
              pcs
            </div>
          </div>
        </Field>
        <Field class="mt-3">
          <FieldLabel for="crud-form-4">Weight</FieldLabel>
          <div class="flex">
            <Input class="rounded-e-none border-e-0" type="text" placeholder="Weight" />
            <div
              class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-e-lg border [--color:var(--color-foreground)]"
            >
              grams
            </div>
          </div>
        </Field>
        <Field class="mt-3">
          <FieldLabel>Price</FieldLabel>
          <div class="grid-cols-3 gap-2 sm:grid">
            <div class="flex">
              <div
                class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex items-center justify-center rounded-s-lg border px-3 [--color:var(--color-foreground)]"
              >
                Unit
              </div>
              <Input class="rounded-s-none border-s-0" type="text" placeholder="Unit" />
            </div>
            <div class="mt-2 flex sm:mt-0">
              <div
                class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex items-center justify-center rounded-s-lg border px-3 [--color:var(--color-foreground)]"
              >
                Wholesale
              </div>
              <Input class="rounded-s-none border-s-0" type="text" placeholder="Wholesale" />
            </div>
            <div class="mt-2 flex sm:mt-0">
              <div
                class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex items-center justify-center rounded-s-lg border px-3 [--color:var(--color-foreground)]"
              >
                Bulk
              </div>
              <Input class="rounded-s-none border-s-0" type="text" placeholder="Bulk" />
            </div>
          </div>
        </Field>
        <Field class="mt-3">
          <FieldLabel>Active Status</FieldLabel>
          <SwitchRoot>
            <SwitchControl />
          </SwitchRoot>
        </Field>
        <Field class="mt-3">
          <FieldLabel for="crud-form-5">Description</FieldLabel>
          <Textarea id="crud-form-5" placeholder="Product description"
            >Content of the editor.</Textarea
          >
        </Field>
        <div class="mt-5 text-right">
          <Button class="mr-1 w-24" type="button" look="outline"> Cancel </Button>
          <Button class="w-24" type="button" variant="primary"> Save </Button>
        </div>
      </Box>
      <!-- END: Form Layout -->
    </div>
  </div>
</template>
