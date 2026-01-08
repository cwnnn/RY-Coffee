import { menuDataTR, menuDataEN } from '@/data/menu'
import { newsDataTR, newsDataEN } from '@/data/news'

export const menuByLocale = {
  tr: menuDataTR,
  en: menuDataEN,
} as const

export const newsByLocale = {
  tr: newsDataTR,
  en: newsDataEN,
} as const

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
    home: {
      hero: {
        title: 'Kahveni Keşfet',
        subtitle: 'En iyi çekirdeklerden, modern sunumlarla',
        campaignsButton: 'Kampanyalar',
        directionsButton: 'Yol Tarifi',
      },
      features: {
        title: 'Öne Çıkan Özellikler',

        items: {
          selectedBeans: {
            title: 'Özenle Seçilmiş Çekirdekler',
            text: 'Taze kavrulmuş, kaliteli kahve çekirdekleri.',
          },
          atmosphere: {
            title: 'Sıcak & Modern Atmosfer',
            text: 'Rahat, keyifli ve samimi bir ortam.',
          },
          freshProducts: {
            title: 'Günlük Taze Ürünler',
            text: 'Her gün taze hazırlanan tatlılar ve atıştırmalıklar.',
          },
          easyAccess: {
            title: 'Kolay Ulaşım',
            text: 'Merkezi konum ve hızlı yol tarifi.',
          },
        },
      },
      menu: {
        title: 'Menümüzden Seçmeler',
        description: 'En çok tercih edilen kahvelerimizi keşfedin.',
        cta: 'Tüm Menüyü Gör',
      },
      campaign: {
        left: {
          title: 'Neden Bizi Seçmelisiniz?',
          text: 'Kahveyi sadece içecek olarak değil, bir deneyim olarak sunuyoruz.',
          cta: 'Yol Tarifi',
        },
        right: {
          title: 'Sabah Kampanyası',
          text: '10:00 – 12:00 arası Türk Kahvesi %20 İndirimli',
          cta: 'Kampanyayı Gör',
        },
      },
      instagram: {
        title: "Bizi Instagram'dan takip et",
      },
      story: {
        title: 'Bir Fincanla <br />Başlayan Hikâye',

        paragraphs: {
          p1: 'Kahve bizim için sadece bir içecek değil. Güne başlarken verdiğimiz küçük bir mola, dostlarla paylaşılan anlar ve hayatın temposunu biraz olsun yavaşlatmanın en keyifli yolu.',
          p2: 'Her şey, iyi bir kahvenin insanları bir araya getirdiğine olan inancımızla başladı. En iyi çekirdekleri özenle seçiyor, her fincanda aynı kaliteyi ve aynı tutkuyu sunmaya çalışıyoruz.',
          p3: 'Demleme sürecinden sunuma kadar her detay, aceleye gelmeden, olması gerektiği gibi ilerler. Çünkü bizim için kahve; hız değil denge, alışkanlık değil bir deneyimdir.',
        },

        buttons: {
          expand: 'Devamını Gör',
          collapse: 'Kapat',
        },
      },
      reviews: {
        title: 'Müşteri Yorumları',
        score: `Google' da 4.8 / 5 ⭐ (120+ yorum)`,
      },
      locations: {
        title: 'Neredeyiz?',
        selectPlaceholder: 'Şube seç',
      },
      contact: {
        title: 'Biz Buradayız',
        description:
          'Bir kahve molası, bir soru ya da sadece merhaba demek için dilediğin yerden bize ulaşabilirsin.',

        items: {
          mail: 'Mail',
          instagram: 'Instagram',
          whatsapp: 'WhatsApp',
        },
      },
      campaignModal: {
        title: '☀️ Sabah Kampanyası',
        text: {
          intro: 'Güne keyifli bir başlangıç yapın.',
          time: '09:00 – 12:00',
          discount: 'Türk Kahvesi %20 indirimli',
          description:
            'Taze çekilmiş kahve çekirdekleriyle hazırlanan Türk kahvemizi sabah saatlerine özel avantajlı fiyatla deneyimleyin.',
        },
        buttons: {
          later: 'Daha Sonra',
          confirm: 'Tamam ☕',
        },
      },
    },
    menu: {
      title: 'Menümüz',
      subtitle: 'Özenle hazırlanmış kahveler ve tatlılar',

      categories: {
        hot: 'Sıcak Kahveler',
        cold: 'Soğuk Kahveler',
        dessert: 'Tatlılar',
      },
    },
  },

  en: {
    common: {
      brand: {
        name: 'RY Coffee ',
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
    home: {
      hero: {
        title: 'Discover Your Coffee',
        subtitle: 'From the finest beans, with modern presentations',
        campaignsButton: 'Campaigns',
        directionsButton: 'Get Directions',
      },

      features: {
        title: 'Key Features',

        items: {
          selectedBeans: {
            title: 'Carefully Selected Beans',
            text: 'Freshly roasted, high-quality coffee beans.',
          },
          atmosphere: {
            title: 'Warm & Modern Atmosphere',
            text: 'A comfortable, pleasant, and welcoming environment.',
          },
          freshProducts: {
            title: 'Fresh Daily Products',
            text: 'Desserts and snacks freshly prepared every day.',
          },
          easyAccess: {
            title: 'Easy Access',
            text: 'Central location with quick directions.',
          },
        },
      },

      menu: {
        title: 'Featured from Our Menu',
        description: 'Discover our most popular coffees.',
        cta: 'View Full Menu',
      },

      campaign: {
        left: {
          title: 'Why Choose Us?',
          text: 'We offer coffee not just as a drink, but as an experience.',
          cta: 'Get Directions',
        },
        right: {
          title: 'Morning Campaign',
          text: '20% off Turkish Coffee between 10:00 – 12:00',
          cta: 'View Campaign',
        },
      },

      instagram: {
        title: 'Follow Us on Instagram',
      },

      story: {
        title: 'A Story That Began <br />With a Cup',

        paragraphs: {
          p1: 'For us, coffee is not just a beverage. It is a small break at the start of the day, moments shared with friends, and the most enjoyable way to slow down the pace of life.',
          p2: 'Everything began with our belief that good coffee brings people together. We carefully select the finest beans and strive to deliver the same quality and passion in every cup.',
          p3: 'From brewing to presentation, every detail is handled with care and without rush. Because for us, coffee is not about speed, but balance; not a habit, but an experience.',
        },

        buttons: {
          expand: 'Read More',
          collapse: 'Close',
        },
      },

      reviews: {
        title: 'Customer Reviews',
        score: 'Rated 4.8 / 5 ⭐ on Google (120+ reviews)',
      },

      locations: {
        title: 'Where Are We?',
        selectPlaceholder: 'Select branch',
      },

      contact: {
        title: 'We Are Here',
        description:
          'Whether for a coffee break, a question, or just to say hello, you can reach us anytime.',

        items: {
          mail: 'Email',
          instagram: 'Instagram',
          whatsapp: 'WhatsApp',
        },
      },

      campaignModal: {
        title: '☀️ Morning Campaign',
        text: {
          intro: 'Start your day with pleasure.',
          time: '09:00 – 12:00',
          discount: '20% off Turkish Coffee',
          description:
            'Enjoy our Turkish coffee, prepared with freshly ground beans, at a special morning price.',
        },
        buttons: {
          later: 'Later',
          confirm: 'Okay ☕',
        },
      },
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'Carefully crafted coffees and desserts',

      categories: {
        hot: 'Hot Coffee',
        cold: 'Cold Coffee',
        dessert: 'Desserts',
      },
    },
  },
} as const

export type Locale = keyof typeof messages
