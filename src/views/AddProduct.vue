<script lang="ts" setup>
import fakers from '@/utils/faker'
import { AlertRoot, AlertTitle, AlertCloseTrigger } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Lucide } from '@/components/ui/lucide'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import {
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from '@/components/ui/radio-group'
import { SwitchRoot, SwitchControl, SwitchLabel } from '@/components/ui/switch'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from '@/components/ui/tooltip'
</script>

<template>
  <div class="flex items-center">
    <h2 class="mr-auto text-lg font-medium">Add Product</h2>
  </div>
  <div class="mt-5 grid grid-cols-11 gap-x-6 pb-20">
    <!-- BEGIN: Notification -->
    <AlertRoot look="outline" class="col-span-11 mb-8" variant="primary">
      <Lucide class="mr-2 size-4" icon="Info" />
      <AlertTitle>
        Starting May 10, 2024, there will be changes to the Terms &amp; Conditions regarding the
        number of products that may be added by the Seller.
        <a
          class="ml-1 font-medium underline decoration-dotted underline-offset-3"
          href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
          target="blank"
        >
          Learn More
        </a>
      </AlertTitle>
      <AlertCloseTrigger />
    </AlertRoot>
    <!-- END: Notification -->
    <div class="col-span-11 2xl:col-span-9">
      <!-- BEGIN: Upload Product -->
      <Box>
        <div class="rounded-lg border border-foreground/15 p-5">
          <div class="flex items-center border-b border-foreground/15 pb-5 text-base font-medium">
            <Lucide class="mr-2 size-4" icon="ChevronDown" /> Upload Product
          </div>
          <div class="mt-5 flex flex-col gap-5">
            <div class="mb-5 flex items-center">
              <span>
                <Lucide class="text-warning h-5 w-5" icon="Lightbulb" />
              </span>
              <div class="ml-2">
                <span class="mr-1 opacity-70">
                  Avoid selling counterfeit products / violating Intellectual Property Rights, so
                  that your products are not deleted.
                </span>
                <a
                  class="text-primary font-medium"
                  href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                  target="blank"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Photos</div>
                    <Badge look="outline" variant="secondary" class="ml-3">Required</Badge>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    <div>
                      The image format is .jpg .jpeg .png and a minimum size of 300 x 300 pixels
                      (For optimal images use a minimum size of 700 x 700 pixels).
                    </div>
                    <div class="mt-2">
                      Select product photos or drag and drop up to 5 photos at once here. Include
                      min. 3 attractive photos to make the product more attractive to buyers.
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <div class="rounded-xl border-2 border-dashed border-foreground/15 pt-4">
                  <div class="grid grid-cols-10 gap-5 pl-4 pr-5">
                    <div
                      v-for="(faker, fakerKey) in fakers.slice(0, 5)"
                      :key="fakerKey"
                      class="image-fit relative col-span-5 h-28 cursor-pointer md:col-span-2"
                    >
                      <img
                        class="rounded-xl"
                        :src="faker['images'][0]"
                        alt="Midone - Tailwind Admin Dashboard Template"
                      />
                      <TooltipRoot>
                        <TooltipTrigger as-child>
                          <div
                            class="bg-(--color)/80 border-(--color) absolute right-0 top-0 -mr-2 -mt-2 flex size-5 items-center justify-center rounded-full text-white [--color:var(--color-danger)]"
                          >
                            <Lucide class="size-4" icon="X" />
                          </div>
                        </TooltipTrigger>
                        <TooltipPositioner>
                          <TooltipContent>Remove this image?</TooltipContent>
                        </TooltipPositioner>
                      </TooltipRoot>
                    </div>
                  </div>
                  <div
                    class="relative mt-5 flex cursor-pointer items-center justify-center px-4 pb-4"
                  >
                    <Lucide class="mr-2 size-4" icon="Image" />
                    <span class="text-primary mr-1"> Upload a file </span>
                    or drag and drop
                    <Input
                      class="absolute left-0 top-0 h-full w-full opacity-0"
                      id="horizontal-form-1"
                      type="file"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <!-- END: Upload Product -->
      <!-- BEGIN: Product Information -->
      <Box class="mt-8">
        <div class="rounded-lg border border-foreground/15 p-5">
          <div class="flex items-center border-b border-foreground/15 pb-5 text-base font-medium">
            <Lucide class="mr-2 size-4" icon="ChevronDown" /> Product Information
          </div>
          <div class="mt-5 flex flex-col gap-5">
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Name</div>
                    <Badge look="outline" variant="secondary" class="ml-3">Required</Badge>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Include min. 40 characters to make it more attractive and easy for buyers to
                    find, consisting of product type, brand, and information such as color,
                    material, or type.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <Field>
                  <Input type="text" placeholder="Product name" />
                  <FieldDescription class="text-right">Maximum character 0/70</FieldDescription>
                </Field>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Category</div>
                    <Badge look="outline" variant="secondary" class="ml-3">Required</Badge>
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <NativeSelect>
                  <NativeSelectOption
                    v-for="(faker, index) in fakers.slice(0, 9)"
                    :key="index"
                    :value="faker['categories'][0]!['name']"
                  >
                    {{ faker['categories'][0]!['name'] }}
                  </NativeSelectOption>
                </NativeSelect>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Subcategory</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    You can add a new subcategory or choose from the existing subcategory list.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <NativeSelect>
                  <NativeSelectOption
                    v-for="(faker, index) in fakers.slice(0, 2)"
                    :key="index"
                    :value="faker['categories'][0]!['name']"
                  >
                    {{ faker['categories'][0]!['name'] }}
                  </NativeSelectOption>
                </NativeSelect>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <!-- END: Product Information -->
      <!-- BEGIN: Product Detail -->
      <Box class="mt-8">
        <div class="rounded-lg border border-foreground/15 p-5">
          <div class="flex items-center border-b border-foreground/15 pb-5 text-base font-medium">
            <Lucide class="mr-2 size-4" icon="ChevronDown" /> Product Detail
          </div>
          <div class="mt-5 flex flex-col gap-5">
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Condition</div>
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <RadioGroupRoot class="w-40" defaultValue="new">
                  <RadioGroupItem value="new">
                    <RadioGroupItemControl />
                    <RadioGroupItemText>New</RadioGroupItemText>
                  </RadioGroupItem>
                  <RadioGroupItem value="used">
                    <RadioGroupItemControl />
                    <RadioGroupItemText>Used</RadioGroupItemText>
                  </RadioGroupItem>
                </RadioGroupRoot>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Description</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    <div>
                      Make sure the product description provides a detailed explanation of your
                      product so that it is easy to understand and find your product.
                    </div>
                    <div class="mt-2">
                      It is recommended not to enter info on mobile numbers, e-mails, etc. into the
                      product description to protect your personal data.
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <Field>
                  <Textarea placeholder="Content of the editor." class="min-h-[200px]" />
                  <FieldDescription class="text-right">Maximum character 0/2000</FieldDescription>
                </Field>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Video</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Add a video so that buyers are more interested in your product.
                    <a
                      class="text-primary font-medium"
                      href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                      target="blank"
                    >
                      Learn more.
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <Button look="outline" class="w-40">
                  <Lucide class="mr-2 size-4" icon="Plus" /> Add Video URL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <!-- END: Product Detail -->
      <!-- BEGIN: Product Variant -->
      <Box class="mt-8">
        <div class="rounded-lg border border-foreground/15 p-5">
          <div class="flex items-center border-b border-foreground/15 pb-5 text-base font-medium">
            <Lucide class="mr-2 size-4" icon="ChevronDown" /> Product Variant
          </div>
          <div class="mt-5 flex flex-col gap-5">
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Variant</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Add variants such as color, size, or more. Choose a maximum of 2 variant types.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <div class="xl:text-right">
                  <Button look="outline" class="w-44" variant="primary">
                    <Lucide class="mr-2 size-4" icon="Plus" /> Add Variant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <!-- END: Product Variant -->
      <!-- BEGIN: Product Variant (Details) -->
      <Box class="mt-8">
        <div class="rounded-lg border border-foreground/15 p-5">
          <div class="flex items-center border-b border-foreground/15 pb-5 text-base font-medium">
            <Lucide class="mr-2 size-4" icon="ChevronDown" /> Product Variant (Details)
          </div>
          <div class="mt-5 flex flex-col gap-5">
            <!-- Variant 1 -->
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Variant 1</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Add the types of variants and options, you can add up to 5 options.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <div
                  class="bg-(--color)/[.03] border-(--color)/5 relative rounded-lg border py-10 pl-5 pr-5 [--color:var(--color-foreground)] xl:pr-10"
                >
                  <a class="absolute right-0 top-0 mr-4 mt-4 opacity-70" href="">
                    <Lucide class="size-5" icon="X" />
                  </a>
                  <div class="flex flex-col gap-5">
                    <div class="grid gap-5 sm:grid-cols-12">
                      <div class="col-span-2">
                        <Label class="block sm:mt-3 sm:text-right">Name</Label>
                      </div>
                      <div class="col-span-10 grid gap-5">
                        <div class="grid gap-5 sm:grid-cols-12">
                          <div class="col-span-10 flex">
                            <Input
                              class="rounded-e-none border-e-0"
                              type="text"
                              placeholder="Size"
                            />
                            <div
                              class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-r-lg border [--color:var(--color-foreground)]"
                            >
                              6/14
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid gap-5 sm:grid-cols-12">
                      <div class="col-span-2">
                        <Label class="block sm:mt-3 sm:text-right">Options</Label>
                      </div>
                      <div class="col-span-10 grid gap-5">
                        <div
                          v-for="(option, optIndex) in ['Small', 'Medium', 'Large']"
                          :key="optIndex"
                          class="grid gap-5 sm:grid-cols-12"
                        >
                          <div class="col-span-10 flex">
                            <Input
                              class="rounded-e-none border-e-0"
                              type="text"
                              :placeholder="option"
                            />
                            <div
                              class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-r-lg border [--color:var(--color-foreground)]"
                            >
                              6/14
                            </div>
                          </div>
                          <div class="col-span-2 flex w-16 items-center gap-3 opacity-70">
                            <a href="">
                              <Lucide class="size-4" icon="Move" />
                            </a>
                            <a href="">
                              <Lucide class="size-4" icon="Trash" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid gap-5 sm:grid-cols-12">
                      <div class="col-span-2"></div>
                      <div class="col-span-10 grid gap-5">
                        <div class="grid gap-5 sm:grid-cols-12">
                          <div class="col-span-10 flex">
                            <Button look="outline" class="w-full border-dashed">
                              <Lucide class="mr-2 size-4" icon="Plus" /> Add New Option
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Variant 2 -->
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Variant 2</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Add the types of variants and options, you can add up to 5 options.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <div
                  class="bg-(--color)/[.03] border-(--color)/5 relative rounded-lg border py-10 pl-5 pr-5 [--color:var(--color-foreground)] xl:pr-10"
                >
                  <a class="absolute right-0 top-0 mr-4 mt-4 opacity-70" href="">
                    <Lucide class="size-5" icon="X" />
                  </a>
                  <div class="flex flex-col gap-5">
                    <div class="grid gap-5 sm:grid-cols-12">
                      <div class="col-span-2">
                        <Label class="block sm:mt-3 sm:text-right">Name</Label>
                      </div>
                      <div class="col-span-10 grid gap-5">
                        <div class="grid gap-5 sm:grid-cols-12">
                          <div class="col-span-10 flex">
                            <Input
                              class="rounded-e-none border-e-0"
                              type="text"
                              placeholder="Color"
                            />
                            <div
                              class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-r-lg border [--color:var(--color-foreground)]"
                            >
                              6/14
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid gap-5 sm:grid-cols-12">
                      <div class="col-span-2">
                        <Label class="block sm:mt-3 sm:text-right">Options</Label>
                      </div>
                      <div class="col-span-10 grid gap-5">
                        <div
                          v-for="(color, colorIndex) in ['Black', 'White', 'Gray']"
                          :key="colorIndex"
                          class="grid gap-5 sm:grid-cols-12"
                        >
                          <div class="col-span-10 flex">
                            <Input
                              class="rounded-e-none border-e-0"
                              type="text"
                              :placeholder="color"
                            />
                            <div
                              class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-r-lg border [--color:var(--color-foreground)]"
                            >
                              6/14
                            </div>
                          </div>
                          <div class="col-span-2 flex w-16 items-center gap-3 opacity-70">
                            <a href="">
                              <Lucide class="size-4" icon="Move" />
                            </a>
                            <a href="">
                              <Lucide class="size-4" icon="Trash" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid gap-5 sm:grid-cols-12">
                      <div class="col-span-2"></div>
                      <div class="col-span-10 grid gap-5">
                        <div class="grid gap-5 sm:grid-cols-12">
                          <div class="col-span-10 flex">
                            <Button look="outline" class="w-full border-dashed">
                              <Lucide class="mr-2 size-4" icon="Plus" /> Add New Option
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:ml-64 xl:pl-10">
              <Button look="outline" class="w-full">
                <Lucide class="size-4" icon="Plus" /> Add New Variant
              </Button>
            </div>
            <!-- Variant Information -->
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Variant Information</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Apply price and stock on all variants or based on certain variant codes.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <div class="grid grid-cols-4 gap-5">
                  <div>
                    <div class="flex">
                      <div
                        class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-s-lg border [--color:var(--color-foreground)]"
                      >
                        $
                      </div>
                      <Input class="rounded-s-none border-s-0" type="text" placeholder="Price" />
                    </div>
                  </div>
                  <div>
                    <Input type="text" placeholder="Stock" />
                  </div>
                  <div>
                    <Input type="text" placeholder="Variant Code" />
                  </div>
                  <div>
                    <Button look="outline" class="w-full" type="button" variant="primary"
                      >Apply To All</Button
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Variant List -->
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Variant List</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Set the price and stock for each variant.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <Table class="border border-foreground/[.08]">
                  <TableHeader>
                    <TableRow>
                      <TableHead class="bg-foreground/5">Size</TableHead>
                      <TableHead class="bg-foreground/5">
                        <div class="flex items-center">
                          Color
                          <Lucide class="ml-2 size-4" icon="HelpCircle" />
                        </div>
                      </TableHead>
                      <TableHead class="bg-foreground/5">Price</TableHead>
                      <TableHead class="bg-foreground/5">
                        <div class="flex items-center">
                          <div
                            :class="[
                              'relative -mt-0.5 mr-2 size-4',
                              'after:bg-primary after:absolute after:size-4 after:rounded-full after:border-4 after:border-white/60 after:box-border',
                              'before:bg-primary/20 before:absolute before:size-4 before:rounded-full lg:before:animate-ping',
                            ]"
                          ></div>
                          Stock
                          <Lucide class="ml-2 size-4" icon="HelpCircle" />
                        </div>
                      </TableHead>
                      <TableHead class="bg-foreground/5">Variant Code</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <template
                      v-for="(size, sizeIndex) in ['Small', 'Medium', 'Large']"
                      :key="sizeIndex"
                    >
                      <TableRow
                        v-for="(color, colorIndex) in ['Black', 'White', 'Gray']"
                        :key="`${sizeIndex}-${colorIndex}`"
                      >
                        <TableCell
                          v-if="colorIndex === 0"
                          class="border-r border-foreground/15"
                          :rowspan="3"
                          >{{ size }}</TableCell
                        >
                        <TableCell>{{ color }}</TableCell>
                        <TableCell>
                          <div class="flex">
                            <div
                              class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-l-lg border [--color:var(--color-foreground)]"
                            >
                              $
                            </div>
                            <Input
                              class="rounded-s-none border-s-0"
                              type="text"
                              placeholder="Price"
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          <Input class="min-w-[6rem]" type="text" placeholder="Stock" />
                        </TableCell>
                        <TableCell>
                          <Input class="min-w-[6rem]" type="text" placeholder="Variant Code" />
                        </TableCell>
                      </TableRow>
                    </template>
                  </TableBody>
                </Table>
              </div>
            </div>
            <!-- Wholesale -->
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Wholesale</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Add wholesale price for certain quantity purchases.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <Table class="border border-foreground/[.08]">
                  <TableHeader>
                    <TableRow>
                      <TableHead></TableHead>
                      <TableHead></TableHead>
                      <TableHead>Min.</TableHead>
                      <TableHead>Max.</TableHead>
                      <TableHead>Unit Price</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow v-for="(row, rowIndex) in 3" :key="rowIndex">
                      <TableCell>{{ rowIndex + 1 }}.</TableCell>
                      <TableCell class="whitespace-nowrap"
                        >Wholesale Price {{ rowIndex + 1 }}</TableCell
                      >
                      <TableCell>
                        <Input type="text" placeholder="Min Qty" />
                      </TableCell>
                      <TableCell>
                        <Input type="text" placeholder="Max Qty" />
                      </TableCell>
                      <TableCell>
                        <div class="flex">
                          <div
                            class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-l-lg border [--color:var(--color-foreground)]"
                          >
                            $
                          </div>
                          <Input
                            class="rounded-s-none border-s-0"
                            type="text"
                            placeholder="Price"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <a href="">
                          <Lucide class="size-4 opacity-70" icon="Trash" />
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Button look="outline" class="mt-4 w-full">
                  <Lucide class="mr-2 size-4" icon="Plus" /> Add New Wholesale Price
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <!-- END: Product Variant (Details) -->
      <!-- BEGIN: Product Management -->
      <Box class="mt-8">
        <div class="rounded-lg border border-foreground/15 p-5">
          <div class="flex items-center border-b border-foreground/15 pb-5 text-base font-medium">
            <Lucide class="mr-2 size-4" icon="ChevronDown" /> Product Management
          </div>
          <div class="mt-5 flex flex-col gap-5">
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Status</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    If the status is active, your product can be searched for by potential buyers.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <SwitchRoot>
                  <SwitchControl />
                  <SwitchLabel class="text-xs font-normal leading-relaxed opacity-70"
                    >Active</SwitchLabel
                  >
                </SwitchRoot>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Stock</div>
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <Input type="text" placeholder="Input Product Stock" />
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">SKU (Stock Keeping Unit)</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Use a unique SKU code if you want to mark your product.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <Input type="text" placeholder="Input SKU" />
              </div>
            </div>
          </div>
        </div>
      </Box>
      <!-- END: Product Management -->
      <!-- BEGIN: Weight & Shipping -->
      <Box class="mt-8">
        <div class="rounded-lg border border-foreground/15 p-5">
          <div class="flex items-center border-b border-foreground/15 pb-5 text-base font-medium">
            <Lucide class="mr-2 size-4" icon="ChevronDown" /> Weight &amp; Shipping
          </div>
          <div class="mt-5 flex flex-col gap-5">
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Weight</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Enter the weight by weighing the product after it is
                    <a class="text-primary font-medium" href="">packaged</a>.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <div class="grid grid-cols-4 gap-5">
                  <div>
                    <NativeSelect>
                      <NativeSelectOption value="Gram (g)">Gram (g)</NativeSelectOption>
                      <NativeSelectOption value="Kilogram (kg)">Kilogram (kg)</NativeSelectOption>
                    </NativeSelect>
                  </div>
                  <div>
                    <Input
                      class="mt-2 sm:mt-0"
                      id="product-weight"
                      type="text"
                      placeholder="Stock"
                    />
                  </div>
                </div>
                <AlertRoot look="outline" class="mt-5" variant="warning">
                  <Lucide class="mr-2 size-4" icon="AlertTriangle" />
                  <AlertTitle>
                    Pay close attention to the weight of the product so that there is no difference
                    in data with the shipping courier.
                    <a
                      class="ml-1 font-medium underline decoration-dotted underline-offset-3"
                      href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                      target="blank"
                    >
                      Learn More
                    </a>
                  </AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Size</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Enter the product size after packing to calculate the volume weight.
                    <a class="text-primary font-medium" href="">Learn Volume Weight</a>.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <div class="grid grid-cols-3 gap-5">
                  <div v-for="(dim, dimIndex) in ['Width', 'Height', 'Length']" :key="dimIndex">
                    <div class="flex">
                      <Input class="rounded-e-none border-e-0" type="text" :placeholder="dim" />
                      <div
                        class="bg-(--color)/[.03] border-(--color)/[.08] text-(--color)/70 flex w-16 items-center justify-center rounded-e-lg border [--color:var(--color-foreground)]"
                      >
                        cm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Shipping Insurance</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Refund product &amp; postage for the seller and buyer in case of damage / loss
                    during shipping.
                    <a class="text-primary font-medium" href="">Learn More</a>.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <RadioGroupRoot class="w-[30rem]" defaultValue="required">
                  <RadioGroupItem value="required">
                    <RadioGroupItemControl />
                    <RadioGroupItemText>
                      <div class="font-medium">Required</div>
                      <div class="mt-1 text-xs leading-relaxed opacity-70">
                        You require the buyer to activate shipping insurance
                      </div>
                    </RadioGroupItemText>
                  </RadioGroupItem>
                  <RadioGroupItem value="optional">
                    <RadioGroupItemControl />
                    <RadioGroupItemText>
                      <div class="font-medium">Optional</div>
                      <div class="mt-1 text-xs leading-relaxed opacity-70">
                        You give the buyer the option to activate shipping insurance
                      </div>
                    </RadioGroupItemText>
                  </RadioGroupItem>
                </RadioGroupRoot>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Shipping Service</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed opacity-70">
                    Configure shipping services according to your product type.
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <RadioGroupRoot class="w-72" defaultValue="standard">
                  <RadioGroupItem value="standard">
                    <RadioGroupItemControl />
                    <RadioGroupItemText>Standard</RadioGroupItemText>
                  </RadioGroupItem>
                  <RadioGroupItem value="custom">
                    <RadioGroupItemControl />
                    <RadioGroupItemText>Custom</RadioGroupItemText>
                  </RadioGroupItem>
                </RadioGroupRoot>
                <div class="mt-3 text-xs leading-relaxed opacity-70">
                  The delivery service for this product will be the same as in the
                  <a class="text-primary" href="">Shipping Settings</a>.
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start xl:flex-row">
              <div class="w-full xl:mr-10 xl:w-64">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Pre-order</div>
                  </div>
                </div>
              </div>
              <div class="mt-3 w-full flex-1 xl:mt-0">
                <SwitchRoot>
                  <SwitchControl />
                  <SwitchLabel class="text-xs font-normal leading-relaxed opacity-70">
                    Activate PreOrder if you need a longer shipping process.
                    <a class="text-primary" href="">Learn more</a>.
                  </SwitchLabel>
                </SwitchRoot>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <!-- END: Weight & Shipping -->
      <div class="mt-8 flex flex-col justify-end gap-4 md:flex-row">
        <Box class="bg-none" as-child>
          <Button variant="ghost" class="box w-full py-3 md:w-64" type="button"> Cancel </Button>
        </Box>
        <Box class="bg-none" as-child>
          <Button variant="ghost" class="box w-full py-3 md:w-64" type="button">
            Save &amp; Add New Product
          </Button>
        </Box>
        <Button class="box w-full py-3 md:w-64" type="button" variant="primary"> Save </Button>
      </div>
    </div>
    <div class="col-span-2 hidden 2xl:block">
      <div class="sticky top-0 pt-5">
        <ul
          class="before:bg-foreground/10 relative before:absolute before:left-0 before:z-[-1] before:h-full before:w-[2px] before:content-['']"
        >
          <li
            class="[&.active]:border-primary [&.active]:text-primary active mb-4 border-l-2 border-transparent py-1 pl-5 opacity-70 [&.active]:font-medium [&.active]:opacity-100"
          >
            <a href="">Upload Product</a>
          </li>
          <li
            class="[&.active]:border-primary [&.active]:text-primary mb-4 border-l-2 border-transparent py-1 pl-5 opacity-70 [&.active]:font-medium [&.active]:opacity-100"
          >
            <a href="">Product Information</a>
          </li>
          <li
            class="[&.active]:border-primary [&.active]:text-primary mb-4 border-l-2 border-transparent py-1 pl-5 opacity-70 [&.active]:font-medium [&.active]:opacity-100"
          >
            <a href="">Product Detail</a>
          </li>
          <li
            class="[&.active]:border-primary [&.active]:text-primary mb-4 border-l-2 border-transparent py-1 pl-5 opacity-70 [&.active]:font-medium [&.active]:opacity-100"
          >
            <a href="">Product Variant</a>
          </li>
          <li
            class="[&.active]:border-primary [&.active]:text-primary mb-4 border-l-2 border-transparent py-1 pl-5 opacity-70 [&.active]:font-medium [&.active]:opacity-100"
          >
            <a href="">Product Variant (Details)</a>
          </li>
          <li
            class="[&.active]:border-primary [&.active]:text-primary mb-4 border-l-2 border-transparent py-1 pl-5 opacity-70 [&.active]:font-medium [&.active]:opacity-100"
          >
            <a href="">Product Management</a>
          </li>
          <li
            class="[&.active]:border-primary [&.active]:text-primary mb-4 border-l-2 border-transparent py-1 pl-5 opacity-70 [&.active]:font-medium [&.active]:opacity-100"
          >
            <a href="">Weight &amp; Shipping</a>
          </li>
        </ul>
        <div
          class="bg-(--color)/10 border-(--color)/20 box text-(--color) box relative mt-10 border p-5 [--color:var(--color-warning)] rounded-(--radius)"
        >
          <Lucide
            class="text-warning/80 absolute right-0 top-0 mr-3 mt-5 size-12 stroke-[.8]"
            icon="Lightbulb"
          />
          <h2 class="text-lg font-medium">Tips</h2>
          <div class="mt-5 font-medium">Price</div>
          <div class="mt-2 text-xs leading-relaxed opacity-70">
            <div>
              The image format is .jpg .jpeg .png and a minimum size of 300 x 300 pixels (For
              optimal images use a minimum size of 700 x 700 pixels).
            </div>
            <div class="mt-2">
              Select product photos or drag and drop up to 5 photos at once here. Include min. 3
              attractive photos to make the product more attractive to buyers.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
