export const messages = {
  tr: {
    common: {
      brand: {
        name: 'RY Coffee',
        slogan: 'Kahvenin en sade ve özenli hali.',
      },
    },
    header: {
      menu: 'Menü',
      ourStory: 'Hikayemiz',
      locations: 'Konumlar',
      contact: 'İletişim',
    },
    footer: {
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
      },
      contact: {
        address: 'Kadıköy / İstanbul',
        phone: '0555 555 55 55',
      },
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
    common: {
      brand: {
        name: 'RY Coffee House',
        slogan: 'Coffee, crafted with care.',
      },
    },
    header: {
      menu: 'Menu',
      ourStory: 'Our Story',
      locations: 'Locations',
      contact: 'Contact',
    },
    footer: {
      nav: {
        home: 'Home',
        about: 'About Us',
      },
      contact: {
        address: 'Kadikoy / Istanbul',
        phone: '+90 555 555 55 55',
      },
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
