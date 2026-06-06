"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  return (
    <header className="sticky top-0 z-40 border-b bg-card/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <AppMark name="Enjab UI" glyph={<BrushGlyph />} size={30} />
        </Link>
        <nav className="-mr-1 flex items-center gap-0.5 overflow-x-auto pr-1 sm:gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "shrink-0 rounded-full px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors sm:px-3.5",
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
      </div>
    </header>
  );
}
