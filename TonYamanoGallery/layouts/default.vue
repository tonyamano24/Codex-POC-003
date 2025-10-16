<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div>
          <p class="font-semibold uppercase tracking-[0.4em] text-slate-400">Ton Yamano</p>
          <h1 class="font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">Personal Photo Gallery</h1>
        </div>
        <div class="flex flex-col items-center gap-1 text-sm text-slate-400 md:items-end">
          <p>Captured moments from travels and everyday stories.</p>
          <p class="flex items-center gap-2">
            <span class="inline-block h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
            Latest series: <strong class="text-slate-100">Northern Lights, 2025</strong>
          </p>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t border-slate-800 bg-slate-950/80">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-center text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
        <p>&copy; {{ new Date().getFullYear() }} Ton Yamano. All rights reserved.</p>
        <p class="flex items-center justify-center gap-3">
          <a class="transition hover:text-slate-200" href="mailto:hello@tonyamano.com">Email</a>
          <span aria-hidden="true">&middot;</span>
          <a class="transition hover:text-slate-200" href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a>
          <span aria-hidden="true">&middot;</span>
          <a class="transition hover:text-slate-200" href="https://www.youtube.com" target="_blank" rel="noopener">Behind the scenes</a>
        </p>
      </div>
    </footer>
  </div>
</template>
