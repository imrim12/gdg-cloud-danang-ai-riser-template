<script setup lang="ts">
import { Box } from "@/components/ui/box";
</script>
<template>
    <Box class="w-full xl:w-1/2">
        <div class="text-xl font-medium capitalize border-b border-foreground/15 pb-5">{{ $route.name }}</div>
        <div class="mt-16 flex flex-col gap-10">
            <RouterView />
        </div>
    </Box>
</template>
