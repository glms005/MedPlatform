# Product Requirements Document — Georgia Plastic Surgery Research Platform

## Vision

A trust-focused research platform helping people in Georgia evaluate plastic surgeons, clinics, procedures, patient experiences, and community discussion before surgery decisions. The product prioritizes transparency, moderation, and medically responsible information—not cosmetic advertising.

## Target market

- Georgia (Tbilisi, Batumi, regional cities)
- Georgian, English, and Russian speakers
- First-time and revision surgery researchers
- International patients considering surgery in Georgia

## User personas

| Persona | Goals |
|--------|--------|
| First-time rhinoplasty researcher | Compare surgeons, understand risks, read recovery stories |
| Multi-surgeon comparator | Side-by-side credentials, reviews, red flags |
| Complication-anxious user | Honest recovery timelines, complication mentions |
| Recovery-story seeker | Peer experiences, forum tags, media timelines |
| Revision candidate | Revision specialists, second-opinion framing |
| International patient | English/Russian content, clinic logistics, maps |
| Clinic representative | Claim profile (future), respond to reviews (future) |
| Plastic surgeon | Verified profile, educational presence (future) |

## Core requirements

### 1. Private messaging and group chats (future)

- Direct messages between users
- Group chats for procedure, recovery, clinic, or surgeon topics
- **MVP:** UI placeholders only; Supabase Realtime planned for Phase 2

### 2. Multilingual website

- Languages: **Georgian**, **English**, **Russian**
- i18n-ready architecture for all nav, buttons, labels, and section headings
- Content may remain mock/English in MVP; structure must support full translation

### 3. User rules and reporting

- Published community rules covering respect, harassment, defamation, fake reviews, medical misinformation, others’ private data, unauthorized ads, hate speech, spam, impersonation
- Report targets: reviews, forum posts, comments, users, messages (UI mock in MVP)

### 4. Review moderation

- Reviews **never** publish immediately
- Statuses: `pending` | `approved` | `rejected` | `flagged`
- Public surfaces show **approved** reviews only
- Submission flow explains moderation delay

### 5. Phone sign-in (future)

- Phone number → OTP code → verify
- **MVP:** Login UI mockup only; Supabase Auth phone OTP in Phase 2

### 6. Anonymous registration

- Display nickname / anonymous identity option
- Moderation and safety controls still apply to anonymous accounts

### 7. Forums with tags and mentions

- Posts support tags, procedure category, clinic mention, surgeon mention
- Post types: question, experience, warning, recommendation
- Recovery-topic tagging

### 8. Upvote / downvote

- Threads and comments: upvote, downvote, score, sort by popularity

### 9. Clinic profiles

- Name, city, address, website, phone, Google Maps URL, map link/embed placeholder
- Associated surgeons and procedures

### 10. Media and links

- Photos, videos, external links, before/after and recovery timeline images
- Moderation and privacy controls planned; MVP uses mock media metadata only

### 11. Seeded forum (MVP)

- Fictional threads, comments, tags—no real patient names or sensitive real stories

### 12. Surgeon directory

- Structured mock directory; future: public sources, clinic claims, verification
- Fields per spec (name, specialty, clinic, city, procedures, experience, education, certifications, verification, image, links, review summary)

### 13. Subscription access (future)

- Premium: analytics, comparisons, recovery DB, complication insights, saved lists, private community, expert guides
- **MVP:** Pricing placeholder page; no payments

### 14. Paid advertising (future)

- Sponsored surgeon/clinic cards and content—**clearly labeled**
- Never mixed with organic trust scores

### 15. AI Facebook ad monitoring (future)

- Market intelligence on competitor messaging, trending procedures, misleading claims
- Not in MVP

### 16. Brand identity

- See [BRAND.md](./BRAND.md): trustworthy, calm, modern, premium, medically responsible

## MVP scope (frontend)

### Pages

| Page | Route |
|------|--------|
| Homepage | `/` |
| Surgeons listing | `/surgeons` |
| Surgeon profile | `/surgeons/[id]` |
| Clinics listing | `/clinics` |
| Clinic profile | `/clinics/[id]` |
| Procedures listing | `/procedures` |
| Procedure detail | `/procedures/[slug]` |
| Submit review | `/reviews/new` |
| Forum listing | `/forum` |
| Forum thread | `/forum/[threadId]` |
| Community rules | `/rules` |
| Login (phone mock) | `/login` |
| Pricing placeholder | `/pricing` |
| Messages placeholder | `/messages` |

### Out of scope for MVP

- Real backend, auth, OTP, payments, messaging, file uploads, ad serving, AI ad monitoring

### Medical disclaimer

> This platform is for informational purposes only and does not provide medical advice, diagnosis, or treatment recommendations.

## Success metrics (post-launch)

- Review submission rate with high moderation approval quality
- Forum engagement (threads, votes, reports resolved)
- Surgeon/clinic profile views and outbound map clicks
- Language distribution (ka / en / ru)
