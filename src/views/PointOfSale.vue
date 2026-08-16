<script lang="ts" setup>
import { ref } from 'vue'
import fakers from '@/utils/faker'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import {
  DialogRoot,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
} from '@/components/ui/dialog'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Lucide } from '@/components/ui/lucide'
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'

const newOrderDialogOpen = ref(false)
const addItemDialogOpen = ref(false)
</script>

<template>
  <div>
    <div class="flex flex-col items-center sm:flex-row">
      <h2 class="mr-auto text-lg font-medium">Point of Sale</h2>
      <div class="mt-4 flex w-full sm:mt-0 sm:w-auto">
        <Button
          class="box mr-2"
          href="#"
          as="a"
          variant="primary"
          look="outline"
          @click.prevent="newOrderDialogOpen = true"
        >
          New Order
        </Button>
        <MenuRoot class="ml-auto sm:ml-0">
          <MenuTrigger as-child>
            <Box class="px-2" as-child>
              <Button variant="ghost" class="box flex items-center">
                <span class="flex size-5 items-center justify-center">
                  <Lucide class="size-4" icon="ChevronDown" />
                </span>
              </Button>
            </Box>
          </MenuTrigger>
          <MenuPositioner>
            <MenuContent class="w-auto">
              <MenuItem value="0">
                <Lucide class="mr-2 size-4" icon="Activity" />
                <span class="truncate"> INV-0206020 - {{ fakers[3]!['users'][0]!['name'] }} </span>
              </MenuItem>
              <MenuItem value="1">
                <Lucide class="mr-2 size-4" icon="Activity" />
                <span class="truncate"> INV-0206022 - {{ fakers[4]!['users'][0]!['name'] }} </span>
              </MenuItem>
              <MenuItem value="2">
                <Lucide class="mr-2 size-4" icon="Activity" />
                <span class="truncate"> INV-0206021 - {{ fakers[5]!['users'][0]!['name'] }} </span>
              </MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      </div>
    </div>
    <div class="mt-5 grid grid-cols-12 gap-5">
      <!-- BEGIN: Item List -->
      <div class="col-span-12 lg:col-span-8">
        <div class="lg:flex">
          <div class="relative">
            <Input
              class="box w-full px-4 py-3 pr-10 lg:w-64"
              type="text"
              placeholder="Search item..."
            />
            <Lucide
              class="absolute inset-y-0 right-0 my-auto mr-3 size-4 opacity-70"
              icon="Search"
            />
          </div>
          <NativeSelect class="box ml-auto mt-3 w-full lg:mt-0 lg:w-auto">
            <NativeSelectOption>Sort By</NativeSelectOption>
            <NativeSelectOption>A to Z</NativeSelectOption>
            <NativeSelectOption>Z to A</NativeSelectOption>
            <NativeSelectOption>Lowest Price</NativeSelectOption>
            <NativeSelectOption>Highest Price</NativeSelectOption>
          </NativeSelect>
        </div>
        <div class="mt-5 grid grid-cols-12 gap-x-5 gap-y-4">
          <Box
            raised="single"
            class="group col-span-12 cursor-pointer sm:col-span-4 2xl:col-span-3 [&.active]:border-primary/25 [&.active]:bg-primary/10 [&.active]:text-primary"
          >
            <div class="text-base font-medium">Soup</div>
            <div class="mt-1 text-xs opacity-70">5 Items</div>
          </Box>
          <Box
            raised="single"
            class="group col-span-12 cursor-pointer sm:col-span-4 2xl:col-span-3 active [&.active]:border-primary/25 [&.active]:bg-primary/10 [&.active]:text-primary"
          >
            <div class="text-base font-medium">Pancake &amp; Toast</div>
            <div class="mt-1 text-xs opacity-70">8 Items</div>
          </Box>
          <Box
            raised="single"
            class="group col-span-12 cursor-pointer sm:col-span-4 2xl:col-span-3 [&.active]:border-primary/25 [&.active]:bg-primary/10 [&.active]:text-primary"
          >
            <div class="text-base font-medium">Pasta</div>
            <div class="mt-1 text-xs opacity-70">4 Items</div>
          </Box>
          <Box
            raised="single"
            class="group col-span-12 cursor-pointer sm:col-span-4 2xl:col-span-3 [&.active]:border-primary/25 [&.active]:bg-primary/10 [&.active]:text-primary"
          >
            <div class="text-base font-medium">Waffle</div>
            <div class="mt-1 text-xs opacity-70">3 Items</div>
          </Box>
          <Box
            raised="single"
            class="group col-span-12 cursor-pointer sm:col-span-4 2xl:col-span-3 [&.active]:border-primary/25 [&.active]:bg-primary/10 [&.active]:text-primary"
          >
            <div class="text-base font-medium">Snacks</div>
            <div class="mt-1 text-xs opacity-70">8 Items</div>
          </Box>
          <Box
            raised="single"
            class="group col-span-12 cursor-pointer sm:col-span-4 2xl:col-span-3 [&.active]:border-primary/25 [&.active]:bg-primary/10 [&.active]:text-primary"
          >
            <div class="text-base font-medium">Deserts</div>
            <div class="mt-1 text-xs opacity-70">8 Items</div>
          </Box>
          <Box
            raised="single"
            class="group col-span-12 cursor-pointer sm:col-span-4 2xl:col-span-3 [&.active]:border-primary/25 [&.active]:bg-primary/10 [&.active]:text-primary"
          >
            <div class="text-base font-medium">Beverage</div>
            <div class="mt-1 text-xs opacity-70">9 Items</div>
          </Box>
        </div>
        <div class="mt-10 grid grid-cols-12 gap-x-5 gap-y-8 border-t border-foreground/15 pt-5">
          <a
            v-for="(faker, index) in fakers.slice(0, 8)"
            :key="index"
            class="col-span-12 block sm:col-span-4 2xl:col-span-3"
            href="#"
            @click.prevent="addItemDialogOpen = true"
          >
            <Box class="relative p-3">
              <div class="relative block flex-none before:block before:w-full before:pt-[100%]">
                <div class="image-fit absolute left-0 top-0 h-full w-full">
                  <img
                    class="rounded-lg"
                    :src="faker['foods'][0]!['image']"
                    alt="Midone - Tailwind Admin Dashboard Template"
                  />
                </div>
              </div>
              <div class="mt-3 block truncate text-center font-medium">
                {{ faker['foods'][0]!['name'] }}
              </div>
            </Box>
          </a>
        </div>
      </div>
      <!-- END: Item List -->
      <!-- BEGIN: Ticket -->
      <TabsRoot defaultValue="ticket" class="col-span-12 lg:col-span-4">
        <Box class="p-4">
          <TabsList class="m-0 w-full">
            <TabsTrigger class="w-1/2" value="ticket">Ticket</TabsTrigger>
            <TabsTrigger class="w-1/2" value="details">Details</TabsTrigger>
          </TabsList>
        </Box>
        <TabsContent value="ticket" class="mt-2 space-y-5">
          <Box class="p-2">
            <a
              v-for="(faker, index) in fakers.slice(0, 5)"
              :key="index"
              class="hover:bg-foreground/5 flex cursor-pointer items-center rounded-lg px-4 py-3 transition duration-300 ease-in-out"
              href="#"
              @click.prevent="addItemDialogOpen = true"
            >
              <div class="mr-1 max-w-[50%] truncate">
                {{ faker['foods'][0]!['name'] }}
              </div>
              <div class="opacity-70">x 1</div>
              <Lucide class="ml-2 size-4 opacity-70" icon="Edit" />
              <div class="ml-auto font-medium">${{ faker['totals'][0] }}</div>
            </a>
          </Box>
          <Box>
            <div class="flex gap-2">
              <Input class="bg-foreground/[.03]" type="text" placeholder="Use coupon code..." />
              <Button variant="primary" look="outline"> Apply </Button>
            </div>
          </Box>
          <Box>
            <div class="flex">
              <div class="mr-auto">Subtotal</div>
              <div class="font-medium">$250</div>
            </div>
            <div class="mt-4 flex">
              <div class="mr-auto">Discount</div>
              <div class="text-danger font-medium">-$20</div>
            </div>
            <div class="mt-4 flex">
              <div class="mr-auto">Tax</div>
              <div class="font-medium">15%</div>
            </div>
            <div class="mt-4 flex border-t border-foreground/15 pt-4">
              <div class="mr-auto text-base font-medium">Total Charge</div>
              <div class="text-base font-medium">$220</div>
            </div>
          </Box>
          <div>
            <Button class="box ml-auto w-full" variant="primary"> Charge </Button>
            <Box as-child>
              <Button class="box mt-3 w-full" variant="ghost"> Clear Items </Button>
            </Box>
          </div>
        </TabsContent>
        <TabsContent value="details" class="mt-2">
          <Box>
            <div class="flex items-center border-b border-foreground/15 pb-5">
              <div>
                <div class="opacity-70">Time</div>
                <div class="mt-1">02/06/20 02:10 PM</div>
              </div>
              <Lucide class="ml-auto size-4 opacity-70" icon="Clock" />
            </div>
            <div class="flex items-center border-b border-foreground/15 py-5">
              <div>
                <div class="opacity-70">Customer</div>
                <div class="mt-1">{{ fakers[0]!['users'][0]!['name'] }}</div>
              </div>
              <Lucide class="ml-auto size-4 opacity-70" icon="User" />
            </div>
            <div class="flex items-center border-b border-foreground/15 py-5">
              <div>
                <div class="opacity-70">People</div>
                <div class="mt-1">3</div>
              </div>
              <Lucide class="ml-auto size-4 opacity-70" icon="Users" />
            </div>
            <div class="flex items-center pt-5">
              <div>
                <div class="opacity-70">Table</div>
                <div class="mt-1">21</div>
              </div>
              <Lucide class="ml-auto size-4 opacity-70" icon="Mic" />
            </div>
          </Box>
        </TabsContent>
      </TabsRoot>
      <!-- END: Ticket -->
    </div>
    <!-- BEGIN: New Order Modal -->
    <DialogRoot
      :open="newOrderDialogOpen"
      @openChange="(details) => (newOrderDialogOpen = details.open)"
    >
      <DialogContent>
        <DialogTitle>New Order</DialogTitle>
        <DialogDescription>
          Enter the details of the new product to add it to your inventory. Ensure that all required
          fields are filled correctly.
        </DialogDescription>
        <div class="grid grid-cols-12 gap-4 gap-y-3">
          <Field class="col-span-12">
            <FieldLabel for="pos-form-1">Name</FieldLabel>
            <Input id="pos-form-1" type="text" placeholder="Customer name" />
          </Field>
          <Field class="col-span-12">
            <FieldLabel for="pos-form-2">Table</FieldLabel>
            <Input id="pos-form-2" type="text" placeholder="Customer table" />
          </Field>
          <Field class="col-span-12">
            <FieldLabel for="pos-form-3">Number of People</FieldLabel>
            <Input id="pos-form-3" type="text" placeholder="People" />
          </Field>
        </div>
        <div class="flex gap-2 justify-end mt-7">
          <DialogCloseTrigger> Cancel </DialogCloseTrigger>
          <Button type="button" variant="primary"> Create Ticket </Button>
        </div>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
    <!-- END: New Order Modal -->
    <!-- BEGIN: Add Item Modal -->
    <DialogRoot
      :open="addItemDialogOpen"
      @openChange="(details) => (addItemDialogOpen = details.open)"
    >
      <DialogContent>
        <DialogTitle>{{ fakers[0]!['foods'][0]!['name'] }}</DialogTitle>
        <DialogDescription>
          Fill in the details to add a new product to your inventory. Adjust the initial stock
          quantity as needed to ensure accurate tracking.
        </DialogDescription>
        <div class="grid grid-cols-12 gap-4 gap-y-3">
          <Field class="col-span-12">
            <FieldLabel for="pos-form-4">Quantity</FieldLabel>
            <div class="flex flex-1 gap-1">
              <Button class="w-12" type="button" look="outline"> - </Button>
              <Input
                class="w-24 text-center"
                id="pos-form-4"
                type="text"
                value="2"
                placeholder="Item quantity"
              />
              <Button class="w-12" type="button" look="outline"> + </Button>
            </div>
          </Field>
          <Field class="col-span-12">
            <FieldLabel for="pos-form-5">Notes</FieldLabel>
            <Textarea id="pos-form-5" placeholder="Item notes" />
          </Field>
        </div>
        <div class="flex gap-2 justify-end mt-7">
          <DialogCloseTrigger> Cancel </DialogCloseTrigger>
          <Button type="button" variant="primary"> Add Item </Button>
        </div>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
    <!-- END: Add Item Modal -->
  </div>
</template>
