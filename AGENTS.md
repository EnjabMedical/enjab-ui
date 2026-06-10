<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
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
- ALWAYS ship the favicon via `@enjab-ui/favicon`: it adds `app/icon.tsx` + `app/apple-icon.tsx`, code-generated PNG icons (the Enjab gradient square + a glyph) that render in Safari, so no separate `.ico` is needed. Brand a tool by editing the `GLYPH` constant (a different letter, or an icon's inline SVG, Lucide React components don't render in the generator).
- The favicon and any in-app icon/brand mark MUST be the SAME image. The favicon glyph is canonical: render the identical mark (same gradient square + same glyph) wherever the app shows its own square icon/logo. Mirror the glyph SVG into one small component so the tab icon and the on-screen mark can't drift. Default is `E`. Delete any old static `app/icon.svg` so it doesn't clash.
- Navigation must be INSTANT. Every data-fetching route ships a `loading.tsx` skeleton (Next.js) that mirrors the page and shows immediately while data loads. Never a blank or frozen screen. Skeletons = `animate-pulse` on `bg-muted`, sized to match the real content (no layout shift).
- Animation only on landing pages, via `motion` (Framer Motion). Dashboards stay still.
- Responsive: landing/marketing pages are fully responsive (mobile-first, look right at 360px). Dashboards are desktop-optimized but must stay phone-usable, never desktop-only/broken. The shared chrome handles the shell (`@enjab-ui/sidebar` → hamburger drawer below `lg`, `dashboard-shell` stacks, `data-table` scrolls). For content: stack grids to one column on small screens (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`), use `p-4 sm:p-6`, no fixed widths that overflow a phone. Don't build a separate mobile design.
- A button whose action takes time (network/server action/async submit) MUST disable + show a spinner while it runs, never stay clickable and silent. Use the `loading` prop: `<Button loading={busy}>Save</Button>`. For a `<form action={serverAction}>`, drive it with `const { pending } = useFormStatus()` in a small client submit button: `<Button loading={pending}>`.
- Feedback has three components, never hand-roll a colored notice box. `@enjab-ui/alert` (tones: `success` `info` `warning` `danger`) for a PERSISTENT message tied to the current view (form/validation errors, a warning before a destructive action, a success/info notice that should stay). A toast (`sonner`) for TRANSIENT "it worked / it failed" right after an action. `@enjab-ui/status-pill` for the status of a single row/item. Alert always keeps its icon + a worded title (status is never color alone).
- Reference theme tokens (`bg-teal`, `text-navy`, `bg-success`, etc.), never hardcode hex.
