<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader/AppHeader.vue'
import LanguageToggle from './components/LanguageToggle/LanguageToggle.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const { locale } = useI18n()
</script>

<template>
  <AppHeader>
    <template #logo>
      <a href="#hero" class="flex items-center gap-3">
        <img src="/logo.png" alt="RY Coffee Logo" class="w-13" />
        <h1 class="text-3xl font-extrabold text-(--text-header)">RY Coffee</h1>
      </a>
    </template>
    <template #nav>
      <a
        class="font-Header px-3 py-2 text-(--text-header) font-Header hover:bg-white/10"
        href="#menu"
        >{{ t('header.menu') }}</a
      >
      <a class="font-Header px-3 py-2 text-(--text-header) hover:bg-white/10" href="#ourstory">{{
        t('header.ourStory')
      }}</a>
      <a
        class="font-Header px-3 py-2 text-(--text-header) font-Header hover:bg-white/10"
        href="#location"
        >{{ t('header.location') }}</a
      >
      <a
        class="font-Header px-3 py-2 text-(--text-header) font-Header hover:bg-white/10"
        href="#contact"
        >{{ t('header.contact') }}</a
      >
    </template>

    <template #actions>
      <LanguageToggle v-model="locale" option1="tr" option2="en" />
    </template>
  </AppHeader>

  <RouterView />
</template>
