<template>
  <section :id="sectionId" class="scroll-mt-24">
    <div class="mx-auto max-w-6xl px-6 py-16">
      <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-amber-300">{{ badge }}</p>
          <h2 class="mt-4 font-playfair text-4xl font-semibold md:text-5xl">{{ title }}</h2>
        </div>
        <p class="max-w-xl text-base text-white/70 md:text-lg">{{ description }}</p>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.slug"
          class="group overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-xl shadow-black/40 transition hover:border-amber-400/70 hover:bg-white/10"
        >
          <img
            :src="project.cover"
            :alt="project.title"
            class="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div class="flex flex-col gap-4 px-8 py-10">
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-semibold">{{ project.title }}</h3>
              <p class="text-sm uppercase tracking-[0.3em] text-white/60">{{ project.location }} · {{ project.year }}</p>
            </div>
            <p class="text-white/70">{{ project.summary }}</p>
            <PreviewStrip :previews="project.previews" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PhotoProject } from "~/types/gallery";
import PreviewStrip from "~/components/PreviewStrip.vue";

defineProps<{ sectionId: string; title: string; description: string; projects: PhotoProject[]; badge: string }>();
</script>
