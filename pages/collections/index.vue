<script setup lang="ts">
import GalleryCollectionCard from '~/components/GalleryCollectionCard.vue';
import { useGallery } from '~/composables/useGallery';

const { collections } = useGallery();
</script>

<template>
  <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10">
    <div class="space-y-4 text-center">
      <h1 class="text-4xl font-bold text-slate-100 sm:text-5xl" style="font-family: 'Playfair Display', serif;">
        Gallery Collections
      </h1>
      <p class="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg" style="font-family: 'Inter', sans-serif;">
        Explore Ton Yamano’s curated stories featuring travel diaries, intimate portraits, and vibrant urban scenes.
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-3">
      <GalleryCollectionCard v-for="collection in collections" :key="collection.slug" :collection="collection" />
    </div>
  </div>
</template>
