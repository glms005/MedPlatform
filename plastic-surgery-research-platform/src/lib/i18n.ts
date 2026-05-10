export type Locale = "en" | "ka";

export const locales: Locale[] = ["en", "ka"];

export const LOCALE_STORAGE_KEY = "medplatform-locale";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    language: string;
    brand: string;
    home: string;
    surgeons: string;
    procedures: string;
    community: string;
    writeReview: string;
  };
  hero: {
    badges: [string, string, string];
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaProcedures: string;
    ctaSecondary: string;
    trust: Array<{ title: string; subtitle: string }>;
  };
  problem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: Array<{ title: string; description: string; key: string }>;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pill: string;
    steps: Array<{ n: string; title: string; description: string }>;
    stepLabel: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  surgeons: {
    eyebrow: string;
    title: string;
    subtitle: string;
    verified: string;
    pending: string;
    clinic: string;
    experience: string;
    years: string;
    procedures: string;
    satisfaction: string;
    viewProfile: string;
    viewAll: string;
  };
  procedureCategories: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
  };
  communityPreview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  reviewsPreview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    shareExperience: string;
    browseSurgeons: string;
  };
  share: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fieldsTitle: string;
    fieldBadges: string[];
    fieldsNote: string;
    asideTitle: string;
    asideBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  guide: {
    eyebrow: string;
    title: string;
    subtitle: string;
    timelineTitle: string;
    timeline: Array<{ label: string; text: string }>;
    risksTitle: string;
    risks: string[];
    questionsTitle: string;
    questions: string[];
    expectationsTitle: string;
    expectations: string;
  };
  earlyAccess: {
    title: string;
    body: string;
  };
  disclaimer: {
    title: string;
    body: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    browse: string;
    join: string;
  };
  footer: {
    tagline: string;
    links: Array<{ label: string; href: string }>;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Plastic Surgery Research Platform",
      description:
        "A transparency-first research platform for plastic surgery decisions in Georgia — surgeons, procedures, recovery, and community discussion.",
    },
    nav: {
      language: "Language",
      brand: "MedPlatform",
      home: "Home",
      surgeons: "Surgeons",
      procedures: "Procedures",
      community: "Community",
      writeReview: "Write a review",
    },
    hero: {
      badges: ["Evidence-focused", "Not a clinic", "Transparency-first"],
      headline: "Research Your Plastic Surgeon Before Surgery",
      subheadline:
        "Find structured, transparent, and evidence-based information about plastic surgery in Georgia — surgeons, procedures, recovery, and patient experiences.",
      ctaPrimary: "Explore Surgeons",
      ctaProcedures: "Browse Procedures",
      ctaSecondary: "Share Your Experience",
      trust: [
        { title: "Structured data", subtitle: "Compare like-for-like" },
        { title: "Real-world recovery", subtitle: "Expectations & red flags" },
        {
          title: "Verification signals",
          subtitle: "Evidence when available",
        },
      ],
    },
    problem: {
      eyebrow: "Why this exists",
      title: "Surgery decisions deserve better information",
      subtitle:
        "This platform is built to reduce ambiguity—not to market procedures.",
      cards: [
        {
          key: "filters",
          title: "Filters replace facts",
          description:
            "People end up relying on curated Instagram content instead of structured evidence.",
        },
        {
          key: "reviews",
          title: "Fake or unclear reviews",
          description:
            "It’s hard to tell what’s real, what’s sponsored, and what’s missing.",
        },
        {
          key: "compare",
          title: "No apples-to-apples comparison",
          description:
            "Qualifications, scope, aftercare, and outcomes aren’t presented consistently.",
        },
        {
          key: "complications",
          title: "Complications are under-discussed",
          description:
            "Recovery realities and red flags are rarely captured in an organized way.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Method",
      title: "A calm, structured workflow",
      subtitle: "Designed for research, not hype.",
      pill: "Three-step research flow",
      stepLabel: "Step",
      steps: [
        {
          n: "01",
          title: "Research surgeons",
          description:
            "Review structured profiles that emphasize qualifications, scope, and transparency signals.",
        },
        {
          n: "02",
          title: "Compare real patient experiences",
          description:
            "Look beyond star ratings with standardized fields for consult clarity, aftercare, and recovery.",
        },
        {
          n: "03",
          title: "Make a more informed decision",
          description:
            "Use evidence and patterns to ask better questions before committing to surgery.",
        },
      ],
    },
    features: {
      eyebrow: "Capabilities",
      title: "Built for evidence-based comparison",
      subtitle:
        "Everything is designed to make information clearer, not prettier.",
      items: [
        {
          title: "Surgeon profiles",
          description:
            "Structured profiles focused on qualifications, scope, and transparency—not promotion.",
        },
        {
          title: "Structured reviews",
          description:
            "Standardized fields for consult quality, consent clarity, aftercare, and outcomes.",
        },
        {
          title: "Before/after galleries",
          description:
            "Context-first galleries with timeframe, angle guidance, and lighting notes.",
        },
        {
          title: "Verification badges",
          description:
            "Signals for identity and claims verification when evidence is provided.",
        },
        {
          title: "Procedure guides",
          description:
            "Evidence-based overviews of rhinoplasty decisions, tradeoffs, and recovery.",
        },
        {
          title: "Recovery insights",
          description:
            "Day-by-day expectations, red flags, and what “normal” often looks like.",
        },
        {
          title: "Red flag transparency",
          description:
            "Surfaces patterns: unclear pricing, pressure tactics, missing risks, poor follow-up.",
        },
      ],
    },
    surgeons: {
      eyebrow: "Preview",
      title: "Surgeon cards (mock)",
      subtitle:
        "A structured snapshot designed for comparison. Data shown here is placeholder only.",
      verified: "Verified badge",
      pending: "Verification pending",
      clinic: "Clinic",
      experience: "Experience",
      years: "years",
      procedures: "Procedures",
      satisfaction: "Patient satisfaction",
      viewProfile: "View Profile",
      viewAll: "View all surgeons",
    },
    procedureCategories: {
      eyebrow: "Procedures",
      title: "Research by procedure",
      subtitle:
        "Educational guides only — not medical advice. More procedures will be added over time.",
      viewAll: "View all procedures",
    },
    communityPreview: {
      eyebrow: "Community",
      title: "Discuss recovery, questions, and experiences",
      subtitle:
        "Moderated discussions by topic. Safe communication — not for diagnosis or surgeon attacks.",
      cta: "Open community",
    },
    reviewsPreview: {
      eyebrow: "Structured reviews",
      title: "Real patient experiences, structured for comparison",
      subtitle:
        "Satisfaction, communication, aftercare, and recovery notes — submitted through a moderation-ready form in a later release.",
      shareExperience: "Share your experience",
      browseSurgeons: "Browse surgeons",
    },
    share: {
      eyebrow: "Contribute",
      title: "Help others research with more clarity",
      subtitle:
        "Share an experience using structured prompts (consult quality, aftercare, recovery, and outcomes). This is mock UI only—no data is collected yet.",
      fieldsTitle: "What you would share (example fields)",
      fieldBadges: [
        "Consult clarity",
        "Informed consent",
        "Aftercare responsiveness",
        "Recovery notes",
        "Complications (if any)",
        "Timeframes & context",
      ],
      fieldsNote:
        "The goal is to make experiences comparable and responsible—reducing hype and increasing transparency.",
      asideTitle: "Get involved",
      asideBody:
        "We’re building an early-access cohort focused on quality contributions and verification standards.",
      ctaPrimary: "Join Early Access",
      ctaSecondary: "Browse Surgeons",
    },
    guide: {
      eyebrow: "Guide preview",
      title: "Rhinoplasty: decision & recovery guide (mock)",
      subtitle:
        "A calm, evidence-focused reference for expectations, risks, and questions.",
      timelineTitle: "Recovery timeline",
      timeline: [
        {
          label: "Days 1–3:",
          text: "swelling, congestion, rest-focused",
        },
        { label: "Week 1:", text: "splint care, early bruising changes" },
        {
          label: "Weeks 2–6:",
          text: "gradual comfort + visible swelling reduction",
        },
        {
          label: "Months 3–12:",
          text: "refinement phase, final shape evolves",
        },
      ],
      risksTitle: "Common risks (non-exhaustive)",
      risks: [
        "Asymmetry",
        "Breathing changes",
        "Infection",
        "Scarring",
        "Revision possibility",
        "Prolonged swelling",
      ],
      questionsTitle: "Questions to ask",
      questions: [
        "How do you handle revision cases, and how often?",
        "What’s your aftercare plan and follow-up cadence?",
        "What outcomes are realistic for my anatomy?",
        "How are complications documented and managed?",
      ],
      expectationsTitle: "Realistic expectations",
      expectations:
        "The goal is informed consent: understand tradeoffs, timelines, and what “normal” recovery can look like—before you commit.",
    },
    earlyAccess: {
      title: "Early access (mock)",
      body: "This is a landing-page MVP only. In the next phase, early access will support invite-based onboarding, contribution guidelines, and a verification policy.",
    },
    disclaimer: {
      title: "Medical disclaimer",
      body: "This platform is for informational and research purposes only. It does not provide medical diagnosis, treatment, or medical advice. Always consult a qualified healthcare professional for guidance specific to your situation.",
    },
    finalCta: {
      title: "Choose Your Surgeon With More Confidence",
      subtitle:
        "A transparency-first research platform for plastic surgery decisions in Georgia.",
      browse: "Browse Surgeons",
      join: "Join Early Access",
    },
    footer: {
      tagline:
        "Transparency-first research for plastic surgery decisions in Georgia.",
      links: [
        { label: "Surgeons", href: "/surgeons" },
        { label: "Procedures", href: "/procedures" },
        { label: "Community", href: "/community" },
        { label: "Medical disclaimer", href: "#disclaimer" },
      ],
    },
  },
  ka: {
    meta: {
      title: "პლასტიკური ქირურგიის კვლევითი პლატფორმა",
      description:
        "გამჭვირვალე კვლევითი პლატფორმა პლასტიკური ქირურგიის გადაწყვეტილებებისთვის საქართველოში — ქირურგები, ოპერაციები, აღდგენა და დისკუსიები.",
    },
    nav: {
      language: "ენა",
      brand: "MedPlatform",
      home: "მთავარი",
      surgeons: "ქირურგები",
      procedures: "ოპერაციები",
      community: "საზოგადოება",
      writeReview: "შეფასება",
    },
    hero: {
      badges: [
        "მტკიცებაზე დაფუძნებული",
        "კლინიკის საიტი არაა",
        "გამჭვირვალობა პირველ რიგში",
      ],
      headline: "კვლევა გაუკეთეთ პლასტიკურ ქირურგს ოპერაციამდე",
      subheadline:
        "სტრუქტურირებული ინფორმაცია საქართველოში პლასტიკური ქირურგიის შესახებ — ქირურგები, ოპერაციები, აღდგენა და პაციენტების გამოცდილება.",
      ctaPrimary: "ქირურგების გაცნობა",
      ctaProcedures: "ოპერაციების ნახვა",
      ctaSecondary: "გამოცდილების გაზიარება",
      trust: [
        { title: "სტრუქტურირებული მონაცემი", subtitle: "შედარება ერთსა და იმავე საფუძველზე" },
        {
          title: "რეალური აღდგენა",
          subtitle: "მოლოდინი და საფრთხის სიგნალები",
        },
        {
          title: "ვერიფიკაციის სიგნალები",
          subtitle: "მტკიცება როცა ხელმისაწვდომია",
        },
      ],
    },
    problem: {
      eyebrow: "რატომ არსებობს",
      title: "ქირურგიულ გადაწყვეტილებას უკეთესი ინფორმაცია სჭირდება",
      subtitle:
        "ეს პლატფორმა შექმნილია ორმაგი აზრის შესამცირებლად—არა პროცედურების მარკეტინგისთვის.",
      cards: [
        {
          key: "filters",
          title: "ფილტრები უხელყოფლად ინფორმაციას",
          description:
            "ხშირად ადამიანები Instagram-ზე შერჩეულ კონტენტს ენდობიან მტკიცებაზე დაფუძნებულ სტრუქტურას ნაცვლად.",
        },
        {
          key: "reviews",
          title: "ყალბი ან გაურკვეველი გამოხმაურება",
          description:
            "ძნელია გაირკვეს, რეალურია, სპონსორობულია თუ რა აკლია.",
        },
        {
          key: "compare",
          title: "სწორი შედარება ვერ ხერხდება",
          description:
            "კვალიფიკაცია, ზღვარი, განსახილველი მოვლა და შედეგები ერთნაირად არ იკითხება.",
        },
        {
          key: "complications",
          title: "გართულებების შესახებ მკვიდრად საუბარი არაა",
          description:
            "აღდგენის რეალობა და „წითელი დროშები“ იშვიათადაა მოწყობილად აღწერილი.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "მეთოდი",
      title: "წყნარი, სტრუქტურირებული მიმართულება",
      subtitle: "შექმნილია კვლევისთვის, არა ჰაიპისთვის.",
      pill: "სამი ნაბიჯი კვლევაში",
      stepLabel: "ნაბიჯი",
      steps: [
        {
          n: "01",
          title: "ქირურგების შესწავლა",
          description:
            "გაეცანით სტრუქტურირებულ პროფილებს: კვალიფიკაცია, ზღვარი და გამჭვირვალობის სიგნალები.",
        },
        {
          n: "02",
          title: "პაციენტების გამოცდილების შედარება",
          description:
            "შეარჩიეთ სტანდარტიზებული ველები: კონსულტაციის სიცხადე, მოვლა, აღდგენა.",
        },
        {
          n: "03",
          title: "უფრო ინფორმირებული არჩევანი",
          description:
            "გამოიყენეთ მტკიცება და ტენდენციები უკეთესი კითხვებისთვის ოპერაციამდე.",
        },
      ],
    },
    features: {
      eyebrow: "შესაძლებლობები",
      title: "შექმნილია მტკიცებაზე დაფუძნებული შედარებისთვის",
      subtitle:
        "ყველაფერი ინფორმაციის გასამარტივებლადაა—არა ვიზუალური „სილამაზისთვის“.",
      items: [
        {
          title: "ქირურგის პროფილები",
          description:
            "სტრუქტურირებული პროფილები: კვალიფიკაცია, ზღვარი და გამჭვირვალობა—არა პრომო.",
        },
        {
          title: "სტრუქტურირებული გამოხმაურება",
          description:
            "სტანდარტიზებული ველები: კონსულტაცია, ინფორმირებული თანხმობა, მოვლა, შედეგი.",
        },
        {
          title: "სანამ-შემდეგ გალერეა",
          description:
            "კონტექსტით პირველი: ვადა, კუთხეები და განათების შენიშვნები.",
        },
        {
          title: "ვერიფიკაციის ნიშნები",
          description:
            "იდენტობის და განცხადებების შემოწმება როცა მტკიცება არსებობს.",
        },
        {
          title: "ინტერვენციების გიდები",
          description:
            "მტკიცებაზე დაფუძნებული მიმოხილვა: გადაწყვეტილება, გაცვლები და კომპრომისები, აღდგენა.",
        },
        {
          title: "აღდგენის შეხედულებები",
          description:
            "დღე-დღეზე მოლოდინი, წითელი დროშები და როგორ „ნორმალური“ რეალობა შეიძლება იყოს.",
        },
        {
          title: "წითელი დროშების გამჭვირვალობა",
          description:
            "ტენდენციები: გაურკვეველი ფასი, ზეწოლა, რისკების გამოტოვება, სუსტი მოყოლა.",
        },
      ],
    },
    surgeons: {
      eyebrow: "გადათვალიერება",
      title: "ქირურგის ბარათი (საცდელი)",
      subtitle:
        "სტრუქტურირებული გადათვალიერება შედარებისთვის. ნაჩვენები მონაცემები დროებითია.",
      verified: "დადასტურებული",
      pending: "ვერიფიკაცია მიმდინარეობს",
      clinic: "კლინიკა",
      experience: "გამოცდილება",
      years: "წელი",
      procedures: "ინტერვენციები",
      satisfaction: "პაციენტის კმაყოფილება",
      viewProfile: "პროფილი",
      viewAll: "ყველა ქირურგის ნახვა",
    },
    procedureCategories: {
      eyebrow: "ოპერაციები",
      title: "კვლევა ინტერვენციებით",
      subtitle:
        "მხოლოდ სასწავლო გიდები — არა სამედიცინო რჩევა. სია გაიზრდება.",
      viewAll: "ყველა ოპერაცია",
    },
    communityPreview: {
      eyebrow: "საზოგადოება",
      title: "განიხილეთ აღდგენა, კითხვები და გამოცდილება",
      subtitle:
        "თემების მიხედვით, მოდერაციით. დიაგნოზი ან ქირურგის თავდასხმა — არა.",
      cta: "საზოგადოებაში შესვლა",
    },
    reviewsPreview: {
      eyebrow: "სტრუქტურირებული შეფასებები",
      title: "პაციენტების გამოცდილება შედარებადად",
      subtitle:
        "კმაყოფილება, კომუნიკაცია, მოვლა და აღდგენა — მომავალში მოდერაციი ფორმით.",
      shareExperience: "გამოცდილების გაზიარება",
      browseSurgeons: "ქირურგების ნახვა",
    },
    share: {
      eyebrow: "წვლილი",
      title: "სხვებსაც დაეხმარეთ უფრო ნათელი კვლევაში",
      subtitle:
        "გაზიარეთ გამოცდილება სტრუქტურირებული ველებით (კონსულტაცია, მოვლა, აღდგენა, შედეგი). ეს UI საცდელია—მონაცემები ჯერ არ იგროვება.",
      fieldsTitle: "რას გააზიარებდით (შინაარსი-მაგალითი)",
      fieldBadges: [
        "კონსულტაციის სიცხადე",
        "ინფორმირებული თანხმობა",
        "მოვლის ხელმისაწვდომობა",
        "აღდგენის შენიშვნები",
        "გართულება (თუ იყო)",
        "დროის ჩარჩო და კონტექსტი",
      ],
      fieldsNote:
        "მიზანია გამოცდილება შედარებადი და პასუხისმგებლობიანი იყოს—უკეთესი გამჭვირვალობისთვის.",
      asideTitle: "ჩართვა",
      asideBody:
        "ვქმნით early-access ჯგუფს ხარისხიანი წვლილისა და ვერიფიკაციის სტანდარტებისთვის.",
      ctaPrimary: "ადრეულ წვდომაში ჩართვა",
      ctaSecondary: "ქირურგების ნახვა",
    },
    guide: {
      eyebrow: "გიდის გადათვალიერება",
      title: "რინოპლასტიკა: გადაწყვეტილება და აღდგენა (საცდელი)",
      subtitle:
        "წყნარი, მტკიცებაზე დაფუძნებული მიმართულება: მოლოდინი, რისკები და კითხვები.",
      timelineTitle: "აღდგენის ხაზი",
      timeline: [
        { label: "დღეები 1–3:", text: "შებერილება, შეკუმშულობა, დასვენება" },
        { label: "კვირი 1:", text: "შინრის მოვლა, ჩალურჯების ცვლილება" },
        { label: "კვირები 2–6:", text: "სიმშვიდე + შებერილების მოშლა" },
        {
          label: "თვეები 3–12:",
          text: "დამასრულებელი ფაზა, საბოლოო ფორმა ვითარდება",
        },
      ],
      risksTitle: "ხშირი რისკები (არასრული სია)",
      risks: [
        "ასიმეტრია",
        "სუნთქვის ცვლილება",
        "ინფექცია",
        "ნაიარარი",
        "რევიზიის შანსი",
        "გრძელვადიანი შებერილება",
      ],
      questionsTitle: "კითხვები ქირურგისთვის",
      questions: [
        "როგორ მუშაობთ რევიზიის შემთხვევებში და რამდენად ხშირად?",
        "რა არის მოვლის გეგმა და განმეორებითი ვიზიტების სიხშირე?",
        "რა შედეგი არის რეალისტური ჩემი ანატომიისთვის?",
        "როგორ იხელმძღვანება გართულებები დოკუმენტაციით?",
      ],
      expectationsTitle: "რეალისტური მოლოდინი",
      expectations:
        "მიზანია ინფორმირებული თანხმობა: გაიგოთ კომპრომისები, დროის ხაზი და როგორი შეიძლება იყოს „ნორმალური“ აღდგენა—სანამ გადაწყვეტილებას მიიღებთ.",
    },
    earlyAccess: {
      title: "ადრეული წვდომა (საცდელი)",
      body: "ეს MVP სადარეკლო გვერდია. შემდეგ ფაზაში early-access მოიცავს მოწვევაზე დაფუძნებულ ჩართვას, წესებსა და ვერიფიკაციის პოლიტიკას.",
    },
    disclaimer: {
      title: "სამედიცინო შეტყობინება",
      body: "ეს პლატფორმა მხოლოდ ინფორმაციული და კვლევითი მიზნებისთვისაა. ის არ ცვლის დიაგნოზს, მკურნალობას ან სამედიცინო რჩევას. ყოველთვის მიმართეთ ქვალიფიციურ ჯანდაცვის სპეციალისტს თქვენს სიტუაციაზე მორგებული მიმართულებისთვის.",
    },
    finalCta: {
      title: "შეარჩიეთ ქირურგი უფრო დარწმუნებულად",
      subtitle:
        "გამჭვირვალე, კვლევაზე ორიენტირებული პლატფორმა პლასტიკური ქირურგიის გადაწყვეტილებისთვის საქართველოში.",
      browse: "ქირურგების ნახვა",
      join: "ადრეულ წვდომაში ჩართვა",
    },
    footer: {
      tagline:
        "გამჭვირვალე კვლევა პლასტიკური ქირურგიის გადაწყვეტილებისთვის საქართველოში.",
      links: [
        { label: "ქირურგები", href: "/surgeons" },
        { label: "ოპერაციები", href: "/procedures" },
        { label: "საზოგადოება", href: "/community" },
        { label: "სამედიცინო შეტყობინება", href: "#disclaimer" },
      ],
    },
  },
};
