<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const photos = [
  {
    title: 'Aurora Over Aomori',
    location: 'Aomori, Japan',
    description: 'A tapestry of green and violet curtains ripple above snow-dusted cedars in northern Japan.',
    tags: ['Night', 'Landscape', 'Long Exposure'],
    src: '/previews/v1/aurora-forest.svg',
    orientation: 'portrait'
  },
  {
    title: 'Metropolis Pulse',
    location: 'Tokyo, Japan',
    description: 'Intersecting train lines weave streaks of light through the sleepless capital.',
    tags: ['Urban', 'Motion', 'Night'],
    src: '/previews/v1/tokyo-lines.svg',
    orientation: 'landscape'
  },
  {
    title: 'Silent Tea House',
    location: 'Kyoto, Japan',
    description: 'Soft morning light filtering through shōji screens paints a tea ceremony in warm gold.',
    tags: ['Interior', 'Culture'],
    src: '/previews/v1/tea-house.svg',
    orientation: 'landscape'
  },
  {
    title: 'Echoes of Sahara',
    location: 'Merzouga, Morocco',
    description: 'Curving dunes sculpted by wind, touched by the last blush of sunset.',
    tags: ['Travel', 'Desert'],
    src: '/previews/v1/sahara.svg',
    orientation: 'portrait'
  },
  {
    title: 'Nordic Stillness',
    location: 'Lofoten, Norway',
    description: 'Glass-like fjords mirror pastel skies while a lone cabin glows from within.',
    tags: ['Landscape', 'Blue Hour'],
    src: '/previews/v1/nordic-cabin.svg',
    orientation: 'landscape'
  },
  {
    title: 'City of Bridges',
    location: 'Venice, Italy',
    description: 'Early morning fog drifts across the canal as gondolas wait in silence.',
    tags: ['Water', 'Morning'],
    src: '/previews/v1/venice-fog.svg',
    orientation: 'landscape'
  }
] as const
</script>

<template>
  <div>
    <GalleryHero />
    <section id="about" class="border-y border-white/5 bg-black/30 py-20">
      <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start">
        <div class="flex-1 space-y-6">
          <p class="text-xs uppercase tracking-[0.6em] text-night-300">About Ton</p>
          <h2 class="font-serif text-3xl font-semibold text-white">Photography as a practice of presence.</h2>
          <p class="text-night-100">
            Ton Yamano is a travel and fine art photographer whose work explores the delicate balance between motion and stillness. From the neon glow of Tokyo alleyways to the quiet hush of alpine dawns, Ton seeks the whisper of emotion that lingers in every scene.
          </p>
          <p class="text-night-100">
            This gallery is a living archive of Ton\'s journey. Expect seasonal updates, behind-the-scenes stories, and limited edition print releases. Subscribe to stay in the loop.
          </p>
          <form class="flex flex-col gap-3 sm:flex-row">
            <label class="sr-only" for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              class="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white placeholder:text-night-400 focus:border-night-400 focus:outline-none"
            >
            <button
              type="submit"
              class="rounded-full bg-night-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-night-400"
            >
              Notify Me
            </button>
          </form>
        </div>
        <aside class="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-night-900/20">
          <h3 class="font-serif text-xl text-white">Philosophy</h3>
          <p class="mt-4 text-sm text-night-100">
            "Photography for me is a form of listening. The world is constantly speaking in moments of color, contrast, and quiet surprise. My camera is simply a way to answer back."
          </p>
          <p class="mt-6 text-xs uppercase tracking-[0.4em] text-night-400">— {{ runtimeConfig.public.photographer }}</p>
        </aside>
      </div>
    </section>
    <PhotoGrid :photos="photos" />
  </div>
</template>
