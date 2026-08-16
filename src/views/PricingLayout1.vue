<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Box } from '@/components/ui/box'
import { Lucide } from '@/components/ui/lucide'
</script>

<template>
  <div class="flex items-center">
    <h2 class="mr-auto text-lg font-medium">Pricing Layout</h2>
  </div>
  <!-- BEGIN: Pricing Layout -->
  <Box class="mt-5 flex flex-col lg:flex-row">
    <div class="flex-1 px-5 py-16">
      <Lucide class="text-primary mx-auto block size-12 stroke-1" icon="CreditCard" />
      <div class="mt-10 text-center text-xl font-medium">Basic Plan</div>
      <div class="mt-5 text-center opacity-70">
        1 Domain <span class="mx-1">•</span> 10 Users <span class="mx-1">•</span> 20 Copies
      </div>
      <div class="mx-auto mt-2 px-10 text-center opacity-70">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-medium">
          <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span> 35
        </div>
      </div>
      <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
        Purchase Now
      </Button>
    </div>
    <div
      class="flex-1 border-b border-t px-5 py-16 lg:border-b-0 lg:border-l lg:border-r lg:border-t-0 border-foreground/15"
    >
      <Lucide class="text-primary mx-auto block size-12 stroke-1" icon="Briefcase" />
      <div class="mt-10 text-center text-xl font-medium">Business</div>
      <div class="mt-5 text-center opacity-70">
        1 Domain <span class="mx-1">•</span> 10 Users <span class="mx-1">•</span> 20 Copies
      </div>
      <div class="mx-auto mt-2 px-10 text-center opacity-70">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-medium">
          <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span> 60
        </div>
      </div>
      <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
        Purchase Now
      </Button>
    </div>
    <div class="flex-1 px-5 py-16">
      <Lucide class="text-primary mx-auto block size-12 stroke-1" icon="ShoppingBag" />
      <div class="mt-10 text-center text-xl font-medium">Enterprise</div>
      <div class="mt-5 text-center opacity-70">
        1 Domain <span class="mx-1">•</span> 10 Users <span class="mx-1">•</span> 20 Copies
      </div>
      <div class="mx-auto mt-2 px-10 text-center opacity-70">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-medium">
          <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span> 120
        </div>
      </div>
      <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
        Purchase Now
      </Button>
    </div>
  </Box>
  <!-- END: Pricing Layout -->
  <!-- BEGIN: Pricing Layout -->
  <Box class="mt-8 flex flex-col lg:flex-row">
    <div class="flex-1 px-5 py-16">
      <Lucide class="text-primary mx-auto block size-12 stroke-1" icon="Activity" />
      <div class="mt-10 text-center text-xl font-medium">Basic Plan</div>
      <div class="mt-5 text-center opacity-70">
        1 Domain <span class="mx-1">•</span> 10 Users <span class="mx-1">•</span> 20 Copies
      </div>
      <div class="mx-auto mt-2 px-10 text-center opacity-70">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-medium">
          <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span> 35
        </div>
      </div>
      <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
        Purchase Now
      </Button>
    </div>
    <div
      class="flex-1 border-b border-t px-5 py-16 lg:border-b-0 lg:border-l lg:border-r lg:border-t-0 border-foreground/15"
    >
      <Lucide class="text-primary mx-auto block size-12 stroke-1" icon="Box" />
      <div class="mt-10 text-center text-xl font-medium">Business</div>
      <div class="mt-5 text-center opacity-70">
        1 Domain <span class="mx-1">•</span> 10 Users <span class="mx-1">•</span> 20 Copies
      </div>
      <div class="mx-auto mt-2 px-10 text-center opacity-70">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-medium">
          <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span> 60
        </div>
      </div>
      <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
        Purchase Now
      </Button>
    </div>
    <div class="flex-1 px-5 py-16">
      <Lucide class="text-primary mx-auto block size-12 stroke-1" icon="Send" />
      <div class="mt-10 text-center text-xl font-medium">Enterprise</div>
      <div class="mt-5 text-center opacity-70">
        1 Domain <span class="mx-1">•</span> 10 Users <span class="mx-1">•</span> 20 Copies
      </div>
      <div class="mx-auto mt-2 px-10 text-center opacity-70">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-medium">
          <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span> 120
        </div>
      </div>
      <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
        Purchase Now
      </Button>
    </div>
  </Box>
  <!-- END: Pricing Layout -->
</template>
