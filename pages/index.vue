<script setup lang="ts">
import GalleryCollectionCard from '~/components/GalleryCollectionCard.vue';
import GalleryImageGrid from '~/components/GalleryImageGrid.vue';
import { useGallery } from '~/composables/useGallery';

const { collections } = useGallery();

const heroHighlights = collections.flatMap((collection) => collection.images.slice(0, 1));

const experiences = [
  {
    title: 'Limited Editions',
    description: 'Select prints available in signed, numbered editions for collectors.',
  },
  {
    title: 'Behind the Lens',
    description: 'Personal stories and techniques that bring depth to each collection.',
  },
  {
    title: 'Workshops',
    description: 'Seasonal workshops designed to inspire photographers of all levels.',
  },
];
</script>

<template>
  <div class="space-y-24">
    <section id="collections" class="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-12 sm:px-10">
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl font-bold text-slate-100 sm:text-4xl" style="font-family: 'Playfair Display', serif;">
          Curated Collections
        </h2>
        <p class="max-w-3xl text-base text-slate-400 sm:text-lg" style="font-family: 'Inter', sans-serif;">
          Discover the themes that define Ton Yamano’s visual storytelling — from the stillness of dawn to the neon pulse of
          midnight.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <GalleryCollectionCard v-for="collection in collections" :key="collection.slug" :collection="collection" />
      </div>
    </section>

    <section id="about" class="bg-slate-900/60 py-20">
      <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:flex-row lg:items-center">
        <div class="flex-1 space-y-6">
          <h2 class="text-3xl font-bold text-slate-100 sm:text-4xl" style="font-family: 'Playfair Display', serif;">
            Meet Ton Yamano
          </h2>
          <p class="text-base text-slate-300 sm:text-lg" style="font-family: 'Inter', sans-serif;">
            Ton Yamano is a travel and portrait photographer inspired by cinematic lighting and the emotional resonance of
            fleeting moments. Ton’s work has been featured in international exhibitions and digital publications, celebrating
            stories that connect cultures and generations.
          </p>
          <div class="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
            <div class="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
              <h3 class="text-lg font-semibold text-brand-accent">Approach</h3>
              <p class="mt-2 leading-relaxed">
                Ton blends documentary-style authenticity with stylized compositions, focusing on natural light and candid
                interactions.
              </p>
            </div>
            <div class="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
              <h3 class="text-lg font-semibold text-brand-accent">Collaborations</h3>
              <p class="mt-2 leading-relaxed">
                Available for editorial commissions, brand partnerships, and bespoke portrait sessions worldwide.
              </p>
            </div>
          </div>
        </div>

        <div class="flex-1">
          <div class="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60 p-1 shadow-gallery">
            <div class="absolute inset-0 bg-gradient-to-br from-brand-accent/20 via-transparent to-indigo-500/30" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
              alt="Ton Yamano working with a vintage camera"
              class="relative block h-full w-full rounded-[1.35rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 sm:px-10">
      <div class="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-10 shadow-gallery">
        <div class="grid gap-8 lg:grid-cols-2">
          <div class="space-y-4">
            <h2 class="text-3xl font-bold text-slate-100 sm:text-4xl" style="font-family: 'Playfair Display', serif;">
              Experiences Beyond the Frame
            </h2>
            <p class="text-base text-slate-300 sm:text-lg" style="font-family: 'Inter', sans-serif;">
              From intimate portrait sessions to immersive travel workshops, Ton brings a collaborative spirit to every project.
              Explore opportunities to co-create visual narratives tailored to your vision.
            </p>
            <NuxtLink
              to="/collections"
              class="inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-2 text-sm font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-slate-950"
            >
              Browse All Collections
              <span aria-hidden="true">↗</span>
            </NuxtLink>
          </div>
          <ul class="space-y-4">
            <li
              v-for="experience in experiences"
              :key="experience.title"
              class="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 transition hover:border-brand-accent/60"
            >
              <h3 class="text-lg font-semibold text-brand-accent">{{ experience.title }}</h3>
              <p class="mt-2 text-sm text-slate-200" style="font-family: 'Inter', sans-serif;">{{ experience.description }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-slate-100 sm:text-4xl" style="font-family: 'Playfair Display', serif;">
          Recent Highlights
        </h2>
        <p class="max-w-3xl text-base text-slate-400 sm:text-lg" style="font-family: 'Inter', sans-serif;">
          A rotating glimpse of in-progress stories and personal experiments from Ton’s sketchbook archives.
        </p>
        <GalleryImageGrid :images="heroHighlights" />
      </div>
    </section>
  </div>
</template>
