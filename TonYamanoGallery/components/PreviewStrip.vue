<template>
  <div class="flex gap-3">
    <div
      v-for="preview in previews"
      :key="preview.src"
      class="relative h-20 w-20 overflow-hidden rounded-xl border border-white/10 bg-white/5"
    >
      <img :src="preview.src" :alt="preview.alt" class="h-full w-full object-cover" loading="lazy" />
      <span
        class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 to-transparent px-2 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-amber-200"
      >
        {{ preview.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PreviewImage } from "~/types/gallery";

defineProps<{ previews: PreviewImage[] }>();
</script>
