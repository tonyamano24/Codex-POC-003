<template>
  <div class="mx-auto min-h-screen max-w-6xl px-6 pb-20 pt-10 sm:px-10">
    <header class="flex flex-col gap-6 pb-12 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm uppercase tracking-[0.3em] text-accent">Ton Yamano</p>
        <h1 class="font-display text-4xl font-semibold text-dark sm:text-5xl">Personal Photo Gallery</h1>
        <p class="mt-3 max-w-2xl text-base text-gray-600">
          A carefully curated collection of photographs that trace the evolution of Ton Yamano’s
          documentary and fine art journeys. Each series captures a different creative period with its own
          atmosphere, palette, and narrative.
        </p>
      </div>
      <nav class="flex items-center gap-4 text-sm text-gray-500">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="transition hover:text-dark"
        >
          {{ link.label }}
        </a>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
      <p>© {{ new Date().getFullYear() }} Ton Yamano. Crafted with Nuxt 3.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const links = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Versions', href: '#versions' },
  { label: 'About', href: '#about' }
]
</script>
