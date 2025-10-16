<template>
  <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-sky-500 to-indigo-500 p-[1px] shadow-2xl">
    <div class="relative flex flex-col items-center gap-6 rounded-[calc(theme(borderRadius.3xl)-1px)] bg-slate-950/95 px-8 py-12 text-center sm:px-16 sm:py-16">
      <h2 class="text-balance text-3xl font-semibold text-white sm:text-4xl">
        Receive new releases before they premiere online
      </h2>
      <p class="max-w-2xl text-pretty text-base text-slate-300">
        Subscribe to behind-the-scenes breakdowns, contact sheets, and invitations to Ton Yamano’s limited gallery drops.
      </p>
      <form class="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
        <label class="sr-only" for="cta-email">Email</label>
        <input
          id="cta-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          autocomplete="email"
          class="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-base text-white placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
        />
        <button
          type="submit"
          class="h-12 rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:-translate-y-0.5 hover:bg-emerald-200"
        >
          Join the list
        </button>
      </form>
    </div>
  </section>
</template>
