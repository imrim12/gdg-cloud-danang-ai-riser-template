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
        <div class="flex flex-col gap-1 px-4 pb-3 pt-5">
          <a
            class="[&.active]:bg-primary/5 active [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Activity" />
            <div class="flex-1 truncate">About Our Products</div>
          </a>
          <a
            class="[&.active]:bg-primary/5 [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Box" />
            <div class="flex-1 truncate">Related License</div>
          </a>
          <a
            class="[&.active]:bg-primary/5 [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Lock" />
            <div class="flex-1 truncate">Single Application License</div>
          </a>
          <a
            class="[&.active]:bg-primary/5 [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Settings" />
            <div class="flex-1 truncate">Multi Application License</div>
          </a>
        </div>
        <div class="flex flex-col gap-1 border-t border-foreground/15 px-4 py-3">
          <a class="flex items-center px-4 py-2" href="">
            <Lucide class="mr-2 size-4" icon="Activity" />
            <div class="flex-1 truncate">Term of Use</div>
          </a>
          <a
            class="[&.active]:bg-primary/5 [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Box" />
            <div class="flex-1 truncate">Author Fees</div>
          </a>
          <a
            class="[&.active]:bg-primary/5 [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Lock" />
            <div class="flex-1 truncate">Product Review</div>
          </a>
          <a
            class="[&.active]:bg-primary/5 [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Settings" />
            <div class="flex-1 truncate">Privacy Policy</div>
          </a>
        </div>
        <div class="flex flex-col gap-1 border-t border-foreground/15 px-4 pb-5 pt-3">
          <a class="flex items-center px-4 py-2" href="">
            <Lucide class="mr-2 size-4" icon="Activity" />
            <div class="flex-1 truncate">About Our Products</div>
          </a>
          <a
            class="[&.active]:bg-primary/5 [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Box" />
            <div class="flex-1 truncate">Related License</div>
          </a>
          <a
            class="[&.active]:bg-primary/5 [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Lock" />
            <div class="flex-1 truncate">Single Application License</div>
          </a>
          <a
            class="[&.active]:bg-primary/5 [&.active]:border-primary/10 [&.active]:text-primary flex items-center rounded-lg border border-transparent px-4 py-2 [&.active]:font-medium"
            href=""
          >
            <Lucide class="mr-2 size-4" icon="Settings" />
            <div class="flex-1 truncate">Multi Application License</div>
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
          <AccordionRoot :default-value="['faq-1-1']">
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
      <Box class="mt-5 p-0">
        <div class="flex items-center border-b border-foreground/15 p-5">
          <h2 class="mr-auto text-base font-medium">Single Application License</h2>
        </div>
        <div class="p-5">
          <AccordionRoot>
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
      <Box class="mt-5 p-0">
        <div class="flex items-center border-b border-foreground/15 p-5">
          <h2 class="mr-auto text-base font-medium">Multi Application License</h2>
        </div>
        <div class="p-5">
          <AccordionRoot>
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
