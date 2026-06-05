# Enjab Dashboard Design Language

Approved by Mohamed on 2026-06-04. Source brand data: [brand-kit.md](brand-kit.md).

**Scope:** employee-facing software (dashboards, internal tools, automation consoles). Not patient-facing. Optimize for density, speed, clarity, and a small error surface.

## Ground rules

- **Light mode only.** No dark mode. The calm light identity is the brand, and there is no reversed logo to support a dark shell.
- **Logo on light backgrounds only.** Hard rule. No reversed/white logo exists, so the logo never sits on navy, teal, or any dark surface.
- **English, left to right.** No Arabic / RTL in these tools (per "English first always"). RTL can return later if internal tools ever need it.
- **Teal leads, navy grounds.** Teal = primary actions and brand. Navy = depth, headings, data emphasis. Neutrals carry the workspace.
- **Numbers are mono.** Fragment Mono for all metrics, IDs, times, and table figures so columns align and data reads precisely.
- **Borders first, soft shadow.** Structure with 1px borders on a light canvas. Shadows stay subtle. No heavy drop shadows or glow.
- **Calm motion.** In dashboards, interactions shift color, not position. No fancy animation, lifting, scaling, or bouncing. (Full motion policy below.)
- **Compact density on a 4px grid.** 14px base text, ~44px table rows. Efficient, not cramped.
- **Every dashboard shows the "an Enjab product" byline.** Sidebar dashboards end the sidebar with the account block + byline (`@enjab-ui/sidebar-footer`, pinned to the very bottom). No-sidebar dashboards place `@enjab-ui/enjab-byline` anywhere sensible. Fixed sizes, identical across all dashboards, never restyled. (Account ties into the unified Enjab auth system later.)
- **Always ship a favicon. No exceptions, ever.** Use `@enjab-ui/favicon` or the hosted https://ui.enjab.ae/icon.svg. Every Enjab project, dashboard, and tool has a favicon.
- **Instant navigation with skeletons.** Screens open instantly. Every data-fetching route shows a Skeleton immediately (Next.js `loading.tsx`) that mirrors the final layout, never a blank or frozen page while data loads. Skeletons are `animate-pulse` on `bg-muted`, sized to match the real content so there is no layout shift when it arrives.

## Color roles

### Brand
| Role | Hex |
|---|---|
| Primary (actions, active nav, brand) | `#057C8B` |
| Navy (headings, depth, data) | `#1B3766` |
| Teal tint (active states, soft fills) | `#E6F3F4` |
| Canvas (app background) | `#F6F8F9` |
| Surface (cards, panels) | `#FFFFFF` |

### Status & data (added for dashboards)
| Role | Hex | Notes |
|---|---|---|
| Success | `#42AF48` | Brand green. Confirmed, healthy, done. |
| Warning | `#E0A100` | Pending, attention. |
| Danger | `#D64545` | Error, cancelled, destructive. |
| Info | `#0099FF` | The brand's bright blue, given a job: info states, links, chart series. |
| Data series | `#057C8B` · `#1B3766` · `#0099FF` · `#42AF48` · `#89AAD9` | Chart categories. |

Rule: status color is always paired with text or an icon, never color alone.

## Type
- **Inter** (Display optical size) for headings and titles. Matches enjab.ae.
- **Satoshi** (Fontshare) for body, labels, and general UI text.
- **Fragment Mono** (Google) for data: numbers, IDs, timestamps, table figures, code. Not for body.
- Base 14px. Scale tuned for dense UI.

## Surface & shape
- Cards / panels: 12px radius, 1px border (`#E9ECEF`), subtle shadow.
- Inputs: 8px radius, teal focus ring (`0 0 0 3px rgba(5,124,139,.15)`).
- Buttons & pills: full radius (pill), Satoshi bold.
- Sidebar: white, teal active state (teal tint fill + 3px teal left indicator, navy bold label).

## Components (approved set)
Buttons (primary teal, navy, secondary outline, subtle, danger; hover = color shift only), status pills (dot + label), inputs (teal focus, mono for data fields), tabs, toggle, KPI cards (mono values + green/red delta), data tables (mono IDs/times, row hover, status pills, row actions), charts (the data series palette).

## Motion policy
- **Fancy and hover animations are for landing / marketing pages ONLY.**
- **Dashboards and all employee-facing tools get no fancy animation.** Maximize usability, minimize error surface. Allowed feedback is limited to instant color/state changes (hover color shift, focus ring, active state).
- **All animation is implemented with Framer Motion.** No ad-hoc CSS keyframe libraries.
- Landing-page motion tokens and patterns live in [motion.md](motion.md).
