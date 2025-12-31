<script setup lang="ts" generic="TItem extends Record<string, unknown>, TValue">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  items: readonly TItem[]
  modelValue: TValue | null
  labelKey: keyof TItem
  valueKey: keyof TItem
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: TValue): void
}>()

const open = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)

function handleClickOutside(e: MouseEvent) {
  if (!wrapperRef.value) return
  if (!wrapperRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const selectedItem = computed(() =>
  props.items.find((item) => item[props.valueKey] === props.modelValue),
)

function select(item: TItem) {
  emit('update:modelValue', item[props.valueKey] as TValue)
  open.value = false
}
</script>

<template>
  <div ref="wrapperRef" class="relative w-full">
    <!-- Trigger -->
    <button
      type="button"
      class="w-full flex items-center justify-between rounded-full border-2 border-(--coffee-caramel) text-(--coffee-caramel) px-4 py-3 text-left"
      @click="open = !open"
    >
      <span class="text-sm">
        {{
          selectedItem
            ? labelKey
              ? selectedItem[labelKey]
              : selectedItem
            : placeholder || 'Seçiniz'
        }}
      </span>
      <span class="text-xs opacity-60">▼</span>
    </button>

    <!-- Dropdown -->
    <div
      v-if="open"
      class="absolute z-50 mt-2 w-full border-2 rounded-xl border-(--coffee-caramel) bg-(--coffee-caramel)/40 shadow-lg text-black overflow-hidden"
    >
      <button
        v-for="(item, i) in items"
        :key="i"
        class="w-full px-4 py-2 text-left text-sm hover:bg-black/5"
        @click="select(item)"
      >
        {{ labelKey ? item[labelKey] : item }}
      </button>
    </div>
  </div>
</template>
