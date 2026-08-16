<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Box } from '@/components/ui/box'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Lucide } from '@/components/ui/lucide'
</script>

<template>
  <h2 class="mr-auto text-center text-2xl font-medium">Best Price &amp; Services</h2>
  <div class="mt-6">
    <TabsRoot defaultValue="monthly">
      <!-- BEGIN: Pricing Tab -->
      <div class="flex justify-center">
        <Box raised="single" class="mx-auto w-96 p-3">
          <TabsList class="mb-0 w-full">
            <TabsTrigger class="w-1/2" value="monthly">Monthly Fees</TabsTrigger>
            <TabsTrigger class="w-1/2" value="annual">Annual Fees</TabsTrigger>
          </TabsList>
        </Box>
      </div>
      <!-- END: Pricing Tab -->
      <!-- BEGIN: Pricing Content -->
      <TabsContent value="monthly" class="mt-8">
        <div class="flex flex-col gap-5 lg:flex-row">
          <div
            class="flex flex-1 flex-col justify-center pb-10 text-center sm:px-10 lg:px-5 lg:pb-0"
          >
            <div class="text-lg font-medium">Monthly Product Pricing</div>
            <div class="mt-3 indent-10 opacity-70 lg:text-justify">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever.
              </p>
              <p class="mt-2">
                When an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <Box class="flex-1 py-16">
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
                <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span>
                60
              </div>
            </div>
            <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
              Purchase Now
            </Button>
          </Box>
          <Box class="flex-1 py-16">
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
                <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span>
                120
              </div>
            </div>
            <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
              Purchase Now
            </Button>
          </Box>
        </div>
      </TabsContent>
      <TabsContent value="annual" class="mt-8">
        <div class="flex flex-col lg:flex-row">
          <div
            class="flex flex-1 flex-col justify-center pb-10 text-center sm:px-10 lg:px-5 lg:pb-0"
          >
            <div class="text-lg font-medium">Annual Product Pricing</div>
            <div class="mt-3 opacity-70 lg:text-justify">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever.
              </p>
              <p class="mt-2">
                When an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <Box class="mb-5 flex-1 py-16 lg:mb-0 lg:ml-5">
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
                <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span>
                40
              </div>
            </div>
            <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
              Purchase Now
            </Button>
          </Box>
          <Box class="flex-1 py-16 lg:ml-5">
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
                <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span>
                90
              </div>
            </div>
            <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
              Purchase Now
            </Button>
          </Box>
        </div>
      </TabsContent>
      <!-- END: Pricing Content -->
    </TabsRoot>
  </div>
  <Box class="mt-20 px-8 py-12">
    <h2 class="mr-auto text-center text-2xl font-medium">Best Price &amp; Services</h2>
    <TabsRoot defaultValue="monthly2">
      <!-- BEGIN: Pricing Tab -->
      <div class="mt-6 flex justify-center">
        <div class="mx-auto w-96 rounded-2xl border border-foreground/15 p-1">
          <TabsList class="mb-0 w-full">
            <TabsTrigger class="w-1/2" value="monthly2">Monthly Fees</TabsTrigger>
            <TabsTrigger class="w-1/2" value="annual2">Annual Fees</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <!-- END: Pricing Tab -->
      <!-- BEGIN: Pricing Content -->
      <TabsContent value="monthly2" class="mt-10">
        <div class="flex flex-col lg:flex-row">
          <div
            class="flex flex-1 flex-col justify-center pb-10 text-center sm:px-10 lg:px-5 lg:pb-0"
          >
            <div class="text-lg font-medium">Monthly Product Pricing</div>
            <div class="mt-3 indent-10 opacity-70 lg:text-justify">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever.
              </p>
              <p class="mt-2">
                When an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div
            class="flex-1 border-b border-t py-16 lg:ml-8 lg:border-b-0 lg:border-l lg:border-r lg:border-t-0 border-foreground/15"
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
                <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span>
                60
              </div>
            </div>
            <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
              Purchase Now
            </Button>
          </div>
          <div class="flex-1 py-16">
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
                <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span>
                120
              </div>
            </div>
            <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
              Purchase Now
            </Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="annual2" class="mt-10">
        <div class="flex flex-col lg:flex-row">
          <div
            class="flex flex-1 flex-col justify-center pb-10 text-center sm:px-10 lg:px-5 lg:pb-0"
          >
            <div class="text-lg font-medium">Monthly Product Pricing</div>
            <div class="mt-3 indent-10 opacity-70 lg:text-justify">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever.
              </p>
              <p class="mt-2">
                When an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div
            class="flex-1 border-b border-t py-16 lg:ml-8 lg:border-b-0 lg:border-l lg:border-r lg:border-t-0 border-foreground/15"
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
                <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span>
                120
              </div>
            </div>
            <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
              Purchase Now
            </Button>
          </div>
          <div class="flex-1 py-16">
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
                <span class="absolute left-0 top-0 -ml-4 text-2xl">$</span>
                210
              </div>
            </div>
            <Button look="outline" class="px-10 mx-auto mt-10 block rounded-full" variant="primary">
              Purchase Now
            </Button>
          </div>
        </div>
      </TabsContent>
      <!-- END: Pricing Content -->
    </TabsRoot>
  </Box>
</template>
