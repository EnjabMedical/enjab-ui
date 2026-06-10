import { cn } from "@/lib/utils";
import { EnjabByline } from "@/components/enjab/enjab-byline";

/** Derive a display name from an email, e.g. layla.ahmed@example.com -> "Layla Ahmed". */
function nameFromEmail(email: string): string {
  const local = email.split("@")[0] ?? email;
  return (
    local
      .split(/[._-]+/)
      .filter(Boolean)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ") || email
  );
}

/**
 * Required footer for EVERY Enjab dashboard sidebar. Pin it to the very bottom.
 *
 * FIXED, identical across every Enjab tool, do not restyle or relabel:
 *   1. Account block: avatar (initial), display name, email, "Sign out".
 *   2. The "an Enjab product" byline.
 *
 * Always renders two lines. If no `name` is given (e.g. the auth system stores
 * only the email), a display name is derived from the email so it looks the same
 * everywhere. Pass `name` to override.
 */
export function SidebarFooter({
  email,
  name,
  initial,
  onSignOut,
  className,
}: {
  email: string;
  name?: string;
  initial?: string;
  onSignOut?: () => void;
  className?: string;
}) {
  const display = name && name.trim() ? name : nameFromEmail(email);
  const mark = (initial ?? display.charAt(0)).toUpperCase();
  return (
    <div className={cn("mt-auto border-t border-line-soft", className)}>
      {/* Account */}
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy text-xs font-bold text-white">
          {mark}
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate text-[13px] font-semibold text-foreground">{display}</div>
          <div className="truncate text-[11px] text-muted-foreground">{email}</div>
        </div>
        <button
          type="button"
          onClick={onSignOut}
          className="shrink-0 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-danger"
        >
          Sign out
        </button>
      </div>

      {/* "an Enjab product" byline */}
      <EnjabByline className="border-t border-line-soft py-2.5" />
    </div>
  );
}
