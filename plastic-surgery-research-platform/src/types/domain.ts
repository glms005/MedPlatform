/** Domain models — aligned with docs/PRD.md and docs/ARCHITECTURE.md */

export type LocaleCode = "en" | "ka" | "ru";

export type UserRole = "member" | "moderator" | "admin" | "clinic_rep";

export type User = {
  id: string;
  displayName: string;
  anonymousName: string | null;
  phoneVerified: boolean;
  language: LocaleCode;
  role: UserRole;
  createdAt: string;
};

export type Surgeon = {
  id: string;
  name: string;
  specialty: string;
  city: string;
  clinicId: string;
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

export type Clinic = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  website: string | null;
  googleMapsUrl: string;
  description: string;
  surgeonIds: string[];
  procedures: string[];
};

export type Procedure = {
  id: string;
  name: string;
  slug: string;
  category?: string;
  description: string;
  recoveryTimeline: string[];
  risks: string[];
  questionsToAsk: string[];
  idealCandidates: string;
  revisionRisk: string;
  realisticExpectations?: string;
};

export const PROCEDURE_CATEGORY_DEFAULT = "general";
export const PROCEDURE_EXPECTATIONS_DEFAULT =
  "Individual results vary with anatomy, healing, and surgeon technique. No specific outcome should be expected.";

export type ReviewStatus = "pending" | "approved" | "rejected" | "flagged";

export type Review = {
  id: string;
  surgeonId: string;
  clinicId: string | null;
  userId: string | null;
  procedureId: string;
  rating: number;
  satisfactionScore: number;
  communicationScore: number;
  aftercareScore: number;
  clinicCleanlinessScore: number;
  hadComplications: boolean;
  complicationDetails: string | null;
  wouldRecommend: boolean;
  recoveryNotes: string;
  reviewText: string;
  comment: string;
  authorDisplay: string;
  status: ReviewStatus;
  createdAt: string;
  surgeryYear: number;
};

export type ForumPostType =
  | "question"
  | "experience"
  | "warning"
  | "recommendation";

export type ForumMedia = {
  type: "image" | "video" | "link";
  url: string;
  label?: string;
};

export type ForumThread = {
  id: string;
  title: string;
  authorId: string;
  author: string;
  procedureId: string | null;
  clinicId: string | null;
  surgeonId: string | null;
  tags: string[];
  postType: ForumPostType;
  category: string;
  content: string;
  media: ForumMedia[];
  upvotes: number;
  downvotes: number;
  commentsCount: number;
  createdAt: string;
};

/** @deprecated Use ForumThread */
export type DiscussionThread = ForumThread;

export type ForumComment = {
  id: string;
  threadId: string;
  authorId: string;
  author: string;
  content: string;
  upvotes: number;
  downvotes: number;
  createdAt: string;
};

/** @deprecated Use ForumComment */
export type ThreadReply = Omit<ForumComment, "authorId" | "upvotes" | "downvotes">;

export type ConversationType = "direct" | "group";

export type Conversation = {
  id: string;
  type: ConversationType;
  participantIds: string[];
  title: string | null;
  createdAt: string;
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  media: ForumMedia[];
  createdAt: string;
};

export type ReportTargetType =
  | "review"
  | "forum_post"
  | "comment"
  | "user"
  | "message";

export type ReportStatus = "open" | "reviewing" | "resolved" | "dismissed";

export type Report = {
  id: string;
  reporterId: string;
  targetType: ReportTargetType;
  targetId: string;
  reason: string;
  status: ReportStatus;
  createdAt: string;
};

export type SubscriptionPlan = {
  id: string;
  name: string;
  priceMonthly: number;
  currency: string;
  features: string[];
};
