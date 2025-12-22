<template>
  <a :href="link" target="_blank" rel="noopener" class="feature-link">
    <!-- ICON -->
    <div class="feature-icon">
      <slot name="icon" />
    </div>

    <h4 class="feature-title">
      <slot name="title" />
    </h4>

    <!-- DESCRIPTION -->
    <p class="feature-description">
      <slot name="description" />
    </p>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>

<style scoped src="./IconButton.css"></style>
