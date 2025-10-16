<script setup lang="ts">
import GalleryImageGrid from '~/components/GalleryImageGrid.vue';
import { useGallery } from '~/composables/useGallery';

const route = useRoute();
const { findCollection } = useGallery();
const collection = computed(() => {
  const match = findCollection(route.params.slug as string);
  if (!match) {
    throw createError({ statusCode: 404, statusMessage: 'Collection not found' });
  }
  return match;
});

useHead(() => ({
  title: `${collection.value.title} · Ton Yamano Gallery`,
  meta: [
    {
      name: 'description',
      content: collection.value.description,
    },
  ],
}));
</script>

<template>
  <div class="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10">
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center gap-2 text-xs text-slate-400">
        <li>
          <NuxtLink to="/" class="transition hover:text-brand-accent">Home</NuxtLink>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <NuxtLink to="/collections" class="transition hover:text-brand-accent">Collections</NuxtLink>
        </li>
        <li aria-hidden="true">/</li>
        <li class="text-slate-200">{{ collection.title }}</li>
      </ol>
    </nav>

    <header class="space-y-4">
      <span class="inline-flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-accent">
        {{ collection.year }}
      </span>
      <h1 class="text-4xl font-bold text-slate-100 sm:text-5xl" style="font-family: 'Playfair Display', serif;">
        {{ collection.title }}
      </h1>
      <p class="max-w-3xl text-base text-slate-300 sm:text-lg" style="font-family: 'Inter', sans-serif;">
        {{ collection.summary }}
      </p>
      <div class="flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span class="inline-flex items-center gap-2">
          <span class="inline-flex h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
          {{ collection.location }}
        </span>
        <span class="inline-flex items-center gap-2">
          <span class="inline-flex h-2 w-2 rounded-full bg-slate-500" aria-hidden="true" />
          {{ collection.images.length }} photographs
        </span>
      </div>
    </header>

    <GalleryImageGrid :images="collection.images" />

    <NuxtLink
      to="/collections"
      class="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-accent hover:text-brand-accent"
    >
      ← Back to Collections
    </NuxtLink>
  </div>
</template>
