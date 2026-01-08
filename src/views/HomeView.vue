<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseDropdown from '@/components/BaseDropdown/BaseDropdown.vue'
import IconButton from '@/components/IconButton/IconButton.vue'
import BaseModal from '@/components/Modal/BaseModal.vue'
import ReviewCarousel from '@/components/ReviewCarousel/ReviewCarousel.vue'
import NewsSlider from '@/components/NewsSlider/NewsSlider.vue'
import { resolveCoffeeImage } from '@/utils/imageResolver'

import { locationsData } from '@/data/locations'
import { reviewsData } from '@/data/reviews'

import { useI18n } from 'vue-i18n'
import { menuByLocale, newsByLocale } from '@/i18n/messages'

const { locale } = useI18n()
const { t } = useI18n()

const expanded = ref(false)

const fadeMask = {
  maskImage: 'linear-gradient(to bottom, black 70%, transparent)',
  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent)',
}

const selectedMapUrl = computed(() => {
  return (
    locationsData.find((l) => l.id === selectedLocationId.value)?.mapUrl || locationsData[0]!.mapUrl // default
  )
})

const selectedLocationId = ref<number | null>(null)

const menuData = computed(() => {
  return menuByLocale[locale.value as 'tr' | 'en']
})
const newsData = computed(() => {
  return newsByLocale[locale.value as 'tr' | 'en']
})
const renderOrder = [1, 2, 0, 3]

const featuredItems = computed(() => {
  const items = menuData.value
    .flatMap((c) => c.items)
    .filter((i) => i.featured)
    .slice(0, 4)

  return renderOrder.map((i) => items[i]).filter(Boolean)
})
const campaignOpen = ref(false)
</script>

<template>
  <main>
    <!--hero section -->
    <section id="hero" class="hero">
      <!-- Background Image -->
      <img src="/src/assets/images/home5.webp" alt="Hero" class="hero-bg" v-motion-fade />

      <!-- Content -->
      <div class="hero-content container">
        <p class="hero-title" v-motion-slide-top :delay="200" :duration="500">
          {{ t('home.hero.title') }}
        </p>

        <p class="hero-text" v-motion-slide-top :delay="500" :duration="500">
          {{ t('home.hero.subtitle') }}
        </p>

        <div class="hero-actions">
          <a href="#news">
            <BaseButton
              class="hero-button"
              size="lg"
              v-motion-slide-left
              :delay="600"
              :duration="500"
            >
              {{ t('home.hero.campaignsButton') }}
            </BaseButton>
          </a>

          <a href="#locations">
            <BaseButton
              class="hero-button"
              size="lg"
              color="tertiary"
              v-motion-slide-left
              :delay="850"
              :duration="500"
            >
              {{ t('home.hero.directionsButton') }}
            </BaseButton>
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features container">
      <h1 class="features-title" v-motion-slide-visible-once-top :delay="600" :duration="1200">
        {{ t('home.features.title') }}
      </h1>

      <!-- WRAPPER -->
      <div class="features-wrapper">
        <!-- FEATURES GRID -->
        <div class="features-grid">
          <div
            class="feature-item"
            v-motion-slide-visible-once-bottom
            :delay="400"
            :duration="1200"
          >
            <img src="../../public/logo2.webp" class="feature-icon" />
            <h3 class="feature-heading">
              {{ t('home.features.items.selectedBeans.title') }}
            </h3>
            <p class="feature-text">
              {{ t('home.features.items.selectedBeans.text') }}
            </p>
          </div>

          <div
            class="feature-item"
            v-motion-slide-visible-once-bottom
            :delay="600"
            :duration="1200"
          >
            <img src="../../public/logo2.webp" class="feature-icon" />
            <h3 class="feature-heading">
              {{ t('home.features.items.atmosphere.title') }}
            </h3>
            <p class="feature-text">
              {{ t('home.features.items.atmosphere.text') }}
            </p>
          </div>

          <div
            class="feature-item"
            v-motion-slide-visible-once-bottom
            :delay="800"
            :duration="1200"
          >
            <img src="../../public/logo2.webp" class="feature-icon" />
            <h3 class="feature-heading">
              {{ t('home.features.items.freshProducts.title') }}
            </h3>
            <p class="feature-text">
              {{ t('home.features.items.freshProducts.text') }}
            </p>
          </div>

          <div
            class="feature-item"
            v-motion-slide-visible-once-bottom
            :delay="1000"
            :duration="1200"
          >
            <img src="../../public/logo2.webp" class="feature-icon" />
            <h3 class="feature-heading">
              {{ t('home.features.items.easyAccess.title') }}
            </h3>
            <p class="feature-text">
              {{ t('home.features.items.easyAccess.text') }}
            </p>
          </div>
        </div>

        <!-- DIVIDERS -->
        <span class="features-divider-mobile-vertical"></span>
        <span class="features-divider-mobile-horizontal"></span>

        <span class="features-divider-desktop d1"></span>
        <span class="features-divider-desktop d2"></span>
        <span class="features-divider-desktop d3"></span>
      </div>
    </section>

    <!--News Section-->
    <section id="news" class="pt-15">
      <NewsSlider :items="newsData" v-motion-fade-visible-once :duration="1000" />
    </section>

    <!--menu section-->
    <section id="menu" class="menu">
      <div class="container menu-inner">
        <!-- Title -->
        <h2 class="menu-title" v-motion-slide-visible-once-top :delay="400" :duration="500">
          {{ t('home.menu.title') }}
        </h2>

        <p class="menu-description" v-motion-slide-visible-once-top :delay="600" :duration="500">
          {{ t('home.menu.description') }}
        </p>

        <!-- Menu Items -->
        <div class="menu-grid">
          <RouterLink
            v-for="(item, index) in featuredItems"
            :key="item?.id"
            :to="{
              name: 'menu',
              hash: `#${item!.id}`,
            }"
            class="menu-item group"
            v-motion-pop-visible-once
            :delay="400 + index * 200"
            :duration="500"
          >
            <img :src="resolveCoffeeImage(item!.image)" :alt="item?.id" class="menu-image" />
            <h3 class="menu-item-title">{{ item?.id }}</h3>
            <span class="menu-item-text">{{ item?.description }}</span>
          </RouterLink>
        </div>

        <!-- CTA -->
        <RouterLink to="/menu">
          <BaseButton
            class="menu-button"
            size="lg"
            color="secondary"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="1000"
          >
            {{ t('home.menu.cta') }}
          </BaseButton>
        </RouterLink>
      </div>
    </section>

    <!-- Promo Section -->
    <section class="campaign" id="xxx">
      <!-- BACKGROUND SPLIT -->
      <div class="campaign-bg">
        <div
          class="campaign-bg-left"
          v-motion-slide-visible-once-left
          :delay="400"
          :duration="1000"
        >
          <img src="../assets/images/home3.webp" alt="" class="campaign-bg-image" />
        </div>
        <div
          class="campaign-bg-right"
          v-motion-slide-visible-once-right
          :delay="400"
          :duration="1000"
        ></div>
      </div>

      <!-- CONTENT -->
      <div class="campaign-content container">
        <!-- SOL -->
        <div class="campaign-left" v-motion-slide-visible-once-left :delay="400" :duration="1000">
          <h2 class="campaign-left-title">
            {{ t('home.campaign.left.title') }}
          </h2>

          <p class="campaign-left-text">
            {{ t('home.campaign.left.text') }}
          </p>

          <a href="#locations">
            <BaseButton class="campaign-button" size="lg" color="quaternary">
              {{ t('home.campaign.left.cta') }}
            </BaseButton>
          </a>
        </div>

        <!-- SAĞ -->
        <div class="campaign-right" v-motion-slide-visible-once-right :delay="400" :duration="1000">
          <h1 class="campaign-right-title">
            {{ t('home.campaign.right.title') }}
          </h1>

          <p class="campaign-right-text">
            {{ t('home.campaign.right.text') }}
          </p>

          <BaseButton
            class="campaign-button"
            size="lg"
            color="secondary"
            @click="campaignOpen = true"
          >
            {{ t('home.campaign.right.cta') }}
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Instagaram Section -->
    <section id="instagram" class="instagram-section">
      <!-- SOL DEKOR -->
      <div
        class="instagram-left-decor"
        v-motion
        :initial="{ opacity: 0, x: -100, y: -120 }"
        :visible="{ opacity: 1, x: -30, y: -120 }"
        :delay="400"
        :duration="1000"
      >
        <img src="../assets/images/coffeeVectorel.webp" alt="Coffee" class="coffee-img rotate-6" />
        <img src="../assets/images/smoke.webp" alt="" class="coffee-smoke" />
      </div>

      <!-- SAĞ DEKOR -->
      <img
        src="../assets/images/heart.webp"
        alt=""
        class="instagram-right-decor"
        v-motion
        :initial="{ opacity: 0, x: 100, y: -120 }"
        :visible="{ opacity: 1, x: -40, y: -120 }"
        :delay="400"
        :duration="1000"
      />

      <!-- ORTA İÇERİK -->
      <h2 class="instagram-title" v-motion-slide-visible-once-top :delay="400" :duration="500">
        {{ t('home.instagram.title') }}
      </h2>

      <div
        class="instagram-frame-wrapper"
        v-motion-slide-visible-once-bottom
        :delay="600"
        :duration="500"
      >
        <iframe
          src="//lightwidget.com/widgets/2d97a4cba3935e768a93a2cf3bdd23b7.html"
          allowtransparency="true"
          class="instagram-frame"
        ></iframe>
      </div>
    </section>

    <!--our story section-->
    <section
      id="ourstory"
      class="story"
      :class="expanded ? 'story-expanded' : 'story-collapsed'"
      v-motion-fade-visible-once
    >
      <!-- Background Image -->
      <img src="../assets/images/home2.webp" alt="Coffee Story" class="story-bg" />

      <!-- Content -->
      <div class="story-overlay">
        <div class="container">
          <div class="story-content">
            <h2
              class="story-title"
              v-html="t('home.story.title')"
              v-motion-slide-visible-once-bottom
              :delay="100"
            ></h2>

            <!-- TEXT -->
            <p
              class="story-text"
              :class="expanded ? 'story-text-expanded' : 'story-text-collapsed'"
              :style="expanded ? {} : fadeMask"
              v-motion-fade-visible-once
              :delay="200"
            >
              {{ t('home.story.paragraphs.p1') }}
              <br /><br />
              {{ t('home.story.paragraphs.p2') }}
              <br /><br />
              {{ t('home.story.paragraphs.p3') }}
            </p>

            <!-- BUTTON -->
            <BaseButton
              @click="expanded = !expanded"
              variant="outline"
              class="story-button"
              v-motion-pop-visible-once
              :delay="300"
            >
              {{ expanded ? t('home.story.buttons.collapse') : t('home.story.buttons.expand') }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- reviews section-->
    <section
      class="container py-20 pb-30"
      v-motion-slide-visible-once-top
      :delay="400"
      :duration="800"
    >
      <ReviewCarousel
        :title="t('home.reviews.title')"
        :score="t('home.reviews.score')"
        :reviews="reviewsData"
      />
    </section>

    <!-- locations -->
    <section id="locations" class="locations">
      <div class="locations-grid">
        <!-- CONTENT -->
        <div
          class="locations-content"
          v-motion-slide-visible-once-left
          :delay="400"
          :duration="1000"
        >
          <p class="locations-title" v-motion-slide-visible-once-top :delay="600" :duration="1000">
            {{ t('home.locations.title') }}
          </p>

          <BaseDropdown
            v-model="selectedLocationId"
            :items="locationsData"
            label-key="name"
            value-key="id"
            :placeholder="t('home.locations.selectPlaceholder')"
            v-motion-slide-visible-once-bottom
            :delay="600"
            :duration="1000"
          />
        </div>
        <!-- MAP -->
        <div class="locations-map">
          <iframe
            :src="selectedMapUrl"
            class="locations-iframe"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- contact section -->
    <section id="contact" class="container contact">
      <h2 class="contact-title" v-motion-slide-visible-once-top :delay="400" :duration="500">
        {{ t('home.contact.title') }}
      </h2>

      <p class="contact-description" v-motion-slide-visible-once-top :delay="600" :duration="500">
        {{ t('home.contact.description') }}
      </p>

      <div class="contact-grid">
        <IconButton link="#" v-motion-pop-visible-once :delay="400" :duration="1000">
          <template #icon>
            <img src="../components/icons/mail.webp" alt="Mail Icon" class="contact-icon" />
          </template>
          <template #title>
            {{ t('home.contact.items.mail') }}
          </template>
          <template #description> info@rycoffee.com </template>
        </IconButton>

        <IconButton
          link="https://instagram.com"
          v-motion-pop-visible-once
          :delay="600"
          :duration="1000"
        >
          <template #icon>
            <img src="../components/icons/insta.webp" alt="Instagram Icon" class="contact-icon" />
          </template>
          <template #title>
            {{ t('home.contact.items.instagram') }}
          </template>
          <template #description> @rycoffee </template>
        </IconButton>

        <IconButton
          link="https://whatsapp.com"
          v-motion-pop-visible-once
          :delay="800"
          :duration="1000"
        >
          <template #icon>
            <img src="../components/icons/whatsapp.webp" alt="WhatsApp Icon" class="contact-icon" />
          </template>
          <template #title>
            {{ t('home.contact.items.whatsapp') }}
          </template>
          <template #description> +90 555 123 45 67 </template>
        </IconButton>
      </div>
    </section>

    <BaseModal v-model="campaignOpen" :title="t('home.campaignModal.title')">
      <p class="text-gray-700 leading-relaxed">
        {{ t('home.campaignModal.text.intro') }}
        <strong>{{ t('home.campaignModal.text.time') }}</strong>
        {{ ' ' }}
        <strong>{{ t('home.campaignModal.text.discount') }}</strong
        >. <br /><br />
        {{ t('home.campaignModal.text.description') }}
      </p>

      <template #footer>
        <div class="flex justify-end gap-2">
          <BaseButton
            variant="outline"
            class="px-4 py-2 rounded border"
            @click="campaignOpen = false"
          >
            {{ t('home.campaignModal.buttons.later') }}
          </BaseButton>

          <BaseButton class="px-4 py-2 rounded bg-black text-white" @click="campaignOpen = false">
            {{ t('home.campaignModal.buttons.confirm') }}
          </BaseButton>
        </div>
      </template>
    </BaseModal>
  </main>
</template>

<style scoped>
@reference "tailwindcss/theme.css";

.hero {
  @apply relative w-full h-150;
}

.hero-bg {
  @apply absolute inset-0 w-full h-full object-cover object-[50%_40%];
}

.hero-content {
  @apply relative z-10 h-full pt-30 text-left;
}

.hero-title {
  @apply text-3xl md:text-6xl font-bold text-white;
}

.hero-text {
  @apply mt-3 text-lg text-white/90 max-w-2xl;
}

.hero-actions {
  @apply flex flex-col md:flex-row gap-4;
}

.hero-button {
  @apply h-13 mt-5;
}
/* --------------------------------------*/
.features {
  @apply pt-15 pb-20;
}

.features-title {
  @apply text-center text-3xl md:text-4xl mb-10;
}

.features-wrapper {
  @apply relative;
}

.features-grid {
  @apply grid grid-cols-2 md:grid-cols-4 text-center;
}

.feature-item {
  @apply flex flex-col items-center gap-3;
}

.feature-icon {
  @apply w-30 mx-auto;
}

.feature-heading {
  @apply font-medium;
}

.feature-text {
  @apply text-sm text-gray-600;
}

/* MOBILE DIVIDERS */
.features-divider-mobile-vertical {
  @apply absolute left-1/2 top-[5%] h-[90%] w-px bg-(--coffee-espresso)/50 md:hidden;
}

.features-divider-mobile-horizontal {
  @apply absolute top-1/2 left-[5%] w-[90%] h-px bg-(--coffee-espresso)/50 md:hidden;
}

/* DESKTOP DIVIDERS */
.features-divider-desktop {
  @apply hidden md:block absolute bottom-0 h-[80%] w-px bg-(--coffee-espresso)/50;
}

.features-divider-desktop.d1 {
  @apply left-1/4;
}

.features-divider-desktop.d2 {
  @apply left-2/4;
}

.features-divider-desktop.d3 {
  @apply left-3/4;
}
/*------------------------------ */
.menu {
  @apply bg-(--coffee-latte) py-20 scroll-mt-24;
}

.menu-inner {
  @apply mx-auto text-center;
}

.menu-title {
  @apply text-3xl md:text-4xl font-semibold mb-4;
}

.menu-description {
  @apply max-w-xl mx-auto mb-12 text-(--coffee-espresso)/70;
}

.menu-grid {
  @apply grid grid-cols-2 md:grid-cols-4 gap-8;
}

.menu-image {
  @apply mx-auto mb-4 rounded-xl transition group-hover:scale-105;
}

.menu-item-title {
  @apply text-lg font-semibold;
}

.menu-item-text {
  @apply text-sm text-(--coffee-espresso)/60;
}

.menu-button {
  @apply h-13 mt-5;
}
/*-------------------------------------------------------- */
.campaign {
  @apply relative w-full py-30 overflow-hidden;
}

/* BACKGROUND */
.campaign-bg {
  @apply absolute inset-0 grid grid-cols-1 md:grid-cols-2;
}

.campaign-bg-left {
  @apply bg-(--coffee-espresso) flex justify-end;
}

.campaign-bg-right {
  @apply bg-(--coffee-latte-soft);
}

.campaign-bg-image {
  @apply w-[30%] h-full object-cover object-[80%] lg:object-[90%];
}

/* CONTENT */
.campaign-content {
  @apply relative grid grid-cols-1 md:grid-cols-2 gap-12;
}

/* LEFT */
.campaign-left {
  @apply max-w-80 text-white;
}

.campaign-left-title {
  @apply text-3xl md:text-4xl;
}

.campaign-left-text {
  @apply mt-4;
}

/* RIGHT */
.campaign-right {
  @apply text-center text-(--coffee-espresso);
}

.campaign-right-title {
  @apply text-3xl md:text-4xl;
}

.campaign-right-text {
  @apply mt-4;
}

/* BUTTON */
.campaign-button {
  @apply h-13 mt-5;
}
/*-------------------------------------------------------- */

.instagram-section {
  @apply relative py-15  text-center overflow-hidden;
}

/* Left */
.instagram-left-decor {
  @apply hidden md:block absolute left-0 opacity-80 pointer-events-none
         w-60 lg:w-[400px] lg:ml-10;

  top: 25%;
  transform: translateY(-50%);
}

.coffee-img {
  @apply w-full max-w-[320px] block;
}

.coffee-smoke {
  @apply absolute pointer-events-none  blur-[2px] mix-blend-screen pl-10 w-4/5 bottom-[44%] left-[5%] lg:w-3/5;

  transform-origin: center bottom;

  animation: steamScale 7s ease-in-out infinite;
}
/* Right */
.instagram-right-decor {
  @apply hidden md:block absolute right-0 opacity-80 pointer-events-none
         w-30 lg:w-50 -rotate-24;

  bottom: 0;
  transform: translateY(-50%);
}

.instagram-title {
  @apply text-3xl md:text-4xl font-semibold mb-15;
}

.instagram-frame-wrapper {
  @apply flex justify-center;
}

.instagram-frame {
  @apply w-full max-w-md h-120 border-0;
}

@keyframes steamScale {
  0% {
    transform: scaleY(0.85);
    opacity: 0.65;
  }

  50% {
    transform: scaleY(1.15);
    opacity: 0.85;
  }

  100% {
    transform: scaleY(0.85);
    opacity: 0.65;
  }
}

/*-------------------------------------------------------- */
.story {
  @apply relative w-full overflow-hidden transition-all duration-700;
}

.story-collapsed {
  @apply h-120;
}

.story-expanded {
  @apply h-auto;
}

/* BACKGROUND */
.story-bg {
  @apply absolute inset-0 w-full h-full object-cover;
}

/* OVERLAY */
.story-overlay {
  @apply relative z-10 flex items-start py-15;
}

/* CONTENT */
.story-content {
  @apply max-w-xl text-white;
}

.story-title {
  @apply text-3xl md:text-5xl font-semibold leading-tight text-(--coffee-caramel);
}

.story-text {
  @apply mt-6 text-white/90 leading-relaxed transition-all duration-500;
}

.story-text-collapsed {
  @apply max-h-40 overflow-hidden;
}

.story-text-expanded {
  @apply max-h-none;
}

.story-button {
  @apply mt-4;
}
/*-------------------------------------------------------- */

.locations-grid {
  @apply grid md:grid-cols-2 h-120;
}

/* MAP */
.locations-map {
  @apply bg-(--coffee-latte-soft) z-10;
}

.locations-iframe {
  @apply w-full h-full grayscale;
}

/* CONTENT */
.locations-content {
  @apply bg-(--coffee-espresso) flex flex-col items-center justify-center gap-10 p-10 xl:pr-50 z-20;
}

.locations-title {
  @apply text-5xl lg:text-8xl text-(--coffee-caramel) font-bold;
}

/*-------------------------------------------------------- */
.contact {
  @apply py-20 text-center;
}

.contact-title {
  @apply text-3xl md:text-4xl text-(--coffee-espresso);
}

.contact-description {
  @apply mt-4 text-sm text-black;
}

.contact-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6 py-15;
}

.contact-icon {
  @apply w-20 h-20;
}
</style>
