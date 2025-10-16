<script setup lang="ts">
useSeoMeta({
  title: 'Ton Yamano Gallery — Personal Photo Journey',
  description:
    'Discover Ton Yamano’s evolving photography through a curated timeline and gallery highlights built with Nuxt 3 & Tailwind CSS.',
  ogTitle: 'Ton Yamano Gallery',
  ogDescription:
    'Journey through Ton Yamano’s photography timeline with release previews and curated highlights.',
  ogImage: '/previews/nebula-horizon.svg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="flex flex-col gap-16">
    <section aria-label="Gallery introduction" class="sr-only">
      <h1>Ton Yamano Gallery</h1>
      <p>
        A personal photography showcase featuring versioned releases, preview imagery, and highlight collections built with Nuxt 3 and Tailwind CSS.
      </p>
    </section>
  </div>
</template>
