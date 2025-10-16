<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans">
    <NuxtRouteAnnouncer />
    <main class="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-16">
      <HeroSection />
      <GalleryGrid />
      <VersionTimeline />
      <CallToAction />
    </main>
    <TheFooter />
  </div>
</template>
