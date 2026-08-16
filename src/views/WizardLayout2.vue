<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Box } from '@/components/ui/box'
import { Field, FieldLabel } from '@/components/ui/field'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
</script>

<template>
  <div class="flex items-center">
    <h2 class="mr-auto text-lg font-medium">Wizard Layout</h2>
  </div>
  <!-- BEGIN: Wizard Layout -->
  <Box class="mt-5 py-10 sm:py-20">
    <div class="grid gap-5 px-5 sm:px-20">
      <div class="flex items-center">
        <Button class="mx-2 size-12 rounded-full shadow-none"> 1 </Button>
        <div class="text-primary ml-3 text-base font-medium opacity-100">Create New Account</div>
      </div>
      <div class="flex items-center">
        <Button
          variant="ghost"
          class="bg-background border border-foreground/15 shadow-none mx-2 size-12 rounded-full"
        >
          2
        </Button>
        <div class="ml-3 text-base opacity-70">Setup Your Profile</div>
      </div>
      <div class="flex items-center">
        <Button
          variant="ghost"
          class="bg-background border border-foreground/15 shadow-none mx-2 size-12 rounded-full"
        >
          3
        </Button>
        <div class="ml-3 text-base opacity-70">Setup Your Business Details</div>
      </div>
      <div class="flex items-center">
        <Button
          variant="ghost"
          class="bg-background border border-foreground/15 shadow-none mx-2 size-12 rounded-full"
        >
          4
        </Button>
        <div class="ml-3 text-base opacity-70">Setup Billing Account</div>
      </div>
      <div class="flex items-center">
        <Button
          variant="ghost"
          class="bg-background border border-foreground/15 shadow-none mx-2 size-12 rounded-full"
        >
          5
        </Button>
        <div class="ml-3 text-base opacity-70">Finalize your purchase</div>
      </div>
    </div>
    <div class="mt-10 border-t border-foreground/10 px-5 pt-10 sm:px-20">
      <div class="text-base font-medium">Profile Settings</div>
      <div class="mt-5 grid grid-cols-12 gap-4 gap-y-5">
        <Field class="col-span-12 sm:col-span-6">
          <FieldLabel for="input-wizard-1">From</FieldLabel>
          <Input id="input-wizard-1" type="text" placeholder="example@gmail.com" />
        </Field>
        <Field class="col-span-12 sm:col-span-6">
          <FieldLabel for="input-wizard-2">To</FieldLabel>
          <Input id="input-wizard-2" type="text" placeholder="example@gmail.com" />
        </Field>
        <Field class="col-span-12 sm:col-span-6">
          <FieldLabel for="input-wizard-3">Subject</FieldLabel>
          <Input id="input-wizard-3" type="text" placeholder="Important Meeting" />
        </Field>
        <Field class="col-span-12 sm:col-span-6">
          <FieldLabel for="input-wizard-4">Has the Words</FieldLabel>
          <Input id="input-wizard-4" type="text" placeholder="Job, Work, Documentation" />
        </Field>
        <Field class="col-span-12 sm:col-span-6">
          <FieldLabel for="input-wizard-5">Doesn't Have</FieldLabel>
          <Input id="input-wizard-5" type="text" placeholder="Job, Work, Documentation" />
        </Field>
        <Field class="col-span-12 sm:col-span-6">
          <FieldLabel for="input-wizard-6">Size</FieldLabel>
          <NativeSelect id="input-wizard-6">
            <NativeSelectOption>10</NativeSelectOption>
            <NativeSelectOption>25</NativeSelectOption>
            <NativeSelectOption>35</NativeSelectOption>
            <NativeSelectOption>50</NativeSelectOption>
          </NativeSelect>
        </Field>
        <div class="col-span-12 mt-5 flex items-center justify-center sm:justify-end">
          <Button look="outline" class="w-32">Previous</Button>
          <Button class="ml-2 w-32">Next</Button>
        </div>
      </div>
    </div>
  </Box>
  <!-- END: Wizard Layout -->
</template>
