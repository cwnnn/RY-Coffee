<template>
  <header class="header">
    <div class="header-wrapper container">
      <!-- SOL -->
      <div class="header-left">
        <slot name="logo">
          <!-- default logo -->
          <div class="header-logo">⚡</div>
          <h1 class="header-title">App Name</h1>
        </slot>
      </div>

      <!-- SAĞ -->
      <div class="header-right">
        <!-- Desktop Nav -->
        <nav class="header-nav-desktop">
          <slot name="nav" />
        </nav>

        <!-- Actions -->
        <slot name="actions" />

        <!-- Mobile Button -->
        <button @click="mobileOpen = !mobileOpen" class="header-mobile-btn">☰</button>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <div v-if="mobileOpen" class="header-mobile">
      <nav class="header-mobile-nav container">
        <slot name="nav" />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileOpen = ref(false)
</script>
<style src="./AppHeader.css"></style>
