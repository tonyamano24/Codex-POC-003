<script setup lang="ts">
const highlights = [
  {
    title: 'Midnight Street Poetry',
    description: 'Long exposure portraits blending neon reflections with candid city life.',
    color: 'from-purple-500 via-fuchsia-500 to-orange-400'
  },
  {
    title: 'Mountaintop Reverie',
    description: 'Panoramic studies captured during alpine expeditions with analog lenses.',
    color: 'from-emerald-400 via-cyan-400 to-blue-500'
  },
  {
    title: 'Seaside Whispers',
    description: 'Minimalist compositions of waterlines and pastel-hued dawns.',
    color: 'from-sky-400 via-indigo-500 to-slate-700'
  },
  {
    title: 'Metropolis in Bloom',
    description: 'Macro florals juxtaposed against architectural silhouettes.',
    color: 'from-amber-400 via-rose-500 to-violet-500'
  }
]
</script>

<template>
  <section id="gallery" class="flex flex-col gap-8">
    <header class="flex flex-col gap-3">
      <p class="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-300">Highlights</p>
      <h2 class="text-balance text-3xl font-semibold text-white sm:text-4xl">Signature series snapshots</h2>
      <p class="max-w-3xl text-pretty text-base text-slate-300">
        A taste of Ton’s most beloved photo collections. Each highlight links to a full story, mood board, and behind-the-scenes
        commentary within the gallery.
      </p>
    </header>
    <div class="grid gap-6 sm:grid-cols-2">
      <article
        v-for="item in highlights"
        :key="item.title"
        class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-xl transition hover:-translate-y-1"
      >
        <div class="relative flex h-full flex-col gap-4 rounded-[calc(theme(borderRadius.3xl)-1px)] bg-slate-900/80 p-6">
          <div
            class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-60 blur-3xl transition duration-500 group-hover:opacity-80"
            :class="`bg-gradient-to-br ${item.color}`"
          />
          <header class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold text-white">{{ item.title }}</h3>
            <p class="text-sm text-slate-300">{{ item.description }}</p>
          </header>
          <div class="mt-auto flex items-center gap-2 text-sm font-semibold text-emerald-300">
            View story
            <span aria-hidden="true" class="transition group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
