<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { SquareChevronRight, Clipboard, Check } from 'lucide-vue-next'
import { ref, useSlots } from 'vue'
import { useClipboard } from '@vueuse/core'

const { class: className } = defineProps<{
  class?: string
}>()

const slots = useSlots()
const packageManager = ref('yarn')
const { copy, copied } = useClipboard({ copiedDuring: 3000 })
const commandRef = ref<HTMLDivElement | null>(null)

function handleCopy() {
  const codeElement = commandRef.value
  if (!codeElement) return

  const text = codeElement.textContent || ''
  copy(text)
}

function getSlotText() {
  const slotContent = slots.default?.()
  if (!slotContent || slotContent.length === 0) return ''
  return slotContent
    .map((vnode) => (typeof vnode.children === 'string' ? vnode.children : ''))
    .join('')
}

function getDisplayText() {
  const text = getSlotText()
  if (packageManager.value === 'npm') {
    return text.replace('add', 'install')
  }
  return text
}
</script>

<template>
  <div :class="twMerge(['mt-8 mb-10 border border-foreground/20 bg-background/50', className])">
    <div class="flex items-center py-2 px-5 gap-5">
      <SquareChevronRight class="stroke-1 size-4 fill-foreground/10" />
      <div class="flex items-center w-full gap-2">
        <div
          @click="packageManager = 'pnpm'"
          :class="
            twMerge([
              'cursor-pointer px-3.5 py-1 [&.active]:border [&.active]:border-foreground/20 [&.active]:bg-foreground/10',
              packageManager == 'pnpm' && 'active',
            ])
          "
        >
          pnpm
        </div>
        <div
          @click="packageManager = 'npm'"
          :class="
            twMerge([
              'cursor-pointer px-3.5 py-1 [&.active]:border [&.active]:border-foreground/20 [&.active]:bg-foreground/10',
              packageManager == 'npm' && 'active',
            ])
          "
        >
          npm
        </div>
        <div
          @click="packageManager = 'yarn'"
          :class="
            twMerge([
              'cursor-pointer px-3.5 py-1 [&.active]:border [&.active]:border-foreground/20 [&.active]:bg-foreground/10',
              packageManager == 'yarn' && 'active',
            ])
          "
        >
          yarn
        </div>
        <div
          @click="packageManager = 'bun'"
          :class="
            twMerge([
              'cursor-pointer px-3.5 py-1 [&.active]:border [&.active]:border-foreground/20 [&.active]:bg-foreground/10',
              packageManager == 'bun' && 'active',
            ])
          "
        >
          bun
        </div>
        <Check v-if="copied" class="ms-auto cursor-pointer size-4 stroke-1 fill-foreground/10" />
        <Clipboard
          v-else
          @click="handleCopy"
          class="ms-auto cursor-pointer size-4 stroke-1 fill-foreground/10"
        />
      </div>
    </div>
    <div ref="commandRef" class="p-5 border-t border-foreground/20">
      {{ packageManager }} {{ getDisplayText() }}
    </div>
  </div>
</template>
