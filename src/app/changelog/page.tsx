import { ShowcaseNav } from "@/components/enjab/showcase-nav";

const UPDATE_PROMPT = `Update this project to the latest Enjab UI design system.

1. Read https://ui.enjab.ae/llms.txt (current rules + components) and https://ui.enjab.ae/changelog (what changed).
2. Apply ONLY the changelog items this project has not adopted yet. Do not refactor, restyle, or touch anything else.
3. Re-install changed components: npx shadcn add @enjab-ui/<name> (overwrite when asked).
4. If the theme/tokens changed, re-apply: npx shadcn add https://ui.enjab.ae/r/theme.json
5. Keep following the Enjab rules in llms.txt (light mode only, Inter Display headings, Satoshi body, Fragment Mono data, motion landing-only, the required "an Enjab product" byline on dashboards).

Keep the change surface minimal. Only do what the changelog requires.`;

type Entry = {
  version: string;
  date: string;
  title: string;
  changed: string[];
  action: string[];
};

const entries: Entry[] = [
  {
    version: "2026.06.06g",
    date: "6 Jun 2026",
    title: "Buttons show a loading state",
    changed: [
      "Button gained a `loading` prop: it disables itself and shows a spinner while an async action runs. New rule: any button whose action takes time must use it (or useFormStatus for server-action forms), never stay clickable and silent.",
    ],
    action: [
      "Re-install: npx shadcn add @enjab-ui/button. Use <Button loading={busy}>…</Button> for slow actions.",
    ],
  },
  {
    version: "2026.06.06f",
    date: "6 Jun 2026",
    title: "Alert component (success / info / warning / danger)",
    changed: [
      "New @enjab-ui/alert: one consistent in-page message box in four tones. Icon + title carry the meaning, so status is never color alone. Replaces hand-rolled colored notice boxes.",
    ],
    action: [
      "Install: npx shadcn add @enjab-ui/alert. Use it for persistent, view-tied messages (form errors, warnings, success/info notices). Keep using a toast for transient feedback and status-pill for per-row status.",
    ],
  },
  {
    version: "2026.06.06e",
    date: "6 Jun 2026",
    title: "Tables are strict now (no more ugly tables)",
    changed: [
      "data-table is fully self-styled: comfortable rows, mono uppercase headers, soft line separators, and a canvas hover, all enforced inside the component. It no longer inherits the cramped shadcn table defaults, so every Enjab tool's tables look identical to the demo dashboard.",
      "The base table primitive is Enjab-styled too (same padding, header, borders, hover), so even a raw table can't drift.",
    ],
    action: ["Re-install: npx shadcn add @enjab-ui/data-table. Build all tables from it (never hand-roll a table)."],
  },
  {
    version: "2026.06.06d",
    date: "6 Jun 2026",
    title: "Account block is now identical everywhere",
    changed: [
      "sidebar-footer always renders the same two lines (display name + email + Sign out); derives the name from the email when none is given, so it can't drift between tools.",
    ],
    action: ["Re-install: npx shadcn add @enjab-ui/sidebar-footer @enjab-ui/sidebar."],
  },
  {
    version: "2026.06.06c",
    date: "6 Jun 2026",
    title: "Ready dashboard chrome (sidebar, shell, header, table)",
    changed: [
      "New @enjab-ui/sidebar, dashboard-shell, page-header, data-table so every tool's chrome is identical. logo now loads from the hosted URL; sidebar-footer handles email-only accounts.",
    ],
    action: [
      "Build dashboards from these (don't hand-roll the sidebar/topbar/table): npx shadcn add @enjab-ui/sidebar @enjab-ui/dashboard-shell @enjab-ui/page-header @enjab-ui/data-table. Re-install logo + sidebar-footer for the fixes.",
    ],
  },
  {
    version: "2026.06.06b",
    date: "6 Jun 2026",
    title: "Instant navigation with skeletons",
    changed: ["Screens open instantly with a Skeleton while data loads, never a blank or frozen page."],
    action: [
      "Add a loading.tsx to every data-fetching route, with a skeleton that mirrors the layout (animate-pulse on bg-muted, no layout shift).",
    ],
  },
  {
    version: "2026.06.06",
    date: "6 Jun 2026",
    title: "Favicon needs a raster (.ico) for Safari",
    changed: ["The favicon rule now requires a raster, not just SVG. Safari ignores SVG-only favicons (blank tab)."],
    action: [
      "Add app/favicon.ico (https://ui.enjab.ae/favicon.ico) and app/apple-icon.png (https://ui.enjab.ae/apple-icon.png) next to app/icon.svg.",
    ],
  },
  {
    version: "2026.06.05d",
    date: "5 Jun 2026",
    title: "Favicon required",
    changed: ["New @enjab-ui/favicon. Every Enjab project must ship a favicon, no exceptions."],
    action: [
      "Add it: npx shadcn add @enjab-ui/favicon (or save https://ui.enjab.ae/icon.svg as app/icon.svg).",
    ],
  },
  {
    version: "2026.06.05c",
    date: "5 Jun 2026",
    title: "Bigger Enjab byline logo",
    changed: ['The "an Enjab product" byline logo is larger for legibility.'],
    action: [
      "Re-install: npx shadcn add @enjab-ui/enjab-byline (and @enjab-ui/sidebar-footer).",
    ],
  },
  {
    version: "2026.06.05b",
    date: "5 Jun 2026",
    title: "Required sidebar footer + Enjab byline",
    changed: [
      "New @enjab-ui/sidebar-footer: account block (avatar, email, sign out) plus the byline.",
      "New @enjab-ui/enjab-byline: standalone byline for dashboards with no sidebar.",
    ],
    action: [
      "Every dashboard must show the byline. Sidebar: put sidebar-footer at the very bottom. No sidebar: place enjab-byline anywhere.",
    ],
  },
  {
    version: "2026.06.05a",
    date: "5 Jun 2026",
    title: "Typography: Inter Display headings",
    changed: [
      "Headings use Inter Display, body Satoshi, data Fragment Mono (matches enjab.ae). Earlier builds wrongly used Satoshi for headings.",
    ],
    action: [
      "Headings must use the heading font (font-heading or any h1-h6), never Satoshi. Re-apply: npx shadcn add https://ui.enjab.ae/r/theme.json",
    ],
  },
  {
    version: "2026.06.04",
    date: "4 Jun 2026",
    title: "Enjab UI registry published",
    changed: ["Initial registry: theme, button, status-pill, stat-card, logo, reveal."],
    action: ["Set up per https://ui.enjab.ae/llms.txt."],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-full">
      <ShowcaseNav />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-black tracking-tight text-navy">Changelog</h1>
        <p className="mt-2 text-muted-foreground">
          Updates to Enjab UI. To bring a project up to date, send an agent{" "}
          <span className="font-data text-teal">ui.enjab.ae/llms.txt</span> with the prompt below. It
          applies only what changed, nothing else.
        </p>

        {/* Update prompt */}
        <section className="mt-8">
          <h2 className="font-data text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Update prompt, send to any agent
          </h2>
          <pre className="mt-3 overflow-x-auto rounded-2xl bg-[#0e1b2a] p-5 font-data text-[12.5px] leading-relaxed whitespace-pre-wrap text-[#cfe8ec]">
{UPDATE_PROMPT}
          </pre>
        </section>

        {/* Entries */}
        <section className="mt-12 space-y-4">
          <h2 className="font-data text-xs uppercase tracking-[0.14em] text-muted-foreground">
            History
          </h2>
          {entries.map((e) => (
            <article key={e.version} className="rounded-2xl border bg-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-teal-tint px-2.5 py-1 font-data text-[11px] text-teal">
                  {e.version}
                </span>
                <span className="font-data text-xs text-muted-foreground">{e.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-navy">{e.title}</h3>
              <div className="mt-3 text-sm">
                <div className="font-semibold text-foreground">Changed</div>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                  {e.changed.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 rounded-xl bg-teal-tint/60 p-3 text-sm">
                <div className="font-semibold text-teal">Action for your project</div>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-navy">
                  {e.action.map((a, i) => (
                    <li key={i} className="font-data text-[12.5px]">{a}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
