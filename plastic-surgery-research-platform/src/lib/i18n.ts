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
  },
};
