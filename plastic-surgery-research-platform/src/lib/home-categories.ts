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
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&auto=format&fit=crop&q=85",
    imageAlt: "Professional surgeon in clinical setting",
    overlay: "from-brand-ink/70 via-brand-sage/35 to-brand-blue-dark/50",
  },
  {
    id: "estheticians",
    href: "/estheticians",
    image:
      "https://images.unsplash.com/photo-1515377907043-f1e22abfb26a?w=900&auto=format&fit=crop&q=85",
    imageAlt: "Esthetician performing a facial treatment",
    overlay: "from-brand-ink/65 via-brand-blue/30 to-brand-teal/35",
  },
  {
    id: "plasticSurgery",
    href: "/plastic-surgery",
    image: "/images/home/plastic-surgery.png",
    imageAlt: "Surgeons performing a procedure in a sterile operating room",
    overlay: "from-brand-ink/62 via-brand-sage/25 to-brand-teal-dark/40",
  },
  {
    id: "estheticProcedures",
    href: "/esthetic-procedures",
    image:
      "https://images.unsplash.com/photo-1570172619644-df3fc9ebc32a?w=900&auto=format&fit=crop&q=85",
    imageAlt: "Non-surgical aesthetic skincare treatment",
    overlay: "from-brand-ink/58 via-brand-blue-light/20 to-brand-teal/28",
  },
];
