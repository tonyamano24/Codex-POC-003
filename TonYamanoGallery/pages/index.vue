<template>
  <div>
    <GalleryHero />
    <main class="relative">
      <GalleryTimeline />
      <section class="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-2xl backdrop-blur">
          <h2 class="font-display text-2xl text-white">Behind the Lens</h2>
          <p class="mt-4 max-w-3xl text-base text-white/70">
            Ton Yamano is a Tokyo-based cinematographer fascinated by ephemeral light. This gallery is a living document of travels, editorial work, and personal experiments. Each version evolves the site experience alongside new bodies of work.
          </p>
          <dl class="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <dt class="text-xs uppercase tracking-[0.3em] text-white/50">Primary Focus</dt>
              <dd class="mt-2 text-base font-medium text-white">Travel & Lifestyle Cinematography</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-[0.3em] text-white/50">Camera Kit</dt>
              <dd class="mt-2 text-base font-medium text-white">Sony FX3 · Fujifilm GFX100S · DJI Inspire 3</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-[0.3em] text-white/50">Color Pipeline</dt>
              <dd class="mt-2 text-base font-medium text-white">DaVinci Resolve · Dehancer Film Emulation</dd>
            </div>
          </dl>
        </div>
      </section>
      <GalleryNewsletter />
    </main>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Ton Yamano Gallery — Personal Photo Releases',
  description: 'Discover Ton Yamano\'s evolving photo gallery with preview imagery from each release and curated highlights from travels across Japan.'
})
</script>
