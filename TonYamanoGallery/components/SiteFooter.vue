<template>
  <footer id="contact" class="border-t border-white/5 bg-stone-950/70 py-12">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 class="text-2xl font-semibold">Let's create something unforgettable.</h2>
        <p class="mt-3 max-w-xl text-sm text-white/70">
          Get in touch for booking inquiries, collaborations, or to purchase limited prints from the Ton Yamano archive.
        </p>
      </div>
      <div class="flex flex-col gap-3 text-sm uppercase tracking-[0.35em] text-white/80">
        <a href="mailto:hello@tonyamano.com" class="hover:text-amber-300 transition">hello@tonyamano.com</a>
        <a href="https://instagram.com" target="_blank" rel="noopener" class="hover:text-amber-300 transition">Instagram</a>
        <a href="https://behance.net" target="_blank" rel="noopener" class="hover:text-amber-300 transition">Behance</a>
      </div>
    </div>
    <p class="mt-8 text-center text-xs uppercase tracking-[0.3em] text-white/40">© {{ new Date().getFullYear() }} Ton Yamano. Crafted with Nuxt 3.</p>
  </footer>
</template>
