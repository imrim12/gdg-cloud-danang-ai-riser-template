<script lang="ts" setup>
import { Button } from '@/components/ui/button'
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
import { Lucide } from '@/components/ui/lucide'
</script>

<template>
  <div class="mt-8 flex flex-col items-center sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">Invoice Layout</h2>
    <div class="mt-4 flex w-full sm:mt-0 sm:w-auto">
      <Button look="outline" class="mr-2 shadow-sm" variant="primary"> Print </Button>
      <MenuRoot class="w-auto ml-auto sm:ml-0">
        <MenuTrigger as-child>
          <Box class="px-2" as-child>
            <Button variant="ghost" class="box flex items-center">
              <span class="flex h-5 w-5 items-center justify-center">
                <Lucide class="h-4 w-4" icon="Plus" />
              </span>
            </Button>
          </Box>
        </MenuTrigger>
        <MenuPositioner>
          <MenuContent class="w-40">
            <MenuItem value="word">
              <Lucide class="mr-2 h-4 w-4" icon="File" /> Export Word
            </MenuItem>
            <MenuItem value="pdf">
              <Lucide class="mr-2 h-4 w-4" icon="File" /> Export PDF
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </MenuRoot>
    </div>
  </div>
  <!-- BEGIN: Invoice -->
  <Box class="mt-5">
    <div
      class="bg-primary/[.01] border-primary/20 relative overflow-hidden rounded-xl border text-center sm:text-left before:bg-noise before:absolute before:inset-0 before:opacity-30 after:bg-accent after:absolute after:inset-0 after:opacity-30 after:blur-2xl"
    >
      <div
        class="flex flex-col px-5 pt-10 text-center sm:px-20 sm:pt-20 sm:text-left lg:flex-row lg:pb-20"
      >
        <div class="text-primary text-3xl font-semibold">INVOICE</div>
        <div class="mt-20 lg:ml-auto lg:mt-0 lg:text-right">
          <div class="text-primary text-xl font-medium">Left4code</div>
          <div class="mt-1">left4code@gmail.com</div>
          <div class="mt-1">8023 Amerige Street Harriman, NY 10926.</div>
        </div>
      </div>
      <div
        class="flex flex-col px-5 pb-10 pt-10 text-center sm:px-20 sm:pb-20 sm:text-left lg:flex-row"
      >
        <div>
          <div class="text-base opacity-70">Client Details</div>
          <div class="text-primary mt-2 text-lg font-medium">Arnold Schwarzenegger</div>
          <div class="mt-1">arnodlschwarzenegger@gmail.com</div>
          <div class="mt-1">260 W. Storm Street New York, NY 10025.</div>
        </div>
        <div class="mt-10 lg:ml-auto lg:mt-0 lg:text-right">
          <div class="text-base opacity-70">Receipt</div>
          <div class="text-primary mt-2 text-lg font-medium">#1923195</div>
          <div class="mt-1">Jan 02, 2021</div>
        </div>
      </div>
    </div>
    <div class="px-5 py-10 sm:px-16 sm:py-20">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="whitespace-nowrap border-none pb-6">DESCRIPTION</TableHead>
            <TableHead class="whitespace-nowrap border-none pb-6 text-right">QTY</TableHead>
            <TableHead class="whitespace-nowrap border-none pb-6 text-right">PRICE</TableHead>
            <TableHead class="whitespace-nowrap border-none pb-6 text-right">SUBTOTAL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div class="whitespace-nowrap font-medium">
                Midone - Tailwind Admin Dashboard Template
              </div>
              <div class="mt-0.5 whitespace-nowrap text-sm opacity-70">Regular License</div>
            </TableCell>
            <TableCell class="text-right">2</TableCell>
            <TableCell class="text-right">$25</TableCell>
            <TableCell class="text-right font-medium">$50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div class="whitespace-nowrap font-medium">Vuejs Admin Template</div>
              <div class="mt-0.5 whitespace-nowrap text-sm opacity-70">Regular License</div>
            </TableCell>
            <TableCell class="text-right">1</TableCell>
            <TableCell class="text-right">$25</TableCell>
            <TableCell class="text-right font-medium">$25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div class="whitespace-nowrap font-medium">React Admin Template</div>
              <div class="mt-0.5 whitespace-nowrap text-sm opacity-70">Regular License</div>
            </TableCell>
            <TableCell class="text-right">1</TableCell>
            <TableCell class="text-right">$25</TableCell>
            <TableCell class="text-right font-medium">$25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div class="whitespace-nowrap font-medium">Laravel Admin Template</div>
              <div class="mt-0.5 whitespace-nowrap text-sm opacity-70">Regular License</div>
            </TableCell>
            <TableCell class="text-right">3</TableCell>
            <TableCell class="text-right">$25</TableCell>
            <TableCell class="text-right font-medium">$75</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <div class="flex flex-col-reverse px-5 pb-10 sm:flex-row sm:px-20 sm:pb-20">
      <div class="mt-10 text-center sm:mt-0 sm:text-left">
        <div class="text-base opacity-70">Bank Transfer</div>
        <div class="text-primary mt-2 text-lg font-medium">Elon Musk</div>
        <div class="mt-1 opacity-70">Bank Account : 098347234832</div>
        <div class="mt-1 opacity-70">Code : LFT133243</div>
      </div>
      <div class="text-center sm:ml-auto sm:text-right">
        <div class="text-base opacity-70">Total Amount</div>
        <div class="text-primary mt-2 text-xl font-medium">$20.600.00</div>
        <div class="mt-1 opacity-70">Taxes included</div>
      </div>
    </div>
  </Box>
  <!-- END: Invoice -->
</template>
