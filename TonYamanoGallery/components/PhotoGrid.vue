<script setup lang="ts">
const props = defineProps<{
  photos: Array<{
    title: string
    location: string
    description: string
    tags: string[]
    src: string
    orientation: 'portrait' | 'landscape'
  }>
}>()
</script>

<template>
  <section id="gallery" class="bg-black/20 py-20">
    <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6">
      <div class="space-y-4 text-center">
        <p class="text-xs uppercase tracking-[0.6em] text-night-300">Collection</p>
        <h2 class="font-serif text-4xl font-semibold text-white">Selected Works</h2>
        <p class="mx-auto max-w-3xl text-night-100">
          Each photograph is a story captured through Ton\'s lens — inspired by the play between light and shadow across continents.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="photo in props.photos"
          :key="photo.title"
          class="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-xl shadow-night-900/20"
        >
          <img
            :src="photo.src"
            :alt="`${photo.title} – ${photo.description}`"
            class="w-full object-cover transition duration-500 group-hover:scale-105"
            :class="photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'"
          >
          <div class="flex flex-1 flex-col gap-4 px-6 pb-6 pt-6">
            <div>
              <p class="font-serif text-2xl text-white">{{ photo.title }}</p>
              <p class="text-xs uppercase tracking-[0.4em] text-night-300">{{ photo.location }}</p>
            </div>
            <p class="flex-1 text-sm text-night-100">{{ photo.description }}</p>
            <ul class="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-night-200">
              <li
                v-for="tag in photo.tags"
                :key="tag"
                class="rounded-full border border-white/10 px-3 py-1"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
