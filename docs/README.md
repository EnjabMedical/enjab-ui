# Enjab Design System

The single source of truth for how Enjab's software looks and behaves. Focus: **employee-facing tools** (dashboards, internal tools, automation consoles), built consistently across many projects, much of it agent-assisted.

## Locked decisions (2026-06-04)

| Area | Decision |
|---|---|
| Brand anchor | Matches the live enjab.ae identity, extensible |
| Primary color | Teal `#057C8B`, navy `#1B3766` for depth |
| Type | Satoshi (UI) + Fragment Mono (all data) |
| Theme | Light mode only |
| Logo | On light backgrounds only (no reversed logo exists) |
| Language | English, LTR (no Arabic / RTL in these tools) |
| Motion | Landing pages only, via Framer Motion. Dashboards stay still. |
| Stack | Next.js + Tailwind + shadcn/ui (owned) |
| Charts / Icons | Recharts / Lucide |
| Distribution | Token theme + custom shadcn registry + agent rules file (all three) |

## Files

| File | What it is |
|---|---|
| [brand-kit.md](brand-kit.md) | Verified raw brand data extracted from enjab.ae |
| [foundations.md](foundations.md) | Canonical tokens: color, type, spacing, radius, elevation, motion |
| [dashboard-guidelines.md](dashboard-guidelines.md) | The dashboard design language and rules |
| [components.md](components.md) | Specs for the approved component set |
| [motion.md](motion.md) | Animation rules and Framer Motion tokens (landing only) |
| [stack.md](stack.md) | Engineering stack and distribution strategy |
| [brand-assets/](brand-assets/) | Logo and icon files |

## How to use it (devs and agents building an Enjab tool)

1. Apply the Enjab Tailwind theme (from `foundations.md` tokens). Never hardcode hex or px.
2. Pull components from the Enjab registry (`npx shadcn add @enjab-ui/...`) instead of building from scratch. See `stack.md`.
3. Follow `dashboard-guidelines.md`: light mode, English/LTR, teal leads, mono for data, calm, dense.
4. No fancy animation in dashboards. Landing pages may animate, with Framer Motion only, per `motion.md`.

## Status
Specs complete. Next: build the code (theme, registry, starter), pending the setup conversation in `stack.md` (registry hosting, repo structure).

## Working note
Design decisions are reviewed in a temporary HTML file opened in the browser, approved, then persisted here. Keep that loop.
