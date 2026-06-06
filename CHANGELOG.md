# Enjab UI Changelog

Updates to the Enjab UI design system. Agents: apply ONLY what each entry lists, then stop. Do not refactor or restyle anything else.

To bring a project up to date, send an agent: `https://ui.enjab.ae/llms.txt` plus the update prompt at https://ui.enjab.ae/changelog.

## 2026.06.06c, Ready dashboard chrome (sidebar, shell, header, table)
- Changed: new components so every Enjab tool's chrome is identical: `@enjab-ui/sidebar`, `@enjab-ui/dashboard-shell`, `@enjab-ui/page-header`, `@enjab-ui/data-table`. `logo` now loads from the hosted URL (portable); `sidebar-footer` shows the email as the primary line when there is no name.
- Action: build dashboards from these, never hand-roll the sidebar/topbar/table. `npx shadcn add @enjab-ui/sidebar @enjab-ui/dashboard-shell @enjab-ui/page-header @enjab-ui/data-table`, and re-install `@enjab-ui/logo` + `@enjab-ui/sidebar-footer` for the fixes.

## 2026.06.06b, Instant navigation with skeletons
- Changed: new rule. Screens open instantly with a Skeleton (Next.js loading.tsx) while data loads, never a blank or frozen page.
- Action: add a `loading.tsx` to every data-fetching route, rendering a skeleton that mirrors the page layout (animate-pulse on bg-muted, no layout shift).

## 2026.06.06, Favicon needs a raster (.ico) for Safari
- Changed: the favicon rule now requires a raster, not just the SVG. Safari ignores SVG-only favicons and shows a blank tab.
- Action: alongside `app/icon.svg`, add `app/favicon.ico` (from https://ui.enjab.ae/favicon.ico) and `app/apple-icon.png` (from https://ui.enjab.ae/apple-icon.png).

## 2026.06.05d, Favicon required
- Changed: new `@enjab-ui/favicon`. Every Enjab project must ship a favicon, no exceptions.
- Action: add it, `npx shadcn add @enjab-ui/favicon` (or save https://ui.enjab.ae/icon.svg as `app/icon.svg`).

## 2026.06.05c, Bigger Enjab byline logo
- Changed: the "an Enjab product" byline logo is larger for legibility.
- Action: re-install `npx shadcn add @enjab-ui/enjab-byline` and `npx shadcn add @enjab-ui/sidebar-footer` (overwrite).

## 2026.06.05b, Required sidebar footer + Enjab byline
- Changed: new `@enjab-ui/sidebar-footer` (account block: avatar, email, sign out, plus the byline) and `@enjab-ui/enjab-byline` (standalone).
- Action: every dashboard must show the "an Enjab product" byline. Sidebar dashboards put `sidebar-footer` at the very bottom of the sidebar. Dashboards without a sidebar place `enjab-byline` anywhere.

## 2026.06.05a, Typography: Inter Display headings
- Changed: headings use Inter Display, body uses Satoshi, data uses Fragment Mono (matches enjab.ae). Earlier builds wrongly used Satoshi for headings.
- Action: headings must use the heading font (`font-heading` or any `<h1>`-`<h6>`), never Satoshi. Re-apply tokens: `npx shadcn add https://ui.enjab.ae/r/theme.json`.

## 2026.06.04, Enjab UI registry published
- Changed: initial registry, theme, button, status-pill, stat-card, logo, reveal.
- Action: set up per https://ui.enjab.ae/llms.txt.
