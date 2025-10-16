<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(83,106,181,0.3),_transparent_60%)]" aria-hidden="true" />
    <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 lg:flex-row lg:items-center">
      <div class="flex-1 space-y-6">
        <p class="text-sm uppercase tracking-[0.6em] text-night-300">Ton Yamano Gallery</p>
        <h2 class="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Moments of quiet wonder, captured in light.
        </h2>
        <p class="max-w-xl text-lg text-night-100">
          Explore a curated collection of photographs inspired by the serenity of the Japanese countryside, the pulse of urban nights, and the poetic stillness of everyday life.
        </p>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/#gallery"
            class="rounded-full bg-night-500 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-night-400"
          >
            View Gallery
          </NuxtLink>
          <NuxtLink
            to="/#about"
            class="rounded-full border border-white/20 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-night-100 transition hover:border-white/40 hover:text-white"
          >
            Meet Ton
          </NuxtLink>
        </div>
      </div>
      <div class="flex-1">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <GalleryHeroImage
              title="Morning Mist"
              description="Sunrise over Lake Kawaguchi"
              src="/previews/v1/sunrise-lake.svg"
            />
            <GalleryHeroImage
              title="Neon Rain"
              description="Shibuya at night"
              src="/previews/v1/neon-rain.svg"
            />
          </div>
          <div class="mt-10 space-y-4">
            <GalleryHeroImage
              title="Soft Bloom"
              description="Springtime blossoms"
              src="/previews/v1/spring-bloom.svg"
            />
            <GalleryHeroImage
              title="Silent Dunes"
              description="Minimal desert landscape"
              src="/previews/v1/desert-dusk.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
