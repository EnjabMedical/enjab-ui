# Engineering stack & strategy

Locked decisions for how the Enjab design system lives in code. Decided with Mohamed on 2026-06-04.

## Stack
| Layer | Choice |
|---|---|
| Language | TypeScript (strict) |
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS (latest) |
| Component base | shadcn/ui (owned, not forked) |
| Charts | **Recharts** |
| Icons | **Lucide** |
| Animation | **Framer Motion** (landing pages only) |
| Fonts | Satoshi (Fontshare) + Fragment Mono (Google) |
| Package manager | pnpm |
| Hosting | Vercel |

Constants: light mode only, English / LTR, employee-facing tools first.

## Distribution strategy (chosen: theme + rules AND registry, both, fully)

Three layers, all of them:

1. **Token theme** — one Tailwind theme + CSS variables generated from [foundations.md](foundations.md). Drop it into any project and the whole Enjab brand applies. The cheapest 80% of consistency.

2. **Custom shadcn registry** — Enjab's themed components and dashboard blocks (sidebar, data-table, stat card, status pill, app shell, charts) published to a registry URL. Any project or agent pulls the real Enjab version with:
   ```
   npx shadcn add @enjab-ui/<component>
   ```
   This is the enforcement mechanism: consistency comes from agents running a command, not from remembering to behave. We still own every line of every component.

3. **Agent rules file** — a short, imperative file shipped into each project telling the agent: use the Enjab theme, pull components from the Enjab registry, never hardcode tokens, light mode only, English/LTR, motion only on landing via Framer Motion. Keeps vibe-coded projects inside the system.

## Why not a hard fork of shadcn
shadcn components are meant to be copied into your project and owned. A hard fork (cloning and tracking the upstream repo) is permanent maintenance debt for no gain. We get full customization through ownership + the registry, without the fork.

## Decided 2026-06-04
- **Product name: Enjab UI.** Namespace `@enjab-ui` (e.g. `@enjab-ui/button`). Registry repo: `enjab-ui`.
- **Repo structure: separate repo per tool.** Each internal tool is its own repo, built by different developers, and pulls Enjab UI from the central registry. No monorepo. This is exactly what the registry model is for.
- **Scope: the full component library and more, built properly** (not a minimal starter).

## Still to decide
- **Registry hosting** (in discussion): GitHub raw vs a branded Vercel URL like `ui.enjab.ae`, and public vs private access.
- First component blocks to ship first (within the full set).
