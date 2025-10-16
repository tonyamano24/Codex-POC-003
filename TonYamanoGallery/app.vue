<template>
  <div class="min-h-screen bg-gallery-background text-white">
    <NuxtLoadingIndicator color="#EAB308" :height="4" />
    <div class="relative isolate overflow-hidden">
      <NuxtPage />
      <footer class="mt-20 border-t border-white/10 py-12 text-center text-sm text-white/60">
        <p>&copy; {{ new Date().getFullYear() }} {{ siteOwner }}. Crafted with Nuxt 3 & TailwindCSS.</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const siteOwner = computed(() => config.public.siteOwner)
</script>
