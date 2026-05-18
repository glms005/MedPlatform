import type { ForumComment, ForumThread } from "@/types/domain";

/** Fictional forum seed data — no real patients or sensitive stories. */
export const forumThreads: ForumThread[] = [
  {
    id: "t1",
    title: "Rhinoplasty recovery: what swelling timeline felt realistic for you?",
    authorId: "u2",
    author: "HealingNotebook",
    category: "recovery",
    postType: "question",
    procedureId: "p-rhino",
    clinicId: null,
    surgeonId: null,
    tags: ["recovery", "rhinoplasty", "swelling"],
    content:
      "Trying to collect week-by-week patterns—not medical advice. What matched your diary versus clinic handouts?",
    media: [],
    upvotes: 42,
    downvotes: 3,
    commentsCount: 14,
    createdAt: "2025-04-12T10:00:00Z",
  },
  {
    id: "t2",
    title: "Best questions to ask before signing consent (any procedure)",
    authorId: "u1",
    author: "ConsentReader",
    category: "education",
    postType: "recommendation",
    procedureId: null,
    clinicId: null,
    surgeonId: null,
    tags: ["consent", "education", "questions"],
    content:
      "What helped you understand risks without feeling rushed? Sharing prompts only.",
    media: [{ type: "link", url: "https://example.org/consent-checklist", label: "Sample checklist (fictional)" }],
    upvotes: 89,
    downvotes: 1,
    commentsCount: 22,
    createdAt: "2025-04-10T15:30:00Z",
  },
  {
    id: "t3",
    title: "Revision rhinoplasty emotional readiness — not a medical thread",
    authorId: "u2",
    author: "SecondRoundThinker",
    category: "support",
    postType: "experience",
    procedureId: "p-revision",
    clinicId: null,
    surgeonId: "s11",
    tags: ["revision", "mental-health", "support"],
    content:
      "How did you know you were ready mentally for another operation? Sharing coping strategies only.",
    media: [],
    upvotes: 31,
    downvotes: 0,
    commentsCount: 9,
    createdAt: "2025-04-08T09:20:00Z",
  },
  {
    id: "t4",
    title: "Liposuction: contour irregularities vs normal swelling — documentation tips",
    authorId: "u3",
    author: "SoftTapeMeasure",
    category: "recovery",
    postType: "experience",
    procedureId: "p-lipo",
    clinicId: "c-blacksea",
    surgeonId: "s4",
    tags: ["liposuction", "recovery", "photos"],
    content:
      "Photos at consistent lighting helped me track changes. What worked for you? (Not diagnostic.)",
    media: [{ type: "image", url: "#", label: "Lighting setup diagram (placeholder)" }],
    upvotes: 27,
    downvotes: 4,
    commentsCount: 11,
    createdAt: "2025-04-05T18:45:00Z",
  },
  {
    id: "t5",
    title: "Breast augmentation imaging follow-up — manufacturer-neutral chat",
    authorId: "u1",
    author: "ImplantJournal",
    category: "education",
    postType: "question",
    procedureId: "p-ba",
    clinicId: "c-riverbank",
    surgeonId: "s3",
    tags: ["breast", "imaging", "follow-up"],
    content:
      "Discussion of follow-up culture only—not brand endorsements. What schedule did your team describe?",
    media: [],
    upvotes: 18,
    downvotes: 2,
    commentsCount: 7,
    createdAt: "2025-04-03T12:10:00Z",
  },
  {
    id: "t6",
    title: "Batumi vs Tbilisi consult experiences (logistics, not rankings)",
    authorId: "u3",
    author: "SeaOrMountains",
    category: "general",
    postType: "question",
    procedureId: null,
    clinicId: "c-blacksea",
    surgeonId: null,
    tags: ["batumi", "tbilisi", "travel", "logistics"],
    content:
      "Comparing travel and follow-up access—not rating surgeons. Anecdotes only.",
    media: [],
    upvotes: 55,
    downvotes: 6,
    commentsCount: 16,
    createdAt: "2025-04-01T08:00:00Z",
  },
  {
    id: "t7",
    title: "Abdominoplasty: when did you feel safe returning to desk work?",
    authorId: "u2",
    author: "DeskJobRecovery",
    category: "recovery",
    postType: "question",
    procedureId: "p-abdo",
    clinicId: null,
    surgeonId: null,
    tags: ["abdominoplasty", "recovery", "work"],
    content:
      "Office workers especially—timeline anecdotes. Always follow your clinician.",
    media: [],
    upvotes: 33,
    downvotes: 1,
    commentsCount: 13,
    createdAt: "2025-03-28T11:15:00Z",
  },
  {
    id: "t8",
    title: "How do you document concerns without defamation?",
    authorId: "u1",
    author: "NeutralNotes",
    category: "trust",
    postType: "warning",
    procedureId: null,
    clinicId: null,
    surgeonId: null,
    tags: ["transparency", "reviews", "community-rules"],
    content:
      "Seeking template ideas: factual timeline + outcomes as you understood them. Not legal advice.",
    media: [],
    upvotes: 72,
    downvotes: 2,
    commentsCount: 19,
    createdAt: "2025-03-25T16:40:00Z",
  },
  {
    id: "t9",
    title: "Consult at Akhaldaba — what to expect from first visit? (fictional clinic)",
    authorId: "u3",
    author: "FirstConsultKA",
    category: "education",
    postType: "question",
    procedureId: "p-rhino",
    clinicId: "c-akhaldaba",
    surgeonId: "s1",
    tags: ["consult", "tbilisi", "clinic-visit"],
    content:
      "Sharing logistics only: parking, interpreter, how long imaging took. Not endorsing any provider.",
    media: [],
    upvotes: 21,
    downvotes: 0,
    commentsCount: 8,
    createdAt: "2025-03-20T10:00:00Z",
  },
  {
    id: "t10",
    title: "Warning: beware of guaranteed results ads on social media",
    authorId: "u-mod",
    author: "TrustMod",
    category: "trust",
    postType: "warning",
    procedureId: null,
    clinicId: null,
    surgeonId: null,
    tags: ["misinformation", "advertising", "red-flags"],
    content:
      "Community reminder: no ethical surgeon guarantees a specific aesthetic outcome. Report suspicious ads when backend launches.",
    media: [{ type: "link", url: "https://example.org/ads-policy", label: "Platform ad policy (draft)" }],
    upvotes: 104,
    downvotes: 8,
    commentsCount: 12,
    createdAt: "2025-03-18T14:20:00Z",
  },
];

export const forumComments: ForumComment[] = [
  {
    id: "fc1",
    threadId: "t1",
    authorId: "u3",
    author: "Week3Swelling",
    content:
      "Week 3 still looked puffy to me; week 8 matched brochure curve better. Everyone varies.",
    upvotes: 12,
    downvotes: 0,
    createdAt: "2025-04-12T11:00:00Z",
  },
  {
    id: "fc2",
    threadId: "t1",
    authorId: "u1",
    author: "MorningPuff",
    content:
      "Mornings worse than evenings for a month. Logged side profile at same time daily.",
    upvotes: 8,
    downvotes: 1,
    createdAt: "2025-04-12T14:30:00Z",
  },
  {
    id: "fc3",
    threadId: "t2",
    authorId: "u2",
    author: "AskForWritten",
    content:
      "I asked for complication ranges in writing; surgeon gave a handout + time to read alone.",
    upvotes: 24,
    downvotes: 0,
    createdAt: "2025-04-10T16:00:00Z",
  },
  {
    id: "fc4",
    threadId: "t3",
    authorId: "u1",
    author: "OneDeepBreath",
    content:
      "Therapy plus second consult elsewhere helped—not medical advice, just what I did.",
    upvotes: 15,
    downvotes: 0,
    createdAt: "2025-04-08T12:00:00Z",
  },
  {
    id: "fc5",
    threadId: "t6",
    authorId: "u2",
    author: "RailLink",
    content:
      "Tbilisi follow-up was easier for me; Batumi consult was fine but plan travel buffer for checks.",
    upvotes: 19,
    downvotes: 2,
    createdAt: "2025-04-01T12:00:00Z",
  },
];

export function getForumThreadById(id: string): ForumThread | undefined {
  return forumThreads.find((t) => t.id === id);
}

export function getCommentsForThread(threadId: string): ForumComment[] {
  return forumComments.filter((c) => c.threadId === threadId);
}

export function getThreadScore(thread: ForumThread): number {
  return thread.upvotes - thread.downvotes;
}

export function sortThreadsByTop(threads: ForumThread[]): ForumThread[] {
  return [...threads].sort(
    (a, b) => getThreadScore(b) - getThreadScore(a) || b.commentsCount - a.commentsCount,
  );
}

export function sortThreadsByRecent(threads: ForumThread[]): ForumThread[] {
  return [...threads].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}
