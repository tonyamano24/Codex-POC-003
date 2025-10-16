<template>
  <footer class="mt-24 border-t border-white/10 bg-slate-950/80">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
      <p>© {{ new Date().getFullYear() }} Ton Yamano. Crafted with Nuxt 3 & Tailwind CSS.</p>
      <nav class="flex flex-wrap gap-4">
        <NuxtLink to="#gallery" class="transition hover:text-white">Gallery</NuxtLink>
        <NuxtLink to="#versions" class="transition hover:text-white">Timeline</NuxtLink>
        <NuxtLink to="#" class="transition hover:text-white">Contact</NuxtLink>
      </nav>
    </div>
  </footer>
</template>
