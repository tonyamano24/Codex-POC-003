<script setup lang="ts">
const versions = [
  {
    name: 'Aurora Release',
    year: '2019',
    summary: 'The first cohesive series exploring long exposure city life with analog grit.',
    focus: ['Neon-lit portraits', 'Experimental film scans', 'Urban poetry zine'],
    image: '/previews/aurora-release.svg',
    accent: 'from-purple-400 to-fuchsia-500'
  },
  {
    name: 'Solstice Revision',
    year: '2021',
    summary: 'A coastal retreat that introduced pastel minimalism and meditative pacing.',
    focus: ['Seaside dawn studies', 'Soft gradient palettes', 'Handwritten travel notes'],
    image: '/previews/solstice-revision.svg',
    accent: 'from-emerald-400 to-cyan-500'
  },
  {
    name: 'Nebula Horizon',
    year: '2024',
    summary: 'A cosmic narrative told through drone cinematography and immersive audio.',
    focus: ['Aerial choreography', 'Synthwave soundscapes', 'Augmented reality overlays'],
    image: '/previews/nebula-horizon.svg',
    accent: 'from-indigo-400 to-sky-500'
  }
]
</script>

<template>
  <section id="versions" class="flex flex-col gap-10">
    <header class="flex flex-col gap-3">
      <p class="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-300">Version Timeline</p>
      <h2 class="text-balance text-3xl font-semibold text-white sm:text-4xl">Every release, one glance away</h2>
      <p class="max-w-3xl text-pretty text-base text-slate-300">
        Each milestone is paired with a preview snapshot that captures the collection’s signature mood. Use the visuals to compare
        stylistic eras at a glance and dive deeper into the evolution of Ton Yamano’s craft.
      </p>
    </header>
    <ol class="flex flex-col gap-8">
      <li
        v-for="version in versions"
        :key="version.name"
        class="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:border-emerald-300/50 hover:bg-emerald-300/5 sm:flex-row sm:items-center sm:gap-10"
      >
        <figure
          class="relative overflow-hidden rounded-2xl bg-gradient-to-br p-[1px] shadow-lg shadow-black/40 sm:w-64"
          :class="`from-transparent via-transparent to-transparent`"
        >
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.2xl)-1px)] bg-slate-950">
            <div :class="`h-40 w-full bg-gradient-to-br ${version.accent}`" />
            <img :src="version.image" :alt="`${version.name} preview`" class="h-full w-full object-cover" />
          </div>
        </figure>
        <div class="flex flex-1 flex-col gap-4">
          <div class="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.3em] text-emerald-300">
            <span>{{ version.year }}</span>
            <span aria-hidden="true" class="h-px w-12 bg-emerald-300/40" />
            <span>Version</span>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-2xl font-semibold text-white">{{ version.name }}</h3>
            <p class="text-sm text-slate-300">{{ version.summary }}</p>
          </div>
          <ul class="flex flex-wrap gap-3">
            <li
              v-for="item in version.focus"
              :key="item"
              class="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
