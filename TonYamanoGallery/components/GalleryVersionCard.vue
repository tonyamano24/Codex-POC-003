<template>
  <article class="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 via-white/[0.02] to-black/30 shadow-2xl backdrop-blur transition hover:border-gallery-accent/40 hover:shadow-gallery-accent/30">
    <div class="relative">
      <NuxtImg
        :src="version.previewImage"
        :alt="`${version.title} preview`"
        format="webp"
        class="h-60 w-full object-cover transition duration-700 group-hover:scale-[1.02]"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent p-6">
        <p class="text-xs uppercase tracking-[0.4em] text-gallery-accent">{{ version.version }}</p>
        <h3 class="mt-2 font-display text-2xl text-white">{{ version.title }}</h3>
        <p class="mt-2 text-sm text-white/70">Released {{ formatDate(version.releasedOn) }}</p>
      </div>
    </div>
    <div class="flex flex-1 flex-col gap-6 p-8">
      <p class="text-sm leading-relaxed text-white/70">
        {{ version.summary }}
      </p>
      <ul class="space-y-3 text-sm">
        <li v-for="highlight in version.highlights" :key="highlight" class="flex items-start gap-3 text-white/80">
          <span class="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-gallery-accent" />
          <span>{{ highlight }}</span>
        </li>
      </ul>
      <div class="mt-auto">
        <h4 class="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Featured Frames</h4>
        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <NuxtImg
            v-for="photo in version.photos"
            :key="photo.title"
            :src="photo.image"
            :alt="photo.title"
            format="webp"
            class="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/5 object-cover object-center"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { GalleryVersion } from '@/data/gallery'

defineProps<{ version: GalleryVersion }>()

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(value))
</script>
