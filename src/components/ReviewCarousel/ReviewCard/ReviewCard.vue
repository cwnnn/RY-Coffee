<template>
  <div class="review-card">
    <!-- STARS -->
    <div class="review-stars">
      <span
        v-for="i in 5"
        :key="i"
        class="review-star"
        :class="i <= review.rating ? 'is-active' : 'is-passive'"
      >
        ★
      </span>
    </div>

    <!-- TEXT -->
    <p class="review-text">“{{ review.text }}”</p>

    <!-- NAME -->
    <div class="review-author">
      {{ review.name }}
    </div>
  </div>
</template>

<style src="./ReviewCard.css"></style>

<script setup lang="ts">
defineProps<{
  review: {
    name: string
    rating: number
    text: string
  }
}>()
</script>
