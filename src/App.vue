<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader/AppHeader.vue'
</script>

<template>
  <AppHeader>
    <template #logo>
      <img src="../public/logo.png" alt="" class="w-13" />
      <h1 class="text-3xl font-extrabold font-accent text-(--text-header)">RY Coffe</h1></template
    >
    <template #nav>
      <a
        class="font-Header px-3 py-2 text-(--text-header) font-Header hover:bg-white/10"
        href="#menu"
        >Menu</a
      >
      <a class="font-Header px-3 py-2 text-(--text-header) hover:bg-white/10" href="#ourstory"
        >Our Story</a
      >
      <a
        class="font-Header px-3 py-2 text-(--text-header) font-Header hover:bg-white/10"
        href="#location"
        >Location</a
      >
      <a
        class="font-Header px-3 py-2 text-(--text-header) font-Header hover:bg-white/10"
        href="#contact"
        >Contact</a
      >
    </template>

    <template #actions>
      <button class="rounded-lg bg-white/10 px-3 py-2 text-(--text-header) hover:bg-white/15">
        language
      </button>
    </template>
  </AppHeader>

  <RouterView />
</template>
