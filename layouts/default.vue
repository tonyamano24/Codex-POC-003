<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-body">
    <header class="border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div>
          <p class="text-sm uppercase tracking-[0.4em] text-slate-400">Personal Gallery</p>
          <h1 class="font-display text-2xl font-semibold text-white">TonYamanoGallery</h1>
        </div>
        <nav class="hidden gap-6 text-sm text-slate-400 md:flex">
          <a class="transition hover:text-white" href="#spotlight">Spotlight</a>
          <a class="transition hover:text-white" href="#gallery">Gallery</a>
          <a class="transition hover:text-white" href="#versions">Versions</a>
        </nav>
        <a
          class="rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition hover:bg-accent hover:text-slate-950"
          href="#contact"
        >
          Connect
        </a>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="border-t border-slate-800 bg-slate-950/70">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {{ new Date().getFullYear() }} Ton Yamano. Crafted with Nuxt 3 & TailwindCSS.</p>
        <div class="flex gap-4">
          <a class="transition hover:text-white" href="mailto:hello@tonyamano.com">hello@tonyamano.com</a>
          <a class="transition hover:text-white" href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
          <a class="transition hover:text-white" href="https://behance.net" target="_blank" rel="noopener">Behance</a>
        </div>
      </div>
    </footer>
  </div>
</template>
