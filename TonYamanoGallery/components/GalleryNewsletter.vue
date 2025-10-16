<template>
  <section id="newsletter" class="relative isolate overflow-hidden px-6 pb-24 sm:px-8">
    <div class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center shadow-2xl backdrop-blur">
      <h2 class="font-display text-3xl font-semibold text-white">Get notified when new versions drop</h2>
      <p class="mt-4 text-base text-white/70">
        Receive behind-the-scenes stories, lighting breakdowns, and early access to Ton Yamano's upcoming releases.
      </p>
      <form class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          class="w-full rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-white placeholder:text-white/30 focus:border-gallery-accent focus:outline-none focus:ring-2 focus:ring-gallery-accent/50 sm:w-72"
        />
        <button
          type="submit"
          class="inline-flex items-center justify-center rounded-full bg-gallery-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
        >
          Notify me
        </button>
      </form>
      <p class="mt-3 text-xs text-white/50">
        We respect your inbox. Expect a single dispatch per release.
      </p>
    </div>
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gallery-accent/10 to-transparent" />
    </div>
  </section>
</template>
