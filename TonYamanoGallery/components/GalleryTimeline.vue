<template>
  <section id="versions" class="relative mx-auto max-w-6xl space-y-12 px-6 py-24 sm:px-8">
    <header class="max-w-3xl">
      <h2 class="font-display text-3xl font-semibold text-white sm:text-4xl">Releases & Preview Gallery</h2>
      <p class="mt-4 text-base text-white/70">
        Every release introduces a refreshed curation and new post-production workflow. Browse previews of the gallery experience across versions and dive into the highlighted frames that define each chapter.
      </p>
    </header>
    <div class="grid gap-12 lg:grid-cols-2">
      <GalleryVersionCard v-for="version in versions" :key="version.version" :version="version" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { galleryVersions } from '@/data/gallery'

const versions = computed(() => galleryVersions)
</script>
