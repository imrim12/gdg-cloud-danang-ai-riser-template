<script lang="ts" setup>
import { ref, computed } from 'vue'
import * as combobox from '@zag-js/combobox'
import fakers from '@/utils/faker'
import { AvatarRoot, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import {
  ComboboxRoot,
  ComboboxControl,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItem,
  ComboboxItemText,
} from '@/components/ui/combobox'
import {
  DatePickerRoot,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerClearTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerYearSelect,
  DatePickerMonthSelect,
  DatePickerView,
  DatePickerViewControl,
  DatePickerPrevTrigger,
  DatePickerViewTrigger,
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
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Lucide } from '@/components/ui/lucide'
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu'
import { SwitchRoot, SwitchControl } from '@/components/ui/switch'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from '@/components/ui/tooltip'

// Categories combobox data
const categoryData = [
  { label: 'Horror', code: 'horror' },
  { label: 'Sci-fi', code: 'sci-fi' },
  { label: 'Action', code: 'action' },
  { label: 'Drama', code: 'drama' },
  { label: 'Comedy', code: 'comedy' },
]

const categoryValue = ref(['Horror', 'Action'])
const categoryOptions = ref(categoryData)

const categoryCollection = computed(() =>
  combobox.collection({
    items: categoryOptions.value,
    itemToValue: (item) => item.label,
  }),
)

// Tags combobox data
const tagData = [
  { label: 'Leonardo DiCaprio', code: 'leonardo' },
  { label: 'Johnny Deep', code: 'johnny' },
  { label: 'Robert Downey, Jr', code: 'robert' },
  { label: 'Samuel L. Jackson', code: 'samuel' },
  { label: 'Morgan Freeman', code: 'morgan' },
]

const tagValue = ref(['Leonardo DiCaprio', 'Robert Downey, Jr'])
const tagOptions = ref(tagData)

const tagCollection = computed(() =>
  combobox.collection({
    items: tagOptions.value,
    itemToValue: (item) => item.label,
  }),
)
</script>

<template>
  <div class="flex flex-col items-center sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">Add New Post</h2>
    <div class="mt-4 flex w-full sm:mt-0 sm:w-auto">
      <MenuRoot class="mr-2">
        <MenuTrigger as-child>
          <Box as-child>
            <Button variant="ghost" class="box flex items-center">
              English
              <Lucide class="ml-2 size-4" icon="ChevronDown" />
            </Button>
          </Box>
        </MenuTrigger>
        <MenuPositioner>
          <MenuContent class="w-40">
            <MenuItem value="english">
              <Lucide class="mr-2 size-4" icon="Activity" />
              <span class="truncate">English</span>
            </MenuItem>
            <MenuItem value="indonesian">
              <Lucide class="mr-2 size-4" icon="Activity" />
              <span class="truncate">Indonesian</span>
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </MenuRoot>
      <Box as-child>
        <Button class="box ml-auto mr-2 flex items-center sm:ml-0" type="button" variant="ghost">
          <Lucide class="size-4" icon="Eye" /> Preview
        </Button>
      </Box>
      <MenuRoot class="w-auto">
        <MenuTrigger as-child>
          <Button class="box flex items-center" variant="primary" look="outline">
            <Lucide class="size-4" icon="Save" />
            Save
            <Lucide class="size-4" icon="ChevronDown" />
          </Button>
        </MenuTrigger>
        <MenuPositioner>
          <MenuContent class="w-40">
            <MenuItem value="new-post">
              <Lucide class="mr-2 size-4" icon="FileText" /> As New Post
            </MenuItem>
            <MenuItem value="draft">
              <Lucide class="mr-2 size-4" icon="FileText" /> As Draft
            </MenuItem>
            <MenuItem value="export-pdf">
              <Lucide class="mr-2 size-4" icon="FileText" /> Export to PDF
            </MenuItem>
            <MenuItem value="export-word">
              <Lucide class="mr-2 size-4" icon="FileText" /> Export to Word
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </MenuRoot>
    </div>
  </div>
  <div class="mt-5 grid grid-cols-12 gap-8">
    <!-- BEGIN: Post Content -->
    <div class="col-span-12 lg:col-span-8">
      <Box raised="single">
        <Input type="text" placeholder="Title" />
      </Box>
      <Box class="mt-8">
        <TabsRoot defaultValue="content">
          <TabsList class="w-full">
            <TabsTrigger
              class="w-full sm:w-1/3 inline-flex items-center justify-center"
              value="content"
            >
              <Lucide class="mr-2 size-4" icon="FileText" /> Content
            </TabsTrigger>
            <TabsTrigger
              class="w-full sm:w-1/3 inline-flex items-center justify-center"
              value="meta-title"
            >
              <Lucide class="mr-2 size-4" icon="Code" /> Meta Title
            </TabsTrigger>
            <TabsTrigger
              class="w-full sm:w-1/3 inline-flex items-center justify-center"
              value="keywords"
            >
              <Lucide class="mr-2 size-4" icon="AlignLeft" /> Keywords
            </TabsTrigger>
          </TabsList>
          <TabsContent value="content" class="mt-3.5">
            <div class="rounded-lg border border-foreground/15 p-5">
              <div class="flex items-center border-b border-foreground/15 pb-5 font-medium">
                <Lucide class="mr-2 size-4" icon="ChevronDown" /> Text Content
              </div>
              <div class="mt-5">
                <Textarea placeholder="Write your content here...">Content of the editor.</Textarea>
              </div>
            </div>
            <div class="mt-5 rounded-lg border border-foreground/15 p-5">
              <div class="flex items-center border-b border-foreground/15 pb-5 font-medium">
                <Lucide class="mr-2 size-4" icon="ChevronDown" /> Caption & Images
              </div>
              <div class="mt-5">
                <Field>
                  <FieldLabel for="post-form-7">Caption</FieldLabel>
                  <Input id="post-form-7" type="text" placeholder="Write caption" />
                </Field>
                <Field class="mt-3">
                  <FieldLabel>Upload Image</FieldLabel>
                  <div class="rounded-xl border-2 border-dashed pt-4 border-foreground/15">
                    <div class="flex flex-wrap px-4">
                      <div
                        v-for="(faker, index) in fakers.slice(0, 4)"
                        :key="index"
                        class="image-fit relative mb-5 mr-5 h-24 w-24 cursor-pointer"
                      >
                        <img
                          class="rounded-xl"
                          :src="faker.images[0]"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                        <TooltipRoot>
                          <TooltipTrigger as-child>
                            <div
                              class="bg-(--color)/80 border-(--color) text-medium absolute right-0 top-0 -mr-2 -mt-2 flex size-5 cursor-pointer items-center justify-center rounded-full text-white [--color:var(--color-danger)]"
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
                    <div class="relative flex cursor-pointer items-center px-4 pb-4">
                      <Lucide class="mr-2 size-4" icon="Image" />
                      <span class="text-primary mr-1">Upload a file</span>
                      or drag and drop
                      <Input class="absolute left-0 top-0 h-full w-full opacity-0" type="file" />
                    </div>
                  </div>
                </Field>
              </div>
            </div>
          </TabsContent>
        </TabsRoot>
      </Box>
    </div>
    <!-- END: Post Content -->
    <!-- BEGIN: Post Info -->
    <div class="col-span-12 lg:col-span-4">
      <Box class="box p-5">
        <Field>
          <FieldLabel>Written By</FieldLabel>
          <MenuRoot>
            <MenuTrigger as-child>
              <Button variant="ghost" class="border border-foreground/15 w-full">
                <AvatarRoot class="mr-1 size-6 rounded-full">
                  <AvatarFallback>{{
                    fakers[0]!['users'][0]!['name'].substring(0, 2)
                  }}</AvatarFallback>
                  <AvatarImage
                    :src="fakers[0]!['photos'][0]"
                    :alt="fakers[0]!['users'][0]!['name']"
                  />
                </AvatarRoot>
                <div class="truncate">{{ fakers[0]!['users'][0]!['name'] }}</div>
                <Lucide class="ml-auto size-4" icon="ChevronDown" />
              </Button>
            </MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuItem
                  v-for="(faker, index) in fakers.slice(0, 5)"
                  :key="index"
                  :value="'author-' + index"
                  class="py-2"
                >
                  <div class="size-5 image-fit me-1">
                    <img
                      class="rounded-full size-full"
                      :src="faker['photos'][0]"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                  </div>
                  <div>{{ faker['users'][0]!['name'] }}</div>
                </MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </Field>
        <Field class="mt-3">
          <FieldLabel>Post Date</FieldLabel>
          <DatePickerRoot>
            <DatePickerControl>
              <DatePickerInput />
              <DatePickerTrigger />
              <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
            </DatePickerControl>
            <Teleport to="body">
              <DatePickerPositioner>
                <DatePickerContent>
                  <DatePickerYearSelect />
                  <DatePickerMonthSelect />
                  <DatePickerView view="day">
                    <DatePickerContext v-slot="{ datePicker }">
                      <DatePickerViewControl>
                        <DatePickerPrevTrigger />
                        <DatePickerViewTrigger>
                          <DatePickerRangeText />
                        </DatePickerViewTrigger>
                        <DatePickerNextTrigger />
                      </DatePickerViewControl>
                      <DatePickerTable>
                        <DatePickerTableHead>
                          <DatePickerTableRow>
                            <DatePickerTableHeader
                              v-for="(weekDay, id) in datePicker?.weekDays"
                              :key="id"
                            >
                              {{ weekDay.short }}
                            </DatePickerTableHeader>
                          </DatePickerTableRow>
                        </DatePickerTableHead>
                        <DatePickerTableBody>
                          <DatePickerTableRow v-for="(week, id) in datePicker?.weeks" :key="id">
                            <DatePickerTableCell v-for="(day, id) in week" :key="id" :value="day">
                              <DatePickerTableCellTrigger>
                                {{ day.day }}
                              </DatePickerTableCellTrigger>
                            </DatePickerTableCell>
                          </DatePickerTableRow>
                        </DatePickerTableBody>
                      </DatePickerTable>
                    </DatePickerContext>
                  </DatePickerView>
                  <DatePickerView view="month">
                    <DatePickerContext v-slot="{ datePicker }">
                      <DatePickerViewControl>
                        <DatePickerPrevTrigger />
                        <DatePickerViewTrigger>
                          <DatePickerRangeText />
                        </DatePickerViewTrigger>
                        <DatePickerNextTrigger />
                      </DatePickerViewControl>
                      <DatePickerTable>
                        <DatePickerTableBody>
                          <DatePickerTableRow
                            v-for="(months, id) in datePicker?.getMonthsGrid({
                              columns: 4,
                              format: 'short',
                            })"
                            :key="id"
                          >
                            <DatePickerTableCell
                              v-for="(month, id) in months"
                              :key="id"
                              :value="month.value"
                            >
                              <DatePickerTableCellTrigger>{{
                                month.label
                              }}</DatePickerTableCellTrigger>
                            </DatePickerTableCell>
                          </DatePickerTableRow>
                        </DatePickerTableBody>
                      </DatePickerTable>
                    </DatePickerContext>
                  </DatePickerView>
                  <DatePickerView view="year">
                    <DatePickerContext v-slot="{ datePicker }">
                      <DatePickerViewControl>
                        <DatePickerPrevTrigger />
                        <DatePickerViewTrigger>
                          <DatePickerRangeText />
                        </DatePickerViewTrigger>
                        <DatePickerNextTrigger />
                      </DatePickerViewControl>
                      <DatePickerTable>
                        <DatePickerTableBody>
                          <DatePickerTableRow
                            v-for="(years, id) in datePicker?.getYearsGrid({
                              columns: 4,
                            })"
                            :key="id"
                          >
                            <DatePickerTableCell
                              v-for="(year, id) in years"
                              :key="id"
                              :value="year.value"
                            >
                              <DatePickerTableCellTrigger>{{
                                year.label
                              }}</DatePickerTableCellTrigger>
                            </DatePickerTableCell>
                          </DatePickerTableRow>
                        </DatePickerTableBody>
                      </DatePickerTable>
                    </DatePickerContext>
                  </DatePickerView>
                </DatePickerContent>
              </DatePickerPositioner>
            </Teleport>
          </DatePickerRoot>
        </Field>
        <Field class="mt-3">
          <FieldLabel>Categories</FieldLabel>
          <ComboboxRoot
            :collection="categoryCollection"
            :value="categoryValue"
            @value-change="(details) => (categoryValue = details.value)"
            @input-value-change="
              ({ inputValue }) => {
                const filtered = categoryData.filter((item) =>
                  item.label.toLowerCase().includes(inputValue.toLowerCase()),
                )
                categoryOptions = filtered.length > 0 ? filtered : categoryData
              }
            "
            class="w-full"
            multiple
          >
            <ComboboxControl>
              <ComboboxTrigger />
            </ComboboxControl>
            <ComboboxContent>
              <ComboboxInput placeholder="Search categories..." />
              <ComboboxItemGroup>
                <ComboboxItemGroupLabel>Categories</ComboboxItemGroupLabel>
                <ComboboxItem
                  v-for="item in categoryCollection.items"
                  :key="item.code"
                  :item="item"
                >
                  <ComboboxItemText>{{ item.label }}</ComboboxItemText>
                </ComboboxItem>
              </ComboboxItemGroup>
            </ComboboxContent>
          </ComboboxRoot>
        </Field>
        <Field class="mt-3">
          <FieldLabel>Tags</FieldLabel>
          <ComboboxRoot
            :collection="tagCollection"
            :value="tagValue"
            @value-change="(details) => (tagValue = details.value)"
            @input-value-change="
              ({ inputValue }) => {
                const filtered = tagData.filter((item) =>
                  item.label.toLowerCase().includes(inputValue.toLowerCase()),
                )
                tagOptions = filtered.length > 0 ? filtered : tagData
              }
            "
            class="w-full"
            multiple
          >
            <ComboboxControl>
              <ComboboxTrigger />
            </ComboboxControl>
            <ComboboxContent>
              <ComboboxInput placeholder="Search tags..." />
              <ComboboxItemGroup>
                <ComboboxItemGroupLabel>Tags</ComboboxItemGroupLabel>
                <ComboboxItem v-for="item in tagCollection.items" :key="item.code" :item="item">
                  <ComboboxItemText>{{ item.label }}</ComboboxItemText>
                </ComboboxItem>
              </ComboboxItemGroup>
            </ComboboxContent>
          </ComboboxRoot>
        </Field>
        <Field class="mt-3">
          <FieldLabel>Published</FieldLabel>
          <SwitchRoot>
            <SwitchControl />
          </SwitchRoot>
        </Field>
        <Field class="mt-3">
          <FieldLabel>Show Author Name</FieldLabel>
          <SwitchRoot>
            <SwitchControl />
          </SwitchRoot>
        </Field>
      </Box>
    </div>
    <!-- END: Post Info -->
  </div>
</template>
