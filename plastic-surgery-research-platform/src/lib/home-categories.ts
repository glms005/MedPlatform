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
    overlay: "from-brand-navy/75 via-brand-navy/25 to-brand-teal/40",
  },
  {
    id: "estheticians",
    href: "/estheticians",
    image:
      "https://images.unsplash.com/photo-1515377907043-f1e22abfb26a?w=900&auto=format&fit=crop&q=85",
    imageAlt: "Esthetician performing a facial treatment",
    overlay: "from-brand-blue-dark/70 via-brand-blue/20 to-slate-400/35",
  },
  {
    id: "plasticSurgery",
    href: "/plastic-surgery",
    image: "/images/home/plastic-surgery.png",
    imageAlt: "Surgeons performing a procedure in a sterile operating room",
    overlay: "from-brand-navy/55 via-brand-navy/15 to-brand-teal/30",
  },
  {
    id: "estheticProcedures",
    href: "/esthetic-procedures",
    image:
      "https://images.unsplash.com/photo-1570172619644-df3fc9ebc32a?w=900&auto=format&fit=crop&q=85",
    imageAlt: "Non-surgical aesthetic skincare treatment",
    overlay: "from-brand-blue-dark/65 via-white/5 to-brand-teal/35",
  },
];
