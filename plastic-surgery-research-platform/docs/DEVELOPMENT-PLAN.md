# Development Plan

## Phase 0 — MVP frontend (current)

**Goal:** Responsive web app with mock data, editorial landing, directory pages, moderated-review UX, seeded forum, i18n shell.

### Deliverables

- [x] Editorial homepage
- [x] Surgeons listing + profile
- [x] Procedures listing + detail
- [x] Clinics listing + profile (Google Maps links)
- [x] Forum listing + thread (tags, votes, mentions)
- [x] Review submit + moderation messaging
- [x] Community rules page
- [x] Login phone-verification mockup
- [x] Pricing / subscription placeholder
- [x] Messages placeholder (DM + group chats)
- [x] i18n: EN / KA / RU for navigation and core UI
- [x] PRD, architecture, brand docs

### Quality gates

```bash
npm run lint
npm run build
```

Manual: mobile viewport check on homepage, surgeons, forum, clinics.

---

## Phase 1 — Supabase foundation

1. Project setup + env (`NEXT_PUBLIC_SUPABASE_URL`, anon key)
2. Schema: users, surgeons, clinics, procedures, reviews, forum_threads, comments, reports
3. RLS policies: public read approved content; authenticated write
4. Phone OTP auth + anonymous display name
5. Review submission → `pending` by default
6. Admin moderation dashboard (minimal internal UI)

**Estimate:** 3–4 weeks

---

## Phase 2 — Community and messaging

1. Real forum CRUD with tags and mentions
2. Upvote/downvote persistence
3. Reporting API + moderator queue
4. Supabase Realtime: private messages + group chats
5. Media upload to Storage with moderation queue

**Estimate:** 4–6 weeks

---

## Phase 3 — Monetization and growth

1. Subscription plans (Stripe) — premium analytics, saved lists, guides
2. Sponsored listings (labeled, separate from organic scores)
3. Surgeon/clinic claim and verification workflow
4. Expanded surgeon data ingestion (public sources)

**Estimate:** 4+ weeks

---

## Phase 4 — Market intelligence (optional)

1. AI-assisted monitoring of Meta/Facebook ad patterns (competitor research)
2. Trending procedure and messaging reports for internal strategy

**Not scheduled for initial launch.**

---

## File structure (MVP)

```
src/
  app/
    page.tsx                 # Homepage
    surgeons/ procedures/ clinics/ forum/
    reviews/new/ rules/ login/ pricing/ messages/
  components/
    editorial/ surgeons/ clinics/ forum/ reviews/ layout/ ui/
  lib/
    mock-data/  i18n.ts  editorial-landing.ts
  types/
    domain.ts
docs/
  PRD.md  ARCHITECTURE.md  DEVELOPMENT-PLAN.md  BRAND.md
```

---

## Risk register

| Risk | Mitigation |
|------|------------|
| Defamation / fake reviews | Moderation before publish; reporting |
| Medical misinformation | Disclaimers; no treatment recommendations |
| Paid influence confusion | Separate sponsored UI, never blend scores |
| Empty community | Seeded fictional forum until real users |
| GDPR / local privacy | Anonymous mode; minimal PII in MVP |
