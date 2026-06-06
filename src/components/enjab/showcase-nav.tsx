"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AppMark } from "@/components/enjab/app-mark";
import { BrushGlyph } from "@/components/brush-glyph";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Overview" },
  { href: "/components", label: "Components" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/landing", label: "Landing" },
  { href: "/changelog", label: "Changelog" },
];

export function ShowcaseNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b bg-card/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center">
          <AppMark name="Enjab UI" glyph={<BrushGlyph />} size={30} />
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "bg-teal-tint text-navy"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open ? (
        <nav className="space-y-1 border-t bg-card px-3 py-2 md:hidden">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                  active
                    ? "bg-teal-tint text-navy"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
