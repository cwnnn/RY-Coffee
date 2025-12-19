export const messages = {
  tr: {
    header: {
      home: 'Ana Sayfa',
      menu: 'Menü',
      gallery: 'Galeri',
      contact: 'İletişim',
    },
    hero: {
      title: 'Gerçek Kahve Deneyimi',
      subtitle: 'Taze çekirdekler, sıcak ortam',
    },
    buttons: {
      call: 'Ara',
      whatsapp: 'WhatsApp',
      directions: 'Yol Tarifi',
    },
  },

  en: {
    header: {
      home: 'Home',
      menu: 'Menu',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Real Coffee Experience',
      subtitle: 'Fresh beans, warm atmosphere',
    },
    buttons: {
      call: 'Call',
      whatsapp: 'WhatsApp',
      directions: 'Get Directions',
    },
  },
} as const

export type Locale = keyof typeof messages
