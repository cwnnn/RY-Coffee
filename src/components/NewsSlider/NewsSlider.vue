<template>
  <div class="slider-wrapper" @mouseenter="pause" @mouseleave="resume">
    <!-- SLIDES -->
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, i) in items" :key="i" class="slide-item">
        <!-- IMAGE -->
        <img :src="resolveImage(item.image)" class="slide-image" />

        <!-- OVERLAY -->
        <div v-if="item.title || item.text" class="slide-overlay" />

        <!-- TEXT AREA -->
        <div v-if="item.title || item.text" class="slide-text container">
          <p v-if="item.title" class="slide-title">
            {{ item.title }}
          </p>

          <p v-if="item.text" class="slide-description">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- DOTS -->
    <div class="dots">
      <button
        v-for="(_, i) in items"
        :key="i"
        class="dot"
        :class="{ active: i === currentIndex }"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { resolveImage } from '@/utils/imageResolver'

interface NewsItem {
  image: string
  title?: string
  text?: string
}

const props = defineProps<{
  items: NewsItem[]
}>()

const currentIndex = ref(0)
let interval: number | null = null
const INTERVAL_TIME = 3500

const start = () => {
  stop()
  interval = window.setInterval(next, INTERVAL_TIME)
}

const stop = () => {
  if (interval !== null) {
    clearInterval(interval)
    interval = null
  }
}

const pause = () => {
  stop()
}

const resume = () => {
  start()
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
}

const goTo = (index: number) => {
  currentIndex.value = index
}

onMounted(start)
onBeforeUnmount(stop)
</script>

<style scoped>
@reference "tailwindcss/theme.css";
.slider-wrapper {
  @apply w-full h-140  overflow-hidden relative cursor-grabbing;
}

/* SLIDES CONTAINER */
.slides {
  @apply flex h-full transition-transform duration-400;
}

/* SINGLE SLIDE */
.slide-item {
  @apply relative min-w-full aspect-[16/9] max-h-140;
}

/* IMAGE */
.slide-image {
  @apply w-full h-full object-cover;
}

/* OVERLAY (gradient) */
.slide-overlay {
  @apply absolute inset-x-0 bottom-0 h-1/2
         bg-linear-to-t
         from-black/90 via-black/50 to-transparent;
}

/* TEXT AREA */
.slide-text {
  @apply absolute inset-x-0 bottom-0 h-1/2
         flex flex-col justify-center
         px-6 py-6 text-white;
}

/* TITLE */
.slide-title {
  @apply text-2xl font-semibold;
}

/* DESCRIPTION */
.slide-description {
  @apply text-sm opacity-90;
}

/* DOTS */
.dots {
  @apply absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2;
}

.dot {
  @apply w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer;
}

.dot.active {
  @apply bg-white;
}
</style>
