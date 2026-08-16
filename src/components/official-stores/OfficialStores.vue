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
  <!-- BEGIN: Official Stores -->
  <div class="block h-10 items-center sm:flex">
    <h2 class="me-5 truncate text-lg font-medium">Official Store</h2>
    <div class="relative mt-3 sm:ms-auto sm:mt-0">
      <Lucide
        class="[--color:var(--color-foreground)]/50 absolute inset-y-0 start-0 z-10 my-auto ms-3"
        icon="MapPin"
      />
      <Input class="box pl-10 sm:w-56" type="text" placeholder="Filter by city" />
    </div>
  </div>
  <Box class="mt-12 p-5 sm:mt-5">
    <div>250 Official stores in 21 countries, click the marker to see location details.</div>
    <Map
      class="mt-5 w-full h-[327px]"
      :center="[13.388, 52.517]"
      :zoom="14"
      :markers="{
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { name: 'Cafe Berlin', type: 'cafe' },
            geometry: { type: 'Point', coordinates: [13.388, 52.517] },
          },
          {
            type: 'Feature',
            properties: { name: 'Restaurant Alex', type: 'restaurant' },
            geometry: { type: 'Point', coordinates: [13.39, 52.518] },
          },
          {
            type: 'Feature',
            properties: { name: 'Coffee House', type: 'cafe' },
            geometry: { type: 'Point', coordinates: [13.385, 52.515] },
          },
          {
            type: 'Feature',
            properties: { name: 'Pizza Place', type: 'restaurant' },
            geometry: { type: 'Point', coordinates: [13.392, 52.519] },
          },
          {
            type: 'Feature',
            properties: { name: 'Burger Joint', type: 'restaurant' },
            geometry: { type: 'Point', coordinates: [13.387, 52.516] },
          },
          {
            type: 'Feature',
            properties: { name: 'Starbucks', type: 'cafe' },
            geometry: { type: 'Point', coordinates: [13.391, 52.52] },
          },
          {
            type: 'Feature',
            properties: { name: 'Sushi Bar', type: 'restaurant' },
            geometry: { type: 'Point', coordinates: [13.395, 52.522] },
          },
          {
            type: 'Feature',
            properties: { name: 'Bakery', type: 'cafe' },
            geometry: { type: 'Point', coordinates: [13.383, 52.514] },
          },
          {
            type: 'Feature',
            properties: { name: 'Italian Restaurant', type: 'restaurant' },
            geometry: { type: 'Point', coordinates: [13.398, 52.525] },
          },
          {
            type: 'Feature',
            properties: { name: 'Tea House', type: 'cafe' },
            geometry: { type: 'Point', coordinates: [13.38, 52.512] },
          },
        ],
      }"
    />
  </Box>
  <!-- END: Official Stores -->
</template>
