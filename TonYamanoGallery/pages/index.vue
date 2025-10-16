<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
          alt="Hero background"
          class="h-full w-full object-cover opacity-60"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/90 to-stone-950"></div>
      </div>
      <div class="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center gap-8 px-6 py-32 text-white">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-300">The works of Ton Yamano</p>
        <h1 class="font-playfair text-5xl font-semibold leading-tight md:text-6xl">
          Cinematic photography that feels like a whispered secret.
        </h1>
        <p class="max-w-2xl text-lg text-white/80">
          Welcome to my personal gallery where each collection is a love letter to the colors and rhythms of the world. Dive into travel diaries, intimate portraits, and editorial stories that dance between light and shadow.
        </p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink
            to="#projects"
            class="rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-stone-950 shadow-lg shadow-amber-500/40 transition hover:bg-amber-300"
          >
            Explore Series
          </NuxtLink>
          <NuxtLink
            to="#about"
            class="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-amber-300 hover:text-amber-200"
          >
            Meet Ton
          </NuxtLink>
        </div>
      </div>
    </section>

    <GallerySection
      section-id="projects"
      title="Feature Collections"
      badge="Vanguard"
      description="Meticulously curated stories from recent expeditions and commissioned editorials. Each series comes with a preview strip representing website versions shared with clients."
      :projects="featureProjects"
    />

    <GallerySection
      section-id="intimate"
      title="Intimate Sessions"
      badge="Signature"
      description="Warm, candid narratives designed for families and artists seeking quiet storytelling."
      :projects="intimateProjects"
    />

    <section id="about" class="border-t border-white/5 bg-white/5 py-16">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div class="space-y-6">
          <p class="text-sm uppercase tracking-[0.35em] text-amber-300">About Ton</p>
          <h2 class="font-playfair text-4xl font-semibold">A storyteller with a lens tuned to music.</h2>
          <p class="text-white/70">{{ profile.bio }}</p>
          <ul class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
            <li v-for="award in profile.accolades" :key="award" class="rounded-full border border-white/10 px-4 py-2">{{ award }}</li>
          </ul>
        </div>
        <div class="space-y-6 rounded-3xl border border-white/10 bg-stone-950/50 p-8">
          <h3 class="text-sm uppercase tracking-[0.35em] text-white/70">Services</h3>
          <div v-for="service in profile.services" :key="service.title" class="border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
            <p class="text-lg font-semibold">{{ service.title }}</p>
            <p class="mt-2 text-sm text-white/70">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import GallerySection from "~/components/GallerySection.vue";
import { featureProjects, intimateProjects, photographerProfile as profile } from "~/data/gallery";
</script>
