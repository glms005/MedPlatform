export type Locale = "en" | "ka" | "ru";

export const locales: Locale[] = ["en", "ka", "ru"];

export const LOCALE_STORAGE_KEY = "sharewell-locale";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    language: string;
    brand: string;
    home: string;
    plasticSurgeons: string;
    aestheticians: string;
    plasticSurgery: string;
    aestheticProcedures: string;
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
    tagline: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    explore: string;
    hero: {
      label: string;
      prev: string;
      next: string;
      slides: Record<
        "wellness" | "community" | "research",
        { eyebrow: string; headline: string; supporting: string; cta: string }
      >;
    };
    intro: {
      eyebrow: string;
      title: string;
      lead: string;
      body: string[];
      values: string[];
      guidelinesTitle: string;
      guidelines: string;
      closing: string;
      ctaCommunity: string;
      ctaRules: string;
    };
    categories: Record<
      "plasticSurgeons" | "aestheticians" | "plasticSurgery" | "aestheticProcedures",
      { eyebrow: string; description: string }
    >;
  };
  plasticSurgeryPage: {
    hero: {
      eyebrow: string;
      headline: string;
      supporting: string;
      cta: string;
      ctaSecondary: string;
    };
    intro: {
      eyebrow: string;
      title: string;
      subtitle: string;
      lead: string;
      body: string[];
      values: string[];
      disclaimerTitle: string;
      disclaimer: string;
      ctaGuides: string;
      ctaForum: string;
    };
    guides: {
      eyebrow: string;
      title: string;
      description: string;
      cardEyebrow: string;
      readGuide: string;
    };
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "ShareWell — Plastic Surgery Research",
      description:
        "ShareWell is a trust-focused community for plastic surgery research in Georgia — surgeons, clinics, procedures, reviews, and discussion.",
    },
    nav: {
      language: "Language",
      brand: "ShareWell",
      home: "Home",
      plasticSurgeons: "Plastic Surgeons",
      aestheticians: "Aestheticians",
      plasticSurgery: "Plastic Surgery",
      aestheticProcedures: "Aesthetic Procedures",
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
      tagline: "Real experiences. Better decisions.",
      eyebrow: "Explore the platform",
      title: "Research with clarity",
      subtitle:
        "Compare surgeons, aestheticians, and procedures in one trust-first space—built for informed decisions, not sales pressure.",
      explore: "Explore",
      hero: {
        label: "Featured highlights",
        prev: "Previous slide",
        next: "Next slide",
        slides: {
          wellness: {
            eyebrow: "Skin wellness",
            headline: "Care that feels calm, clear, and considered",
            supporting:
              "Explore non-surgical treatments and everyday skin health—with a premium, education-first tone.",
            cta: "Explore Aesthetic care",
          },
          community: {
            eyebrow: "Real voices",
            headline: "Learn from experiences shared with respect",
            supporting:
              "Read honest stories, ask questions, and join a moderated space built for trust—not hype.",
            cta: "Visit the forum",
          },
          research: {
            eyebrow: "Informed choices",
            headline: "Compare providers with transparency in mind",
            supporting:
              "Review surgeons, clinics, and procedures side by side before you decide what is right for you.",
            cta: "Browse surgeons",
          },
        },
      },
      intro: {
        eyebrow: "Welcome",
        title: "A place to research, ask, and share—together",
        lead:
          "We created this platform so that people considering plastic surgery have a space where they can share real experiences, questions, and helpful information.",
        body: [
          "We know that reaching such a decision is not easy—often we need others' experiences, honest advice, and a safe environment where we can freely ask questions or tell our own story.",
          "Our goal is for this space to be friendly, confidential, and grounded in respect. You can share your experience, ask questions, read others' stories, and find information about doctors, clinics, and procedures.",
        ],
        values: ["Friendly", "Confidential", "Respectful"],
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
        aestheticians: {
          eyebrow: "Skin & med-spa",
          description:
            "Licensed aestheticians and non-surgical providers for consultations and skin health.",
        },
        plasticSurgery: {
          eyebrow: "Surgical procedures",
          description:
            "Rhinoplasty, body contouring, and more—with risks, timelines, and recovery context.",
        },
        aestheticProcedures: {
          eyebrow: "Non-surgical care",
          description:
            "Peels, lasers, injectables education—product-neutral guides for realistic expectations.",
        },
      },
    },
    plasticSurgeryPage: {
      hero: {
        eyebrow: "Surgical procedures",
        headline: "Plastic surgery guides with clarity first",
        supporting:
          "Compare risks, recovery timelines, and questions to ask—before you speak with a surgeon. Educational only, never medical advice.",
        cta: "Browse procedure guides",
        ctaSecondary: "Find surgeons",
      },
      intro: {
        eyebrow: "Research with care",
        title: "Understand procedures before you decide",
        subtitle:
          "Each guide covers candidacy, recovery, risks, and revision context—in calm, neutral language.",
        lead:
          "Plastic surgery is deeply personal. These guides help you organize what to learn, what to compare, and what to discuss in consultation—without pressure or glam marketing.",
        body: [
          "Every procedure card links to a structured overview: realistic expectations, typical recovery phases, and risks worth discussing with a qualified surgeon.",
          "Pair guides with community stories and surgeon profiles when you are ready—ShareWell is built for informed consent, not quick conversions.",
        ],
        values: ["Evidence-minded", "Recovery-aware", "Surgeon-ready"],
        disclaimerTitle: "Educational content only",
        disclaimer:
          "Guides summarize publicly discussed topics and do not replace examination, imaging, or individualized medical advice. Always confirm plans with a licensed surgeon in Georgia or your jurisdiction.",
        ctaGuides: "View all guides",
        ctaForum: "Ask the community",
      },
      guides: {
        eyebrow: "Procedure library",
        title: "Explore surgical guides",
        description:
          "Tap a card to open risks, timelines, questions to ask, and revision context for each procedure.",
        cardEyebrow: "Procedure guide",
        readGuide: "Read guide",
      },
    },
  },
  ka: {
    meta: {
      title: "ShareWell — პლასტიკური ქირურგიის კვლევა",
      description:
        "ShareWell არის სანდო სივრცე პლასტიკური ქირურგიის კვლევისთვის საქართველოში — ქირურგები, კლინიკები, პროცედურები და საზოგადოება.",
    },
    nav: {
      language: "ენა",
      brand: "ShareWell",
      home: "მთავარი",
      plasticSurgeons: "პლასტიკური ქირურგები",
      aestheticians: "ესთეტისტები",
      plasticSurgery: "პლასტიკური ქირურგია",
      aestheticProcedures: "ესთეტიკური პროცედურები",
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
      tagline: "რეალური გამოცდილება. უკეთესი გადაწყვეტილებები.",
      eyebrow: "გამოიკვლიეთ პლატფორმა",
      title: "კვლევა გამჭვირვალობით",
      subtitle:
        "შეადარეთ ქირურგები, ესთეტისტები და პროცედურები ერთ სანდო სივრცეში — გადაწყვეტილებისთვის, არა გაყიდვებისთვის.",
      explore: "ნახვა",
      hero: {
        label: "მთავარი სლაიდები",
        prev: "წინა სლაიდი",
        next: "შემდეგი სლაიდი",
        slides: {
          wellness: {
            eyebrow: "კანის ჯანმრთელობა",
            headline: "მოვლა, რომელიც მშვიდ, გამჭვირვალე და გააზრებულია",
            supporting:
              "გამოიკვლიეთ არაქირურგიული მკურნალობა და ყოველდღიური კანის ჯანმრთელობა — განათლებაზე ორიენტირებული ტონით.",
            cta: "ესთეტიკური მოვლა",
          },
          community: {
            eyebrow: "რეალური ხმები",
            headline: "ისწავლეთ გამოცდილებებიდან, რომლებიც პატივისცემით იზიარება",
            supporting:
              "წაიკითხეთ გულწრფელი ისტორიები, დასვით კითხვები და შეუერთდით მოდერირებულ სივრცეს.",
            cta: "ფორუმზე გადასვლა",
          },
          research: {
            eyebrow: "გააზრებული არჩევანი",
            headline: "შეადარეთ პროვაიდერები გამჭვირვალობით",
            supporting:
              "გაეცანით ქირურგებს, კლინიკებსა და პროცედურებს, სანამ გადაწყვეტილებას მიიღებთ.",
            cta: "ქირურგების ნახვა",
          },
        },
      },
      intro: {
        eyebrow: "მოგესალმებით",
        title: "სივრცე, სადაც თქვენი გამოცდილება მნიშვნელოვანია",
        lead:
          "ჩვენ შევქმენით ეს პლატფორმა იმისთვის, რომ ადამიანებს, რომლებიც პლასტიკურ ოპერაციაზე ფიქრობენ, ჰქონდეთ სივრცე, სადაც შეძლებენ რეალური გამოცდილების, კითხვების და სასარგებლო ინფორმაციის გაზიარებას.",
        body: [
          "ვიცით, რომ ასეთ გადაწყვეტილებამდე მისვლა მარტივი არ არის — ხშირად გვჭირდება სხვისი გამოცდილება, გულწრფელი რჩევა და უსაფრთხო გარემო, სადაც თავისუფლად შეგვიძლია კითხვა ან საკუთარი ისტორიის მოყოლა.",
          "ჩვენი მიზანია, ეს სივრცე იყოს მეგობრული, კონფიდენციალური და პატივისცემაზე დაფუძნებული. შეგიძლიათ გააზიაროთ თქვენი გამოცდილება, დასვათ კითხვები, წაიკითხოთ სხვების ისტორიები და მიიღოთ ინფორმაცია ექიმებზე, კლინიკებსა და პროცედურებზე.",
        ],
        values: ["მეგობრული", "კონფიდენციალური", "პატივისცემაზე დაფუძნებული"],
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
        aestheticians: {
          eyebrow: "კანა და მედ-სპა",
          description:
            "ლიცენზირებული ესთეტისტები და არაქირურგიული მომსახურება კონსულტაციებისთვის.",
        },
        plasticSurgery: {
          eyebrow: "ქირურგიული პროცედურები",
          description:
            "რინოპლასტიკა, კონტურინგი და სხვა — რისკები, ვადები და აღდგენა.",
        },
        aestheticProcedures: {
          eyebrow: "არაქირურგიული მოვლა",
          description:
            "პილინგები, ლაზერი, ინექციები — ნეიტრალური საგანმანათლებლო მიმოხილვები.",
        },
      },
    },
    plasticSurgeryPage: {
      hero: {
        eyebrow: "ქირურგიული პროცედურები",
        headline: "პლასტიკური ქირურგიის გზამკვლევები — ჯერ გაიგეთ, შემდეგ გადაწყვიტეთ",
        supporting:
          "შეადარეთ რისკები, აღდგენის ვადები და კითხვები, რაც ქირურგთან უნდა განვიხილოთ. მხოლოდ საგანმანათლებლო მასალა.",
        cta: "გზამკვლევების ნახვა",
        ctaSecondary: "ქირურგების ძებნა",
      },
      intro: {
        eyebrow: "კვლევა ყურადღებით",
        title: "გაიგეთ პროცედურა გადაწყვეტილებამდე",
        subtitle:
          "თითოეული გზამკვლევი მოიცავს კანდიდატურას, აღდგენას, რისკებს და რევიზიის კონტექსტს.",
        lead:
          "პლასტიკური ქირურგია პირადი არჩევანია. ეს გზამკვლევები გეხმარებათ დაალაგოთ რა უნდა გაიგოთ და რა უნდა განვიხილოთ კონსულტაციაზე — გაყიდვის ზეწოლის გარეშე.",
        body: [
          "ყოველი ბარათი ხსნის მოსალოდნელობებს, აღდგენის ეტაპებს და რისკებს, რაც კვალიფიციურ ქირურგთან უნდა განიხილოს.",
          "დაუკავშირეთ გზამკვლევები ფორუმის ისტორიებსა და ქირურგების პროფილებს, როცა მზად ხართ — ShareWell ინფორმირებული თანხმობისთვისაა.",
        ],
        values: ["მტკიცებულებაზე დაფუძნებული", "აღდგენის ცნობიერება", "ქირურგთან მზად"],
        disclaimerTitle: "მხოლოდ საგანმანათლებლო",
        disclaimer:
          "გზამკვლევები არ ცვლის გამოკვლეთას, გამოკვლევას ან ინდივიდუალურ რჩევას. გეგმები დაადასტურეთ ლიცენზირებულ ქირურგთან.",
        ctaGuides: "ყველა გზამკვლევი",
        ctaForum: "კითხვა ფორუმზე",
      },
      guides: {
        eyebrow: "პროცედურების ბიბლიოთეკა",
        title: "ქირურგიული გზამკვლევები",
        description:
          "აირჩიეთ ბარათი რისკების, ვადებისა და კითხვების სრული მიმოხილვისთვის.",
        cardEyebrow: "გზამკვლევი",
        readGuide: "წაიკითხე",
      },
    },
  },
  ru: {
    meta: {
      title: "ShareWell — исследование пластической хирургии",
      description:
        "ShareWell — сообщество для изучения пластической хирургии в Грузии: хирурги, клиники, процедуры и обсуждения.",
    },
    nav: {
      language: "Язык",
      brand: "ShareWell",
      home: "Главная",
      plasticSurgeons: "Пластические хирурги",
      aestheticians: "Эстетисты",
      plasticSurgery: "Пластическая хирургия",
      aestheticProcedures: "Эстетические процедуры",
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
      tagline: "Реальный опыт. Лучшие решения.",
      eyebrow: "Исследуйте платформу",
      title: "Исследуйте с ясностью",
      subtitle:
        "Сравнивайте хирургов, эстетистов и процедуры в одном пространстве — для осознанных решений, а не продаж.",
      explore: "Открыть",
      hero: {
        label: "Главные слайды",
        prev: "Предыдущий слайд",
        next: "Следующий слайд",
        slides: {
          wellness: {
            eyebrow: "Здоровье кожи",
            headline: "Уход, который ощущается спокойным и продуманным",
            supporting:
              "Изучайте нехирургический уход и ежедневное здоровье кожи — в спокойном образовательном тоне.",
            cta: "Эстетический уход",
          },
          community: {
            eyebrow: "Реальные истории",
            headline: "Учитесь на опыте, которым делятся с уважением",
            supporting:
              "Читайте честные истории, задавайте вопросы и присоединяйтесь к модерируемому пространству доверия.",
            cta: "Перейти на форум",
          },
          research: {
            eyebrow: "Осознанный выбор",
            headline: "Сравнивайте специалистов с прозрачностью",
            supporting:
              "Изучайте хирургов, клиники и процедуры, прежде чем принять решение.",
            cta: "Смотреть хирургов",
          },
        },
      },
      intro: {
        eyebrow: "Добро пожаловать",
        title: "Пространство, где важен ваш опыт",
        lead:
          "Мы создали эту платформу для людей, которые думают о пластической операции, — чтобы у них было место, где можно делиться реальным опытом, вопросами и полезной информацией.",
        body: [
          "Мы знаем, что принять такое решение нелегко — часто нужен чужой опыт, честный совет и безопасная среда, где можно свободно задать вопрос или рассказать свою историю.",
          "Наша цель — чтобы это пространство было дружелюбным, конфиденциальным и основанным на уважении. Вы можете поделиться опытом, задать вопросы, читать истории других и находить информацию о врачах, клиниках и процедурах.",
        ],
        values: ["Дружелюбно", "Конфиденциально", "С уважением"],
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
        aestheticians: {
          eyebrow: "Кожа и мед-спа",
          description:
            "Лицензированные эстетисты и нехирургические услуги для консультаций.",
        },
        plasticSurgery: {
          eyebrow: "Хирургические процедуры",
          description:
            "Ринопластика, контуринг тела и др. — риски, сроки и восстановление.",
        },
        aestheticProcedures: {
          eyebrow: "Без операции",
          description:
            "Пилинги, лазеры, инъекции — нейтральные образовательные материалы.",
        },
      },
    },
    plasticSurgeryPage: {
      hero: {
        eyebrow: "Хирургические процедуры",
        headline: "Гиды по пластической хирургии — сначала ясность",
        supporting:
          "Сравнивайте риски, сроки восстановления и вопросы для консультации. Только образовательный контент, не медицинский совет.",
        cta: "Смотреть гиды",
        ctaSecondary: "Найти хирургов",
      },
      intro: {
        eyebrow: "Исследуйте осознанно",
        title: "Поймите процедуру до решения",
        subtitle:
          "В каждом гиде — кандидаты, восстановление, риски и контекст ревизий в спокойном нейтральном тоне.",
        lead:
          "Пластическая операция — личный выбор. Эти материалы помогают структурировать, что изучить и что обсудить с хирургом — без давления и глянца.",
        body: [
          "Каждая карточка ведёт к обзору: ожидания, этапы восстановления и риски для обсуждения с квалифицированным хирургом.",
          "Сочетайте гиды с историями сообщества и профилями хирургов, когда будете готовы — ShareWell для информированного согласия.",
        ],
        values: ["На фактах", "С учётом восстановления", "К консультации"],
        disclaimerTitle: "Только для обучения",
        disclaimer:
          "Материалы не заменяют осмотр, обследование или индивидуальную консультацию. План подтверждайте с лицензированным хирургом.",
        ctaGuides: "Все гиды",
        ctaForum: "Спросить сообщество",
      },
      guides: {
        eyebrow: "Библиотека процедур",
        title: "Хирургические гиды",
        description:
          "Откройте карточку для рисков, сроков, вопросов хирургу и контекста ревизий.",
        cardEyebrow: "Гид по процедуре",
        readGuide: "Читать гид",
      },
    },
  },
};
