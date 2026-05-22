/** Pastel clinical backgrounds — same palette as homepage portal cards. */
export type ProcedureGuideVisual = {
  slug: string;
  image: string;
  imageAlt: string;
  overlay: string;
};

export const PROCEDURE_GUIDE_VISUALS: ProcedureGuideVisual[] = [
  {
    slug: "rhinoplasty",
    image: "/images/backgrounds/clinical-soft.jpg",
    imageAlt: "Soft clinical consultation space with neutral tones and natural light",
    overlay: "from-brand-slate/55 via-brand-blue/18 to-brand-aqua-bright/28",
  },
  {
    slug: "blepharoplasty",
    image: "/images/backgrounds/neutral-quiet-space.jpg",
    imageAlt: "Calm, quiet clinical room with soft white and blue lighting",
    overlay: "from-brand-slate/50 via-brand-navy/12 to-brand-teal/30",
  },
  {
    slug: "facelift",
    image: "/images/backgrounds/neutral-education.jpg",
    imageAlt: "Educational materials and serene clinic desk in pastel tones",
    overlay: "from-brand-slate/52 via-brand-blue/15 to-brand-mint/32",
  },
  {
    slug: "liposuction",
    image: "/images/backgrounds/neutral-workflow.jpg",
    imageAlt: "Organized clinical workflow area with white and periwinkle accents",
    overlay: "from-brand-slate/54 via-brand-aqua/20 to-brand-blue/30",
  },
  {
    slug: "breast-augmentation",
    image: "/images/home/plastic-surgery.png",
    imageAlt: "Professional clinical consultation in a calm, neutral studio setting",
    overlay: "from-brand-slate/55 via-brand-navy/15 to-brand-blue/32",
  },
  {
    slug: "breast-reduction",
    image: "/images/backgrounds/clinical-soft.jpg",
    imageAlt: "Soft clinical environment with warm ivory and blue tones",
    overlay: "from-brand-slate/53 via-brand-teal/18 to-brand-aqua-light/28",
  },
  {
    slug: "gynecomastia",
    image: "/images/backgrounds/neutral-collaboration.jpg",
    imageAlt: "Collaborative clinical discussion in a bright, neutral space",
    overlay: "from-brand-slate/50 via-brand-blue/22 to-brand-sand/35",
  },
  {
    slug: "abdominoplasty",
    image: "/images/backgrounds/neutral-documents.jpg",
    imageAlt: "Procedure planning documents on a clean clinical desk",
    overlay: "from-brand-slate/56 via-brand-navy/14 to-brand-blue/28",
  },
  {
    slug: "otoplasty",
    image: "/images/backgrounds/research-blue.jpg",
    imageAlt: "Research-focused clinical setting with soft blue and white palette",
    overlay: "from-brand-slate/48 via-brand-blue/25 to-brand-aqua-bright/26",
  },
  {
    slug: "chin-augmentation",
    image: "/images/backgrounds/evidence-comparison.jpg",
    imageAlt: "Side-by-side educational comparison in a neutral clinical tone",
    overlay: "from-brand-slate/54 via-brand-teal/16 to-brand-mint/30",
  },
  {
    slug: "buccal-fat-removal",
    image: "/images/backgrounds/neutral-writing.jpg",
    imageAlt: "Thoughtful notes and calm clinic lighting in pastel hues",
    overlay: "from-brand-slate/51 via-brand-aqua-bright/20 to-brand-teal/28",
  },
  {
    slug: "revision-surgery",
    image: "/images/backgrounds/gradient-abstract.jpg",
    imageAlt: "Abstract soft gradient in brand periwinkle and ivory tones",
    overlay: "from-brand-slate/58 via-brand-blue/20 to-brand-navy/32",
  },
];

export function getProcedureVisual(slug: string): ProcedureGuideVisual | undefined {
  return PROCEDURE_GUIDE_VISUALS.find((v) => v.slug === slug);
}
