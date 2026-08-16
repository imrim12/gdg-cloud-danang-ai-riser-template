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
    <div class="flex justify-center">
      <Button class="mx-2 size-14 rounded-full shadow-none"> 1 </Button>
      <Button
        variant="ghost"
        class="bg-background border border-foreground/15 shadow-none mx-2 size-14 rounded-full"
      >
        2
      </Button>
      <Button
        variant="ghost"
        class="bg-background border border-foreground/15 shadow-none mx-2 size-14 rounded-full"
      >
        3
      </Button>
    </div>
    <div class="mt-10 px-5">
      <div class="text-center text-lg font-medium">Setup Your Account</div>
      <div class="mt-2 text-center opacity-70">
        To start off, please enter your username, email address and password.
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
