<script lang="ts" setup>
import { ref } from 'vue'
import fakers from '@/utils/faker'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Box } from '@/components/ui/box'
import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuCheckboxItem,
} from '@/components/ui/menu'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  CarouselRoot,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselItemGroup,
  CarouselItem,
} from '@/components/ui/carousel'
import {
  DatePickerRoot,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerYearSelect,
  DatePickerMonthSelect,
  DatePickerView,
  DatePickerViewControl,
  DatePickerPrevTrigger,
  DatePickerNextTrigger,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableHead,
  DatePickerTableRow,
  DatePickerTableHeader,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerContext,
} from '@/components/ui/datepicker'
import {
  PaginationContext,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import { Map } from '@/components/ui/map'
import { Lucide } from '@/components/ui/lucide'
import { Line1, Line2, Pie1, Donut1, Donut2 } from '@/components/chart-presets'

const pc = ref(false)
const electronic = ref(false)
const smartphone = ref(false)
const photography = ref(false)
const sport = ref(false)
</script>

<template>
  <!-- BEGIN: Weekly Top Products -->
  <div class="block h-10 items-center sm:flex">
    <h2 class="me-5 truncate text-lg font-medium">Weekly Top Products</h2>
    <div class="mt-3 flex items-center sm:ms-auto sm:mt-0">
      <Box as-child>
        <Button variant="ghost" class="box flex items-center">
          <Lucide class="hidden sm:block" icon="FileText" />
          Export to Excel
        </Button>
      </Box>
      <Box as-child>
        <Button variant="ghost" class="box ms-3 flex items-center">
          <Lucide class="hidden sm:block" icon="FileText" />
          Export to PDF
        </Button>
      </Box>
    </div>
  </div>
  <div class="mt-8 overflow-auto sm:mt-0 lg:overflow-visible">
    <Table variant="boxed" class="sm:mt-2">
      <TableHeader>
        <TableRow>
          <TableHead>IMAGES</TableHead>
          <TableHead>PRODUCT NAME</TableHead>
          <TableHead class="text-center">STOCK</TableHead>
          <TableHead class="text-center">STATUS</TableHead>
          <TableHead class="text-center">ACTIONS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(faker, fakerKey) in fakers.slice(0, 4)" :key="fakerKey">
          <TableCell class="font-medium">
            <div class="flex">
              <AvatarRoot class="size-11 bg-background rounded-full">
                <AvatarFallback>PA</AvatarFallback>
                <AvatarImage :src="faker['images'][0]" alt="avatar" />
              </AvatarRoot>
              <AvatarRoot class="size-11 bg-background rounded-full -ms-5">
                <AvatarFallback>PA</AvatarFallback>
                <AvatarImage :src="faker['images'][1]" alt="avatar" />
              </AvatarRoot>
              <AvatarRoot class="size-11 bg-background rounded-full -ms-5">
                <AvatarFallback>PA</AvatarFallback>
                <AvatarImage :src="faker['images'][2]" alt="avatar" />
              </AvatarRoot>
            </div>
          </TableCell>
          <TableCell>
            {{ faker.products[0]!.name }}
          </TableCell>
          <TableCell class="text-center">{{ faker.stocks[0] }}</TableCell>
          <TableCell class="text-center">
            <Badge look="outline" :variant="faker.trueFalse[0] ? 'success' : 'danger'">
              <Lucide icon="CheckSquare" />
              {{ faker['trueFalse'][0] ? 'Active' : 'Inactive' }}
            </Badge>
          </TableCell>
          <TableCell>
            <div class="flex items-center justify-center">
              <a class="me-3 flex items-center" href="">
                <Lucide class="me-1" icon="CheckSquare" />
                Edit
              </a>
              <a class="text-danger flex items-center" href="">
                <Lucide class="me-1" icon="Trash" />
                Delete
              </a>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
  <div class="mt-3 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
    <PaginationRoot
      :count="5000"
      :pageSize="10"
      :siblingCount="2"
      class="w-full sm:me-auto sm:w-auto"
    >
      <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
      <PaginationContext v-slot="{ pagination }">
        <template v-for="(page, index) in pagination?.pages" :key="index">
          <PaginationItem v-if="page.type === 'page'" v-bind="{ ...page }">
            {{ page.value }}
          </PaginationItem>
          <PaginationEllipsis v-else :index="index" />
        </template>
      </PaginationContext>
      <PaginationNextTrigger>Next</PaginationNextTrigger>
    </PaginationRoot>
    <NativeSelect class="box mt-3 w-20 sm:mt-0">
      <NativeSelectOption>10</NativeSelectOption>
      <NativeSelectOption>25</NativeSelectOption>
      <NativeSelectOption>35</NativeSelectOption>
      <NativeSelectOption>50</NativeSelectOption>
    </NativeSelect>
  </div>
  <!-- END: Weekly Top Products -->
</template>
