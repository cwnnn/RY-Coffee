<template>
  <button @click="toggle" class="lang-switch">
    <!-- Kayan knob -->
    <span
      class="lang-switch-knob"
      :class="modelValue === option2 ? 'knob-right' : 'knob-left'"
    ></span>

    <!-- Option 1 -->
    <span class="lang-switch-label left" :class="modelValue === option1 ? 'active' : 'inactive'">
      {{ option1.toUpperCase() }}
    </span>

    <!-- Option 2 -->
    <span class="lang-switch-label right" :class="modelValue === option2 ? 'active' : 'inactive'">
      {{ option2.toUpperCase() }}
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  option1: string
  option2: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function toggle() {
  const next = props.modelValue === props.option1 ? props.option2 : props.option1

  emit('update:modelValue', next)
}
</script>
<style scoped src="./LanguageToggle.css"></style>
