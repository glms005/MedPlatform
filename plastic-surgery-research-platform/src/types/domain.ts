/** Domain models aligned with PRD §10 */

export type Surgeon = {
  id: string;
  name: string;
  specialty: string;
  city: string;
  clinic: string;
  experienceYears: number;
  procedures: string[];
  consultationPrice?: number | null;
  instagram?: string | null;
  website?: string | null;
  verified: boolean;
  education: string[];
  certifications: string[];
  bio: string;
  beforeAfterAvailable: boolean;
  reviewSummary: string;
  redFlags: string[];
  sourceLinks: { label: string; url: string }[];
  image?: string | null;
  patientRating: number;
};

export type Procedure = {
  id: string;
  name: string;
  slug: string;
  description: string;
  recoveryTimeline: string[];
  risks: string[];
  questionsToAsk: string[];
  idealCandidates: string;
  revisionRisk: string;
};

export type Review = {
  id: string;
  surgeonId: string;
  procedureId: string;
  surgeryYear: number;
  satisfactionScore: number;
  communicationScore: number;
  aftercareScore: number;
  clinicCleanlinessScore: number;
  hadComplications: boolean;
  complicationDetails: string | null;
  wouldRecommend: boolean;
  recoveryNotes: string;
  comment: string;
  authorDisplay: string;
};

export type DiscussionThread = {
  id: string;
  title: string;
  category: string;
  procedureId: string | null;
  surgeonId: string | null;
  author: string;
  content: string;
  createdAt: string;
  replyCount: number;
};

export type ThreadReply = {
  id: string;
  threadId: string;
  author: string;
  content: string;
  createdAt: string;
};
