<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

function setLang(lang: 'tr' | 'en') {
  locale.value = lang
}
</script>

<template>
  <header class="flex gap-4">
    <button @click="setLang('tr')">TR</button>
    <button @click="setLang('en')">EN</button>
  </header>

  <h1 class="">{{ t('header.home') }}</h1>
  <h2>{{ t('hero.subtitle') }}</h2>
  <p>{{ t('hero.description') }}</p>

  <button>{{ t('common.call') }}</button>

  <RouterView />
</template>
