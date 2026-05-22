export type HeroSlideId = "wellness" | "community" | "research";

export type HeroSlideConfig = {
  id: HeroSlideId;
  href: string;
  image: string;
  imageAlt: string;
  overlay: string;
};

export const HERO_SLIDES: HeroSlideConfig[] = [
  {
    id: "wellness",
    href: "/aesthetic-procedures",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbbe3f?w=1920&auto=format&fit=crop&q=85",
    imageAlt: "Calm spa wellness setting with soft towels and natural light",
    overlay:
      "from-brand-champagne/85 via-brand-teal/25 to-brand-slate/55",
  },
  {
    id: "community",
    href: "/forum",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&auto=format&fit=crop&q=85",
    imageAlt: "Professional woman in a bright, welcoming consultation space",
    overlay:
      "from-brand-ivory/80 via-brand-aqua/30 to-brand-navy/50",
  },
  {
    id: "research",
    href: "/surgeons",
    image:
      "https://images.unsplash.com/photo-1515377907043-f1e22abfb26a?w=1920&auto=format&fit=crop&q=85",
    imageAlt: "Gentle skincare treatment in a serene clinical wellness room",
    overlay:
      "from-brand-mint/75 via-brand-blue/20 to-brand-slate/50",
  },
];
