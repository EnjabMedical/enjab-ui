# Components

Specs for the approved Enjab component set. Built on shadcn/ui primitives, themed with [foundations.md](foundations.md) tokens. Icons: **Lucide**. Charts: **Recharts**. All values reference tokens, never raw hex or px.

General rules for every component:
- Light mode only.
- Reference tokens, never hardcode.
- States: default, hover, focus (visible teal ring), active, disabled, loading where relevant.
- In dashboards, hover changes color only, never position. (Landing pages may animate, see [motion.md](motion.md).)
- Status is never color alone, always paired with text or icon.
- **Every Enjab project ships a favicon. REQUIRED, no exceptions, ever.** Use `@enjab-ui/favicon`, or the hosted icon at https://ui.enjab.ae/icon.svg (apple touch icon at https://ui.enjab.ae/apple-icon.png). A site or tool without a favicon is not done.

## Spacing & vertical rhythm
Caught in review on 2026-06-04, encode these so agents do not repeat them:
- **Never let two sections, cards, or blocks touch.** A block placed after a grid does not inherit the grid's gap. Give standalone blocks a top margin, or wrap the page column in a `space-y` of `space.5` (20px). Default gap between blocks is 20px.
- **List and nav items need spacing within their group.** Spacing on an outer container only separates groups, not the items inside. Put `space.1` to `space.2` (4 to 6px) on the item list itself. (Bug: dashboard sidebar nav items were flush.)
- When unsure, use the 4px spacing scale from [foundations.md](foundations.md). Nothing sits edge to edge.

## Buttons
- **Variants:** `primary` (teal), `navy`, `secondary` (teal outline), `subtle` (gray fill), `danger` (red). 
- **Shape:** pill (`radius.pill`), Satoshi bold, 14px.
- **Sizes:** sm (8px/14px pad), md (10px/18px), lg (13px/24px).
- **States:** hover = darker brand tone (`teal.hover`, `navy.soft`); disabled = `line` bg, `gray.400` text; focus ring on keyboard nav.
- **Icons:** Lucide, 16px, optional leading/trailing.

## Inputs & fields
- Text input, textarea, select, combobox, date picker.
- 8px radius, 1px `line` border, white bg, 14px.
- Focus: `brand.teal` border + focus ring.
- Error: `status.danger` border + helper text. Always show a `<label>`.
- Data fields (IDs, codes, amounts) render in `font.mono`.

## Checkbox, radio, switch
- Teal when on. 44px min touch target. Switch = `brand.teal` track, white knob, 120ms micro transition.

## Status pill / badge
- Dot + label. Variants map to status tokens: success, warning, danger, info, plus neutral.
- Pill radius, 11.5px label, 600 weight. Soft tinted background + darker text.

## Tabs
- Segmented style on `canvas` background, active tab = white `surface` + `shadow.sm`, navy label.

## KPI / stat card
- `surface` card, 12px radius, `line` border.
- Label (12px gray) + value in `font.mono` navy (~27px) + delta (green up / red danger down).

## Table
- Header row: `font.mono`, 11px, uppercase, `gray.500`, bottom `line` border.
- Rows: 14px, ~44px height, `line.soft` separators, hover = `canvas`.
- IDs, times, amounts in `font.mono` navy. Status column uses status pills. Row actions are teal text buttons.
- Supports sort, selection, pagination, sticky header.

## Card / panel
- `surface`, 12px radius, `line` border, `shadow.sm`. Header = navy 15px bold, optional chip/action on the right.

## App shell
- **Sidebar:** white, `line` right border. Logo top (on light, per the logo rule). Nav items: 9px radius, gray label + Lucide icon; active = `brand.teal.tint` fill, navy bold label, teal icon, 3px teal left indicator. Section headers in mono uppercase. User block pinned bottom.
- **Topbar:** white, `line` bottom border, page title (navy) + mono date, search (pill), primary action right.
- **Top alignment (required):** the sidebar brand header and the topbar are the same height (`h-15`) and share the same bottom `line` border, so the top of the app reads as one continuous connected bar. The `<aside>` has no top padding; its first child is the fixed-height brand header, then nav and footer get their own padding below.
- **Sidebar footer (required):** every dashboard sidebar ENDS, pinned to the very bottom, with the account block (circular teal-to-navy avatar showing an initial, email, sign out) and then the "an Enjab product" byline. Use `@enjab-ui/sidebar-footer`. Sizes and weights are fixed and identical across every Enjab dashboard. Never restyle it per project. (Account wiring connects to the unified Enjab auth system later, see roadmap.)
- **Enjab byline (required on EVERY dashboard):** the "an Enjab product" byline must appear on every Enjab dashboard. With a sidebar it lives at the sidebar bottom (inside `sidebar-footer`). With no sidebar, place `@enjab-ui/enjab-byline` anywhere sensible (a footer or corner). The logo loads from the hosted URL, so it works in any repo. **Locked ratio (do not change): label `text-[11px]`, logo `h-6` (24px), `gap-2` (8px) between "an" / logo / "product".**

## Overlays
- **Modal/dialog:** centered, `surface`, 16px radius, `shadow.md`, scrim `rgba(13,13,13,.4)`. Title navy, clear primary/secondary actions.
- **Toast:** Sonner with `theme="light"` (never `system`, we are light only) and `richColors`, so the title is tinted by type (success green, warning amber, danger red, info blue) and the description stays dark and readable. Top-right, auto-dismiss.
- **Dropdown/menu:** `surface`, `line` border, `shadow.md`, 8px radius, hover `canvas`.
- **Tooltip:** navy bg, white text, small.

## Feedback & empty states
- **Empty state:** Lucide icon in a teal-tint circle, navy title, gray body, one primary action.
- **Loading:** skeletons using `line.soft`, or a teal spinner. No layout shift.
- **Error:** danger-toned, plain-language message, a way to retry.

## Charts (Recharts)
- Series colors follow `data.1..5` in order. Grid lines `line.soft`, axis labels `gray.500` in mono. Tooltips use the dropdown style. Keep them clean, no 3D, no heavy gradients.

## Avatar
- Circle, teal-to-navy gradient fallback with initials (Satoshi bold, white). Sizes 28 / 32 / 40.
