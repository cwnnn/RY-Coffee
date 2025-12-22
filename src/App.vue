<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader/AppHeader.vue'
import LanguageToggle from './components/LanguageToggle/LanguageToggle.vue'
import { useI18n } from 'vue-i18n'
import BaseFooter from './components/BaseFooter/BaseFooter.vue'

const { t } = useI18n()

const { locale } = useI18n()
</script>

<template>
  <AppHeader>
    <template #logo>
      <a href="#hero" class="flex items-center gap-3">
        <img src="/logo.png" alt="RY Coffee Logo" class="w-13" />
        <h1 class="text-3xl font-extrabold text-(--text-header)">{{ t('common.brand.name') }}</h1>
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
        href="#locations"
        >{{ t('header.locations') }}</a
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
  <BaseFooter>
    <!-- LEFT -->
    <template #left>
      <div class="flex items-center gap-3 text-white">
        <img src="/logo2.webp" alt="Brand Logo" class="w-13" />
        <span class="font-semibold">
          {{ t('common.brand.name') }}
        </span>
      </div>

      <p class="text-sm leading-relaxed">
        {{ t('common.brand.slogan') }}
      </p>
    </template>

    <!-- CENTER -->
    <template #center>
      <nav class="flex flex-col gap-2">
        <a href="#hero">
          {{ t('footer.nav.home') }}
        </a>
        <a href="#ourstory">
          {{ t('footer.nav.about') }}
        </a>
      </nav>
    </template>

    <!-- RIGHT -->
    <template #right>
      <div class="text-sm">
        <p>📍 {{ t('footer.contact.address') }}</p>
        <p>📞 {{ t('footer.contact.phone') }}</p>
      </div>
    </template>
  </BaseFooter>
</template>
