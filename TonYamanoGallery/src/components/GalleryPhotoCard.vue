<template>
  <article
    class="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
  >
    <figure class="relative h-56 w-full overflow-hidden">
      <img
        :src="photo.imageUrl"
        :alt="photo.title"
        class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      >
      <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p class="text-xs uppercase tracking-widest text-white/80">{{ photo.version }}</p>
        <h3 class="font-display text-xl font-semibold text-white">{{ photo.title }}</h3>
      </figcaption>
    </figure>
    <div class="flex flex-1 flex-col gap-4 p-6">
      <p class="text-sm text-gray-600">
        {{ photo.description }}
      </p>
      <div class="flex items-center justify-between text-xs text-gray-400">
        <span>{{ photo.location }}</span>
        <span>{{ photo.year }}</span>
      </div>
      <div class="flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
        <span class="font-medium text-dark">{{ photo.camera }}</span>
        <ul class="flex items-center gap-1">
          <li
            v-for="color in photo.palette"
            :key="color"
            :style="{ backgroundColor: color }"
            class="h-4 w-4 rounded-full border border-white/80 shadow"
          />
        </ul>
      </div>
      <button
        type="button"
        class="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent"
        @click="emit('preview', photo)"
      >
        Preview
        <span aria-hidden="true">→</span>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Photo } from '~/data/photos'

const props = defineProps<{ photo: Photo }>()
const emit = defineEmits<{ (event: 'preview', photo: Photo): void }>()

const photo = computed(() => props.photo)
</script>
