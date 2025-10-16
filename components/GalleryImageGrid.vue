<script setup lang="ts">
import type { GalleryImage } from '~/composables/useGallery';

defineProps<{
  images: GalleryImage[];
}>();
</script>

<template>
  <div class="grid auto-rows-[200px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <figure
      v-for="image in images"
      :key="image.src"
      class="group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/40 shadow-gallery"
      :class="image.orientation === 'portrait' ? 'sm:row-span-2' : ''"
    >
      <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
      <figcaption class="sr-only">{{ image.alt }}</figcaption>
    </figure>
  </div>
</template>
