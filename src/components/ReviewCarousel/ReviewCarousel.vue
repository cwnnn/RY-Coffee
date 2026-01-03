<template>
  <!-- HEADER -->
  <div class="reviews-header">
    <h2 class="reviews-title">{{ props.title }}</h2>
    <p class="reviews-subtitle">
      Google’da <span class="reviews-score">{{ props.score }}</span>
    </p>
  </div>

  <!-- GRID (<=3) -->
  <div v-if="props.reviews.length <= visibleCount" class="reviews-grid">
    <ReviewCard v-for="r in props.reviews" :key="r.name" :review="r" />
  </div>

  <!-- SLIDER -->
  <div v-else ref="viewport" class="reviews-slider" @mouseenter="pause" @mouseleave="play">
    <div ref="track" class="reviews-track" :style="{ transform: `translateX(-${offset}px)` }">
      <ReviewCard
        v-for="(r, i) in props.reviews"
        :key="i"
        :review="r"
        class="reviews-card"
        :style="{ width: cardWidth + 'px' }"
      />
    </div>
  </div>
</template>

<style src="./ReviewCarousel.css"></style>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import ReviewCard from './ReviewCard/ReviewCard.vue'
import type { ReviewsSliderProps } from './ReviewCarousel.interface'

const props = defineProps<ReviewsSliderProps>()

const currentIndex = ref(0)
const offset = ref(0)

const viewport = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)

let interval: number | null = null
let slideStep = 0
let maxIndex = 0

const gap = 32 // gap-8 = 32px
const cardWidth = ref(0)

const visibleCount = ref(3)

const updateVisibleCount = () => {
  const w = window.innerWidth

  if (w < 640)
    visibleCount.value = 1 // mobile
  else if (w < 1024)
    visibleCount.value = 2 // tablet
  else visibleCount.value = 3 // desktop
}

const calculate = () => {
  if (!viewport.value) return

  updateVisibleCount()
  const viewportWidth = viewport.value.clientWidth

  cardWidth.value = (viewportWidth - gap * (visibleCount.value - 1)) / visibleCount.value

  slideStep = cardWidth.value + gap
  maxIndex = Math.max(0, props.reviews.length - visibleCount.value)
}

const play = () => {
  interval = window.setInterval(() => {
    currentIndex.value = currentIndex.value >= maxIndex ? 0 : currentIndex.value + 1

    offset.value = currentIndex.value * slideStep
  }, 2000)
}

const pause = () => {
  if (interval) clearInterval(interval)
}

onMounted(async () => {
  await nextTick()
  calculate()
  window.addEventListener('resize', calculate)
  play()
})

onBeforeUnmount(() => {
  pause()
  window.removeEventListener('resize', calculate)
})
</script>
