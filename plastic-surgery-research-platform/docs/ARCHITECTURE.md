# Product Architecture

## System overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js App (MVP)                        │
│  App Router · RSC + Client Components · Tailwind · Motion   │
├─────────────────────────────────────────────────────────────┤
│  Presentation    │  i18n (en/ka/ru)  │  Mock data layer   │
├─────────────────────────────────────────────────────────────┤
│              TypeScript domain models (src/types)           │
└─────────────────────────────────────────────────────────────┘
                              │
                    Phase 2 ▼
┌─────────────────────────────────────────────────────────────┐
│  Supabase: Auth (phone OTP) · Postgres · Storage · Realtime │
└─────────────────────────────────────────────────────────────┘
```

## Frontend layers

| Layer | Location | Responsibility |
|-------|----------|----------------|
| Routes | `src/app/**` | Pages, layouts, metadata |
| Components | `src/components/**` | UI by feature (editorial, surgeons, forum, …) |
| Domain | `src/types/domain.ts` | Shared types |
| Mock data | `src/lib/mock-data/**` | Fictional seed data |
| i18n | `src/lib/i18n.ts` | Locales + dictionaries |
| Design tokens | `tailwind.config.ts`, `globals.css` | Brand system |

## Domain entities

- **User** — identity, anonymous display, phone verified flag, language, role
- **Surgeon** — directory profile linked to **Clinic**
- **Clinic** — location, contacts, maps, surgeon/procedure associations
- **Procedure** — educational content, risks, recovery, questions
- **Review** — structured scores, moderation status, surgeon/clinic/procedure links
- **ForumThread** — tags, mentions, votes, post type, media metadata
- **Comment** — thread replies with votes
- **Conversation / Message** — DM and group chat (planned)
- **Report** — moderation pipeline (planned)
- **SubscriptionPlan** — future monetization (placeholder)

## Review moderation flow (planned)

```
Submit → pending → moderator review → approved | rejected | flagged
Public UI ← only approved
```

## Forum flow (MVP)

```
Seeded threads → list (sort: recent | top) → thread detail → comments + votes (UI)
Report button → mock modal (no API)
```

## i18n architecture

- Locales: `en`, `ka`, `ru`
- `LocaleProvider` + `dictionary[locale]` for UI strings
- `document.documentElement.lang` updated on switch
- Future: split dictionaries by namespace (`nav`, `forum`, `rules`, …) and optional CMS

## Future backend (Supabase)

| Feature | Service |
|---------|---------|
| Phone auth | Supabase Auth OTP |
| Reviews, forum, clinics | PostgreSQL + RLS |
| Media | Supabase Storage + virus scan / moderation queue |
| Messaging | Realtime channels + `conversations` tables |
| Subscriptions | Stripe + `subscription_plans` (Phase 3) |

## Advertising architecture (future)

- `sponsored: true` flag on cards
- Separate ad slot components—never alter organic `ratingSummary` or review aggregates
- Label: “Sponsored” on all paid placements

## Security and privacy

- No real PHI in mock data
- Anonymous posting with account-level moderation keys (future)
- Reports stored with reporter id (future RLS)

## Deployment

- Vercel, root directory: `plastic-surgery-research-platform`
- Framework: Next.js
- Environment variables reserved for Supabase keys in Phase 2
