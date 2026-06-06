"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, type LucideIcon } from "lucide-react";
import { AppMark } from "@/components/enjab/app-mark";
import { SidebarFooter } from "@/components/enjab/sidebar-footer";
import { cn } from "@/lib/utils";

export type SidebarNavItem = { href: string; label: string; icon: LucideIcon };
export type SidebarNavGroup = { label?: string; items: SidebarNavItem[] };

/**
 * The Enjab dashboard sidebar. RESPONSIVE: a fixed rail on desktop (lg+), and on
 * phones/tablets a top bar with a hamburger that opens the same nav as a drawer.
 * The brand header shows the TOOL's own mark + name (pass `appName` + `appIcon`, the
 * same glyph as your favicon); the Enjab logo lives only in the byline at the bottom.
 *
 * Plugs straight into Enjab Auth: the `user` prop takes the `getUser()` result.
 *
 *   <Sidebar appName="Riverside Clinic" appIcon={<MyGlyph />}
 *            user={user} onSignOut={signOut} groups={groups} />
 *
 * Do not re-implement, every Enjab tool uses this.
 */
export function Sidebar({
  groups,
  user,
  appName,
  appIcon,
  onSignOut,
  badge,
  homeHref = "/",
  activeHref,
  className,
}: {
  groups: SidebarNavGroup[];
  user: { email: string; name?: string; initial?: string };
  /** Your tool's name, shown at the top of the sidebar. */
  appName: string;
  /** Your tool's glyph (same as the favicon). Defaults to the first letter of appName. */
  appIcon?: ReactNode;
  onSignOut?: () => void;
  badge?: string;
  homeHref?: string;
  /** Force the active item (e.g. in a static demo). Defaults to the current path. */
  activeHref?: string;
  className?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = activeHref ?? pathname;
  const isActive = (href: string) =>
    href !== "#" && (current === href || current.startsWith(href + "/"));

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  const nav = (
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
                  onClick={close}
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
                    className={cn("size-[18px]", active ? "text-teal" : "text-muted-foreground/70")}
                  />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );

  const footer = (
    <SidebarFooter
      email={user.email}
      name={user.name}
      initial={user.initial}
      onSignOut={onSignOut}
    />
  );

  return (
    <>
      {/* Desktop: fixed rail */}
      <aside className={cn("hidden w-60 shrink-0 flex-col border-r bg-sidebar lg:flex", className)}>
        <Link
          href={homeHref}
          className="flex h-15 shrink-0 items-center justify-between gap-2 border-b px-4"
        >
          <AppMark name={appName} glyph={appIcon} size={26} />
          {badge ? (
            <span className="shrink-0 font-data text-[10px] uppercase tracking-[0.12em] text-teal">
              {badge}
            </span>
          ) : null}
        </Link>
        {nav}
        {footer}
      </aside>

      {/* Mobile: top bar with hamburger */}
      <div className="flex h-15 shrink-0 items-center justify-between gap-2 border-b bg-sidebar px-4 lg:hidden">
        <AppMark name={appName} glyph={appIcon} size={26} href={homeHref} />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Mobile: drawer */}
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
          />
          <aside className="absolute top-0 left-0 flex h-full w-72 max-w-[82%] flex-col border-r bg-sidebar shadow-xl">
            <div className="flex h-15 shrink-0 items-center justify-between gap-2 border-b px-4">
              <AppMark name={appName} glyph={appIcon} size={26} />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>
            {nav}
            {footer}
          </aside>
        </div>
      ) : null}
    </>
  );
}
