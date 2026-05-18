export const communityRules = [
  {
    id: "respect",
    title: "Respectful communication",
    body: "Debate ideas, not people. No harassment, threats, or targeted abuse.",
  },
  {
    id: "defamation",
    title: "No defamation",
    body: "Share your experience as you understood it. Avoid unverified accusations or naming individuals with harmful claims.",
  },
  {
    id: "reviews",
    title: "No fake reviews",
    body: "One account per person. No paid or coordinated review manipulation.",
  },
  {
    id: "medical",
    title: "No medical misinformation",
    body: "Do not present forum posts as diagnosis or treatment advice. Always consult licensed clinicians.",
  },
  {
    id: "privacy",
    title: "Protect others' privacy",
    body: "Do not share another person's medical records, photos, or identifying health information without consent.",
  },
  {
    id: "ads",
    title: "No unauthorized advertising",
    body: "Clinics and surgeons may not promote services without clear disclosure and platform approval (future).",
  },
  {
    id: "hate",
    title: "No hate speech",
    body: "Content attacking protected groups is prohibited.",
  },
  {
    id: "spam",
    title: "No spam",
    body: "No repetitive promotional posts, scams, or off-topic funnels.",
  },
  {
    id: "impersonation",
    title: "No impersonation",
    body: "Do not pretend to be a doctor, clinic staff, or another user.",
  },
] as const;

export const reportReasons = [
  "Harassment or abuse",
  "Suspected fake review",
  "Medical misinformation",
  "Defamation or privacy violation",
  "Spam or advertising",
  "Impersonation",
  "Other",
] as const;
