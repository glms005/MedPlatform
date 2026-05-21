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
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    explore: string;
    intro: {
      eyebrow: string;
      title: string;
      lead: string;
      body: string[];
      guidelinesTitle: string;
      guidelines: string;
      closing: string;
      ctaCommunity: string;
      ctaRules: string;
    };
    categories: Record<
      "plasticSurgeons" | "estheticians" | "plasticSurgery" | "estheticProcedures",
      { eyebrow: string; description: string }
    >;
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
    home: {
      eyebrow: "Explore the platform",
      title: "Research with clarity",
      subtitle:
        "Compare surgeons, estheticians, and procedures in one trust-first space—built for informed decisions, not sales pressure.",
      explore: "Explore",
      intro: {
        eyebrow: "Welcome",
        title: "A place to research, ask, and share—together",
        lead:
          "We created this platform so that people considering plastic surgery have a space where they can share real experiences, questions, and helpful information.",
        body: [
          "We know that reaching such a decision is not easy—often we need others' experiences, honest advice, and a safe environment where we can freely ask questions or tell our own story.",
          "Our goal is for this space to be friendly, confidential, and grounded in respect. You can share your experience, ask questions, read others' stories, and find information about doctors, clinics, and procedures.",
        ],
        guidelinesTitle: "So everyone feels safe",
        guidelines:
          "It is important to follow basic rules: speak with respect, do not spread unverified information, do not share others' personal data, and remember that the platform does not replace a doctor's consultation.",
        closing:
          "This is a place where we help each other make more informed and calm decisions.",
        ctaCommunity: "Join the community",
        ctaRules: "Community rules",
      },
      categories: {
        plasticSurgeons: {
          eyebrow: "Verified directory",
          description:
            "Credentials, reviews, and procedure focus—compare plastic surgeons side by side.",
        },
        estheticians: {
          eyebrow: "Skin & med-spa",
          description:
            "Licensed estheticians and non-surgical providers for consultations and skin health.",
        },
        plasticSurgery: {
          eyebrow: "Surgical procedures",
          description:
            "Rhinoplasty, body contouring, and more—with risks, timelines, and recovery context.",
        },
        estheticProcedures: {
          eyebrow: "Non-surgical care",
          description:
            "Peels, lasers, injectables education—product-neutral guides for realistic expectations.",
        },
      },
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
    home: {
      eyebrow: "გამოიკვლიეთ პლატფორმა",
      title: "კვლევა გამჭვირვალობით",
      subtitle:
        "შეადარეთ ქირურგები, ესთეტისტები და პროცედურები ერთ სანდო სივრცეში — გადაწყვეტილებისთვის, არა გაყიდვებისთვის.",
      explore: "ნახვა",
      intro: {
        eyebrow: "მოგესალმებით",
        title: "სივრცე, სადაც თქვენი გამოცდილება მნიშვნელოვანია",
        lead:
          "ჩვენ შევქმენით ეს პლატფორმა იმისთვის, რომ ადამიანებს, რომლებიც პლასტიკურ ოპერაციაზე ფიქრობენ, ჰქონდეთ სივრცე, სადაც შეძლებენ რეალური გამოცდილების, კითხვების და სასარგებლო ინფორმაციის გაზიარებას.",
        body: [
          "ვიცით, რომ ასეთ გადაწყვეტილებამდე მისვლა მარტივი არ არის — ხშირად გვჭირდება სხვისი გამოცდილება, გულწრფელი რჩევა და უსაფრთხო გარემო, სადაც თავისუფლად შეგვიძლია კითხვა ან საკუთარი ისტორიის მოყოლა.",
          "ჩვენი მიზანია, ეს სივრცე იყოს მეგობრული, კონფიდენციალური და პატივისცემაზე დაფუძნებული. შეგიძლიათ გააზიაროთ თქვენი გამოცდილება, დასვათ კითხვები, წაიკითხოთ სხვების ისტორიები და მიიღოთ ინფორმაცია ექიმებზე, კლინიკებსა და პროცედურებზე.",
        ],
        guidelinesTitle: "რომ ყველამ თავი უსაფრთხოდ იგრძნოს",
        guidelines:
          "მნიშვნელოვანია დავიცვათ ძირითადი წესები: ვისაუბროთ პატივისცემით, არ გავავრცელოთ გადაუმოწმებელი ინფორმაცია, არ შევეხოთ სხვის პირად მონაცემებს და გვახსოვდეს, რომ პლატფორმა არ ცვლის ექიმის კონსულტაციას.",
        closing:
          "ეს არის ადგილი, სადაც ერთმანეთს ვეხმარებით უფრო ინფორმირებული და მშვიდი გადაწყვეტილების მიღებაში.",
        ctaCommunity: "ფორუმში გაწევრიანება",
        ctaRules: "საზოგადოების წესები",
      },
      categories: {
        plasticSurgeons: {
          eyebrow: "დირექტორია",
          description:
            "კვალიფიკაცია, შეფასებები და სპეციალიზაცია — პლასტიკური ქირურგების შედარება.",
        },
        estheticians: {
          eyebrow: "კანა და მედ-სპა",
          description:
            "ლიცენზირებული ესთეტისტები და არაქირურგიული მომსახურება კონსულტაციებისთვის.",
        },
        plasticSurgery: {
          eyebrow: "ქირურგიული პროცედურები",
          description:
            "რინოპლასტიკა, კონტურინგი და სხვა — რისკები, ვადები და აღდგენა.",
        },
        estheticProcedures: {
          eyebrow: "არაქირურგიული მოვლა",
          description:
            "პილინგები, ლაზერი, ინექციები — ნეიტრალური საგანმანათლებლო მიმოხილვები.",
        },
      },
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
    home: {
      eyebrow: "Исследуйте платформу",
      title: "Исследуйте с ясностью",
      subtitle:
        "Сравнивайте хирургов, эстетистов и процедуры в одном пространстве — для осознанных решений, а не продаж.",
      explore: "Открыть",
      intro: {
        eyebrow: "Добро пожаловать",
        title: "Пространство, где важен ваш опыт",
        lead:
          "Мы создали эту платформу для людей, которые думают о пластической операции, — чтобы у них было место, где можно делиться реальным опытом, вопросами и полезной информацией.",
        body: [
          "Мы знаем, что принять такое решение нелегко — часто нужен чужой опыт, честный совет и безопасная среда, где можно свободно задать вопрос или рассказать свою историю.",
          "Наша цель — чтобы это пространство было дружелюбным, конфиденциальным и основанным на уважении. Вы можете поделиться опытом, задать вопросы, читать истории других и находить информацию о врачах, клиниках и процедурах.",
        ],
        guidelinesTitle: "Чтобы всем было спокойно и безопасно",
        guidelines:
          "Важно соблюдать основные правила: говорить с уважением, не распространять непроверенную информацию, не затрагивать личные данные других и помнить, что платформа не заменяет консультацию врача.",
        closing:
          "Это место, где мы помогаем друг другу принимать более осознанные и спокойные решения.",
        ctaCommunity: "Перейти в сообщество",
        ctaRules: "Правила сообщества",
      },
      categories: {
        plasticSurgeons: {
          eyebrow: "Каталог",
          description:
            "Квалификация, отзывы и специализация — сравнение пластических хирургов.",
        },
        estheticians: {
          eyebrow: "Кожа и мед-спа",
          description:
            "Лицензированные эстетисты и нехирургические услуги для консультаций.",
        },
        plasticSurgery: {
          eyebrow: "Хирургические процедуры",
          description:
            "Ринопластика, контуринг тела и др. — риски, сроки и восстановление.",
        },
        estheticProcedures: {
          eyebrow: "Без операции",
          description:
            "Пилинги, лазеры, инъекции — нейтральные образовательные материалы.",
        },
      },
    },
  },
};
