<script lang="ts" setup>
import fakers from '@/utils/faker'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Lucide } from '@/components/ui/lucide'
</script>

<template>
  <div class="flex flex-col items-center sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">Transaction Details</h2>
    <div class="mt-4 flex w-full sm:mt-0 sm:w-auto">
      <Button class="mr-2" look="outline" variant="primary"> Print </Button>
      <MenuRoot class="ml-auto w-auto sm:ml-0">
        <MenuTrigger as-child>
          <Box class="px-2" as-child>
            <Button variant="ghost" class="box flex items-center">
              <span class="flex h-5 w-5 items-center justify-center">
                <Lucide class="size-4" icon="Plus" />
              </span>
            </Button>
          </Box>
        </MenuTrigger>
        <MenuPositioner>
          <MenuContent class="w-40">
            <MenuItem value="print"> <Lucide class="mr-2 size-4" icon="Printer" /> Print </MenuItem>
            <MenuItem value="excel">
              <Lucide class="mr-2 size-4" icon="FileText" /> Export to Excel
            </MenuItem>
            <MenuItem value="pdf">
              <Lucide class="mr-2 size-4" icon="FileText" /> Export to PDF
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </MenuRoot>
    </div>
  </div>
  <!-- BEGIN: Transaction Details -->
  <div class="mt-5 grid grid-cols-11 gap-5">
    <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
      <Box>
        <div class="mb-5 flex items-center border-b border-foreground/15 pb-5">
          <div class="truncate text-base font-medium">Transaction Details</div>
          <a class="text-primary ml-auto flex items-center" href="">
            <Lucide class="mr-2 size-4" icon="Edit" /> Change Status
          </a>
        </div>
        <div class="flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="Clipboard" />
          Invoice:
          <a class="ml-1 underline decoration-dotted" href=""> INV/20220217/MPL/2053411933 </a>
        </div>
        <div class="mt-3 flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="Calendar" />
          Purchase Date: 24 March 2022
        </div>
        <div class="mt-3 flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="Clock" />
          Transaction Status:
          <Badge class="ml-2" variant="success" look="outline"> Completed </Badge>
        </div>
      </Box>
      <Box class="mt-8">
        <div class="mb-5 flex items-center border-b border-foreground/15 pb-5">
          <div class="truncate text-base font-medium">Buyer Details</div>
          <a class="text-primary ml-auto flex items-center" href="">
            <Lucide class="mr-2 size-4" icon="Edit" /> View Details
          </a>
        </div>
        <div class="flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="Clipboard" />
          Name:
          <a class="ml-1 underline decoration-dotted" href="">
            {{ fakers[0]!['users'][0]!['name'] }}
          </a>
        </div>
        <div class="mt-3 flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="Calendar" />
          Phone Number: +71828273732
        </div>
        <div class="mt-3 flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="MapPin" />
          Address: 260 W. Storm Street New York, NY 10025.
        </div>
      </Box>
      <Box class="mt-8">
        <div class="mb-5 flex items-center border-b border-foreground/15 pb-5">
          <div class="truncate text-base font-medium">Payment Details</div>
        </div>
        <div class="flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="Clipboard" />
          Payment Method:
          <div class="ml-auto">Direct bank transfer</div>
        </div>
        <div class="mt-3 flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="CreditCard" />
          Total Price (2 items):
          <div class="ml-auto">$12,500.00</div>
        </div>
        <div class="mt-3 flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="CreditCard" />
          Total Shipping Cost (800 gr):
          <div class="ml-auto">$1,500.00</div>
        </div>
        <div class="mt-3 flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="CreditCard" />
          Shipping Insurance:
          <div class="ml-auto">$600.00</div>
        </div>
        <div class="mt-5 flex items-center border-t border-foreground/15 pt-5 font-medium">
          <Lucide class="mr-2 size-4 opacity-70" icon="CreditCard" />
          Grand Total:
          <div class="ml-auto">$15,000.00</div>
        </div>
      </Box>
      <Box class="mt-8">
        <div class="mb-5 flex items-center border-b border-foreground/15 pb-5">
          <div class="truncate text-base font-medium">Shipping Information</div>
          <a class="text-primary ml-auto flex items-center" href="">
            <Lucide class="mr-2 size-4" icon="MapPin" /> Tracking Info
          </a>
        </div>
        <div class="flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="Clipboard" />
          Courier: Left4code Express
        </div>
        <div class="mt-3 flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="Calendar" />
          Tracking Number: 003005580322
          <Lucide class="ml-2 size-4 opacity-70" icon="Copy" />
        </div>
        <div class="mt-3 flex items-center">
          <Lucide class="mr-2 size-4 opacity-70" icon="MapPin" />
          Address: 260 W. Storm Street New York, NY 10025.
        </div>
      </Box>
    </div>
    <div class="col-span-12 lg:col-span-7 2xl:col-span-8">
      <Box>
        <div class="mb-5 flex items-center border-b border-foreground/15 pb-5">
          <div class="truncate text-base font-medium">Order Details</div>
          <a class="text-primary ml-auto flex items-center" href="">
            <Lucide class="mr-2 size-4" icon="Plus" /> Add Notes
          </a>
        </div>
        <Table class="-mt-3">
          <TableHeader>
            <TableRow class="[&_th]:border-transparent [&_th]:py-5">
              <TableHead> Product Name </TableHead>
              <TableHead class="text-right"> Unit Price </TableHead>
              <TableHead class="text-right"> QTY </TableHead>
              <TableHead class="text-right"> Total </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="(faker, index) in fakers.slice(0, 8)"
              :key="index"
              class="[&_td]:border-transparent [&_td]:py-3"
            >
              <TableCell>
                <div class="flex items-center">
                  <div
                    class="border-(--color)/5 border-3 ring-(--color)/25 relative block size-11 flex-none overflow-hidden rounded-xl ring-1 [--color:var(--color-primary)]"
                  >
                    <TooltipRoot>
                      <TooltipTrigger as-child>
                        <img
                          class="absolute top-0 size-full overflow-hidden object-cover"
                          :src="faker['images'][0]"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </TooltipTrigger>
                      <TooltipPositioner>
                        <TooltipContent>{{ 'Uploaded at ' + faker['dates'][2] }}</TooltipContent>
                      </TooltipPositioner>
                    </TooltipRoot>
                  </div>
                  <a class="ml-4 whitespace-nowrap font-medium" href="">
                    {{ faker['products'][0]!['name'] }}
                  </a>
                </div>
              </TableCell>
              <TableCell class="text-right"> ${{ faker['totals'][0] + ',000.00' }} </TableCell>
              <TableCell class="text-right">2</TableCell>
              <TableCell class="text-right"> ${{ faker['totals'][0]! * 2 + ',000.00' }} </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </div>
  </div>
  <!-- END: Transaction Details -->
</template>
