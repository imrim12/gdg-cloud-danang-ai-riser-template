<script lang="ts" setup>
import { Box } from '@/components/ui/box'
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Lucide } from '@/components/ui/lucide'
</script>

<template>
  <div class="flex items-center">
    <h2 class="mr-auto text-lg font-medium">FAQ Layout</h2>
  </div>
  <div class="mt-5 grid grid-cols-12 gap-x-6 gap-y-8">
    <!-- BEGIN: FAQ Menu -->
    <Box
      class="active [&.active]:before:bg-(--color)/5 [&.active]:before:border-(--color)/20 [&.active]:after:bg-(--color)/5 [&.active]:after:border-(--color)/20 col-span-12 py-10 [--color:var(--color-primary)] lg:col-span-4"
      href=""
      as="a"
    >
      <Lucide class="text-primary mx-auto block size-12 stroke-1" icon="Shield" />
      <div class="mt-3 text-center text-base font-medium">Single Application</div>
      <div class="mx-auto mt-2 w-3/4 text-center opacity-70">
        Lorem Ipsum is simply dummy text of the printing
      </div>
    </Box>
    <Box
      class="[&.active]:before:bg-(--color)/5 [&.active]:before:border-(--color)/20 [&.active]:after:bg-(--color)/5 [&.active]:after:border-(--color)/20 col-span-12 py-10 [--color:var(--color-primary)] lg:col-span-4"
      href=""
      as="a"
    >
      <Lucide class="text-primary mx-auto block size-12 stroke-1" icon="Send" />
      <div class="mt-3 text-center text-base font-medium">Multi Application</div>
      <div class="mx-auto mt-2 w-3/4 text-center opacity-70">
        Lorem Ipsum is simply dummy text of the printing
      </div>
    </Box>
    <Box
      class="[&.active]:before:bg-(--color)/5 [&.active]:before:border-(--color)/20 [&.active]:after:bg-(--color)/5 [&.active]:after:border-(--color)/20 col-span-12 py-10 [--color:var(--color-primary)] lg:col-span-4"
      href=""
      as="a"
    >
      <Lucide class="text-primary mx-auto block size-12 stroke-1" icon="TrendingUp" />
      <div class="mt-3 text-center text-base font-medium">Custom License</div>
      <div class="mx-auto mt-2 w-3/4 text-center opacity-70">
        Lorem Ipsum is simply dummy text of the printing
      </div>
    </Box>
    <!-- END: FAQ Menu -->
    <!-- BEGIN: FAQ Content -->
    <div class="col-span-12 lg:col-span-6">
      <Box class="p-0">
        <div class="flex items-center border-b border-foreground/15 p-5">
          <h2 class="mr-auto text-base font-medium">Working with Dropplets</h2>
        </div>
        <div class="p-5">
          <AccordionRoot class="border-none" :default-value="['faq-1-1']">
            <AccordionItem value="faq-1-1">
              <AccordionTrigger>
                OpenSSL Essentials: Working with SSL Certificates, Private Keys
              </AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-1-2">
              <AccordionTrigger>
                Understanding IP Addresses, Subnets, and CIDR Notation
              </AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-1-3">
              <AccordionTrigger>How To Troubleshoot Common HTTP Error Codes</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-1-4">
              <AccordionTrigger>An Introduction to Securing your Linux VPS</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </Box>
      <Box class="mt-8 p-0">
        <div class="flex items-center border-b border-foreground/15 p-5">
          <h2 class="mr-auto text-base font-medium">Working with Dropplets</h2>
        </div>
        <div class="p-5">
          <AccordionRoot class="border-none">
            <AccordionItem value="faq-2-1">
              <AccordionTrigger>
                OpenSSL Essentials: Working with SSL Certificates, Private Keys
              </AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2-2">
              <AccordionTrigger>
                Understanding IP Addresses, Subnets, and CIDR Notation
              </AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2-3">
              <AccordionTrigger>How To Troubleshoot Common HTTP Error Codes</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2-4">
              <AccordionTrigger>An Introduction to Securing your Linux VPS</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </Box>
    </div>
    <div class="col-span-12 lg:col-span-6">
      <Box class="p-0">
        <div class="flex items-center border-b border-foreground/15 p-5">
          <h2 class="mr-auto text-base font-medium">Working with Dropplets</h2>
        </div>
        <div class="p-5">
          <AccordionRoot class="border-none">
            <AccordionItem value="faq-3-1">
              <AccordionTrigger>
                OpenSSL Essentials: Working with SSL Certificates, Private Keys
              </AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3-2">
              <AccordionTrigger>
                Understanding IP Addresses, Subnets, and CIDR Notation
              </AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3-3">
              <AccordionTrigger>How To Troubleshoot Common HTTP Error Codes</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3-4">
              <AccordionTrigger>An Introduction to Securing your Linux VPS</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </Box>
      <Box class="mt-8 p-0">
        <div class="flex items-center border-b border-foreground/15 p-5">
          <h2 class="mr-auto text-base font-medium">Working with Dropplets</h2>
        </div>
        <div class="p-5">
          <AccordionRoot class="border-none">
            <AccordionItem value="faq-4-1">
              <AccordionTrigger>
                OpenSSL Essentials: Working with SSL Certificates, Private Keys
              </AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4-2">
              <AccordionTrigger>
                Understanding IP Addresses, Subnets, and CIDR Notation
              </AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4-3">
              <AccordionTrigger>How To Troubleshoot Common HTTP Error Codes</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4-4">
              <AccordionTrigger>An Introduction to Securing your Linux VPS</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </Box>
    </div>
    <!-- END: FAQ Content -->
  </div>
</template>
