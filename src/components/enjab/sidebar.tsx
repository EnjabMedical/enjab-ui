"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { Logo } from "@/components/enjab/logo";
import { SidebarFooter } from "@/components/enjab/sidebar-footer";
import { cn } from "@/lib/utils";

export type SidebarNavItem = { href: string; label: string; icon: LucideIcon };
export type SidebarNavGroup = { label?: string; items: SidebarNavItem[] };

/**
 * The Enjab dashboard sidebar: brand header (aligned to the topbar), grouped nav
 * with active state, and the required account footer + "an Enjab product" byline.
 * Built to plug into Enjab Auth: pass the signed-in user's email + a sign-out
 * handler. Do not re-implement, every Enjab tool uses this.
 */
export function Sidebar({
  groups,
  user,
  onSignOut,
  badge,
  homeHref = "/",
  activeHref,
  className,
}: {
  groups: SidebarNavGroup[];
  user: { email: string; name?: string; initial?: string };
  onSignOut?: () => void;
  badge?: string;
  homeHref?: string;
  /** Force the active item (e.g. in a static demo). Defaults to the current path. */
  activeHref?: string;
  className?: string;
}) {
  const pathname = usePathname();
  const current = activeHref ?? pathname;
  const isActive = (href: string) =>
    href !== "#" && (current === href || current.startsWith(href + "/"));

  return (
    <aside className={cn("flex w-60 shrink-0 flex-col border-r bg-sidebar", className)}>
      <Link
        href={homeHref}
        className="flex h-15 shrink-0 items-center justify-between border-b px-4"
      >
        <Logo size={30} />
        {badge ? (
          <span className="font-data text-[10px] uppercase tracking-[0.12em] text-teal">
            {badge}
          </span>
        ) : null}
      </Link>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-3">
        {groups.map((group, gi) => (
          <div key={group.label ?? gi}>
            {group.label ? (
              <div className="px-2.5 pt-4 pb-2 font-data text-[10px] uppercase tracking-[0.12em] text-muted-foreground/70">
                {group.label}
              </div>
            ) : null}
            <div className="space-y-1.5">
              {group.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-sidebar-accent font-bold text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-muted"
                    )}
                  >
                    {active ? (
                      <span className="absolute top-1.5 bottom-1.5 -left-3 w-[3px] rounded-r bg-teal" />
                    ) : null}
                    <item.icon
                      className={cn(
                        "size-[18px]",
                        active ? "text-teal" : "text-muted-foreground/70"
                      )}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <SidebarFooter
        email={user.email}
        name={user.name}
        initial={user.initial}
        onSignOut={onSignOut}
      />
    </aside>
  );
}
