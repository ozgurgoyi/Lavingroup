import type { Lang } from '@/lib/i18n'

export type ProjectContent = {
  name: string
  category: string
  status: string
  location: string
  overview: string
  scope: string[]
}

/** A titled group of real gallery photos (e.g. "Vinyl Flooring Installation"). */
export type GalleryGroup = {
  /** Localized category label. */
  title: Record<Lang, string>
  /** Real photos in this category, kept in upload order. */
  images: string[]
}

export type Project = {
  slug: string
  /** Cover image shown on the card and as the detail-page hero. */
  cover: string
  /** Real gallery images available today (cover-first). No fake images. */
  gallery: string[]
  /** Total number of gallery slots the finished gallery will contain. */
  galleryCount: number
  /** Optional categorized gallery. When present, the detail page groups photos by category. */
  galleryGroups?: GalleryGroup[]
  /** The project name in every language, used to match localized project cards. */
  match: string[]
  content: Record<Lang, ProjectContent>
}

/** UI labels for the project detail experience, per language. */
export const projectLabels: Record<
  Lang,
  {
    details: string
    back: string
    category: string
    status: string
    location: string
    overview: string
    scopeOfWork: string
    gallery: string
    gallerySubtitle: string
    comingSoon: string
    related: string
    relatedSubtitle: string
    viewProject: string
  }
> = {
  en: {
    details: 'Project Details',
    back: 'Back to Projects',
    category: 'Category',
    status: 'Status',
    location: 'Location',
    overview: 'Project Overview',
    scopeOfWork: 'Scope of Work',
    gallery: 'Project Gallery',
    gallerySubtitle: 'A closer look at the craftsmanship delivered on site.',
    comingSoon: 'Image coming soon',
    related: 'Related Projects',
    relatedSubtitle: 'Explore more of our work across Iraq and Türkiye.',
    viewProject: 'View Project',
  },
  ar: {
    details: 'تفاصيل المشروع',
    back: 'العودة إلى المشاريع',
    category: 'التصنيف',
    status: 'الحالة',
    location: 'الموقع',
    overview: 'نظرة عامة على المشروع',
    scopeOfWork: 'نطاق العمل',
    gallery: 'معرض المشروع',
    gallerySubtitle: 'نظرة أقرب على الحرفية المنفّذة في الموقع.',
    comingSoon: 'الصورة قريباً',
    related: 'مشاريع ذات صلة',
    relatedSubtitle: 'اكتشف المزيد من أعمالنا في العراق وتركيا.',
    viewProject: 'عرض المشروع',
  },
  tr: {
    details: 'Proje Detayları',
    back: 'Projelere Dön',
    category: 'Kategori',
    status: 'Durum',
    location: 'Konum',
    overview: 'Proje Genel Bakış',
    scopeOfWork: 'İş Kapsamı',
    gallery: 'Proje Galerisi',
    gallerySubtitle: 'Sahada gerçekleştirilen işçiliğe yakından bir bakış.',
    comingSoon: 'Görsel yakında',
    related: 'İlgili Projeler',
    relatedSubtitle: 'Irak ve Türkiye genelindeki çalışmalarımızı keşfedin.',
    viewProject: 'Projeyi Gör',
  },
}

export const projects: Project[] = [
  {
    slug: 'mall-of-iraq',
    cover: '/projects/mall-of-iraq/cover.webp',
    gallery: [
      '/projects/mall-of-iraq/cover.webp',
      '/projects/mall-of-iraq/screed-1.webp',
      '/projects/mall-of-iraq/screed-2.webp',
      '/projects/mall-of-iraq/marble-1.webp',
      '/projects/mall-of-iraq/marble-2.webp',
      '/projects/mall-of-iraq/marble-3.webp',
      '/projects/mall-of-iraq/gypsum-1.webp',
      '/projects/mall-of-iraq/gypsum-2.webp',
    ],
    galleryCount: 8,
    match: ['Mall of Iraq', 'مول العراق'],
    content: {
      en: {
        name: 'Mall of Iraq',
        category: 'Shopping Mall',
        status: 'Completed',
        location: 'Baghdad',
        overview:
          'Lavin Group successfully completed premium finishing works at Mall of Iraq. The project included machine screed works, marble installation, gypsum board ceiling systems and interior finishing works. All works were executed with high engineering standards, strict quality control and delivered on schedule.',
        scope: [
          'Machine Screed Works',
          'Marble Works',
          'Gypsum Board Ceiling Works',
          'Interior Finishing Works',
        ],
      },
      ar: {
        name: 'مول العراق',
        category: 'مركز تسوق',
        status: 'مكتمل',
        location: 'بغداد',
        overview:
          'أنجزت مجموعة لافِن بنجاح أعمال التشطيبات الفاخرة في مول العراق. شمل المشروع أعمال الصبّة الميكانيكية وتركيب الرخام وأنظمة أسقف الجبس بورد وأعمال التشطيبات الداخلية. نُفّذت جميع الأعمال وفق معايير هندسية عالية ورقابة صارمة على الجودة وسُلّمت في الموعد المحدد.',
        scope: [
          'أعمال الصبّة الميكانيكية',
          'أعمال الرخام',
          'أعمال أسقف الجبس بورد',
          'أعمال التشطيبات الداخلية',
        ],
      },
      tr: {
        name: 'Mall of Iraq',
        category: 'Alışveriş Merkezi',
        status: 'Tamamlandı',
        location: 'Bağdat',
        overview:
          'Lavin Group, Mall of Iraq projesinde premium ince işçilik işlerini başarıyla tamamladı. Proje; makine şap işleri, mermer uygulaması, alçıpan tavan sistemleri ve iç mekan ince işçilik işlerini kapsadı. Tüm işler yüksek mühendislik standartları ve sıkı kalite kontrolü ile gerçekleştirildi ve zamanında teslim edildi.',
        scope: [
          'Makine Şap İşleri',
          'Mermer İşleri',
          'Alçıpan Tavan İşleri',
          'İç Mekan İnce İşçilik',
        ],
      },
    },
  },
  {
    slug: 'al-shaab-hospital',
    cover: '/projects/al-shaab-hospital/cover.webp',
    gallery: ['/projects/al-shaab-hospital/cover.webp'],
    galleryCount: 19,
    galleryGroups: [
      {
        title: {
          en: 'Ceramic & Porcelain Installation',
          ar: 'تركيب السيراميك والبورسلان',
          tr: 'Seramik ve Porselen Uygulaması',
        },
        images: [
          '/projects/al-shaab-hospital/ceramic-1.webp',
          '/projects/al-shaab-hospital/ceramic-2.webp',
          '/projects/al-shaab-hospital/ceramic-3.webp',
          '/projects/al-shaab-hospital/ceramic-4.webp',
          '/projects/al-shaab-hospital/ceramic-5.webp',
          '/projects/al-shaab-hospital/ceramic-6.webp',
        ],
      },
      {
        title: {
          en: 'Vinyl Flooring Installation',
          ar: 'تركيب أرضيات الفينيل',
          tr: 'Vinil Zemin Uygulaması',
        },
        images: [
          '/projects/al-shaab-hospital/vinyl-1.webp',
          '/projects/al-shaab-hospital/vinyl-2.webp',
          '/projects/al-shaab-hospital/vinyl-3.webp',
          '/projects/al-shaab-hospital/vinyl-4.webp',
          '/projects/al-shaab-hospital/vinyl-5.webp',
          '/projects/al-shaab-hospital/vinyl-6.webp',
          '/projects/al-shaab-hospital/vinyl-7.webp',
          '/projects/al-shaab-hospital/vinyl-8.webp',
        ],
      },
      {
        title: {
          en: 'Gypsum Board Works',
          ar: 'أعمال الجبس بورد',
          tr: 'Alçıpan İşleri',
        },
        images: [
          '/projects/al-shaab-hospital/gypsum-1.webp',
          '/projects/al-shaab-hospital/gypsum-2.webp',
        ],
      },
      {
        title: {
          en: 'Satin Plaster',
          ar: 'البلاستر الساتان',
          tr: 'Saten Sıva',
        },
        images: [
          '/projects/al-shaab-hospital/plaster-1.webp',
          '/projects/al-shaab-hospital/plaster-2.webp',
        ],
      },
      {
        title: {
          en: 'Interior Painting',
          ar: 'الدهانات الداخلية',
          tr: 'İç Mekan Boyama',
        },
        images: ['/projects/al-shaab-hospital/painting-1.webp'],
      },
    ],
    match: ["Al Sha'ab Hospital — 250 Beds", 'مستشفى الشعب — ٢٥٠ سرير', "Al Sha'ab Hastanesi — 250 Yatak"],
    content: {
      en: {
        name: "Al Sha'ab Hospital — 250 Beds",
        category: 'Hospital',
        status: 'Completed',
        location: 'Baghdad',
        overview:
          "Lavin Group delivered finishing and fit-out works for the 250-bed Al Sha'ab Hospital, a landmark healthcare facility in Baghdad. The scope covered marble and specialized flooring, gypsum board ceiling systems and full interior finishing, all executed to strict hospital-grade standards with rigorous quality control.",
        scope: [
          'Marble & Specialized Flooring',
          'Gypsum Board Ceiling Works',
          'Interior Finishing Works',
          'Hospital-Grade Fit-Out',
        ],
      },
      ar: {
        name: 'مستشفى الشعب — ٢٥٠ سرير',
        category: 'مستشفى',
        status: 'مكتمل',
        location: 'بغداد',
        overview:
          'أنجزت مجموعة لافِن أعمال التشطيبات والتجهيز لمستشفى الشعب بسعة ٢٥٠ سريراً، وهو منشأة صحية بارزة في بغداد. شمل النطاق أعمال الرخام والأرضيات المتخصصة وأنظمة أسقف الجبس بورد والتشطيبات الداخلية الكاملة، ونُفّذت جميعها وفق معايير صحية صارمة ورقابة دقيقة على الجودة.',
        scope: [
          'أعمال الرخام والأرضيات المتخصصة',
          'أعمال أسقف الجبس بورد',
          'أعمال التشطيبات الداخلية',
          'تجهيز بمعايير المستشفيات',
        ],
      },
      tr: {
        name: "Al Sha'ab Hastanesi — 250 Yatak",
        category: 'Hastane',
        status: 'Tamamlandı',
        location: 'Bağdat',
        overview:
          "Lavin Group, Bağdat'ın önemli bir sağlık tesisi olan 250 yataklı Al Sha'ab Hastanesi için ince işçilik ve iç donanım işlerini gerçekleştirdi. Kapsam; mermer ve özel zemin kaplamaları, alçıpan tavan sistemleri ve eksiksiz iç mekan ince işçiliğini içermekte olup tümü katı hastane standartları ve titiz kalite kontrolü ile uygulanmıştır.",
        scope: [
          'Mermer ve Özel Zemin Kaplama',
          'Alçıpan Tavan İşleri',
          'İç Mekan İnce İşçilik',
          'Hastane Standardında İç Donanım',
        ],
      },
    },
  },
  {
    slug: 'diyala-olympic-stadium',
    cover: '/projects/diyala-olympic-stadium/cover.webp',
    gallery: ['/projects/diyala-olympic-stadium/cover.webp'],
    galleryCount: 16,
    galleryGroups: [
      {
        title: { en: 'Site Overview', ar: 'نظرة عامة على الموقع', tr: 'Saha Genel Bakış' },
        images: [
          '/projects/diyala-olympic-stadium/overview-1.webp',
          '/projects/diyala-olympic-stadium/overview-2.webp',
        ],
      },
      {
        title: { en: 'Foundation Works', ar: 'أعمال الأساسات', tr: 'Temel İşleri' },
        images: [
          '/projects/diyala-olympic-stadium/foundation-1.webp',
          '/projects/diyala-olympic-stadium/foundation-2.webp',
        ],
      },
      {
        title: { en: 'Formwork Works', ar: 'أعمال القوالب', tr: 'Kalıp İşleri' },
        images: ['/projects/diyala-olympic-stadium/formwork-1.webp'],
      },
      {
        title: {
          en: 'Reinforcement Steel Works',
          ar: 'أعمال حديد التسليح',
          tr: 'Donatı Çeliği İşleri',
        },
        images: [
          '/projects/diyala-olympic-stadium/rebar-1.webp',
          '/projects/diyala-olympic-stadium/rebar-2.webp',
          '/projects/diyala-olympic-stadium/rebar-3.webp',
        ],
      },
      {
        title: { en: 'Concrete Works', ar: 'أعمال الخرسانة', tr: 'Beton İşleri' },
        images: [
          '/projects/diyala-olympic-stadium/concrete-1.webp',
          '/projects/diyala-olympic-stadium/concrete-2.webp',
        ],
      },
      {
        title: { en: 'Structural Progress', ar: 'التقدم الإنشائي', tr: 'Yapısal İlerleme' },
        images: [
          '/projects/diyala-olympic-stadium/structure-1.webp',
          '/projects/diyala-olympic-stadium/structure-2.webp',
        ],
      },
      {
        title: { en: 'Site Progress', ar: 'تقدم الموقع', tr: 'Saha İlerlemesi' },
        images: ['/projects/diyala-olympic-stadium/progress-1.webp'],
      },
      {
        title: { en: 'Workers on Site', ar: 'العمال في الموقع', tr: 'Sahadaki İşçiler' },
        images: [
          '/projects/diyala-olympic-stadium/workers-1.webp',
          '/projects/diyala-olympic-stadium/workers-2.webp',
        ],
      },
      {
        title: {
          en: 'Equipment & Site Activity',
          ar: 'المعدات ونشاط الموقع',
          tr: 'Ekipman ve Saha Faaliyeti',
        },
        images: ['/projects/diyala-olympic-stadium/equipment-1.webp'],
      },
    ],
    match: [
      'Diyala Olympic Stadium — 35,000 Capacity',
      'ملعب ديالى الأولمبي — سعة ٣٥٬٠٠٠',
      'Diyala Olimpiyat Stadı — 35.000 Kapasite',
    ],
    content: {
      en: {
        name: 'Diyala Olympic Stadium — 35,000 Capacity',
        category: 'Sports Facility',
        status: 'Ongoing',
        location: 'Diyala, Iraq',
        overview:
          'Lavin Group is delivering the structural construction works for the Diyala Olympic Stadium, a 35,000-spectator sports facility in Diyala, Iraq. The scope includes formwork, reinforcement steel, concrete and finishing works, executed with high engineering standards and strict quality control as the project progresses through its foundation and structural phases.',
        scope: [
          'Formwork Works',
          'Reinforcement Steel Works',
          'Concrete Works',
          'Finishing Works',
        ],
      },
      ar: {
        name: 'ملعب ديالى الأولمبي — سعة ٣٥٬٠٠٠',
        category: 'منشأة رياضية',
        status: 'قيد التنفيذ',
        location: 'ديالى، العراق',
        overview:
          'تنفّذ مجموعة لافِن الأعمال الإنشائية لملعب ديالى الأولمبي، وهو منشأة رياضية تتسع لـ ٣٥٬٠٠٠ متفرج في ديالى بالعراق. يشمل النطاق أعمال القوالب وحديد التسليح والخرسانة والتشطيبات، وتُنفّذ وفق معايير هندسية عالية ورقابة صارمة على الجودة مع تقدّم المشروع عبر مراحل الأساسات والإنشاء.',
        scope: [
          'أعمال القوالب',
          'أعمال حديد التسليح',
          'أعمال الخرسانة',
          'أعمال التشطيبات',
        ],
      },
      tr: {
        name: 'Diyala Olimpiyat Stadı — 35.000 Kapasite',
        category: 'Spor Tesisi',
        status: 'Devam Ediyor',
        location: 'Diyala, Irak',
        overview:
          "Lavin Group, Irak'ın Diyala kentinde 35.000 seyirci kapasiteli bir spor tesisi olan Diyala Olimpiyat Stadı'nın yapısal inşaat işlerini gerçekleştirmektedir. Kapsam; kalıp, donatı çeliği, beton ve ince işçilik işlerini içermekte olup proje temel ve yapısal aşamalarında ilerlerken yüksek mühendislik standartları ve sıkı kalite kontrolü ile uygulanmaktadır.",
        scope: [
          'Kalıp İşleri',
          'Donatı Çeliği İşleri',
          'Beton İşleri',
          'İnce İşçilik İşleri',
        ],
      },
    },
  },
]

/**
 * Cover-only projects: cards that show a real cover image and localized category
 * but do NOT yet have a full detail page. Kept separate from `projects` so the
 * card renders the cover without a "Project Details" link.
 */
export type ProjectCover = {
  cover: string
  match: string[]
  category: Record<Lang, string>
}

export const projectCovers: ProjectCover[] = [
  {
    cover: '/projects/dijlah-land-residential-complex/cover.jpeg',
    match: [
      'Dijlah Land Residential Complex',
      'مجمع دجلة لاند السكني',
      'Dijlah Land Konut Kompleksi',
    ],
    category: {
      en: 'Residential Complex',
      ar: 'مجمع سكني',
      tr: 'Konut Kompleksi',
    },
  },
  {
    cover: '/projects/al-wedd-residential-complex/cover.jpeg',
    match: [
      'Al Wedd Residential Complex',
      'مجمع الود السكني',
      'Al Wedd Konut Kompleksi',
    ],
    category: {
      en: 'Residential Complex',
      ar: 'مجمع سكني',
      tr: 'Konut Kompleksi',
    },
  },
  {
    cover: '/projects/al-hurriya-hospital/cover.jpeg',
    match: [
      'Al Hurriya Hospital — 400 Beds',
      'مستشفى الحرية — ٤٠٠ سرير',
      'Al Hurriya Hastanesi — 400 Yatak',
    ],
    category: {
      en: 'Hospital',
      ar: 'مستشفى',
      tr: 'Hastane',
    },
  },
  {
    cover: '/projects/karam-baghdad-residential-complex/cover.png',
    match: [
      'Karam Baghdad Residential Complex',
      'مجمع كرم بغداد السكني',
      'Karam Bağdat Konut Kompleksi',
    ],
    category: {
      en: 'Residential Complex',
      ar: 'مجمع سكني',
      tr: 'Konut Kompleksi',
    },
  },
  {
    cover: '/projects/mansour-city-residential-complex/cover.png',
    match: [
      'Mansour City Residential Complex',
      'مجمع مدينة المنصور السكني',
      'Mansour City Konut Kompleksi',
    ],
    category: {
      en: 'Residential Complex',
      ar: 'مجمع سكني',
      tr: 'Konut Kompleksi',
    },
  },
  {
    cover: '/projects/haifa-towers/cover.png',
    match: [
      'Haifa Towers',
      'أبراج حيفا',
      'Haifa Kuleleri',
    ],
    category: {
      en: 'Residential Towers',
      ar: 'أبراج سكنية',
      tr: 'Konut Kuleleri',
    },
  },
  {
    cover: '/projects/mall-of-cairo/cover.png',
    match: [
      'Mall of Cairo',
      'مول القاهرة',
    ],
    category: {
      en: 'Shopping Mall',
      ar: 'مركز تسوق',
      tr: 'Alışveriş Merkezi',
    },
  },
  {
    cover: '/projects/maarif-schools-yarmouk/cover.jpeg',
    match: [
      'Maarif Schools — Yarmouk',
      'مدارس المعارف — اليرموك',
      'Maarif Okulları — Yarmouk',
    ],
    category: {
      en: 'School',
      ar: 'مدرسة',
      tr: 'Okul',
    },
  },
  {
    cover: '/projects/qaiwan-city/cover.png',
    match: [
      'Qaiwan City',
      'مدينة قيوان',
    ],
    category: {
      en: 'Residential Development',
      ar: 'مجمع سكني',
      tr: 'Konut Projesi',
    },
  },
  {
    cover: '/projects/mrf-towers-complex/cover.jpeg',
    match: [
      'MRF Towers Complex',
      'مجمع أبراج MRF',
      'MRF Kuleleri Kompleksi',
    ],
    category: {
      en: 'Residential Towers',
      ar: 'أبراج سكنية',
      tr: 'Konut Kuleleri',
    },
  },
  {
    cover: '/projects/narmandov-garden-city/cover.jpeg',
    match: [
      'Narmandov Garden City',
      'نارماندوف غاردن سيتي',
    ],
    category: {
      en: 'Residential Complex',
      ar: 'مجمع سكني',
      tr: 'Konut Kompleksi',
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectByName(name: string): Project | undefined {
  return projects.find((p) => p.match.includes(name))
}

export function getProjectCoverByName(name: string): ProjectCover | undefined {
  return projectCovers.find((c) => c.match.includes(name))
}
