<template>
  <article class="grid gap-6 rounded-3xl bg-white p-6 shadow-lg md:grid-cols-[260px_1fr] md:items-center">
    <img
      :src="version.previewImage"
      :alt="version.title"
      class="h-48 w-full rounded-2xl object-cover shadow-md md:h-full"
      loading="lazy"
    >
    <div class="space-y-4">
      <header>
        <p class="text-xs uppercase tracking-[0.3em] text-accent">{{ version.released }}</p>
        <h3 class="font-display text-2xl font-semibold text-dark">{{ version.title }}</h3>
      </header>
      <p class="text-sm text-gray-600">
        {{ version.description }}
      </p>
      <ul class="grid gap-3 text-sm text-gray-500 sm:grid-cols-2">
        <li
          v-for="highlight in version.highlights"
          :key="highlight"
          class="flex items-start gap-2"
        >
          <span class="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span>{{ highlight }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { GalleryVersion } from '~/data/versions'

const props = defineProps<{ version: GalleryVersion }>()
</script>
