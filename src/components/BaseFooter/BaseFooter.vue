<template>
  <footer class="w-full bg-(--coffee-espresso) text-white/80">
    <div class="container py-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <!-- LEFT -->
      <div class="flex flex-col gap-3">
        <slot name="left" />
      </div>

      <!-- CENTER -->
      <div class="flex flex-col items-center gap-3">
        <slot name="center" />
      </div>

      <!-- RIGHT -->
      <div class="flex flex-col md:items-end gap-3">
        <slot name="right" />
      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div class="border-t border-white/10">
      <div
        class="container py-4 text-sm text-white/50 flex flex-col md:flex-row items-center justify-between gap-2"
      >
        <span>© {{ new Date().getFullYear() }} RY Coffee</span>
        <span class="text-xs">Design & Development by RY Studio</span>
      </div>
    </div>
  </footer>
</template>
