<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modelValue" class="modal-overlay" tabindex="-1" @keydown.esc="close">
        <!-- Backdrop -->
        <div class="modal-backdrop" @click="close" />

        <!-- Modal -->
        <div class="modal-panel" @click.stop>
          <!-- Header -->
          <div v-if="title || $slots.header" class="modal-header">
            <slot name="header">
              <h3 class="modal-title">{{ title }}</h3>
            </slot>

            <button class="modal-close" @click="close">✕</button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { ModalProps } from './BaseModal.interface'

withDefaults(defineProps<ModalProps>(), {
  title: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
}>()

const close = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped src="./BaseModal.css"></style>
