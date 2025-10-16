<template>
  <transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
      role="dialog"
      aria-modal="true"
      @keydown.escape.window="emit('close')"
    >
      <div class="mx-4 max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div class="flex flex-col md:flex-row">
          <img :src="photo?.imageUrl" :alt="photo?.title" class="h-72 w-full object-cover md:h-auto md:w-1/2">
          <div class="flex flex-1 flex-col gap-4 p-8">
            <header class="flex items-start justify-between gap-4">
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-accent">{{ photo?.version }}</p>
                <h2 class="font-display text-2xl font-semibold text-dark">{{ photo?.title }}</h2>
              </div>
              <button
                type="button"
                class="rounded-full bg-light px-3 py-1 text-sm uppercase tracking-[0.2em] text-gray-500 transition hover:bg-dark hover:text-white"
                @click="emit('close')"
              >
                Close
              </button>
            </header>
            <p class="text-sm leading-relaxed text-gray-600">
              {{ photo?.description }}
            </p>
            <div class="grid grid-cols-2 gap-4 text-xs text-gray-500">
              <div>
                <p class="font-semibold text-dark">Location</p>
                <p>{{ photo?.location }}</p>
              </div>
              <div>
                <p class="font-semibold text-dark">Captured</p>
                <p>{{ photo?.year }}</p>
              </div>
              <div>
                <p class="font-semibold text-dark">Camera</p>
                <p>{{ photo?.camera }}</p>
              </div>
              <div>
                <p class="font-semibold text-dark">Palette</p>
                <div class="mt-2 flex items-center gap-1">
                  <span
                    v-for="color in photo?.palette || []"
                    :key="color"
                    :style="{ backgroundColor: color }"
                    class="h-4 w-4 rounded-full border border-white/70 shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Photo } from '~/data/photos'

const props = defineProps<{ open: boolean; photo: Photo | null }>()
const emit = defineEmits<{ (event: 'close'): void }>()

const photo = computed(() => props.photo)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
