/** Homepage-only seed content for product previews (fictional). */

export const platformStats = {
  surgeons: 24,
  reviews: 186,
  forumThreads: 412,
  clinics: 18,
  activeToday: 47,
  pendingModeration: 6,
} as const;

export const heroTrustIndicators = [
  { label: "Verified surgeons", href: "/surgeons" },
  { label: "Structured reviews", href: "/#reviews" },
  { label: "Recovery discussions", href: "/#recovery" },
  { label: "Community insights", href: "/#discussions" },
] as const;

export type ActivityEvent = {
  id: string;
  label: string;
  time: string;
  tone: "forum" | "review" | "surgeon" | "moderation";
};

export const liveActivity: ActivityEvent[] = [
  { id: "a1", label: "HealingNotebook replied on rhinoplasty swelling thread", time: "2m ago", tone: "forum" },
  { id: "a2", label: "New structured review submitted (pending moderation)", time: "8m ago", tone: "review" },
  { id: "a3", label: "ConsentReader upvoted a pre-surgery questions thread", time: "14m ago", tone: "forum" },
  { id: "a4", label: "Facial surgery profile viewed 23 times today", time: "21m ago", tone: "surgeon" },
  { id: "a5", label: "TrustMod pinned warning on guaranteed-results ads", time: "34m ago", tone: "moderation" },
  { id: "a6", label: "SeaOrMountains started travel logistics thread", time: "41m ago", tone: "forum" },
  { id: "a7", label: "ResearchPatient_47 marked a review as helpful", time: "52m ago", tone: "review" },
  { id: "a8", label: "3 recovery timeline entries updated this hour", time: "1h ago", tone: "forum" },
];

export type FeaturedDiscussion = {
  id: string;
  title: string;
  procedure: string;
  tags: string[];
  upvotes: number;
  commentsCount: number;
  author: string;
  excerpt: string;
  href: string;
};

export const recentDiscussions: FeaturedDiscussion[] = [
  {
    id: "d1",
    title: "6 months after rhinoplasty — swelling update",
    procedure: "Rhinoplasty",
    tags: ["recovery", "swelling", "6-months"],
    upvotes: 56,
    commentsCount: 18,
    author: "HealingNotebook",
    excerpt:
      "Tip still slightly swollen in mornings. Sharing photos at consistent lighting—not medical advice.",
    href: "/forum/t1",
  },
  {
    id: "d2",
    title: "What questions should I ask before blepharoplasty?",
    procedure: "Blepharoplasty",
    tags: ["consent", "questions", "eyes"],
    upvotes: 74,
    commentsCount: 22,
    author: "ConsentReader",
    excerpt:
      "Compiling a checklist for first consult: risks, dry eye history, revision policy. What helped you?",
    href: "/forum/t2",
  },
  {
    id: "d3",
    title: "Has anyone experienced revision surgery?",
    procedure: "Revision surgery",
    tags: ["revision", "support", "expectations"],
    upvotes: 41,
    commentsCount: 15,
    author: "SecondRoundThinker",
    excerpt:
      "Emotional readiness thread only—how did you know you were ready for another operation?",
    href: "/forum/t3",
  },
  {
    id: "d4",
    title: "How long did liposuction recovery take?",
    procedure: "Liposuction",
    tags: ["recovery", "timeline", "activity"],
    upvotes: 33,
    commentsCount: 11,
    author: "SoftTapeMeasure",
    excerpt:
      "Desk job, light walking timeline. Documented contour changes weekly with same lighting setup.",
    href: "/forum/t4",
  },
];

export type RecoveryStage = {
  id: string;
  label: string;
  title: string;
  patientNote: string;
  metrics: {
    swelling: string;
    bruising: string;
    pain: string;
    breathing: string;
    confidence: string;
    satisfaction: string;
  };
};

export const recoveryJourneyStages: RecoveryStage[] = [
  {
    id: "day1",
    label: "Day 1",
    title: "Immediate post-operative period",
    patientNote:
      "Splint in place, congestion, minimal mirror checking. Resting elevated; caregiver helped with meals.",
    metrics: {
      swelling: "High",
      bruising: "Moderate",
      pain: "Managed with prescribed plan",
      breathing: "Congested / mouth breathing",
      confidence: "Low — expected",
      satisfaction: "Too early to assess",
    },
  },
  {
    id: "week1",
    label: "Week 1",
    title: "Early healing & peak swelling",
    patientNote:
      "Mornings puffier than evenings. Logged side profile daily at same time and lighting.",
    metrics: {
      swelling: "High",
      bruising: "Fading",
      pain: "Improving",
      breathing: "Gradually easier",
      confidence: "Cautious",
      satisfaction: "Waiting on contour",
    },
  },
  {
    id: "month1",
    label: "Month 1",
    title: "Return to routine with limits",
    patientNote:
      "Could work remotely; avoided gym and contact sports. Still subtle tip width—not a diagnosis.",
    metrics: {
      swelling: "Moderate",
      bruising: "Minimal",
      pain: "Mild discomfort",
      breathing: "Mostly normal",
      confidence: "Growing",
      satisfaction: "Cautiously positive",
    },
  },
  {
    id: "month6",
    label: "Month 6",
    title: "Contour refinement visible",
    patientNote:
      "Profile closer to surgical plan discussed at consult. Minor morning puffiness remained.",
    metrics: {
      swelling: "Low",
      bruising: "None",
      pain: "None routine",
      breathing: "Stable",
      confidence: "Improved",
      satisfaction: "Generally satisfied",
    },
  },
  {
    id: "year1",
    label: "1 Year",
    title: "Long-term perspective",
    patientNote:
      "Subtle changes still noted month-to-month in forum—patience emphasized. Annual follow-up scheduled.",
    metrics: {
      swelling: "Minimal",
      bruising: "None",
      pain: "None",
      breathing: "Stable",
      confidence: "Stable",
      satisfaction: "Reflective & informed",
    },
  },
];

export const redFlags = [
  {
    title: "Heavily filtered photos",
    body: "Consistent lighting and angles matter. Extreme smoothing may hide swelling patterns relevant to recovery.",
  },
  {
    title: "No long-term recovery updates",
    body: "Short-term glam shots alone rarely show how healing evolves at 6–12 months.",
  },
  {
    title: "Vague complication answers",
    body: "Ethical clinicians discuss complication ranges in plain language and allow time to read materials.",
  },
  {
    title: "Unrealistic outcome guarantees",
    body: "No responsible surgeon guarantees a specific aesthetic result. Be wary of “perfect nose” marketing.",
  },
  {
    title: "No clear qualifications",
    body: "Verify training, board status, and hospital privileges independently—not only via social media.",
  },
  {
    title: "No patient follow-up information",
    body: "Ask how after-hours concerns, revisions, and emergency pathways are handled before you commit.",
  },
] as const;

export const whyTrustUs = [
  {
    title: "Structured reviews",
    body: "Scores for communication, aftercare, and clinic environment—not just star ratings.",
    href: "/#reviews",
  },
  {
    title: "Review moderation",
    body: "Submissions are reviewed before publication. Flagged content is hidden pending investigation.",
    href: "/rules",
  },
  {
    title: "Transparent clinic information",
    body: "Locations, procedures, maps links, and associated surgeons in one comparable view.",
    href: "/clinics",
  },
  {
    title: "Recovery-based discussions",
    body: "Threads organized by procedure and recovery phase—with clear “not medical advice” framing.",
    href: "/#recovery",
  },
  {
    title: "Educational procedure guides",
    body: "Risks, timelines, and questions to ask—written for research, not conversion.",
    href: "/procedures",
  },
  {
    title: "Community reporting tools",
    body: "Report harassment, misinformation, or suspicious ads. Rules visible before you post.",
    href: "/rules",
  },
] as const;

export const onboardingSteps = [
  {
    step: "01",
    title: "Research with structure",
    body: "Compare surgeons, clinics, and procedures with moderation-aware reviews—not influencer hype.",
    href: "/surgeons",
    cta: "Browse directory",
  },
  {
    step: "02",
    title: "Learn from the community",
    body: "Read recovery threads, ask consent questions, and vote on helpful posts. Rules enforced.",
    href: "/forum",
    cta: "Open community",
  },
  {
    step: "03",
    title: "Contribute responsibly",
    body: "Share your experience or flag concerns. Reviews pass moderation before going public.",
    href: "/reviews/new",
    cta: "Write a review",
  },
] as const;
