<script setup lang="ts">
import type { GalleryCollection } from '~/composables/useGallery';

defineProps<{ collection: GalleryCollection }>();
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40 shadow-gallery transition hover:-translate-y-1"
  >
    <div
      class="absolute inset-0 opacity-60 transition group-hover:opacity-80"
      :class="['bg-gradient-to-br', collection.colors]"
      aria-hidden="true"
    />
    <img
      :src="collection.cover"
      :alt="collection.title + ' cover photograph'"
      class="absolute inset-0 h-full w-full object-cover opacity-10"
      loading="lazy"
      aria-hidden="true"
    />
    <div class="relative flex flex-1 flex-col justify-between gap-6 p-8">
      <div class="space-y-3">
        <span class="text-xs uppercase tracking-[0.3em] text-slate-300">Collection</span>
        <h3 class="text-2xl font-semibold text-white" style="font-family: 'Playfair Display', serif;">
          {{ collection.title }}
        </h3>
        <p class="text-sm text-slate-200" style="font-family: 'Inter', sans-serif;">{{ collection.description }}</p>
      </div>
      <div class="flex items-center justify-between text-xs text-slate-300">
        <span class="flex items-center gap-2">
          <span class="inline-flex h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
          {{ collection.location }}
        </span>
        <span>{{ collection.year }}</span>
      </div>
      <NuxtLink
        :to="{ name: 'collections-slug', params: { slug: collection.slug } }"
        class="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-orange-400"
        :aria-label="`View the ${collection.title} story`"
      >
        View Story
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </article>
</template>
