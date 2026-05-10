import type { DiscussionThread, ThreadReply } from "@/types/domain";

export const discussionThreads: DiscussionThread[] = [
  {
    id: "t1",
    title: "Rhinoplasty recovery: what swelling timeline felt realistic for you?",
    category: "recovery",
    procedureId: "p-rhino",
    surgeonId: null,
    author: "HealingNotebook",
    content:
      "Trying to collect week-by-week patterns—not medical advice. What matched your diary versus clinic handouts?",
    createdAt: "2025-04-12T10:00:00Z",
    replyCount: 14,
  },
  {
    id: "t2",
    title: "Best questions to ask before signing consent (any procedure)",
    category: "education",
    procedureId: null,
    surgeonId: null,
    author: "ConsentReader",
    content:
      "What helped you understand risks without feeling rushed? Sharing prompts only.",
    createdAt: "2025-04-10T15:30:00Z",
    replyCount: 22,
  },
  {
    id: "t3",
    title: "Revision rhinoplasty emotional readiness — not a medical thread",
    category: "support",
    procedureId: "p-revision",
    surgeonId: null,
    author: "SecondRoundThinker",
    content:
      "How did you know you were ready mentally for another operation? Sharing coping strategies only.",
    createdAt: "2025-04-08T09:20:00Z",
    replyCount: 9,
  },
  {
    id: "t4",
    title: "Liposuction: contour irregularities vs normal swelling — documentation tips",
    category: "recovery",
    procedureId: "p-lipo",
    surgeonId: null,
    author: "SoftTapeMeasure",
    content:
      "Photos at consistent lighting helped me track changes. What worked for you? (Not diagnostic.)",
    createdAt: "2025-04-05T18:45:00Z",
    replyCount: 11,
  },
  {
    id: "t5",
    title: "Breast augmentation imaging follow-up — manufacturer-neutral chat",
    category: "education",
    procedureId: "p-ba",
    surgeonId: null,
    author: "ImplantJournal",
    content:
      "Discussion of follow-up culture only—not brand endorsements. What schedule did your team describe?",
    createdAt: "2025-04-03T12:10:00Z",
    replyCount: 7,
  },
  {
    id: "t6",
    title: "Batumi vs Tbilisi consult experiences (logistics, not rankings)",
    category: "general",
    procedureId: null,
    surgeonId: null,
    author: "SeaOrMountains",
    content:
      "Comparing travel and follow-up access—not rating surgeons. Anecdotes only.",
    createdAt: "2025-04-01T08:00:00Z",
    replyCount: 16,
  },
  {
    id: "t7",
    title: "Abdominoplasty: when did you feel safe returning to desk work?",
    category: "recovery",
    procedureId: "p-abdo",
    surgeonId: null,
    author: "DeskJobRecovery",
    content:
      "Office workers especially—timeline anecdotes. Always follow your clinician.",
    createdAt: "2025-03-28T11:15:00Z",
    replyCount: 13,
  },
  {
    id: "t8",
    title: "How do you document red-flag concerns without defamation?",
    category: "trust",
    procedureId: null,
    surgeonId: null,
    author: "NeutralNotes",
    content:
      "Seeking template ideas: factual timeline + outcomes as you understood them. Not legal advice.",
    createdAt: "2025-03-25T16:40:00Z",
    replyCount: 19,
  },
  {
    id: "t9",
    title: "Gynecomastia: endocrine work-up discussion (education only)",
    category: "education",
    procedureId: "p-gyne",
    surgeonId: null,
    author: "WorkupFirst",
    content:
      "What reversible causes did your clinician screen for before surgery planning?",
    createdAt: "2025-03-22T09:50:00Z",
    replyCount: 6,
  },
  {
    id: "t10",
    title: "Otoplasty headband phase — comfort hacks",
    category: "recovery",
    procedureId: "p-oto",
    surgeonId: null,
    author: "HeadbandDiaries",
    content:
      "Non-medical comfort tips only (pillows, clothing). Follow surgeon protocol.",
    createdAt: "2025-03-18T14:20:00Z",
    replyCount: 8,
  },
];

export const threadReplies: ThreadReply[] = [
  {
    id: "tr1",
    threadId: "t1",
    author: "Week3Swelling",
    content:
      "Week 3 still looked puffy to me; week 8 matched brochure curve better. Everyone varies.",
    createdAt: "2025-04-12T11:00:00Z",
  },
  {
    id: "tr2",
    threadId: "t1",
    author: "MorningPuff",
    content:
      "Mornings worse than evenings for a month. Logged side profile at same time daily.",
    createdAt: "2025-04-12T14:30:00Z",
  },
  {
    id: "tr3",
    threadId: "t2",
    author: "AskForWritten",
    content:
      "I asked for complication ranges in writing; surgeon gave a handout + time to read alone.",
    createdAt: "2025-04-10T16:00:00Z",
  },
  {
    id: "tr4",
    threadId: "t3",
    author: "OneDeepBreath",
    content:
      "Therapy plus second consult elsewhere helped—not medical advice, just what I did.",
    createdAt: "2025-04-08T12:00:00Z",
  },
];

export function getThreadById(id: string): DiscussionThread | undefined {
  return discussionThreads.find((t) => t.id === id);
}

export function getRepliesForThread(threadId: string): ThreadReply[] {
  return threadReplies.filter((r) => r.threadId === threadId);
}
