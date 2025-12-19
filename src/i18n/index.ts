// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import { messages } from './messages'

export const i18n = createI18n({
  legacy: false,
  locale: 'tr',
  fallbackLocale: 'en',
  messages,
})

export default i18n
