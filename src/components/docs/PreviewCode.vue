<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { FileScan, Clipboard, ArrowDown, Check } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import { useClipboard } from '@vueuse/core'

const { title = '' } = defineProps<{
  title?: string
}>()

const expand = ref(false)
const { copy, copied } = useClipboard({ copiedDuring: 3000 })
const codeRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (codeRef.value) {
    if (codeRef.value.offsetHeight < 300 && !(codeRef.value.offsetParent === null)) {
      expand.value = true
    }
  }
})

function handleCopy() {
  const codeElement = codeRef.value?.querySelector('code')
  if (!codeElement) return

  const text = codeElement.textContent || ''
  copy(text)
}
</script>

<template>
  <div class="mt-8 mb-10 border border-foreground/20 bg-background/50 relative">
    <div class="flex items-center py-2 px-5 gap-5">
      <FileScan v-if="title" class="stroke-1 size-4 fill-foreground/10" />
      <div class="flex items-center w-full gap-2">
        <div>{{ title }}</div>
        <div
          @click="expand = !expand"
          :class="
            twMerge([
              'ms-auto mr-2 cursor-pointer px-3.5 py-1 relative after:w-px after:h-5 after:inset-y-0 after:my-auto after:bg-foreground/20 after:right-0 after:absolute',
              codeRef &&
                codeRef.offsetHeight < 300 &&
                !(codeRef.offsetParent === null) &&
                'opacity-0',
            ])
          "
        >
          {{ expand ? 'Collapse' : 'Expand' }}
        </div>
        <Check
          v-if="copied"
          :class="twMerge(['cursor-pointer size-4 stroke-1 fill-foreground/10', !title && 'mt-1'])"
        />
        <Clipboard
          v-else
          @click="handleCopy"
          :class="twMerge(['cursor-pointer size-4 stroke-1 fill-foreground/10', !title && 'mt-1'])"
        />
      </div>
    </div>
    <div
      :class="
        twMerge([
          'text-xs px-5 border-t border-foreground/20 overflow-x-auto overflow-y-hidden before:h-3/4 before:absolute before:bg-gradient-to-b before:from-transparent before:to-background/80 before:inset-x-0 before:bottom-0',
          expand && 'max-h-auto before:hidden',
          !expand && 'max-h-100',
          !title && '-mt-13 border-0',
        ])
      "
      ref="codeRef"
    >
      <pre><code><slot /></code></pre>
      <div
        v-if="!expand"
        @click="expand = true"
        class="absolute bottom-0 inset-x-0 mx-auto w-26 mb-8 py-1 cursor-pointer border border-foreground/50 bg-foreground/15 flex items-center justify-center gap-2 backdrop-blur"
      >
        <ArrowDown class="size-4" /> Expand
      </div>
    </div>
  </div>
</template>
