# Enjab UI

The Enjab design system in code. A themed shadcn/ui library for Enjab's employee-facing dashboards and internal tools. Light mode only, English LTR, teal-led, Satoshi + Fragment Mono.

Built from the written specs in [`docs/`](docs/).

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (Base UI / "base-nova" style)
- Recharts (charts), Lucide (icons), Framer Motion / `motion` (landing-only animation)

## Run
```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve the production build
```

## What's here
- `src/app/globals.css` — the Enjab theme (tokens mapped to shadcn variables). Single source of truth in code.
- `src/components/ui/` — themed shadcn primitives (button is pill + has a `navy` variant).
- `src/components/enjab/` — Enjab pieces: `Logo`, `StatusPill`, `StatCard`, `Reveal` (motion), `ShowcaseNav`.
- Showcase routes:
  - `/` overview + tokens
  - `/components` the full component gallery
  - `/dashboard` a real employee dashboard (calm, no motion)
  - `/landing` a marketing page (Framer Motion: hover, reveals, count-up)

## Rules baked in
- Light mode only. No dark theme.
- Logo on light backgrounds only (no reversed logo exists).
- Numbers, IDs, and times render in Fragment Mono (`font-data`).
- Animation lives on landing pages only, via Framer Motion. Dashboards stay still.

## Next (pending Enjab accounts)
Publish as a private shadcn registry (`@enjab-ui/...`) on Enjab's own Vercel + GitHub, so separate tool repos can pull components. Not wired yet, waiting on the Enjab credentials.
