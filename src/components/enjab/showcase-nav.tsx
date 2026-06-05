"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/enjab/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Overview" },
  { href: "/components", label: "Components" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/landing", label: "Landing" },
];

export function ShowcaseNav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b bg-card/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={34} />
          <span className="font-data text-xs uppercase tracking-[0.18em] text-teal">
            UI
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
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
      </div>
    </header>
  );
}
