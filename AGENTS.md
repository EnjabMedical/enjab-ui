<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Enjab UI conventions (read before editing pages)

See the full written spec in `docs/`. Quick rules below, including spacing mistakes already caught in review.

## Spacing & vertical rhythm (fixed 2026-06-04, do not repeat)

1. **Stacked sections/blocks must have space between them.** A standalone block placed after a grid or another block does NOT inherit the grid's `gap`, it sits flush. Always give it a top margin (or wrap the whole page column in a `space-y-*` container).
   - Bug we hit: on `/components`, the `Table` block sat directly under the components grid with no gap. Fix: the page's blocks/sections need `mt-5` (or a shared `space-y-5` wrapper). Match the 20px rhythm used by the grid `gap-5`.
   - Rule: never let two cards/sections touch. Default gap between blocks is `space.5` (20px).

2. **List and nav items need spacing between them, within each group.** Putting `space-y-*` only on the outer container separates the groups, not the items inside a group. Add spacing on the items wrapper too.
   - Bug we hit: the dashboard sidebar nav items (Dashboard, Appointments, Patients, Lab Results) were flush because `space-y` was only on the outer `<nav>`. Fix: wrap each group's items in a `space-y-1.5` div.
   - Rule: nav/menu/list items get `space-y-1` to `space-y-1.5` between them.

General: when in doubt about spacing, use the 4px scale (`space-1`..`space-10` in foundations.md). Never let interactive or content elements touch edge to edge.

## App shell alignment (fixed 2026-06-04, do not repeat)

3. **The sidebar header (brand area) must align with the topbar.** Same height (`h-15`) and same bottom border (`border-b`, the default `--border`, not `border-line-soft`), with no extra top padding on the `<aside>`. This makes the top of the app read as one continuous connected bar across sidebar + topbar instead of two misaligned boxes.
   - Bug we hit: the sidebar brand block had its own padding and a lighter border at a different height than the topbar, so the top looked disconnected.
   - Pattern: `<aside>` has no top padding; first child is `<div className="flex h-15 shrink-0 items-center justify-between border-b px-4">` (the brand header); the nav and footer get their own padding below it. The topbar is also `h-15 border-b`, so the bottom borders meet in one line.

## Base UI gotchas (fixed 2026-06-04, do not repeat)
- **`<Button>` rendering a `<Link>` or `<a>` needs `nativeButton={false}`.** Base UI buttons default to `nativeButton: true` and warn in the console when `render` is a non-`<button>` element. For navigation buttons: `<Button nativeButton={false} render={<Link href="..." />}>Label</Button>`. (Triggers that render a real `<Button>`, like DialogTrigger, are fine as-is.)

## Other house rules
- Light mode only. Never add a dark theme or `dark:` variants.
- Logo (`<Logo/>`) only on light backgrounds.
- Typography is a THREE-font system (matches enjab.ae): headings/titles use Inter Display (any `<h1>`-`<h6>`, or the `font-heading` class on div titles); body and UI text use Satoshi (the default body font); data uses the `font-data` class (Fragment Mono). Never put a heading in Satoshi.
- Numbers, IDs, times: use the `font-data` class (Fragment Mono).
- Every dashboard shows the "an Enjab product" byline. If it has a sidebar, end the sidebar with `@enjab-ui/sidebar-footer` (account block + byline) pinned to the very bottom. If it has no sidebar, place `@enjab-ui/enjab-byline` anywhere sensible. Never restyle these, fixed sizes keep all dashboards identical.
- ALWAYS ship a favicon, including the RASTER (Safari ignores SVG-only favicons, the tab goes blank). On any Enjab project ship all three: `app/icon.svg` (`@enjab-ui/favicon`) + `app/favicon.ico` (https://ui.enjab.ae/favicon.ico) + `app/apple-icon.png` (https://ui.enjab.ae/apple-icon.png). SVG-only is not done.
- Navigation must be INSTANT. Every data-fetching route ships a `loading.tsx` skeleton (Next.js) that mirrors the page and shows immediately while data loads. Never a blank or frozen screen. Skeletons = `animate-pulse` on `bg-muted`, sized to match the real content (no layout shift).
- Animation only on landing pages, via `motion` (Framer Motion). Dashboards stay still.
- Reference theme tokens (`bg-teal`, `text-navy`, `bg-success`, etc.), never hardcode hex.
