import Link from "next/link";
import { ArrowRight, LayoutDashboard, Sparkles, Component } from "lucide-react";
import { ShowcaseNav } from "@/components/enjab/showcase-nav";
import { AppMark } from "@/components/enjab/app-mark";
import { EnjabByline } from "@/components/enjab/enjab-byline";
import { BrushGlyph } from "@/components/brush-glyph";
import { Button } from "@/components/ui/button";

const brand = [
  { name: "Teal", role: "Primary", hex: "#057C8B", cls: "bg-teal" },
  { name: "Navy", role: "Depth", hex: "#1B3766", cls: "bg-navy" },
  { name: "Teal tint", role: "Active", hex: "#E6F3F4", cls: "bg-teal-tint" },
  { name: "Canvas", role: "App bg", hex: "#F6F8F9", cls: "bg-canvas border" },
  { name: "Surface", role: "Cards", hex: "#FFFFFF", cls: "bg-card border" },
];

const status = [
  { name: "Success", hex: "#42AF48", cls: "bg-success" },
  { name: "Warning", hex: "#E0A100", cls: "bg-warning" },
  { name: "Danger", hex: "#D64545", cls: "bg-danger" },
  { name: "Info", hex: "#0099FF", cls: "bg-info" },
  { name: "Data 5", hex: "#89AAD9", cls: "bg-[#89AAD9]" },
];

function Swatch({ name, role, hex, cls }: { name: string; role?: string; hex: string; cls: string }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className={`h-20 ${cls}`} />
      <div className="p-3">
        <div className="text-sm font-bold">{name}</div>
        {role ? <div className="text-xs text-muted-foreground">{role}</div> : null}
        <div className="mt-1 font-data text-xs uppercase text-muted-foreground">{hex}</div>
      </div>
    </div>
  );
}

const cards = [
  { href: "/components", icon: Component, title: "Components", desc: "Every building block, themed and ready." },
  { href: "/dashboard", icon: LayoutDashboard, title: "Dashboard demo", desc: "The system applied to a real employee tool." },
  { href: "/landing", icon: Sparkles, title: "Landing demo", desc: "Where motion lives, Framer Motion only." },
];

export default function Home() {
  return (
    <div className="min-h-full">
      <ShowcaseNav />
      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* hero */}
        <section className="flex flex-col items-start gap-6">
          <span className="rounded-full border border-teal/20 bg-teal-tint px-3 py-1 font-data text-xs uppercase tracking-[0.12em] text-teal">
            Design system in code
          </span>
          <div className="flex items-center gap-4">
            <AppMark name="Enjab UI" glyph={<BrushGlyph />} size={52} showName={false} />
            <h1 className="text-5xl font-black tracking-tight text-navy">Enjab UI</h1>
          </div>
          <p className="max-w-2xl text-lg text-muted-foreground">
            The Enjab brand, built on shadcn/ui and tuned for employee-facing dashboards and internal tools.
            Light mode only, English LTR, teal-led, Satoshi and Fragment Mono. Pull it into any project and
            stay consistent.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<Link href="/dashboard" />}>
              See the dashboard <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/components" />}
            >
              Browse components
            </Button>
          </div>
        </section>

        {/* quick links */}
        <section className="mt-14 grid gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-2xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-teal-tint text-teal">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </section>

        {/* tokens */}
        <section className="mt-16">
          <h2 className="font-data text-xs uppercase tracking-[0.14em] text-muted-foreground">Brand</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {brand.map((s) => <Swatch key={s.name} {...s} />)}
          </div>
          <h2 className="mt-10 font-data text-xs uppercase tracking-[0.14em] text-muted-foreground">Status &amp; data</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {status.map((s) => <Swatch key={s.name} {...s} />)}
          </div>
        </section>

        {/* type */}
        <section className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-7">
            <div className="font-data text-xs uppercase tracking-[0.1em] text-muted-foreground">Inter Display · Headings</div>
            <div className="mt-3 font-heading text-3xl font-bold text-navy">Your health is our priority</div>
            <div className="mt-2 text-sm text-muted-foreground">Every page title and heading.</div>
          </div>
          <div className="rounded-2xl border bg-card p-7">
            <div className="font-data text-xs uppercase tracking-[0.1em] text-muted-foreground">Satoshi · Body</div>
            <div className="mt-3 text-2xl text-navy">Expert, compassionate family care.</div>
            <div className="mt-2 text-sm text-muted-foreground">Labels, paragraphs, and UI text.</div>
          </div>
          <div className="rounded-2xl border bg-card p-7">
            <div className="font-data text-xs uppercase tracking-[0.1em] text-muted-foreground">Fragment Mono · Data</div>
            <div className="mt-3 font-data text-xl text-navy">EJ-04821 · 09:30 · 200,400</div>
            <div className="mt-2 text-sm text-muted-foreground">Numbers, IDs, timestamps.</div>
          </div>
        </section>

        {/* For agents & developers */}
        <section className="mt-16">
          <h2 className="font-data text-xs uppercase tracking-[0.14em] text-muted-foreground">
            For agents &amp; developers
          </h2>
          <div className="mt-4 rounded-2xl border bg-card p-7">
            <h3 className="text-xl font-bold text-navy">Point an agent at this URL</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Give an agent <span className="font-data text-teal">ui.enjab.ae/llms.txt</span> and it
              themes any project to match Enjab, with no other input.
            </p>
            <div className="mt-5 overflow-x-auto rounded-xl bg-[#0e1b2a] p-4 font-data text-[12.5px] leading-relaxed text-[#cfe8ec]">
              <div className="text-[#8fb3c9]"># install the theme first, then any component</div>
              <div>npx shadcn@latest add https://ui.enjab.ae/r/theme.json</div>
              <div>npx shadcn@latest add https://ui.enjab.ae/r/button.json</div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Or register the namespace in <span className="font-data">components.json</span>:
            </p>
            <div className="mt-2 overflow-x-auto rounded-xl bg-[#0e1b2a] p-4 font-data text-[12.5px] leading-relaxed text-[#cfe8ec]">
              <div>{`"registries": { "@enjab-ui": "https://ui.enjab.ae/r/{name}.json" }`}</div>
              <div>npx shadcn@latest add @enjab-ui/button</div>
            </div>
            <p className="mt-6 font-bold text-navy">Updating an existing project</p>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Send your agent this message (full prompt and changelog at{" "}
              <a href="/changelog" className="font-semibold text-teal hover:underline">ui.enjab.ae/changelog</a>):
            </p>
            <pre className="mt-2 overflow-x-auto rounded-xl bg-[#0e1b2a] p-4 font-data text-[12.5px] leading-relaxed whitespace-pre-wrap text-[#cfe8ec]">{`Update this project to the latest Enjab UI. Read https://ui.enjab.ae/llms.txt and https://ui.enjab.ae/changelog, apply only the changelog items not yet adopted, re-install changed components with npx shadcn add @enjab-ui/<name>, and do not refactor anything else.`}</pre>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {["light mode only", "Inter Display headings", "Satoshi body", "font-data numbers", "motion landing-only"].map((t) => (
                <span key={t} className="rounded-full bg-teal-tint px-2.5 py-1 font-data text-teal">{t}</span>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t pt-8 text-sm text-muted-foreground">
          <EnjabByline className="mb-4" />
          Enjab UI · light mode only · registry{" "}
          <span className="font-data text-teal">ui.enjab.ae/r</span> · namespace{" "}
          <span className="font-data text-teal">@enjab-ui</span>
        </footer>
      </main>
    </div>
  );
}
