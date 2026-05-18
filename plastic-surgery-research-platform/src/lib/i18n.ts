export type Locale = "en" | "ka" | "ru";

export const locales: Locale[] = ["en", "ka", "ru"];

export const LOCALE_STORAGE_KEY = "medplatform-locale";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    language: string;
    brand: string;
    home: string;
    surgeons: string;
    clinics: string;
    procedures: string;
    forum: string;
    community: string;
    reviews: string;
    recoveryStories: string;
    rules: string;
    pricing: string;
    earlyAccess: string;
    login: string;
    messages: string;
    writeReview: string;
  };
  common: {
    back: string;
    loading: string;
    report: string;
    sponsored: string;
    mockData: string;
    disclaimer: string;
    viewProfile: string;
    learnMore: string;
    comingSoon: string;
  };
  forum: {
    title: string;
    subtitle: string;
    sortRecent: string;
    sortTop: string;
    replies: string;
    score: string;
    postType: string;
    tags: string;
  };
  rules: {
    title: string;
  };
  login: {
    title: string;
    phone: string;
    code: string;
    sendCode: string;
    verify: string;
    anonymous: string;
  };
  pricing: {
    title: string;
    subtitle: string;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Plastic Surgery Research Platform",
      description:
        "Trust-focused research for plastic surgery in Georgia — surgeons, clinics, procedures, reviews, and community.",
    },
    nav: {
      language: "Language",
      brand: "MedPlatform",
      home: "Home",
      surgeons: "Surgeons",
      clinics: "Clinics",
      procedures: "Procedures",
      forum: "Forum",
      community: "Community",
      reviews: "Reviews",
      recoveryStories: "Recovery Stories",
      rules: "Rules",
      pricing: "Pricing",
      earlyAccess: "Early access",
      login: "Sign in",
      messages: "Messages",
      writeReview: "Write a review",
    },
    common: {
      back: "Back",
      loading: "Loading…",
      report: "Report",
      sponsored: "Sponsored",
      mockData: "Mock data for UI preview only.",
      disclaimer:
        "This platform is for informational purposes only and does not provide medical advice, diagnosis, or treatment recommendations.",
      viewProfile: "View profile",
      learnMore: "Learn more",
      comingSoon: "Coming in a future release",
    },
    forum: {
      title: "Community forum",
      subtitle:
        "Fictional seeded discussions for layout testing. Moderation and reporting ship with the backend.",
      sortRecent: "Recent",
      sortTop: "Top",
      replies: "replies",
      score: "Score",
      postType: "Type",
      tags: "Tags",
    },
    rules: { title: "Community rules" },
    login: {
      title: "Sign in",
      phone: "Phone number",
      code: "Verification code",
      sendCode: "Send code",
      verify: "Verify",
      anonymous: "Continue with anonymous nickname",
    },
    pricing: {
      title: "Plans",
      subtitle: "Subscription payments are not active in this MVP.",
    },
  },
  ka: {
    meta: {
      title: "პლასტიკური ქირურგიის კვლევითი პლატფორმა",
      description:
        "სანდო კვლევა პლასტიკური ქირურგიისთვის საქართველოში — ქირურგები, კლინიკები, პროცედურები და საზოგადოება.",
    },
    nav: {
      language: "ენა",
      brand: "MedPlatform",
      home: "მთავარი",
      surgeons: "ქირურგები",
      clinics: "კლინიკები",
      procedures: "ოპერაციები",
      forum: "ფორუმი",
      community: "საზოგადოება",
      reviews: "შეფასებები",
      recoveryStories: "აღდგენა",
      rules: "წესები",
      pricing: "ფასები",
      earlyAccess: "ადრეული წვდომა",
      login: "შესვლა",
      messages: "შეტყობინებები",
      writeReview: "შეფასება",
    },
    common: {
      back: "უკან",
      loading: "იტვირთება…",
      report: "გასაჩივრება",
      sponsored: "სპონსორი",
      mockData: "მოკ მონაცემები მხოლოდ ინტერფეისისთვის.",
      disclaimer:
        "პლატფორმა მხოლოდ საინფორმაციო მიზნებისთვისაა და არ არის სამედიცინო რჩევა.",
      viewProfile: "პროფილი",
      learnMore: "ვრცლად",
      comingSoon: "მომავალ განახლებაში",
    },
    forum: {
      title: "საზოგადოების ფორუმი",
      subtitle: "ფიქციური დისკუსიები ინტერფეისის ტესტისთვის.",
      sortRecent: "ახალი",
      sortTop: "პოპულარული",
      replies: "პასუხი",
      score: "ქულა",
      postType: "ტიპი",
      tags: "თეგები",
    },
    rules: { title: "საზოგადოების წესები" },
    login: {
      title: "შესვლა",
      phone: "ტელეფონი",
      code: "კოდი",
      sendCode: "კოდის გაგზავნა",
      verify: "დადასტურება",
      anonymous: "ანონიმურად გაგრძელება",
    },
    pricing: {
      title: "გეგმები",
      subtitle: "გადახდები ამ MVP-ში არ არის აქტიური.",
    },
  },
  ru: {
    meta: {
      title: "Платформа исследования пластической хирургии",
      description:
        "Платформа для изучения пластической хирургии в Грузии — хирурги, клиники, процедуры и сообщество.",
    },
    nav: {
      language: "Язык",
      brand: "MedPlatform",
      home: "Главная",
      surgeons: "Хирурги",
      clinics: "Клиники",
      procedures: "Процедуры",
      forum: "Форум",
      community: "Сообщество",
      reviews: "Отзывы",
      recoveryStories: "Восстановление",
      rules: "Правила",
      pricing: "Тарифы",
      earlyAccess: "Ранний доступ",
      login: "Вход",
      messages: "Сообщения",
      writeReview: "Отзыв",
    },
    common: {
      back: "Назад",
      loading: "Загрузка…",
      report: "Пожаловаться",
      sponsored: "Реклама",
      mockData: "Тестовые данные только для интерфейса.",
      disclaimer:
        "Платформа носит информационный характер и не является медицинской консультацией.",
      viewProfile: "Профиль",
      learnMore: "Подробнее",
      comingSoon: "В следующих версиях",
    },
    forum: {
      title: "Форум сообщества",
      subtitle: "Вымышленные обсуждения для тестирования интерфейса.",
      sortRecent: "Новые",
      sortTop: "Топ",
      replies: "ответов",
      score: "Рейтинг",
      postType: "Тип",
      tags: "Теги",
    },
    rules: { title: "Правила сообщества" },
    login: {
      title: "Вход",
      phone: "Телефон",
      code: "Код",
      sendCode: "Отправить код",
      verify: "Подтвердить",
      anonymous: "Продолжить анонимно",
    },
    pricing: {
      title: "Тарифы",
      subtitle: "Оплата в этом MVP не подключена.",
    },
  },
};
