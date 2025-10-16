<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="relative overflow-hidden bg-slate-900 pb-24">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-accent/40 via-transparent to-indigo-500/30" aria-hidden="true" />
      <div class="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-10">
        <span class="w-fit rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-accent">
          Ton Yamano Gallery
        </span>
        <h1 class="text-4xl font-bold sm:text-6xl" style="font-family: 'Playfair Display', serif;">
          Moments in Motion
        </h1>
        <p class="max-w-2xl text-base text-slate-300 sm:text-lg" style="font-family: 'Inter', sans-serif;">
          A curated collection of photographs celebrating travel, candid portraits, and the subtle poetry of everyday life.
          Each image invites you to linger and rediscover familiar stories from a fresh lens.
        </p>
        <nav class="flex flex-wrap gap-4">
          <NuxtLink
            :to="{ path: '/', hash: '#collections' }"
            class="rounded-full bg-brand-accent px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-brand-accent/30 transition hover:bg-orange-500"
          >
            Explore Collections
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#about' }"
            class="rounded-full border border-slate-700 px-6 py-2 text-sm font-semibold text-slate-100 transition hover:border-brand-accent hover:text-brand-accent"
          >
            About Ton
          </NuxtLink>
          <NuxtLink
            to="/collections"
            class="rounded-full border border-transparent px-6 py-2 text-sm font-semibold text-brand-accent transition hover:text-orange-400"
          >
            Browse Stories
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="relative -mt-16 bg-slate-950">
      <NuxtPage />
    </main>

    <footer class="border-t border-slate-800 bg-slate-900/80 py-8">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ currentYear }} Ton Yamano. Crafted with Nuxt 3 & Tailwind CSS.</p>
        <div class="flex gap-4">
          <a href="https://instagram.com" class="transition hover:text-brand-accent" target="_blank" rel="noopener">Instagram</a>
          <a href="https://500px.com" class="transition hover:text-brand-accent" target="_blank" rel="noopener">500px</a>
          <a href="mailto:hello@tonyamano.com" class="transition hover:text-brand-accent">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>
