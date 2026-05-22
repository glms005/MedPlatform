export type HomeCategoryId =
  | "plasticSurgeons"
  | "estheticians"
  | "plasticSurgery"
  | "estheticProcedures";

export type HomeCategoryConfig = {
  id: HomeCategoryId;
  href: string;
  image: string;
  imageAlt: string;
  /** Tailwind gradient stops layered over the photo */
  overlay: string;
};

export const HOME_CATEGORIES: HomeCategoryConfig[] = [
  {
    id: "plasticSurgeons",
    href: "/surgeons",
    image: "/images/home/plastic-surgeons.png",
    imageAlt:
      "Female plastic surgeon in blue scrubs, cap, mask, and sterile gloves in a clinical setting",
    overlay: "from-brand-slate/65 via-brand-navy/25 to-brand-blue/35",
  },
  {
    id: "estheticians",
    href: "/estheticians",
    image: "/images/home/estheticians.png",
    imageAlt:
      "Licensed esthetician in clinical attire preparing gloves before a skincare treatment",
    overlay: "from-brand-slate/50 via-brand-blue/20 to-brand-aqua-bright/30",
  },
  {
    id: "plasticSurgery",
    href: "/plastic-surgery",
    image: "/images/home/plastic-surgery.png",
    imageAlt:
      "Professional clinical consultation for breast aesthetics in a calm, neutral studio setting",
    overlay: "from-brand-slate/55 via-brand-navy/15 to-brand-blue/32",
  },
  {
    id: "estheticProcedures",
    href: "/esthetic-procedures",
    image: "/images/home/esthetic-procedures.png",
    imageAlt:
      "Licensed esthetician performing a gentle facial treatment on a relaxed client in a bright spa setting",
    overlay: "from-brand-slate/48 via-brand-aqua-bright/18 to-brand-teal/28",
  },
];
