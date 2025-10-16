<template>
  <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 via-emerald-500 to-sky-500 p-[1px] shadow-2xl">
    <div class="relative flex flex-col gap-8 rounded-[calc(theme(borderRadius.3xl)-1px)] bg-slate-950/95 px-8 py-12 text-center sm:px-16 sm:py-16">
      <div class="mx-auto inline-flex items-center gap-3 rounded-full bg-slate-900/70 px-4 py-1 text-sm font-medium uppercase tracking-[0.3em] text-emerald-300">
        Ton Yamano Gallery
      </div>
      <h1 class="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Your journey through light, color, and memory.
      </h1>
      <p class="mx-auto max-w-2xl text-balance text-lg text-slate-300">
        Explore a curated timeline of Ton Yamano’s photographic work – from the earliest experiments to the most recent narratives.
        Each version captures a pivotal moment in style, technique, and storytelling.
      </p>
      <div class="mx-auto flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
        <NuxtLink
          to="#versions"
          class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-200"
        >
          View release timeline
          <span aria-hidden="true">→</span>
        </NuxtLink>
        <NuxtLink
          to="#gallery"
          class="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
        >
          Browse gallery highlights
        </NuxtLink>
      </div>
      <DecorativeBlur class="pointer-events-none" />
    </div>
  </section>
</template>
