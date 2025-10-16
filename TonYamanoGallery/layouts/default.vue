<template>
  <div class="flex min-h-screen flex-col">
    <header class="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div>
          <p class="text-xs uppercase tracking-[0.6em] text-night-200">Ton Yamano</p>
          <h1 class="font-serif text-2xl font-semibold text-white">Gallery</h1>
        </div>
        <nav class="flex items-center gap-6 text-sm text-night-100">
          <NuxtLink to="/" class="transition hover:text-white">Home</NuxtLink>
          <NuxtLink to="/#gallery" class="transition hover:text-white">Gallery</NuxtLink>
          <NuxtLink to="/#about" class="transition hover:text-white">About</NuxtLink>
          <NuxtLink to="/#contact" class="transition hover:text-white">Contact</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
