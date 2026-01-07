<template>
  <section class="container py-10">
    <!-- TITLE -->
    <header class="menu-header">
      <h1 class="menu-title">{{ $t('menu.title') }}</h1>
      <p class="menu-subtitle">{{ $t('menu.subtitle') }}</p>
    </header>

    <!-- STICKY MENU -->
    <div class="menu-sticky-wrapper container">
      <div class="menu-sticky">
        <a href="#hot" class="menu-link">{{ $t('menu.categories.hot') }}</a>
        <a href="#cold" class="menu-link">{{ $t('menu.categories.cold') }}</a>
        <a href="#dessert" class="menu-link">{{ $t('menu.categories.dessert') }}</a>
      </div>
    </div>

    <!-- CATEGORIES -->
    <div class="menu-categories">
      <section
        v-for="category in menu"
        :key="category.id"
        :id="category.id"
        class="menu-category scroll-mt-24"
      >
        <h2 class="menu-category-title">
          {{ category.title }}
        </h2>

        <div class="menu-grid">
          <article
            v-for="item in category.items"
            :key="item.id"
            :id="item.id"
            class="menu-card group"
            :class="{ 'highlight-item': route.hash === `#${item.id}` }"
          >
            <div class="menu-card-image-wrapper">
              <img :src="item.image" :alt="item.name" class="menu-card-image" />
            </div>

            <div class="menu-card-content">
              <div class="menu-card-header">
                <h3 class="menu-card-title">
                  {{ item.name }}
                </h3>
                <span class="menu-card-price"> {{ displayPrice(item.price) }} </span>
              </div>

              <p v-if="item.description" class="menu-card-description">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { menuByLocale } from '@/i18n/messages'
import { useRoute } from 'vue-router'

const route = useRoute()

const { locale } = useI18n()

const menu = computed(() => {
  return menuByLocale[locale.value as 'tr' | 'en']
})

const EXCHANGE_RATE = 1 / 43 // örnek

const displayPrice = (price: number) => {
  const value = locale.value === 'en' ? price * EXCHANGE_RATE : price

  return new Intl.NumberFormat(locale.value === 'en' ? 'en-US' : 'tr-TR', {
    style: 'currency',
    currency: locale.value === 'en' ? 'USD' : 'TRY',
    maximumFractionDigits: 0,
  }).format(value)
}
</script>

<style scoped>
@reference "tailwindcss/theme.css";

/* HEADER */
.menu-header {
  @apply mb-10 text-center;
}

.menu-title {
  @apply text-4xl md:text-5xl font-semibold;
}

.menu-subtitle {
  @apply mt-4 text-black/60;
}

/* STICKY MENU */
.menu-sticky-wrapper {
  @apply sticky top-24 z-30;
}

.menu-sticky {
  @apply flex justify-center gap-10 py-3
         max-w-120 mx-auto
         bg-(--coffee-espresso)/70 text-white
         border rounded-full;
}

/* MENU LINKS */
.menu-link {
  @apply relative font-semibold transition-colors duration-300;
}

.menu-link::after {
  content: '';
  @apply absolute left-0 -bottom-1 h-[2px] w-0
         bg-(--coffee-caramel)
         transition-all duration-300;
}

.menu-link:hover {
  @apply text-(--coffee-caramel);
}

.menu-link:hover::after {
  @apply w-full;
}

/* CATEGORIES */
.menu-categories {
  @apply space-y-24;
}

.menu-category-title {
  @apply mb-10 text-2xl font-semibold;
}

/* GRID */
.menu-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8;
}

/* CARD */
.menu-card {
  @apply overflow-hidden rounded-2xl border bg-white
         transition hover:shadow-lg;
}

/* IMAGE */
.menu-card-image-wrapper {
  @apply relative h-56 overflow-hidden;
}

.menu-card-image {
  @apply h-full w-full object-cover
         object-[50%_10%]
         transition-transform duration-500
         group-hover:scale-110;
}

/* CONTENT */
.menu-card-content {
  @apply p-5;
}

.menu-card-header {
  @apply flex items-start justify-between gap-4;
}

.menu-card-title {
  @apply text-lg font-semibold;
}

.menu-card-price {
  @apply font-semibold text-(--coffee-caramel);
}

.menu-card-description {
  @apply mt-2 text-sm text-black/60;
}

.highlight-item {
  animation: pulseGlow 1.5s ease-in-out 2;
}

@keyframes pulseGlow {
  0% {
    outline: 1px solid rgba(251, 36, 36, 0.5);
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    outline: 3px solid rgba(251, 36, 36, 0.7);
  }
  100% {
    transform: scale(1);
    outline: 1px solid rgba(251, 36, 36, 0.5);
  }
}
</style>
