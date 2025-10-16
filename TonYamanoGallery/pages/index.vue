<script setup lang="ts">
const hero = {
  title: "Stories in light and shadow",
  subtitle:
    "A curated collection of landscapes, portraits, and intimate details that chart Ton Yamano's journey across continents.",
  cta: "View artist statement"
};

const collections = [
  {
    name: "Aurora Diaries",
    year: "2025",
    description: "Chasing the northern lights across Iceland's winter horizon.",
    cover:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1280&q=80"
  },
  {
    name: "Tokyo After Rain",
    year: "2024",
    description: "Reflections of neon and quiet alleyways moments after rainfall.",
    cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1280&q=80"
  },
  {
    name: "Desert Echoes",
    year: "2023",
    description: "Minimalist studies of dunes and wandering silhouettes in Morocco.",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1280&q=80"
  }
];

const journal = [
  {
    title: "Finding poetry in long exposures",
    date: "May 12, 2025",
    excerpt: "Experiments with motion blur to portray the rhythm of city nights.",
    url: "#journal"
  },
  {
    title: "The ritual of editing on the road",
    date: "April 2, 2025",
    excerpt: "How a minimal kit and a quiet corner keep the workflow grounded.",
    url: "#journal"
  },
  {
    title: "Scouting locations with locals",
    date: "February 19, 2025",
    excerpt: "On embracing collaboration and listening before the shutter clicks.",
    url: "#journal"
  }
];
</script>

<template>
  <div class="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16">
    <section class="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div class="space-y-6">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-400">Ton Yamano Gallery</p>
        <h2 class="font-serif text-5xl font-semibold text-white lg:text-6xl">{{ hero.title }}</h2>
        <p class="text-lg text-slate-300">{{ hero.subtitle }}</p>
        <button class="group inline-flex w-fit items-center gap-3 rounded-full border border-emerald-500/60 bg-emerald-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300 transition hover:-translate-y-0.5 hover:bg-emerald-500/20">
          {{ hero.cta }}
          <span aria-hidden="true" class="transition group-hover:translate-x-1">→</span>
        </button>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2 overflow-hidden rounded-3xl border border-slate-800/80 shadow-lg shadow-emerald-500/10">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
            alt="Night cityscape"
          />
        </div>
        <div class="overflow-hidden rounded-3xl border border-slate-800/80 shadow-lg shadow-emerald-500/10">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="Photographer working"
          />
        </div>
        <div class="overflow-hidden rounded-3xl border border-slate-800/80 shadow-lg shadow-emerald-500/10">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80"
            alt="Northern lights"
          />
        </div>
      </div>
    </section>

    <section class="space-y-8">
      <header class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-emerald-400">Collections</p>
          <h3 class="font-serif text-3xl font-semibold text-white">Selected series</h3>
        </div>
        <NuxtLink
          class="hidden items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 transition hover:bg-slate-800 hover:text-white lg:inline-flex"
          to="#collections"
        >
          View archive
        </NuxtLink>
      </header>

      <div class="grid gap-6 lg:grid-cols-3">
        <article
          v-for="collection in collections"
          :key="collection.name"
          class="group flex flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-slate-900/60"
        >
          <img :src="collection.cover" :alt="collection.name" class="h-56 w-full object-cover" />
          <div class="flex flex-1 flex-col gap-3 px-6 py-6">
            <p class="text-xs uppercase tracking-[0.4em] text-emerald-300">{{ collection.year }}</p>
            <h4 class="font-serif text-2xl text-white">{{ collection.name }}</h4>
            <p class="flex-1 text-sm text-slate-300">{{ collection.description }}</p>
            <button class="group inline-flex items-center gap-2 self-start text-sm font-semibold text-emerald-300 transition hover:text-emerald-200">
              Explore series <span aria-hidden="true" class="transition group-hover:translate-x-1">→</span>
            </button>
          </div>
        </article>
      </div>
    </section>

    <section class="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div class="space-y-6">
        <p class="text-xs uppercase tracking-[0.35em] text-emerald-400">Behind the lens</p>
        <h3 class="font-serif text-3xl font-semibold text-white">Artist notes &amp; journal</h3>
        <p class="text-slate-300">
          Every photograph begins as a quiet observation. These journal entries follow the process, from scouting to final edit, and
          the people met along the way.
        </p>
        <NuxtLink
          to="#journal"
          class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
        >
          Read journal
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
      <div class="space-y-4">
        <article
          v-for="entry in journal"
          :key="entry.title"
          class="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 transition hover:border-emerald-400/50 hover:bg-slate-900/60"
        >
          <p class="text-xs uppercase tracking-[0.4em] text-slate-400">{{ entry.date }}</p>
          <h4 class="mt-2 font-serif text-2xl text-white">{{ entry.title }}</h4>
          <p class="mt-3 text-sm text-slate-300">{{ entry.excerpt }}</p>
          <NuxtLink
            :to="entry.url"
            class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
          >
            Continue reading <span aria-hidden="true">→</span>
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>
