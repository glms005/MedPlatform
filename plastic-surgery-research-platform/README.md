# Plastic Surgery Research Platform (Georgia)

Trust-focused research platform for plastic surgery decisions — surgeons, clinics, procedures, moderated reviews, and community forum. **Mock data only** in this MVP.

## Docs

- [PRD](./docs/PRD.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Development plan](./docs/DEVELOPMENT-PLAN.md)
- [Brand](./docs/BRAND.md)

## Run locally

```bash
cd plastic-surgery-research-platform
npm install
npm run dev
```

## Quality

```bash
npm run lint
npm run build
```

## MVP routes

| Route | Description |
|-------|-------------|
| `/` | Editorial homepage |
| `/surgeons`, `/surgeons/[id]` | Surgeon directory |
| `/clinics`, `/clinics/[id]` | Clinic profiles + Google Maps |
| `/procedures`, `/procedures/[slug]` | Procedure guides |
| `/forum`, `/forum/[threadId]` | Seeded forum (tags, votes, mentions) |
| `/reviews/new` | Review submit → moderation pending |
| `/rules` | Community rules + reporting |
| `/login` | Phone OTP UI mockup |
| `/pricing` | Subscription placeholder |
| `/messages` | Messaging placeholder |

Languages: **EN**, **KA**, **RU** (nav + core UI via i18n).
