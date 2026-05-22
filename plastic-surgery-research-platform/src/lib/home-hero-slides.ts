export type HeroSlideId = "wellness" | "community" | "research";

export type HeroSlideConfig = {
  id: HeroSlideId;
  href: string;
  image: string;
  imageAlt: string;
  overlay: string;
};

/** Local assets only — remote Unsplash URLs were returning 404 in production. */
export const HERO_SLIDES: HeroSlideConfig[] = [
  {
    id: "wellness",
    href: "/aesthetic-procedures",
    image: "/images/home/aesthetic-procedures.png",
    imageAlt: "Licensed aesthetician performing a gentle facial treatment in a bright spa setting",
    overlay: "from-brand-champagne/70 via-brand-teal/20 to-brand-slate/45",
  },
  {
    id: "community",
    href: "/forum",
    image: "/images/home/aestheticians.png",
    imageAlt: "Licensed aesthetician in clinical attire preparing for a skincare consultation",
    overlay: "from-brand-ivory/65 via-brand-aqua/25 to-brand-navy/40",
  },
  {
    id: "research",
    href: "/surgeons",
    image: "/images/home/plastic-surgeons.png",
    imageAlt: "Female plastic surgeon in blue scrubs and sterile gloves in a clinical setting",
    overlay: "from-brand-mint/60 via-brand-blue/15 to-brand-slate/42",
  },
];
