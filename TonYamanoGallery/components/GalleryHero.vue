<template>
  <section class="relative isolate overflow-hidden bg-gradient-to-br from-gallery-background via-[#111827] to-[#0b0f19] px-6 pb-24 pt-32 sm:px-10">
    <div class="mx-auto max-w-4xl text-center">
      <p class="text-sm uppercase tracking-[0.4em] text-gallery-accent/80">Ton Yamano Gallery</p>
      <h1 class="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        A living archive of light, travel, and cinematic storytelling.
      </h1>
      <p class="mt-6 text-lg text-white/70">
        Follow Ton Yamano across cities, mountains, and coastlines. Each release refines the craft with richer color grading, nuanced stories, and immersive design.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
        <NuxtLink to="#versions" class="rounded-full bg-gallery-accent px-6 py-3 text-black transition hover:bg-yellow-400">
          Explore Releases
        </NuxtLink>
        <NuxtLink to="#newsletter" class="rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-gallery-accent hover:text-gallery-accent">
          Join the Update List
        </NuxtLink>
      </div>
    </div>
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-gallery-accent/10 blur-3xl" />
      <div class="absolute bottom-12 left-24 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />
    </div>
  </section>
</template>
