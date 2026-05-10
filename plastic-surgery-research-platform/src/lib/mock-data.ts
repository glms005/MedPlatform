export type Surgeon = {
  id: string;
  name: string;
  specialty: string;
  clinic: string;
  yearsExperience: number;
  verified: boolean;
  procedures: string[];
  satisfactionScore: number;
};

export const surgeons: Surgeon[] = [
  {
    id: "s1",
    name: "Dr. Nino K.",
    specialty: "Rhinoplasty (Primary + Revision)",
    clinic: "Tbilisi Facial Surgery Group",
    yearsExperience: 12,
    verified: true,
    procedures: ["Rhinoplasty", "Revision Rhinoplasty", "Septoplasty"],
    satisfactionScore: 4.6,
  },
  {
    id: "s2",
    name: "Dr. Giorgi M.",
    specialty: "Functional & Aesthetic Rhinoplasty",
    clinic: "Georgia ENT + Aesthetics Institute",
    yearsExperience: 9,
    verified: false,
    procedures: ["Rhinoplasty", "Turbinate Reduction", "Breathing Assessment"],
    satisfactionScore: 4.2,
  },
];

export const features = [
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
] as const;

