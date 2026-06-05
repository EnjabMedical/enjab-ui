# Enjab UI Changelog

Updates to the Enjab UI design system. Agents: apply ONLY what each entry lists, then stop. Do not refactor or restyle anything else.

To bring a project up to date, send an agent: `https://ui.enjab.ae/llms.txt` plus the update prompt at https://ui.enjab.ae/changelog.

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
