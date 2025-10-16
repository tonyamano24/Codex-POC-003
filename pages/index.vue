<script setup lang="ts">
const collections = [
  {
    title: 'Urban Echoes',
    description: 'Vibrant cityscapes exploring light, shadow, and the rhythm of metropolitan life.',
    cover: '/images/urban.jpg',
    colors: 'from-indigo-500/70 via-purple-500/50 to-slate-900/80',
  },
  {
    title: 'Quiet Portraits',
    description: 'Intimate portraits that celebrate personality through subtle gestures and soft tones.',
    cover: '/images/portraits.jpg',
    colors: 'from-rose-500/70 via-orange-400/60 to-slate-900/80',
  },
  {
    title: 'Wandering Sol',
    description: 'Travel diaries spanning misty mountains, serene coasts, and hidden streetscapes.',
    cover: '/images/travel.jpg',
    colors: 'from-emerald-500/70 via-teal-400/60 to-slate-900/80',
  },
];

const features = [
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
  <section id="collections" class="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-12 sm:px-10">
    <div class="flex flex-col gap-4">
      <h2 class="text-3xl font-bold text-slate-100 sm:text-4xl" style="font-family: 'Playfair Display', serif;">
        Curated Collections
      </h2>
      <p class="max-w-3xl text-base text-slate-400 sm:text-lg" style="font-family: 'Inter', sans-serif;">
        Discover the themes that define Ton Yamano’s visual storytelling — from the stillness of dawn to the
        neon pulse of midnight.
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-3">
      <article
        v-for="collection in collections"
        :key="collection.title"
        class="group relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40 shadow-gallery transition hover:-translate-y-1"
      >
        <div :class="['absolute inset-0 bg-gradient-to-br opacity-60 transition group-hover:opacity-80', collection.colors]" aria-hidden="true" />
        <div class="relative flex h-full flex-col justify-between gap-6 p-8">
          <div class="space-y-3">
            <span class="text-xs uppercase tracking-[0.3em] text-slate-300">Collection</span>
            <h3 class="text-2xl font-semibold text-white" style="font-family: 'Playfair Display', serif;">{{ collection.title }}</h3>
            <p class="text-sm text-slate-200" style="font-family: 'Inter', sans-serif;">{{ collection.description }}</p>
          </div>
          <NuxtLink
            to="#"
            class="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-orange-400"
          >
            View Story
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>

  <section id="about" class="bg-slate-900/60 py-20">
    <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:flex-row lg:items-center">
      <div class="flex-1 space-y-6">
        <h2 class="text-3xl font-bold text-slate-100 sm:text-4xl" style="font-family: 'Playfair Display', serif;">
          Meet Ton Yamano
        </h2>
        <p class="text-base text-slate-300 sm:text-lg" style="font-family: 'Inter', sans-serif;">
          Ton Yamano is a travel and portrait photographer inspired by cinematic lighting and the emotional
          resonance of fleeting moments. Ton’s work has been featured in international exhibitions and digital
          publications, celebrating stories that connect cultures and generations.
        </p>
        <div class="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
          <div class="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
            <h3 class="text-lg font-semibold text-brand-accent">Approach</h3>
            <p class="mt-2 leading-relaxed">
              Ton blends documentary-style authenticity with stylized compositions, focusing on natural light
              and candid interactions.
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

  <section class="mx-auto max-w-6xl px-6 py-20 sm:px-10">
    <div class="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-10 shadow-gallery">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-4">
          <h2 class="text-3xl font-bold text-slate-100 sm:text-4xl" style="font-family: 'Playfair Display', serif;">
            Experiences Beyond the Frame
          </h2>
          <p class="text-base text-slate-300 sm:text-lg" style="font-family: 'Inter', sans-serif;">
            From intimate portrait sessions to immersive travel workshops, Ton brings a collaborative spirit to
            every project. Explore opportunities to co-create visual narratives tailored to your vision.
          </p>
        </div>
        <ul class="space-y-4">
          <li
            v-for="feature in features"
            :key="feature.title"
            class="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 transition hover:border-brand-accent/60"
          >
            <h3 class="text-lg font-semibold text-brand-accent">{{ feature.title }}</h3>
            <p class="mt-2 text-sm text-slate-200" style="font-family: 'Inter', sans-serif;">{{ feature.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
