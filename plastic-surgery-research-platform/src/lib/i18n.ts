export type Locale = "en" | "ka" | "ru";

export const locales: Locale[] = ["en", "ka", "ru"];

export const LOCALE_STORAGE_KEY = "medplatform-locale";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    language: string;
    brand: string;
    home: string;
    plasticSurgeons: string;
    estheticians: string;
    plasticSurgery: string;
    estheticProcedures: string;
    forum: string;
    surgeons: string;
    clinics: string;
    procedures: string;
    community: string;
    reviews: string;
    recoveryStories: string;
    rules: string;
    pricing: string;
    earlyAccess: string;
    login: string;
    signOut: string;
    account: string;
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
    subtitle: string;
    phone: string;
    phoneHint: string;
    code: string;
    codeSentTo: string;
    sendCode: string;
    verify: string;
    anonymous: string;
    nickname: string;
    nicknamePlaceholder: string;
    resend: string;
    resendIn: string;
    changePhone: string;
    loading: string;
    errorGeneric: string;
    devCodeLabel: string;
    successTitle: string;
    successBody: string;
    goCommunity: string;
    goHome: string;
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
      plasticSurgeons: "Plastic Surgeons",
      estheticians: "Estheticians",
      plasticSurgery: "Plastic Surgery",
      estheticProcedures: "Esthetic Procedures",
      forum: "Forum",
      surgeons: "Surgeons",
      clinics: "Clinics",
      procedures: "Procedures",
      community: "Community",
      reviews: "Reviews",
      recoveryStories: "Recovery Stories",
      rules: "Rules",
      pricing: "Pricing",
      earlyAccess: "Early access",
      login: "Sign in",
      signOut: "Sign out",
      account: "Account",
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
      title: "Sign in with phone",
      subtitle: "We send a one-time code to verify your number. No password required.",
      phone: "Phone number",
      phoneHint: "Georgian mobile numbers only. Standard SMS rates may apply when SMS is enabled.",
      code: "Verification code",
      codeSentTo: "Code sent to",
      sendCode: "Send verification code",
      verify: "Verify & sign in",
      anonymous: "Post with an anonymous nickname",
      nickname: "Nickname (optional)",
      nicknamePlaceholder: "e.g. HealingNotebook",
      resend: "Resend code",
      resendIn: "Resend in {s}s",
      changePhone: "Use a different number",
      loading: "Please wait…",
      errorGeneric: "Something went wrong. Try again.",
      devCodeLabel: "Dev code (preview only)",
      successTitle: "You're signed in",
      successBody: "Your session is active on this device. SMS delivery uses a demo code until a provider is connected.",
      goCommunity: "Go to community",
      goHome: "Back to home",
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
      plasticSurgeons: "პლასტიკური ქირურგები",
      estheticians: "ესთეტისტები",
      plasticSurgery: "პლასტიკური ქირურგია",
      estheticProcedures: "ესთეტიკური პროცედურები",
      forum: "ფორუმი",
      surgeons: "ქირურგები",
      clinics: "კლინიკები",
      procedures: "ოპერაციები",
      community: "საზოგადოება",
      reviews: "შეფასებები",
      recoveryStories: "აღდგენა",
      rules: "წესები",
      pricing: "ფასები",
      earlyAccess: "ადრეული წვდომა",
      login: "შესვლა",
      signOut: "გასვლა",
      account: "ანგარიში",
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
      title: "შესვლა ტელეფონით",
      subtitle: "გამოგიგზავნით ერთჯერად კოდს. პაროლი არ სჭირდება.",
      phone: "ტელეფონის ნომერი",
      phoneHint: "მხოლოდ ქართული მობილური ნომრები.",
      code: "დამადასტურებელი კოდი",
      codeSentTo: "კოდი გაგზავნილია",
      sendCode: "კოდის გაგზავნა",
      verify: "დადასტურება და შესვლა",
      anonymous: "ანონიმური ფსევდონიმით",
      nickname: "ფსევდონიმი (არასავალდებულო)",
      nicknamePlaceholder: "მაგ. HealingNotebook",
      resend: "კოდის ხელახლა გაგზავნა",
      resendIn: "ხელახლა {s} წამში",
      changePhone: "სხვა ნომერი",
      loading: "მიმდინარეობს…",
      errorGeneric: "დაფიქსირდა შეცდომა. სცადეთ ხელახლა.",
      devCodeLabel: "დევ კოდი",
      successTitle: "წარმატებით შეხვედით",
      successBody: "სესია აქტიურია ამ მოწყობილობაზე.",
      goCommunity: "ფორუმზე",
      goHome: "მთავარზე",
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
      plasticSurgeons: "Пластические хирурги",
      estheticians: "Эстетисты",
      plasticSurgery: "Пластическая хирургия",
      estheticProcedures: "Эстетические процедуры",
      forum: "Форум",
      surgeons: "Хирурги",
      clinics: "Клиники",
      procedures: "Процедуры",
      community: "Сообщество",
      reviews: "Отзывы",
      recoveryStories: "Восстановление",
      rules: "Правила",
      pricing: "Тарифы",
      earlyAccess: "Ранний доступ",
      login: "Вход",
      signOut: "Выйти",
      account: "Аккаунт",
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
      title: "Вход по телефону",
      subtitle: "Отправим одноразовый код. Пароль не нужен.",
      phone: "Номер телефона",
      phoneHint: "Только грузинские мобильные номера.",
      code: "Код подтверждения",
      codeSentTo: "Код отправлен на",
      sendCode: "Отправить код",
      verify: "Подтвердить и войти",
      anonymous: "Публиковать анонимно",
      nickname: "Псевдоним (необязательно)",
      nicknamePlaceholder: "напр. HealingNotebook",
      resend: "Отправить снова",
      resendIn: "Повтор через {s} с",
      changePhone: "Другой номер",
      loading: "Подождите…",
      errorGeneric: "Ошибка. Попробуйте снова.",
      devCodeLabel: "Код для разработки",
      successTitle: "Вы вошли",
      successBody: "Сессия активна на этом устройстве.",
      goCommunity: "В сообщество",
      goHome: "На главную",
    },
    pricing: {
      title: "Тарифы",
      subtitle: "Оплата в этом MVP не подключена.",
    },
  },
};
