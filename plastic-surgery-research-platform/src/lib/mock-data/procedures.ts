import type { Procedure } from "@/types/domain";

export const procedures: Procedure[] = [
  {
    id: "p-rhino",
    name: "Rhinoplasty",
    slug: "rhinoplasty",
    description:
      "Surgery to reshape the nose for breathing function and/or appearance. Plans vary widely by anatomy and goals.",
    recoveryTimeline: [
      "Week 1: splint, congestion, visible swelling and bruising",
      "Weeks 2–4: swelling changes; many return to work with limits",
      "Months 3–12: subtle tip and bridge refinement continues",
    ],
    risks: [
      "Residual asymmetry",
      "Breathing changes",
      "Persistent numbness",
      "Need for revision",
    ],
    questionsToAsk: [
      "How do you assess skin thickness and tip support?",
      "What is your revision rate for primary rhinoplasty?",
      "How is after-hours care handled?",
    ],
    idealCandidates:
      "Adults with stable health and realistic expectations who understand tradeoffs between airway, aesthetics, and healing time.",
    revisionRisk:
      "Revision rates vary; complex anatomy, prior surgery, or scarring can increase likelihood of touch-up work.",
  },
  {
    id: "p-bleph",
    name: "Blepharoplasty",
    slug: "blepharoplasty",
    description:
      "Eyelid surgery to address excess skin or fat that can affect vision or appearance.",
    recoveryTimeline: [
      "Days 3–7: bruising and swelling peak then improve",
      "Weeks 2–4: many return to public activities",
    ],
    risks: ["Dry eye symptoms", "Asymmetry", "Hematoma", "Vision changes (rare)"],
    questionsToAsk: [
      "Do you assess tear film and eyelid position before surgery?",
      "What signs should prompt urgent contact after surgery?",
    ],
    idealCandidates:
      "People with documented concerns about eyelid tissue and informed expectations about scar position and dry eye risk.",
    revisionRisk:
      "Moderate; careful pre-op assessment reduces but does not eliminate revision need.",
  },
  {
    id: "p-face",
    name: "Facelift",
    slug: "facelift",
    description:
      "Facial rejuvenation procedures addressing skin laxity and deeper tissue positioning—approaches vary by technique.",
    recoveryTimeline: [
      "Week 1: dressings, swelling, limited activity",
      "Weeks 2–4: gradual return to exercise per guidance",
    ],
    risks: ["Nerve injury (usually temporary)", "Hematoma", "Scar visibility", "Asymmetry"],
    questionsToAsk: [
      "Which plane is addressed (skin-only vs deeper layers)?",
      "What is the realistic scar pattern for my anatomy?",
    ],
    idealCandidates:
      "Healthy adults seeking proportional improvement, not a different face; smokes must quit per surgeon policy.",
    revisionRisk:
      "Revisions occur; tissue quality and prior procedures affect outcomes.",
  },
  {
    id: "p-lipo",
    name: "Liposuction",
    slug: "liposuction",
    description:
      "Contouring procedure removing fat through small incisions—not a weight-loss method.",
    recoveryTimeline: [
      "Days 3–14: swelling, compression garments as directed",
      "Weeks 4–8: gradual contour settling",
    ],
    risks: [
      "Contour irregularity",
      "Fluid collections",
      "Skin laxity if elasticity is limited",
    ],
    questionsToAsk: [
      "What body mass index range do you accept for safety?",
      "How do you assess skin retraction expectations?",
    ],
    idealCandidates:
      "Stable weight, good skin tone in treatment zones, understanding that elasticity limits results.",
    revisionRisk:
      "Touch-up liposuction or additional skin procedures may be discussed if contours underheal.",
  },
  {
    id: "p-ba",
    name: "Breast augmentation",
    slug: "breast-augmentation",
    description:
      "Volume enhancement using implants or, in some cases, fat transfer—choices affect feel, risks, and revision profile.",
    recoveryTimeline: [
      "Week 1: discomfort, limited arm use",
      "Weeks 4–6: return to many activities per clearance",
    ],
    risks: [
      "Capsular contracture",
      "Implant rupture",
      "Double bubble",
      "Reoperation",
    ],
    questionsToAsk: [
      "How are implant dimensions chosen for my chest width?",
      "What monitoring is recommended long term?",
    ],
    idealCandidates:
      "Non-smokers with clear goals who understand implant monitoring and possible future surgery.",
    revisionRisk:
      "Breast surgery has one of the higher revision rates in aesthetic surgery; plan for long-term follow-up.",
  },
  {
    id: "p-br",
    name: "Breast reduction",
    slug: "breast-reduction",
    description:
      "Reduces breast volume and lifts tissue; may improve symptoms in some patients with macromastia.",
    recoveryTimeline: [
      "Week 1–2: dressings, reduced activity",
      "Weeks 4–8: progressive return to exercise",
    ],
    risks: [
      "Changes in sensation",
      "Wound healing issues",
      "Asymmetry",
      "Inability to breastfeed in some cases",
    ],
    questionsToAsk: [
      "Which pedicle technique is planned and why?",
      "How are nipple viability risks discussed?",
    ],
    idealCandidates:
      "Patients with symptoms or disproportion who accept scars and potential sensation changes.",
    revisionRisk:
      "Some revisions for scar or symmetry issues; major revisions less common with experienced planning.",
  },
  {
    id: "p-gyne",
    name: "Gynecomastia surgery",
    slug: "gynecomastia",
    description:
      "Treatment of enlarged male breast tissue; workup may be needed to rule out medical causes.",
    recoveryTimeline: [
      "Week 1: compression, limited exertion",
      "Weeks 3–6: gradual activity increase",
    ],
    risks: ["Contour irregularity", "Crater deformity", "Nipple changes", "Recurrence if cause persists"],
    questionsToAsk: [
      "Is medical screening recommended before surgery?",
      "How is gland vs fat addressed?",
    ],
    idealCandidates:
      "After reversible causes are addressed when applicable; stable health and realistic skin expectations.",
    revisionRisk:
      "Revision rates depend on tissue type and weight stability.",
  },
  {
    id: "p-abdo",
    name: "Abdominoplasty (tummy tuck)",
    slug: "abdominoplasty",
    description:
      "Removes excess abdominal skin and tightens the wall in selected cases; substantial recovery.",
    recoveryTimeline: [
      "Weeks 2–3: bent posture, no heavy lifting",
      "Weeks 6–8: progressive mobilization as cleared",
    ],
    risks: [
      "Seroma",
      "Wound healing",
      "DVT/PE risk with immobility",
      "Numbness",
    ],
    questionsToAsk: [
      "Is muscle repair planned and what are activity restrictions?",
      "What symptoms require urgent care?",
    ],
    idealCandidates:
      "Stable weight non-smokers who understand the scar and recovery commitment.",
    revisionRisk:
      "Minor revisions for healing or dog ears occur; major revision less common.",
  },
  {
    id: "p-oto",
    name: "Otoplasty",
    slug: "otoplasty",
    description:
      "Ear reshaping or setback—often performed for prominence or asymmetry.",
    recoveryTimeline: [
      "Week 1: headband, sleep positioning",
      "Weeks 2–4: swelling improves",
    ],
    risks: ["Overcorrection", "Asymmetry", "Cartilage irregularities", "Recurrence"],
    questionsToAsk: ["How is symmetry checked intraoperatively?", "When can contact sports resume?"],
    idealCandidates:
      "Healthy patients (including school-age children when appropriate) with specific anatomic goals.",
    revisionRisk: "Moderate; cartilage memory can affect long-term shape.",
  },
  {
    id: "p-chin",
    name: "Chin augmentation",
    slug: "chin-augmentation",
    description:
      "Implant or genioplasty approaches to change chin projection and balance profile.",
    recoveryTimeline: [
      "Week 1: swelling, soft diet if intraoral approach",
      "Weeks 2–4: sensation changes common early",
    ],
    risks: [
      "Implant malposition",
      "Bone resorption (technique-dependent)",
      "Numbness",
      "Infection (rare)",
    ],
    questionsToAsk: [
      "How is occlusion and dental relationship evaluated?",
      "What are tradeoffs between implant vs sliding genioplasty?",
    ],
    idealCandidates:
      "Patients seeking profile balance who accept hardware risks or bone surgery recovery.",
    revisionRisk: "Revision uncommon but possible for position or size mismatch.",
  },
  {
    id: "p-buccal",
    name: "Buccal fat removal",
    slug: "buccal-fat-removal",
    description:
      "Reduces cheek fullness in selected anatomy; over-resection concerns exist long term.",
    recoveryTimeline: [
      "Week 1: swelling, dietary softness",
      "Weeks 2–4: gradual facial appearance changes",
    ],
    risks: ["Hollowing over time", "Asymmetry", "Injury to salivary duct (rare)"],
    questionsToAsk: [
      "How do you guard against late cheek hollowing?",
      "Is my midface volume appropriate for this?",
    ],
    idealCandidates:
      "Patients with appropriate cheek anatomy—not a substitute for weight change.",
    revisionRisk: "Revision difficult; conservative planning emphasized.",
  },
  {
    id: "p-revision",
    name: "Revision surgery",
    slug: "revision-surgery",
    description:
      "Secondary procedures vary widely; complexity, scarring, and tissue quality dominate planning.",
    recoveryTimeline: ["Highly variable by index procedure and extent of revision"],
    risks: [
      "Higher complexity than primary cases",
      "Tissue scarring limits",
      "Less predictable outcomes",
    ],
    questionsToAsk: [
      "What are realistic limits given my prior operations?",
      "What imaging or records are needed from previous surgeons?",
    ],
    idealCandidates:
      "Patients with clear problems, complete records when possible, and expectations anchored to anatomy.",
    revisionRisk: "Inherent; multiple revisions increase unpredictability.",
  },
];

export function getProcedureBySlug(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}

export function getProcedureById(id: string): Procedure | undefined {
  return procedures.find((p) => p.id === id);
}
