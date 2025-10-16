<template>
  <section class="space-y-20">
    <section id="gallery" class="space-y-8">
      <header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="font-display text-3xl font-semibold text-dark sm:text-4xl">Signature Series</h2>
          <p class="text-sm text-gray-600">
            Each photograph preserves a fleeting mood. Explore the series and open a preview to learn about the
            story behind the frame.
          </p>
        </div>
        <div class="flex items-center gap-3 text-xs text-gray-500">
          <span class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
            <span class="h-2 w-2 rounded-full bg-green-400" />
            Available for prints
          </span>
          <span class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
            <span class="h-2 w-2 rounded-full bg-blue-400" />
            Limited edition
          </span>
        </div>
      </header>
      <div class="grid gap-8 md:grid-cols-2">
        <GalleryPhotoCard
          v-for="item in photos"
          :key="item.id"
          :photo="item"
          @preview="handlePreview"
        />
      </div>
    </section>

    <section id="versions" class="space-y-8">
      <header class="space-y-3">
        <h2 class="font-display text-3xl font-semibold text-dark sm:text-4xl">Gallery Versions</h2>
        <p class="text-sm text-gray-600">
          Every release of the gallery introduces a new way to experience Ton Yamano’s visual storytelling. Preview
          the look and feel of each era.
        </p>
      </header>
      <div class="space-y-8">
        <VersionCard
          v-for="version in galleryVersions"
          :key="version.id"
          :version="version"
        />
      </div>
    </section>

    <section id="about" class="rounded-3xl bg-dark p-10 text-light shadow-xl">
      <div class="space-y-6">
        <h2 class="font-display text-3xl font-semibold">About Ton Yamano</h2>
        <p class="max-w-3xl text-sm text-gray-200">
          Ton Yamano is a Japanese-Brazilian photographer exploring the intersection of memory, migration, and light.
          His work blends documentary sincerity with experimental processing, crafting narratives that feel both
          intimate and cinematic. The TonYamanoGallery project is a living archive that documents this evolution.
        </p>
        <div class="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-400">
          <span class="rounded-full bg-white/10 px-4 py-2">Documentary</span>
          <span class="rounded-full bg-white/10 px-4 py-2">Fine Art</span>
          <span class="rounded-full bg-white/10 px-4 py-2">Experimental</span>
          <span class="rounded-full bg-white/10 px-4 py-2">Storytelling</span>
        </div>
      </div>
    </section>
  </section>
  <PhotoModal :open="isModalOpen" :photo="activePhoto" @close="closeModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { photos } from '~/data/photos'
import { galleryVersions } from '~/data/versions'
import type { Photo } from '~/data/photos'

const isModalOpen = ref(false)
const activePhoto = ref<Photo | null>(null)

const handlePreview = (photo: Photo) => {
  activePhoto.value = photo
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  activePhoto.value = null
}
</script>
