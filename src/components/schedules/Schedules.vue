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
  <!-- BEGIN: Schedules -->
  <div class="flex h-10 items-center">
    <h2 class="me-5 truncate text-lg font-medium">Schedules</h2>
    <a class="text-primary ms-auto flex items-center truncate" href="">
      <Lucide class="me-1" icon="Plus" /> Add New Schedules
    </a>
  </div>
  <div class="mt-5">
    <Box>
      <div class="flex">
        <Lucide class="size-5 opacity-70" icon="ChevronLeft" />
        <div class="mx-auto text-base font-medium">April</div>
        <Lucide class="size-5 opacity-70" icon="ChevronRight" />
      </div>
      <div class="mt-5 grid grid-cols-7 gap-4 text-center [&>span]:text-sm [&>span]:shadow-none">
        <div class="font-medium">Su</div>
        <div class="font-medium">Mo</div>
        <div class="font-medium">Tu</div>
        <div class="font-medium">We</div>
        <div class="font-medium">Th</div>
        <div class="font-medium">Fr</div>
        <div class="font-medium">Sa</div>
        <Badge variant="ghost" class="opacity-70">29</Badge>
        <Badge variant="ghost" class="opacity-70">30</Badge>
        <Badge variant="ghost" class="opacity-70">31</Badge>
        <Badge variant="ghost">1</Badge>
        <Badge variant="ghost">2</Badge>
        <Badge variant="ghost">3</Badge>
        <Badge variant="ghost">4</Badge>
        <Badge variant="ghost">5</Badge>
        <Badge variant="success" look="outline">6</Badge>
        <Badge variant="ghost">7</Badge>
        <Badge variant="primary" look="outline">8</Badge>
        <Badge variant="ghost">9</Badge>
        <Badge variant="ghost">10</Badge>
        <Badge variant="ghost">11</Badge>
        <Badge variant="ghost">12</Badge>
        <Badge variant="ghost">13</Badge>
        <Badge variant="ghost">14</Badge>
        <Badge variant="ghost">15</Badge>
        <Badge variant="ghost">16</Badge>
        <Badge variant="ghost">17</Badge>
        <Badge variant="ghost">18</Badge>
        <Badge variant="ghost">19</Badge>
        <Badge variant="ghost">20</Badge>
        <Badge variant="ghost">21</Badge>
        <Badge variant="ghost">22</Badge>
        <Badge variant="pending" look="outline">23</Badge>
        <Badge variant="ghost">24</Badge>
        <Badge variant="ghost">25</Badge>
        <Badge variant="ghost">26</Badge>
        <Badge variant="warning" look="outline">27</Badge>
        <Badge variant="ghost">28</Badge>
        <Badge variant="ghost">29</Badge>
        <Badge variant="ghost">30</Badge>
        <Badge variant="ghost" class="opacity-70">1</Badge>
        <Badge variant="ghost" class="opacity-70">2</Badge>
        <Badge variant="ghost" class="opacity-70">3</Badge>
        <Badge variant="ghost" class="opacity-70">4</Badge>
        <Badge variant="ghost" class="opacity-70">5</Badge>
        <Badge variant="ghost" class="opacity-70">6</Badge>
        <Badge variant="ghost" class="opacity-70">7</Badge>
        <Badge variant="ghost" class="opacity-70">8</Badge>
        <Badge variant="ghost" class="opacity-70">9</Badge>
      </div>
      <div class="mt-5 border-t border-foreground/10 pt-5">
        <div class="flex items-center">
          <div
            class="bg-(--color)/20 border-(--color)/60 me-3 size-2 rounded-full border [--color:var(--color-pending)]"
          ></div>
          <span class="truncate">UI/UX Workshop</span>
          <span class="font-medium xl:ms-auto">23th</span>
        </div>
        <div class="mt-4 flex items-center">
          <div
            class="bg-(--color)/20 border-(--color)/60 me-3 size-2 rounded-full border [--color:var(--color-primary)]"
          ></div>
          <span class="truncate"> VueJs Frontend Development </span>
          <span class="font-medium xl:ms-auto">10th</span>
        </div>
        <div class="mt-4 flex items-center">
          <div
            class="bg-(--color)/20 border-(--color)/60 me-3 size-2 rounded-full border [--color:var(--color-warning)]"
          ></div>
          <span class="truncate">Laravel Rest API</span>
          <span class="font-medium xl:ms-auto">31th</span>
        </div>
      </div>
    </Box>
  </div>
  <!-- END: Schedules -->
</template>
