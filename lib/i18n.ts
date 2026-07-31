export type Lang = 'en' | 'ar' | 'tr'

export const LANGS: { code: Lang; label: string; short: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'العربية', short: 'AR', dir: 'rtl' },
  { code: 'tr', label: 'Türkçe', short: 'TR', dir: 'ltr' },
]

export type Dict = {
  nav: {
    about: string
    services: string
    projects: string
    gallery: string
    contact: string
    quote: string
  }
  hero: {
    /** Identity badge segments, joined on screen by gold separator dots. */
    badge: string[]
    heading: string
    slogan: string
    subtitle: string
    quote: string
    projects: string
    contactUs: string
    scroll: string
    follow: string
  }
  about: {
    tag: string
    title: string
    body: string
    points: string[]
  }
  mission: { tag: string; title: string; body: string }
  vision: { tag: string; title: string; body: string }
  execution: {
    tag: string
    title: string
    lead: string
    body: string
    closing: string
    items: { title: string; desc: string }[]
  }
  services: {
    tag: string
    title: string
    subtitle: string
    items: { title: string; desc: string }[]
  }
  sectors: {
    tag: string
    title: string
    subtitle: string
    items: string[]
  }
  ongoing: { tag: string; title: string; subtitle: string; status: string }
  completed: { tag: string; title: string; subtitle: string; status: string }
  projectData: { name: string; location: string; type: string }[]
  completedData: { name: string; location: string; type: string }[]
  why: {
    tag: string
    title: string
    subtitle: string
    items: { title: string; desc: string }[]
  }
  stats: { tag: string; title: string; items: { value: number; suffix: string; label: string }[] }
  strength: {
    tag: string
    title: string
    subtitle: string
    body: string
    items: { title: string; desc: string }[]
  }
  gallery: { tag: string; title: string; subtitle: string }
  clients: { tag: string; title: string; subtitle: string; ongoingLabel: string; completedLabel: string }
  contact: {
    tag: string
    title: string
    subtitle: string
    name: string
    email: string
    phone: string
    service: string
    message: string
    send: string
    sending: string
    success: string
    info: string
    address: string
    addressValue: string
    phoneValue: string
    phoneValue2: string
    phoneValue3: string
    phoneValue4: string
    emailValue: string
    website: string
    websiteValue: string
    hours: string
    hoursValue: string
  }
  map: { tag: string; title: string }
  footer: {
    about: string
    quickLinks: string
    ourServices: string
    contact: string
    rights: string
    tagline: string
  }
  whatsapp: string
  scrollTop: string
}

export const dictionaries: Record<Lang, Dict> = {
  en: {
    nav: {
      about: 'Company',
      services: 'Scope of Works',
      projects: 'Projects',
      gallery: 'Execution',
      contact: 'Contact',
      quote: 'Request a Proposal',
    },
    hero: {
      badge: ['FINISHING CONSTRUCTION COMPANY', 'TURKISH ENGINEERING', 'IRAQ'],
      heading: 'Lavin Group',
      slogan: 'FROM SHELL & CORE TO FINAL HANDOVER',
      subtitle: 'THE COMPLETE FINISHING PHASE UNDER ONE CONTRACT',
      quote: 'Request a Proposal',
      projects: 'Our Projects',
      contactUs: 'Contact Us',
      scroll: 'SCROLL DOWN',
      follow: 'FOLLOW US',
    },
    about: {
      tag: 'The Company',
      title: 'A Specialist Finishing Construction Company',
      body: 'Lavin Group is a specialist finishing construction company delivering complete finishing and interior construction works. We take over construction projects once the structural shell and core is complete and execute the entire finishing phase through to final handover under a single contract. Operating in Iraq with Turkish engineering, Turkish management and experienced Turkish site teams, we deliver the complete finishing scope of large-scale developments as one accountable execution partner — to programme, to specification and to international construction standards.',
      points: [
        'One contract for the complete finishing scope',
        'Shell and core to final handover',
        'Turkish engineering and site management',
        'International QA/QC and HSE standards',
      ],
    },
    mission: {
      tag: 'Mission',
      title: 'Complete Finishing Execution, Single Accountability',
      body: 'To execute the complete finishing phase of major construction projects under one integrated contract — with disciplined planning, technical control and measurable quality — so that developers and main contractors hold a single accountable partner from shell completion to handover.',
    },
    vision: {
      tag: 'Vision',
      title: 'The Region’s Reference Finishing Contractor',
      body: 'To be recognised across Iraq and the wider region as the reference finishing construction company for large-scale finishing and interior construction works, defined by execution capacity, engineering discipline and consistent delivery performance.',
    },
    execution: {
      tag: 'How We Work',
      title: 'Our Execution Model',
      lead: 'Our preferred approach is to undertake the complete finishing scope of a project — from shell completion to final handover — under a single contract.',
      body: 'However, every project follows its own procurement strategy. When required, Lavin Group also undertakes the agreed finishing work packages or selected finishing scopes while maintaining the same standards of quality, technical excellence, project coordination, safety and reliable execution.',
      closing:
        'Whether entrusted with the complete finishing scope or selected agreed work packages, our commitment remains exactly the same.',
      items: [
        {
          title: 'Complete Finishing Scope',
          desc: 'Our first priority on every project: the entire finishing phase delivered under one contract, with one programme, one interface and one accountable partner.',
        },
        {
          title: 'Flexible Project Integration',
          desc: 'Where the procurement strategy divides the works, we integrate seamlessly into the main contractor’s structure and execute the agreed finishing packages assigned to us.',
        },
        {
          title: 'One Standard of Excellence',
          desc: 'Scope size never changes the standard. The same engineering discipline, QA/QC regime, HSE culture and programme control apply to every contract we sign.',
        },
      ],
    },
    services: {
      tag: 'Scope of Works',
      title: 'The Complete Finishing Phase, Under One Contract',
      subtitle:
        'One integrated contract covering every stage of execution from shell completion to final handover.',
      items: [
        {
          title: 'Integrated Finishing Package',
          desc: 'The entire finishing scope executed under a single contract, with one point of responsibility and one coordinated programme.',
        },
        {
          title: 'Planning & Programme Control',
          desc: 'Method statements, resource-loaded programmes and progress control aligned with the main contractor’s master schedule.',
        },
        {
          title: 'Site Management & Coordination',
          desc: 'Turkish site management coordinating work fronts, technical interfaces and MEP sequencing across multiple zones simultaneously.',
        },
        {
          title: 'Quality Assurance & Control',
          desc: 'Documented QA/QC procedures, material submittals, inspection regimes and defect prevention to international standards.',
        },
        {
          title: 'Health, Safety & Environment',
          desc: 'Enforced HSE procedures, site inductions, permit systems and compliance reporting on every active work front.',
        },
        {
          title: 'Inspection, Snagging & Handover',
          desc: 'Systematic inspection, snagging close-out, as-built documentation and phased handover of fully finished areas.',
        },
      ],
    },
    sectors: {
      tag: 'Sectors',
      title: 'Project Types We Execute',
      subtitle: 'Finishing execution capability across the full range of building typologies.',
      items: [
        'Residential Developments',
        'High-Rise Buildings',
        'Hospitals',
        'Hotels',
        'Shopping Malls',
        'Commercial Buildings',
        'Educational Facilities',
        'Government Projects',
        'Mixed-Use Developments',
        'Industrial Buildings',
      ],
    },
    ongoing: {
      tag: 'Ongoing Projects',
      title: 'Currently Under Execution',
      subtitle: 'Finishing packages in execution across Iraq today.',
      status: 'In Progress',
    },
    completed: {
      tag: 'Completed Projects',
      title: 'Delivered and Handed Over',
      subtitle: 'Finishing packages completed and handed over to client and main contractor.',
      status: 'Completed',
    },
    projectData: [
      { name: 'Dijlah Land Residential Complex', location: 'Baghdad, Iraq', type: 'Residential Complex' },
      { name: 'Al Hurriya Hospital — 400 Beds', location: 'Baghdad, Iraq', type: 'Hospital' },
      { name: 'Al Wedd Residential Complex', location: 'Baghdad, Iraq', type: 'Residential Complex' },
      { name: 'Haifa Towers', location: 'Baghdad, Iraq', type: 'Residential Towers' },
      { name: 'Mansour City Residential Complex', location: 'Baghdad, Iraq', type: 'Residential Complex' },
      { name: 'Diyala Olympic Stadium — 35,000 Capacity', location: 'Diyala', type: 'Photos coming soon' },
      { name: 'Karam Baghdad Residential Complex', location: 'Baghdad, Iraq', type: 'Residential Complex' },
    ],
    completedData: [
      { name: 'Mall of Iraq', location: 'Baghdad', type: 'Photos coming soon' },
      { name: 'Mall of Cairo', location: 'Baghdad, Iraq', type: 'Shopping Mall' },
      { name: "Al Sha'ab Hospital — 250 Beds", location: 'Baghdad', type: 'Photos coming soon' },
      { name: 'Maarif Schools — Yarmouk', location: 'Baghdad, Iraq', type: 'School' },
      { name: 'Qaiwan City', location: 'Sulaymaniyah, Iraq', type: 'Residential Development' },
      { name: 'MRF Towers Complex', location: 'Erbil, Iraq', type: 'Residential Towers' },
      { name: 'Narmandov Garden City', location: 'Istanbul, Turkey', type: 'Residential Complex' },
    ],
    why: {
      tag: 'Why Lavin Group',
      title: 'A Finishing Partner Main Contractors Can Rely On',
      subtitle: 'The criteria that matter to developers, consultants and main contractors.',
      items: [
        {
          title: 'Single-Point Accountability',
          desc: 'One contract, one interface and one responsible party for the complete finishing scope.',
        },
        {
          title: 'Turkish Engineering',
          desc: 'Engineering and management capability applied to complex, high-volume finishing programmes.',
        },
        {
          title: 'Programme Certainty',
          desc: 'Resource planning and progress control that protect the main contractor’s critical path.',
        },
        {
          title: 'Workforce Capacity',
          desc: 'A large trained workforce mobilised rapidly to sustain multiple work fronts in parallel.',
        },
        {
          title: 'Financial Strength',
          desc: 'Balance sheet capacity to mobilise, procure and sustain major finishing packages.',
        },
        {
          title: 'Quality & Safety Compliance',
          desc: 'Documented QA/QC and HSE systems auditable against international construction standards.',
        },
      ],
    },
    stats: {
      tag: 'Capability in Numbers',
      title: 'Execution Record',
      items: [
        { value: 10, suffix: '+', label: 'Years of Execution' },
        { value: 14, suffix: '+', label: 'Projects Delivered & Ongoing' },
        { value: 500, suffix: '+', label: 'Workforce Capacity' },
        { value: 100, suffix: '%', label: 'Finishing Scope Self-Delivered' },
      ],
    },
    strength: {
      tag: 'Operational & Financial Capacity',
      title: 'Built to Execute at Scale',
      subtitle: 'The resources behind every finishing package we undertake.',
      body: 'Lavin Group holds the financial capacity, engineering resources and workforce required to execute the complete finishing phase of large-scale projects in Iraq — directed by Turkish management, supported by trained multi-disciplinary teams, modern site equipment and an established international procurement network.',
      items: [
        {
          title: 'Financial Capacity',
          desc: 'Balance sheet and bonding capability to mobilise, procure and sustain major finishing packages through to handover.',
        },
        {
          title: 'Engineering Resources',
          desc: 'Project managers, planners and QA/QC engineers applying international standards to complex finishing programmes.',
        },
        {
          title: 'Turkish Management',
          desc: 'Turkish leadership enforcing quality, safety and delivery governance consistently on every site.',
        },
        {
          title: 'Workforce Capacity',
          desc: '500+ trained engineers, technicians and tradesmen deployed across simultaneous work fronts.',
        },
        {
          title: 'Equipment & Logistics',
          desc: 'Owned site equipment, plant and logistics capability supporting continuous high-volume execution.',
        },
        {
          title: 'Procurement Network',
          desc: 'International supplier network securing specified materials at volume, on schedule and to budget.',
        },
      ],
    },
    gallery: {
      tag: 'Execution',
      title: 'Works in Execution',
      subtitle: 'Site records from finishing packages under our management.',
    },
    clients: {
      tag: 'Project Record',
      title: 'Projects & References',
      subtitle: 'Finishing packages delivered and under execution across Iraq and Türkiye.',
      ongoingLabel: 'Ongoing',
      completedLabel: 'Completed',
    },
    contact: {
      tag: 'Contact',
      title: 'Discuss Your Finishing Package',
      subtitle: 'Send us the project details and our commercial team will respond promptly.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      service: 'Project Sector',
      message: 'Project Details',
      send: 'Submit Enquiry',
      sending: 'Submitting...',
      success: 'Thank you. Your enquiry has been received and our team will contact you shortly.',
      info: 'Contact Information',
      address: 'Address',
      addressValue: 'Al Jadriyah, Baghdad, Iraq',
      phoneValue: '+964 770 810 4163',
      phoneValue2: '+964 750 690 2682',
      phoneValue3: '+964 751 051 1320',
      phoneValue4: '+964 776 773 6442',
      emailValue: 'info@lavingroup-iq.com',
      website: 'Website',
      websiteValue: 'www.lavingroup-iq.com',
      hours: 'Working Hours',
      hoursValue: 'Saturday – Thursday: 9:00 AM – 6:00 PM',
    },
    map: { tag: 'Head Office', title: 'Our Location' },
    footer: {
      about:
        'Specialist finishing construction company executing the complete finishing and interior construction phase of major projects in Iraq — from shell and core to final handover.',
      quickLinks: 'Quick Links',
      ourServices: 'Scope of Works',
      contact: 'Contact',
      rights: 'All rights reserved.',
      tagline: 'From Shell & Core to Final Handover',
    },
    whatsapp: 'Chat with us',
    scrollTop: 'Scroll up',
  },
  ar: {
    nav: {
      about: 'الشركة',
      services: 'نطاق الأعمال',
      projects: 'المشاريع',
      gallery: 'التنفيذ',
      contact: 'اتصل بنا',
      quote: 'طلب عرض فني ومالي',
    },
    hero: {
      badge: ['شركة متخصصة في أعمال التشطيبات والإنشاءات الداخلية', 'الهندسة التركية', 'العراق'],
      heading: 'مجموع�� لافين',
      slogan: 'من الهيك�� الإنشائي إلى التسليم النهائي',
      subtitle: 'مرحلة التشطيبات الكاملة بعقد واحد',
      quote: 'طلب عرض فني ومالي',
      projects: 'مشاريعنا',
      contactUs: 'تواصل معنا',
      scroll: 'مرّر للأسفل',
      follow: 'تابعنا',
    },
    about: {
      tag: 'الشركة',
      title: 'شركة متخصصة في أعمال التشطيبات والإنشاءات الداخلية',
      body: 'مجموعة لافين شركة متخصصة في أعمال التشطيبات والإنشاءات الداخلية المتكاملة. نتولّى المشاريع بعد اكتمال الهيكل الإنشائي والأعمال الأساسية، وننفّذ مرحلة التشطيبات بالكامل حتى التسليم النهائي بموجب عقد واحد. نعمل في العراق بهندسة تركية وإدارة تركية وفرق تنفيذ تركية ذات خبرة، ونقدّم نطاق التشطيبات الكامل للمشاريع الكبرى كشريك تنفيذ واحد مسؤول — وفق البرنامج الزمني والمواصفات والمعايير الإنشائية الدولية.',
      points: [
        'عقد واحد لنطاق التشطيبات الكامل',
        'من الهيكل الإنشائي إلى التسليم النهائي',
        'هندسة وإدا��ة موقع تركية',
        'معايير دولية لضبط الجودة والسلامة',
      ],
    },
    mission: {
      tag: 'المهمة',
      title: 'تنفيذ تشطيبات متكا��ل ��مسؤولية واحدة',
      body: 'تنفيذ مرحلة التشطيبات الكاملة للمشاريع الإنشائية الكبرى بموجب عقد مقاولة ثانوية متكامل — بتخطيط منضبط وضبط فني وجودة قابلة للقياس — بحيث يتعامل المطوّرون والمقاولون الرئيسيون مع شريك واحد مسؤول من اكتمال الهيكل حتى التسليم.',
    },
    vision: {
      tag: 'الرؤية',
      title: 'المقاول المرجعي للتشطيبات في المنطقة',
      body: 'أن نكون المقاول الثانوي المرجعي لأعمال التشطيبات واسعة النطاق في العراق والمنطقة، بقدرة تنفيذية وانضباط هندسي وأداء تسليم ثابت.',
    },
    execution: {
      tag: 'منهجية العمل',
      title: 'نموذج التنفيذ لدينا',
      lead: 'نهجنا المُفضَّل هو تنفيذ نطاق التشطيبات الكامل للمشروع — من إنجاز الهيكل حتى التسليم النهائي — بموجب عقد مقاولة ثانوية واحد.',
      body: 'إلا أن لكل مشروع استراتيجية شراء خاصة به. وعند الحاجة، تتولى مجموعة لافين أيضاً حِزم أعمال التشطيبات المتفق عليها أو نطاقات تشطيب محددة، مع الحفاظ على المعايير ذاتها من الجودة والتميّز الفني والتنسيق الإداري والسلامة والتنفيذ الموثوق.',
      closing:
        'وسواء أُوكل إلينا نطاق التشطيبات الكامل أو حِزم الأعمال المتفق عليها، فإن التزامنا يبقى واحداً تماماً.',
      items: [
        {
          title: 'نطاق التشطيبات الكامل',
          desc: 'أولويتنا الأولى في كل مشروع: مرحلة التشطيبات بالكامل بموجب عقد واحد، ببرنامج واحد وواجهة تنسيق واحدة وجهة مسؤولة واحدة.',
        },
        {
          title: 'اندماج مرن في المشروع',
          desc: 'وحين تقسّم استراتيجية الشراء الأعمال، نندمج بسلاسة في هيكل المقاول الرئيسي وننفّذ حِزم التشطيبات المتفق عليها والموكلة إلينا.',
        },
        {
          title: 'معيار واحد للتميّز',
          desc: 'حجم النطاق لا يغيّر المعيار. الانضباط الهندسي ذاته ونظام ضبط الجودة وثقافة السلامة وضبط البرنامج الزمني تُطبَّق على كل عقد نوقّعه.',
        },
      ],
    },
    services: {
      tag: 'نطاق الأعمال',
      title: 'مرحلة التشطيبات الكاملة بعقد واحد',
      subtitle: 'عقد مقاولة ثانوية متكامل يغطي كل مراحل التنفيذ من اكتمال الهيكل حتى التسليم النهائي.',
      items: [
        {
          title: 'حزمة التشطيبات المتكاملة',
          desc: 'نطاق التشطيبات بالكامل يُنفَّذ بعقد واحد، بجهة مسؤولة واحدة وبرنامج تنفيذ منسّق واحد.',
        },
        {
          title: 'التخطيط وضبط البرنامج الزمني',
          desc: 'أساليب تنفيذ وبرامج زمنية محمّلة بالموارد ومتابعة تقدّم متوافقة مع البرنامج الرئيسي للمقاول العام.',
        },
        {
          title: 'إدارة الموقع والتنسيق',
          desc: 'إدارة موقع تركية تنسّق واجهات العمل والتداخلات الفنية وتتابع الأعمال الكهروميكانيكية في مناطق متعددة بالتوازي.',
        },
        {
          title: 'توكيد وضبط الجودة',
          desc: 'إجراءات جودة موثّقة واعتماد مواد وأنظمة تفتيش ومنع العيوب وفق المعايير الدولية.',
        },
        {
          title: 'الصحة والسلامة والبيئة',
          desc: 'إجراءات سلامة مُلزمة وتدريب تعريفي وأنظمة تصاريح وتقارير التزام في كل واجهة عمل.',
        },
        {
          title: 'التفتيش ومعالجة الملاحظات والتسليم',
          desc: 'تفتيش منهجي وإغلاق ملاحظات وتوثيق أعمال منفّذة وتسليم مرحلي للمناطق المنجزة بالكامل.',
        },
      ],
    },
    sectors: {
      tag: 'القطاعات',
      title: 'أنواع المشاريع التي ننفّذها',
      subtitle: 'قدرة تنفيذ تشطيبات تغطي كامل أنواع المباني.',
      items: [
        'المجمعات السكنية',
        'الأبراج والمباني العالية',
        'المستشفيات',
        'الفنادق',
        'مراكز التسوق',
        'المباني التجارية',
        'المرافق التعليمية',
        'المشاريع الحكومية',
        'المشاريع متعددة الاستخدامات',
        'المباني الصناعية',
      ],
    },
    ongoing: {
      tag: 'مشاريع قائمة',
      title: 'قيد التنفيذ حالياً',
      subtitle: 'حزم تشطيبات قيد التنفيذ في أنحاء العراق اليوم.',
      status: 'قيد التنفيذ',
    },
    completed: {
      tag: 'مشاريع منجزة',
      title: 'منفّذة ومسلَّمة',
      subtitle: 'حزم تشطيبات أُنجزت وسُلّمت إلى العميل والمقاول الرئيسي.',
      status: 'منجز',
    },
    projectData: [
      { name: 'مجمع دجلة لاند السكني', location: 'بغداد، العراق', type: 'مجمع سكني' },
      { name: 'مستشفى الحرية — ٤٠٠ سرير', location: 'بغداد، العراق', type: 'مستشفى' },
      { name: 'مجمع الود السكني', location: 'بغداد، العراق', type: 'مجمع سكني' },
      { name: 'أبراج حيفا', location: 'بغداد، العراق', type: 'أبراج سكنية' },
      { name: 'مجمع مدينة المنصور السكني', location: 'بغداد، العراق', type: 'مجمع سكني' },
      { name: 'ملعب ديالى الأولمبي — سعة ٣٥٬٠٠٠', location: 'ديالى', type: 'الصور قريباً' },
      { name: 'مجمع كرم بغداد السكني', location: 'بغداد، العراق', type: 'مجمع سكني' },
    ],
    completedData: [
      { name: 'مول العراق', location: 'بغداد', type: 'الصور قريباً' },
      { name: 'مول القاهرة', location: 'بغداد، العراق', type: 'مركز تسوق' },
      { name: 'مستشفى الشعب — ٢٥٠ سرير', location: 'بغداد', type: 'الصور قريباً' },
      { name: 'مدارس المعارف — اليرموك', location: 'بغداد، العراق', type: 'مدرسة' },
      { name: 'مدينة قيوان', location: 'السليمانية، العراق', type: 'مجمع سكني' },
      { name: 'مجمع أبراج MRF', location: 'أربيل، العراق', type: 'أبراج سكنية' },
      { name: 'نارماندوف غاردن سيتي', location: 'إسطنبول، تركيا', type: 'مجمع سكني' },
    ],
    why: {
      tag: 'لماذا مجموعة لافين',
      title: 'مقاول ثانوي يعتمد عليه المقاولون الرئيسيون',
      subtitle: 'المعايير التي تهمّ المطوّرين والاستشاريين والمقاولين الرئيسيين.',
      items: [
        {
          title: 'مسؤولية موحّدة',
          desc: 'عقد واحد وواجهة تعامل واحدة وجهة مسؤولة واحدة عن نطاق التشطيبات الكامل.',
        },
        {
          title: 'هندسة تركية',
          desc: 'قدرة هندسية وإدارية مطبّقة على برامج تشطيبات معقّدة وكبيرة الحجم.',
        },
        {
          title: 'التزام بالبرنامج الزمني',
          desc: 'تخطيط للموارد ومتابعة تقدّم تحمي المسار الحرج للمقاول الرئيسي.',
        },
        {
          title: 'قدرة الكوادر',
          desc: 'كوادر مدرّبة كبيرة تُعبَّأ بسرعة لتشغيل واجهات عمل متعددة بالتوازي.',
        },
        {
          title: 'قوة مالية',
          desc: 'قدرة مالية على التعبئة والتوريد واستدامة حزم تشطيبات كبرى.',
        },
        {
          title: 'الالتزام بالجودة والسلامة',
          desc: 'أنظمة جودة وسلامة موثّقة وقابلة للتدقيق وفق المعايير الإنشائية الدولية.',
        },
      ],
    },
    stats: {
      tag: 'القدرة بالأرقام',
      title: 'سجل التنفيذ',
      items: [
        { value: 10, suffix: '+', label: 'سنوات تنفيذ' },
        { value: 14, suffix: '+', label: 'مشاريع منجزة وقائمة' },
        { value: 500, suffix: '+', label: 'طاقة الكوادر' },
        { value: 100, suffix: '%', label: 'تنفيذ ذاتي لنطاق التشطيبات' },
      ],
    },
    strength: {
      tag: 'القدرة التشغيلية والمالية',
      title: 'قادرون على التنفيذ بأي حجم',
      subtitle: 'الموارد التي تدعم كل حزمة تشطيبات نتولّاها.',
      body: 'تمتلك مجموعة لافين القدرة المالية والموارد الهندسية والكوادر اللازمة لتنفيذ مرحلة التشطيبات الكاملة للمشاريع واسعة النطاق في العراق — بإدارة تركية وفرق متعددة التخصصات مدرّبة ومعدات موقع حديثة وشبكة توريد دولية راسخة.',
      items: [
        {
          title: 'القدرة المالية',
          desc: 'ملاءة مالية وقدرة على تقديم الضمانات لتعبئة وتوريد واستدامة حزم التشطيبات الكبرى حتى التسليم.',
        },
        {
          title: 'الموارد الهندسية',
          desc: 'مدراء مشاريع ومخططون ومهندسو جودة يطبّقون المعايير الدولية على برامج التشطيبات المعقّدة.',
        },
        {
          title: 'الإدارة التركية',
          desc: 'قيادة تركية تفرض حوكمة الجودة والسلامة والتسليم بصورة ثابتة في كل موقع.',
        },
        {
          title: 'طاقة الكوادر',
          desc: 'أكثر من ٥٠٠ مهندس وفني وعامل ماهر مدرّب يعملون على واجهات عمل متزامنة.',
        },
        {
          title: 'المعدات واللوجستيات',
          desc: 'معدات موقع وآليات ولوجستيات مملوكة تدعم تنفيذاً متواصلاً وبأحجام كبيرة.',
        },
        {
          title: 'شبكة التوريد',
          desc: 'شبكة موردين دولية تؤمّن المواد المطابقة للمواصفات بكميات كبيرة وفي الوقت والميزانية.',
        },
      ],
    },
    gallery: {
      tag: 'التنفيذ',
      title: 'أعمال قيد التنفيذ',
      subtitle: 'سجلات من المواقع لحزم تشطيبات تحت إدارتنا.',
    },
    clients: {
      tag: 'سجل المشاريع',
      title: 'المشاريع والمراجع',
      subtitle: 'حزم تشطيبات منفّذة وقائمة في العر��ق وتركيا.',
      ongoingLabel: 'قائم',
      completedLabel: 'منجز',
    },
    contact: {
      tag: 'اتصل بنا',
      title: 'لنبحث حزمة التشطيبات الخاصة بمشروعك',
      subtitle: 'أرسل لنا تفاصيل المشروع وسيتواصل فريقنا التجاري معك بسرعة.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      service: 'قطاع المشروع',
      message: 'تفاصيل المشروع',
      send: 'إرسال الطلب',
      sending: 'جارٍ الإرسال...',
      success: 'شكراً لك. تم استلام طلبك وسيتواصل فريقنا معك قريباً.',
      info: 'معلومات التواصل',
      address: 'العنوان',
      addressValue: 'الجادرية، بغداد، العراق',
      phoneValue: '+964 770 810 4163',
      phoneValue2: '+964 750 690 2682',
      phoneValue3: '+964 751 051 1320',
      phoneValue4: '+964 776 773 6442',
      emailValue: 'info@lavingroup-iq.com',
      website: 'الموقع الإلكتروني',
      websiteValue: 'www.lavingroup-iq.com',
      hours: 'ساعات العمل',
      hoursValue: 'السبت – الخميس: 9:00 ص – 6:00 م',
    },
    map: { tag: 'المكتب الرئيسي', title: 'موقعنا' },
    footer: {
      about:
        'مقاول ثانوي متخصص في أعمال التشطيبات، ينفّذ مرحلة التشطيبات الكاملة للمشاريع الإنشائية الكبرى في العراق — من الهيكل الإنشائي إلى التسليم النهائي.',
      quickLinks: 'روابط سريعة',
      ourServices: 'نطاق الأعمال',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      tagline: 'من الهيكل الإنشائي إلى التسليم النهائي',
    },
    whatsapp: 'تحدّث معنا',
    scrollTop: 'التمرير للأعلى',
  },
  tr: {
    nav: {
      about: 'Şirket',
      services: 'İş Kapsamı',
      projects: 'Projeler',
      gallery: 'Uygulama',
      contact: 'İletişim',
      quote: 'Teklif Talebi',
    },
    hero: {
      badge: ['İNCE İNŞAAT VE FİNİSHİNG FİRMASI', 'TÜRK MÜHENDİSLİĞİ', 'IRAK'],
      heading: 'Lavin Group',
      slogan: 'KABA YAPIDAN NİHAİ TESLİME',
      subtitle: 'TÜM İNCE İŞLER AŞAMASI TEK TAŞERONLUK SÖZLEŞMESİYLE',
      quote: 'Teklif Talebi',
      projects: 'Projelerimiz',
      contactUs: 'İletişim',
      scroll: 'AŞAĞI KAYDIR',
      follow: 'BİZİ TAKİP EDİN',
    },
    about: {
      tag: 'Şirket',
      title: 'Uzman İnce İşler Taşeronu',
      body: 'Lavin Group, ince işler alanında uzmanlaşmış bir taşeronluk şirketidir. Projeleri kaba yapı ve çekirdek imalatı tamamlandıktan sonra devralır ve tüm ince işler aşamasını tek bir taşeronluk sözleşmesi kapsamında nihai teslime kadar yürütür. Irak’ta Türk mühendisliği, Türk yönetimi ve deneyimli Türk saha ekipleriyle faaliyet göstererek büyük ölçekli projelerin ince işler kapsamının tamamını tek sorumlu uygulama ortağı olarak; programa, şartnameye ve uluslararası inşaat standartlarına uygun şekilde teslim ederiz.',
      points: [
        'Tüm ince işler kapsamı için tek sözleşme',
        'Kaba yapıdan nihai teslime',
        'Türk mühendisliği ve saha yönetimi',
        'Uluslararası kalite ve İSG standartları',
      ],
    },
    mission: {
      tag: 'Misyon',
      title: 'Eksiksiz Uygulama, Tek Sorumluluk',
      body: 'Büyük inşaat projelerinin ince işler aşamasının tamamını tek bir entegre taşeronluk sözleşmesi kapsamında; disiplinli planlama, teknik kontrol ve ölçülebilir kaliteyle yürütmek — böylece yatırımcı ve ana yükleniciler kaba yapı bitiminden teslime kadar tek bir sorumlu ortakla çalışır.',
    },
    vision: {
      tag: 'Vizyon',
      title: 'Bölgenin Referans İnce İşler Yüklenicisi',
      body: 'Irak ve bölge genelinde büyük ölçekli ince işler için referans taşeron olarak tanınmak; uygulama kapasitesi, mühendislik disiplini ve tutarlı teslim performansıyla.',
    },
    execution: {
      tag: 'Nasıl Çalışıyoruz',
      title: 'Uygulama Modelimiz',
      lead: 'Tercih ettiğimiz yaklaşım, bir projenin ince iş kapsamının tamamını — kaba yapının tamamlanmasından nihai teslime kadar — tek bir taşeronluk sözleşmesi altında üstlenmektir.',
      body: 'Ancak her projenin kendi satın alma stratejisi vardır. Gerektiğinde Lavin Group, mutabık kalınan ince iş paketlerini veya belirlenen ince iş kapsamlarını da üstlenir; kalite, teknik mükemmellik, proje koordinasyonu, iş güvenliği ve güvenilir uygulama standartlarını aynı düzeyde koruyarak.',
      closing:
        'İnce iş kapsamının tamamı ya da mutabık kalınan iş paketleri bize verilsin; taahhüdümüz tam olarak aynı kalır.',
      items: [
        {
          title: 'Eksiksiz İnce İş Kapsamı',
          desc: 'Her projede ilk önceliğimiz: ince iş fazının tamamı tek sözleşme altında, tek program, tek arayüz ve tek sorumlu muhatapla teslim edilir.',
        },
        {
          title: 'Esnek Proje Entegrasyonu',
          desc: 'Satın alma stratejisi işleri böldüğünde, ana yüklenicinin yapısına sorunsuz entegre oluruz ve bize verilen mutabık ince iş paketlerini uygularız.',
        },
        {
          title: 'Tek Bir Mükemmellik Standardı',
          desc: 'Kapsamın büyüklüğü standardı değiştirmez. Aynı mühendislik disiplini, QA/QC rejimi, İSG kültürü ve program kontrolü imzaladığımız her sözleşmede geçerlidir.',
        },
      ],
    },
    services: {
      tag: 'İş Kapsamı',
      title: 'Tüm İnce İşler Aşaması, Tek Sözleşmeyle',
      subtitle:
        'Kaba yapı bitiminden nihai teslime kadar tüm uygulama aşamalarını kapsayan entegre bir taşeronluk sözleşmesi.',
      items: [
        {
          title: 'Entegre İnce İşler Paketi',
          desc: 'Tüm ince işler kapsamı tek sözleşmeyle, tek sorumluluk noktası ve tek koordineli programla yürütülür.',
        },
        {
          title: 'Planlama & Program Kontrolü',
          desc: 'Ana yüklenicinin master programıyla uyumlu yöntem beyanları, kaynak yüklü programlar ve ilerleme kontrolü.',
        },
        {
          title: 'Saha Yönetimi & Koordinasyon',
          desc: 'Çok sayıda bölgede eşzamanlı iş cephelerini, teknik arayüzleri ve mekanik-elektrik sıralamasını koordine eden Türk saha yönetimi.',
        },
        {
          title: 'Kalite Güvence & Kontrol',
          desc: 'Belgelenmiş KG/KK prosedürleri, malzeme onayları, muayene rejimleri ve uluslararası standartlarda hata önleme.',
        },
        {
          title: 'İş Sağlığı, Güvenlik & Çevre',
          desc: 'Her aktif iş cephesinde uygulanan İSG prosedürleri, saha oryantasyonu, izin sistemleri ve uygunluk raporlaması.',
        },
        {
          title: 'Muayene, Eksik Kapatma & Teslim',
          desc: 'Sistematik muayene, eksik listelerinin kapatılması, imalat dokümantasyonu ve tamamlanan alanların etaplı teslimi.',
        },
      ],
    },
    sectors: {
      tag: 'Sektörler',
      title: 'Uyguladığımız Proje Türleri',
      subtitle: 'Tüm yapı tipolojilerini kapsayan ince işler uygulama kabiliyeti.',
      items: [
        'Konut Projeleri',
        'Yüksek Katlı Binalar',
        'Hastaneler',
        'Oteller',
        'Alışveriş Merkezleri',
        'Ticari Binalar',
        'Eğitim Yapıları',
        'Kamu Projeleri',
        'Mixed-Use Projeler',
        'Endüstriyel Yapılar',
      ],
    },
    ongoing: {
      tag: 'Devam Eden Projeler',
      title: 'Halen Uygulamada',
      subtitle: 'Irak genelinde uygulaması süren ince işler paketleri.',
      status: 'Devam Ediyor',
    },
    completed: {
      tag: 'Tamamlanan Projeler',
      title: 'Tamamlanan ve Teslim Edilen',
      subtitle: 'İşveren ve ana yükleniciye tamamlanarak teslim edilen ince işler paketleri.',
      status: 'Tamamlandı',
    },
    projectData: [
      { name: 'Dijlah Land Konut Kompleksi', location: 'Bağdat, Irak', type: 'Konut Kompleksi' },
      { name: 'Al Hurriya Hastanesi — 400 Yatak', location: 'Bağdat, Irak', type: 'Hastane' },
      { name: 'Al Wedd Konut Kompleksi', location: 'Bağdat, Irak', type: 'Konut Kompleksi' },
      { name: 'Haifa Kuleleri', location: 'Bağdat, Irak', type: 'Konut Kuleleri' },
      { name: 'Mansour City Konut Kompleksi', location: 'Bağdat, Irak', type: 'Konut Kompleksi' },
      { name: 'Diyala Olimpiyat Stadı — 35.000 Kapasite', location: 'Diyala', type: 'Fotoğraflar yakında' },
      { name: 'Karam Bağdat Konut Kompleksi', location: 'Bağdat, Irak', type: 'Konut Kompleksi' },
    ],
    completedData: [
      { name: 'Mall of Iraq', location: 'Bağdat', type: 'Fotoğraflar yakında' },
      { name: 'Mall of Cairo', location: 'Bağdat, Irak', type: 'Alışveriş Merkezi' },
      { name: "Al Sha'ab Hastanesi — 250 Yatak", location: 'Bağdat', type: 'Fotoğraflar yakında' },
      { name: 'Maarif Okulları — Yarmouk', location: 'Bağdat, Irak', type: 'Okul' },
      { name: 'Qaiwan City', location: 'Süleymaniye, Irak', type: 'Konut Projesi' },
      { name: 'MRF Kuleleri Kompleksi', location: 'Erbil, Irak', type: 'Konut Kuleleri' },
      { name: 'Narmandov Garden City', location: 'İstanbul, Türkiye', type: 'Konut Kompleksi' },
    ],
    why: {
      tag: 'Neden Lavin Group',
      title: 'Ana Yüklenicilerin Güvenebileceği Bir Taşeron',
      subtitle: 'Yatırımcılar, müşavirler ve ana yükleniciler için belirleyici kriterler.',
      items: [
        {
          title: 'Tek Sorumluluk Noktası',
          desc: 'Tüm ince işler kapsamı için tek sözleşme, tek arayüz ve tek sorumlu taraf.',
        },
        {
          title: 'Türk Mühendisliği',
          desc: 'Karmaşık ve yüksek hacimli ince işler programlarına uygulanan mühendislik ve yönetim kabiliyeti.',
        },
        {
          title: 'Program Güvencesi',
          desc: 'Ana yüklenicinin kritik yolunu koruyan kaynak planlaması ve ilerleme kontrolü.',
        },
        {
          title: 'İş Gücü Kapasitesi',
          desc: 'Paralel iş cephelerini sürdürmek için hızla seferber edilen büyük ve eğitimli iş gücü.',
        },
        {
          title: 'Finansal Güç',
          desc: 'Büyük ince işler paketlerini mobilize etme, tedarik etme ve sürdürme kapasitesi.',
        },
        {
          title: 'Kalite & Güvenlik Uygunluğu',
          desc: 'Uluslararası inşaat standartlarına göre denetlenebilir, belgelenmiş KG/KK ve İSG sistemleri.',
        },
      ],
    },
    stats: {
      tag: 'Rakamlarla Kapasite',
      title: 'Uygulama Kaydı',
      items: [
        { value: 10, suffix: '+', label: 'Yıllık Uygulama' },
        { value: 14, suffix: '+', label: 'Tamamlanan & Devam Eden Proje' },
        { value: 500, suffix: '+', label: 'İş Gücü Kapasitesi' },
        { value: 100, suffix: '%', label: 'Kendi Ekiplerimizle Uygulama' },
      ],
    },
    strength: {
      tag: 'Operasyonel ve Finansal Kapasite',
      title: 'Büyük Ölçekte Uygulama İçin Kurulduk',
      subtitle: 'Üstlendiğimiz her ince işler paketinin arkasındaki kaynaklar.',
      body: 'Lavin Group, Irak’taki büyük ölçekli projelerin ince işler aşamasının tamamını yürütmek için gereken finansal kapasiteye, mühendislik kaynaklarına ve iş gücüne sahiptir — Türk yönetimi tarafından yönlendirilen, eğitimli çok disiplinli ekipler, modern saha ekipmanı ve yerleşik uluslararası tedarik ağıyla desteklenir.',
      items: [
        {
          title: 'Finansal Kapasite',
          desc: 'Büyük ince işler paketlerini mobilizasyondan teslime kadar finanse edecek bilanço ve teminat kapasitesi.',
        },
        {
          title: 'Mühendislik Kaynakları',
          desc: 'Karmaşık ince işler programlarına uluslararası standartları uygulayan proje yöneticileri, planlamacılar ve kalite mühendisleri.',
        },
        {
          title: 'Türk Yönetimi',
          desc: 'Her sahada kalite, güvenlik ve teslim yönetişimini tutarlı biçimde uygulayan Türk liderliği.',
        },
        {
          title: 'İş Gücü Kapasitesi',
          desc: 'Eşzamanlı iş cephelerinde görevlendirilen 500+ eğitimli mühendis, tekniker ve usta.',
        },
        {
          title: 'Ekipman & Lojistik',
          desc: 'Kesintisiz ve yüksek hacimli uygulamayı destekleyen kendi saha ekipmanı, makine parkı ve lojistik kabiliyeti.',
        },
        {
          title: 'Tedarik Ağı',
          desc: 'Şartnameye uygun malzemeleri hacimli, zamanında ve bütçesinde temin eden uluslararası tedarikçi ağı.',
        },
      ],
    },
    gallery: {
      tag: 'Uygulama',
      title: 'Uygulamadaki İşler',
      subtitle: 'Yönetimimizdeki ince işler paketlerinden saha kayıtları.',
    },
    clients: {
      tag: 'Proje Kaydı',
      title: 'Projeler ve Referanslar',
      subtitle: 'Irak ve Türkiye genelinde teslim edilen ve uygulaması süren ince işler paketleri.',
      ongoingLabel: 'Devam Eden',
      completedLabel: 'Tamamlanan',
    },
    contact: {
      tag: 'İletişim',
      title: 'İnce İşler Paketinizi Görüşelim',
      subtitle: 'Proje bilgilerinizi iletin, ticari ekibimiz kısa sürede dönüş yapacaktır.',
      name: 'Ad Soyad',
      email: 'E-posta Adresi',
      phone: 'Telefon Numarası',
      service: 'Proje Sektörü',
      message: 'Proje Bilgileri',
      send: 'Talebi Gönder',
      sending: 'Gönderiliyor...',
      success: 'Teşekkürler. Talebiniz alındı, ekibimiz kısa sürede sizinle iletişime geçecek.',
      info: 'İletişim Bilgileri',
      address: 'Adres',
      addressValue: 'Al Jadriyah, Bağdat, Irak',
      phoneValue: '+964 770 810 4163',
      phoneValue2: '+964 750 690 2682',
      phoneValue3: '+964 751 051 1320',
      phoneValue4: '+964 776 773 6442',
      emailValue: 'info@lavingroup-iq.com',
      website: 'Web Sitesi',
      websiteValue: 'www.lavingroup-iq.com',
      hours: 'Çalışma Saatleri',
      hoursValue: 'Cumartesi – Perşembe: 09:00 – 18:00',
    },
    map: { tag: 'Merkez Ofis', title: 'Konumumuz' },
    footer: {
      about:
        'Irak’taki büyük inşaat projelerinin ince işler aşamasının tamamını kaba yapıdan nihai teslime kadar yürüten uzman ince işler taşeronu.',
      quickLinks: 'Hızlı Bağlantılar',
      ourServices: 'İş Kapsamı',
      contact: 'İletişim',
      rights: 'Tüm hakları saklıdır.',
      tagline: 'Kaba Yapıdan Nihai Teslime',
    },
    whatsapp: 'Bizimle sohbet edin',
    scrollTop: 'Yukarı kaydır',
  },
}
