# The Narrative Company - Project Instructions

## Design System

When building any UI, components, or pages for this project, use shadcn/ui as the default component library. Always invoke `/shadcn` before building UI components to pull the latest docs and patterns. ALWAYS read `docs/brand/brand.html` first and style all components according to The Narrative Company brand guidelines exactly. This includes colors, typography, spacing, components, and voice & tone.

## Cloudflare Access

When working on the dashboard, client deliverables, or adding a new client, read `docs/cloudflare.md` first. It has the full auth flow, protected paths, access policy, and a step-by-step checklist for onboarding new clients.

## Project Layout

- `app/` - Next.js App Router routes.
- `components/` - shared React components (e.g. `@/components/Logo`). Route-specific components can stay inside `app/<route>/`.
- `agents/engagement/` - engagement agent product code (TS).
- `data/` - local reference data (10k list etc.). Gitignored.
- `docs/` - brand guidelines, Cloudflare setup, and other reference docs.
- `.claude/skills/` - Claude skills (e.g. shadcn).
