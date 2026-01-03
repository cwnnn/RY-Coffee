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
      <RouterLink to="/#hero" class="app-logo">
        <img src="/logo.png" alt="RY Coffee Logo" class="app-logo__img" />
        <h1 class="app-logo__text">
          {{ t('common.brand.name') }}
        </h1>
      </RouterLink>
    </template>

    <template #nav>
      <RouterLink to="/#menu" class="nav-link font-Header">
        {{ t('header.menu') }}
      </RouterLink>

      <RouterLink to="/#ourstory" class="nav-link font-Header">
        {{ t('header.ourStory') }}
      </RouterLink>

      <RouterLink to="/#locations" class="nav-link font-Header">
        {{ t('header.locations') }}
      </RouterLink>

      <RouterLink to="/#contact" class="nav-link font-Header">
        {{ t('header.contact') }}
      </RouterLink>
    </template>

    <template #actions>
      <LanguageToggle v-model="locale" option1="tr" option2="en" />
    </template>
  </AppHeader>

  <RouterView />

  <BaseFooter>
    <template #left>
      <div class="footer-brand">
        <img src="/logo2.webp" alt="Brand Logo" class="footer-brand__img" />
        <span class="footer-brand__name">
          {{ t('common.brand.name') }}
        </span>
      </div>

      <p class="footer-slogan">
        {{ t('common.brand.slogan') }}
      </p>
    </template>

    <template #center>
      <nav class="footer-nav">
        <a href="#hero" class="footer-nav__link">
          {{ t('footer.nav.home') }}
        </a>
        <a href="#ourstory" class="footer-nav__link">
          {{ t('footer.nav.about') }}
        </a>
      </nav>
    </template>

    <template #right>
      <div class="footer-contact">
        <p>📍 {{ t('footer.contact.address') }}</p>
        <p>📞 {{ t('footer.contact.phone') }}</p>
      </div>
    </template>
  </BaseFooter>
</template>
<style scoped>
@reference "tailwindcss/theme.css";

/* LOGO */
.app-logo {
  @apply flex items-center gap-3;
}

.app-logo__img {
  @apply w-13;
}

.app-logo__text {
  @apply text-3xl font-extrabold text-(--text-header);
}

/* NAV LINKS */
.nav-link {
  @apply px-3 py-2 text-(--text-header) hover:bg-white/10;
}

/* FOOTER LEFT */
.footer-brand {
  @apply flex items-center gap-3 text-white;
}

.footer-brand__img {
  @apply w-13;
}

.footer-brand__name {
  @apply font-semibold;
}

.footer-slogan {
  @apply text-sm leading-relaxed;
}

/* FOOTER CENTER */
.footer-nav {
  @apply flex flex-col gap-2;
}

.footer-nav__link {
  @apply hover:underline;
}

/* FOOTER RIGHT */
.footer-contact {
  @apply text-sm;
}
</style>
