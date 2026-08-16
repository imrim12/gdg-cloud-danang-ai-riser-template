<template>
  <a
    class="pr-3 pl-3.5 py-1 border border-foreground/30 bg-background/20 flex items-center gap-2 text-xs"
    target="_blank"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>
