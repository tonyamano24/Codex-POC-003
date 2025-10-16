<template>
  <div>
    <section id="spotlight" class="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
      <div class="absolute inset-0 -z-10 opacity-30">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.15),_transparent_60%)]"></div>
      </div>
      <div class="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
        <div class="flex-1 space-y-6">
          <p class="text-xs uppercase tracking-[0.5em] text-accent">Ton Yamano</p>
          <h2 class="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Stories through the lens — a living archive of travel, design, and everyday magic.
          </h2>
          <p class="max-w-xl text-lg text-slate-300">
            TonYamanoGallery celebrates a decade of visual storytelling. Each photograph is thoughtfully
            curated, color-graded, and annotated to transport viewers straight into the scene.
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <a
              class="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:gap-3"
              href="#gallery"
            >
              Enter Gallery
              <span aria-hidden class="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-300 transition hover:border-accent hover:text-accent"
              href="#versions"
            >
              Explore Versions
            </a>
          </div>
        </div>
        <div class="flex flex-1 justify-end">
          <div class="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/40 p-4 shadow-[0_0_80px_-30px_rgba(245,158,11,0.6)]">
            <img
              alt="Kyoto street during golden hour"
              class="h-full w-full rounded-2xl object-cover"
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1000&q=80"
            />
            <div class="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-950/70 p-4 backdrop-blur">
              <p class="text-xs uppercase tracking-[0.5em] text-slate-400">Spotlight</p>
              <p class="font-display text-lg text-white">Golden Hour in Kyoto</p>
              <p class="text-xs text-slate-400">Captured 2023 · Kyoto, Japan</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="mx-auto max-w-6xl px-6 py-20">
      <div class="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.5em] text-slate-500">Curated Selections</p>
          <h3 class="font-display text-3xl font-semibold text-white sm:text-4xl">Gallery Highlights</h3>
        </div>
        <p class="max-w-xl text-sm text-slate-400">
          Ton experiments with composition, light, and subtle motion blur to create atmospheric photographs.
          Hover a frame to reveal the story behind each capture.
        </p>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="image in galleryImages"
          :key="image.title"
          class="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-accent/70"
        >
          <img :alt="image.title" :src="image.url" class="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
          <div class="space-y-3 p-5">
            <div class="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>{{ image.location }}</span>
              <span>{{ image.year }}</span>
            </div>
            <h4 class="font-display text-xl text-white">{{ image.title }}</h4>
            <p class="text-sm leading-relaxed text-slate-400">{{ image.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="versions" class="border-t border-slate-800 bg-slate-950/40 py-20">
      <div class="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
        <div class="flex-1 space-y-6">
          <p class="text-xs uppercase tracking-[0.5em] text-slate-500">Version Journey</p>
          <h3 class="font-display text-3xl font-semibold text-white sm:text-4xl">Preview each evolution</h3>
          <p class="text-sm text-slate-400">
            From the minimalist beginnings to the cinematic redesign, Ton documents each milestone with a
            dedicated preview. These snapshots preserve the growth of both the craft and the brand.
          </p>
        </div>
        <div class="flex-1 space-y-6">
          <article
            v-for="version in versionPreviews"
            :key="version.label"
            class="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 transition hover:border-accent/60"
          >
            <div class="relative h-48 overflow-hidden">
              <img :alt="`${version.label} preview`" :src="version.image" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span class="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.4em] text-slate-300">
                {{ version.label }}
              </span>
            </div>
            <div class="space-y-3 p-6">
              <p class="text-sm uppercase tracking-[0.3em] text-accent">{{ version.highlight }}</p>
              <p class="text-sm leading-relaxed text-slate-400">{{ version.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="mx-auto max-w-6xl px-6 py-20">
      <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center shadow-lg shadow-slate-950/40">
        <p class="text-xs uppercase tracking-[0.5em] text-slate-500">Let's Collaborate</p>
        <h3 class="mt-4 font-display text-3xl text-white">Have a project in mind?</h3>
        <p class="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
          Ton is currently accepting assignments for travel editorials, architectural studies, and cultural
          documentation. Reach out with your ideas and let's craft visuals that resonate.
        </p>
        <a
          class="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:gap-3"
          href="mailto:hello@tonyamano.com"
        >
          Book a Session
          <span aria-hidden class="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { galleryImages, versionPreviews } from "~/data/gallery";
</script>
