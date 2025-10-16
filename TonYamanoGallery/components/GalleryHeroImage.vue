<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  src: string
}>()
</script>

<template>
  <figure class="group overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-xl shadow-night-900/30">
    <img
      :src="props.src"
      :alt="`${props.title} – ${props.description}`"
      class="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
    >
    <figcaption class="space-y-1 px-4 pb-4 pt-3">
      <p class="font-serif text-lg text-white">{{ props.title }}</p>
      <p class="text-xs uppercase tracking-[0.3em] text-night-200">{{ props.description }}</p>
    </figcaption>
  </figure>
</template>
