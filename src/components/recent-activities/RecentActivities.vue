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
  <!-- BEGIN: Recent Activities -->
  <div class="flex h-10 items-center">
    <h2 class="me-5 truncate text-lg font-medium">Recent Activities</h2>
    <a class="text-primary ms-auto truncate" href=""> Show More </a>
  </div>
  <div
    class="before:bg-foreground/10 relative mt-5 before:absolute before:ms-5 before:mt-5 before:block before:h-[85%] before:w-px"
  >
    <div class="relative mb-3 flex items-center">
      <div
        class="before:bg-foreground/10 before:absolute before:ms-5 before:mt-5 before:block before:h-px before:w-20"
      >
        <AvatarRoot class="size-11">
          <AvatarFallback>PA</AvatarFallback>
          <AvatarImage :src="fakers[9]!['photos'][0]" alt="avatar" />
        </AvatarRoot>
      </div>
      <Box class="z-10 ms-4 flex-1 px-5 py-3 before:hidden">
        <div class="flex items-center">
          <div class="font-medium">
            {{ fakers[9]!['users'][0]!['name'] }}
          </div>
          <div class="ms-auto text-xs opacity-70">07:00 PM</div>
        </div>
        <div class="mt-1 opacity-70">Has joined the team</div>
      </Box>
    </div>
    <div class="relative mb-3 flex items-center">
      <div
        class="before:bg-foreground/10 before:absolute before:ms-5 before:mt-5 before:block before:h-px before:w-20"
      >
        <AvatarRoot class="size-11">
          <AvatarFallback>PA</AvatarFallback>
          <AvatarImage :src="fakers[8]!['photos'][0]" alt="avatar" />
        </AvatarRoot>
      </div>
      <Box class="z-10 ms-4 flex-1 px-5 py-3 before:hidden">
        <div class="flex items-center">
          <div class="font-medium">
            {{ fakers[8]!['users'][0]!['name'] }}
          </div>
          <div class="ms-auto text-xs opacity-70">07:00 PM</div>
        </div>
        <div>
          <div class="mt-1 opacity-70">Added 3 new photos</div>
          <div class="mt-2 flex gap-2">
            <AvatarRoot class="size-8 rounded-lg border-none ring-0">
              <AvatarFallback>PA</AvatarFallback>
              <AvatarImage :src="fakers[6]!['photos'][0]" alt="avatar" />
            </AvatarRoot>
            <AvatarRoot class="size-8 rounded-lg border-none ring-0">
              <AvatarFallback>PA</AvatarFallback>
              <AvatarImage :src="fakers[6]!['photos'][1]" alt="avatar" />
            </AvatarRoot>
            <AvatarRoot class="size-8 rounded-lg border-none ring-0">
              <AvatarFallback>PA</AvatarFallback>
              <AvatarImage :src="fakers[6]!['photos'][2]" alt="avatar" />
            </AvatarRoot>
          </div>
        </div>
      </Box>
    </div>
    <div class="my-4 text-center text-xs opacity-70">12 November</div>
    <div class="relative mb-3 flex items-center">
      <div
        class="before:bg-foreground/10 before:absolute before:ms-5 before:mt-5 before:block before:h-px before:w-20"
      >
        <AvatarRoot class="size-11">
          <AvatarFallback>PA</AvatarFallback>
          <AvatarImage :src="fakers[7]!['photos'][0]" alt="avatar" />
        </AvatarRoot>
      </div>
      <Box class="z-10 ms-4 flex-1 px-5 py-3 before:hidden">
        <div class="flex items-center">
          <div class="font-medium">
            {{ fakers[7]!['users'][0]!['name'] }}
          </div>
          <div class="ms-auto text-xs opacity-70">07:00 PM</div>
        </div>
        <div class="mt-1 opacity-70">
          Has changed
          <a class="text-primary" href="">
            {{ fakers[7]!['products'][0]!['name'] }}
          </a>
          price and description
        </div>
      </Box>
    </div>
    <div class="relative mb-3 flex items-center">
      <div
        class="before:bg-foreground/10 before:absolute before:ms-5 before:mt-5 before:block before:h-px before:w-20"
      >
        <AvatarRoot class="size-11">
          <AvatarFallback>PA</AvatarFallback>
          <AvatarImage :src="fakers[6]!['photos'][0]" alt="avatar" />
        </AvatarRoot>
      </div>
      <Box class="z-10 ms-4 flex-1 px-5 py-3 before:hidden">
        <div class="flex items-center">
          <div class="font-medium">
            {{ fakers[6]!['users'][0]!['name'] }}
          </div>
          <div class="ms-auto text-xs opacity-70">07:00 PM</div>
        </div>
        <div class="mt-1 opacity-70">
          Has changed
          <a class="text-primary" href="">
            {{ fakers[6]!['products'][0]!['name'] }}
          </a>
          description
        </div>
      </Box>
    </div>
  </div>
  <!-- END: Recent Activities -->
</template>
