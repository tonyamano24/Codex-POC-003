<template>
  <header class="sticky top-0 z-50 backdrop-blur border-b border-white/5 bg-stone-950/80">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <div class="flex items-center gap-3">
        <NuxtLink to="/" class="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-stone-950 font-semibold shadow-lg shadow-amber-500/30">
          TY
        </NuxtLink>
        <div>
          <p class="text-lg font-semibold tracking-wide uppercase text-white">{{ siteName }}</p>
          <p class="text-sm text-white/70">{{ tagline }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 text-sm uppercase tracking-[0.3em]">
        <NuxtLink to="/#projects" class="hover:text-amber-300 transition">Series</NuxtLink>
        <NuxtLink to="/#about" class="hover:text-amber-300 transition">About</NuxtLink>
        <NuxtLink to="/#contact" class="hover:text-amber-300 transition">Contact</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const siteName = computed(() => config.public.siteName);
const tagline = computed(() => config.public.tagline);
</script>
