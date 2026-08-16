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
  <div class="grid grid-cols-12 gap-6">
    <!-- BEGIN: FAQ Menu -->
    <div class="col-span-12 lg:col-span-4 xl:col-span-3">
      <Box class="mt-5 p-0">
        <div class="flex flex-col gap-5 p-5">
          <a
            class="[&.active]:text-primary active flex items-center [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Activity" /> About Our Products
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Box" /> Related License
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Lock" /> Single Application License
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Settings" /> Multi Application License
          </a>
        </div>
        <div class="flex flex-col gap-5 border-t border-foreground/15 p-5">
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Activity" /> Term of Use
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Box" /> Author Fees
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Lock" /> Product Review
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Settings" /> Privacy Policy
          </a>
        </div>
        <div class="flex flex-col gap-5 border-t border-foreground/15 p-5">
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Activity" /> About Our Products
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Box" /> Related License
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Lock" /> Single Application License
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <Lucide class="mr-2 size-4" icon="Settings" /> Multi Application License
          </a>
        </div>
      </Box>
    </div>
    <!-- END: FAQ Menu -->
    <!-- BEGIN: FAQ Content -->
    <div class="col-span-12 lg:col-span-8 xl:col-span-9">
      <Box class="p-0 lg:mt-5">
        <div class="flex items-center border-b border-foreground/15 p-5">
          <h2 class="mr-auto text-base font-medium">About Our Products</h2>
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
          <h2 class="mr-auto text-base font-medium">Related License</h2>
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
      <Box class="mt-8 p-0">
        <div class="flex items-center border-b border-foreground/15 p-5">
          <h2 class="mr-auto text-base font-medium">Single Application License</h2>
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
    </div>
    <!-- END: FAQ Content -->
  </div>
</template>
