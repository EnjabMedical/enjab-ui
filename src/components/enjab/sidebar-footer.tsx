import { cn } from "@/lib/utils";
import { EnjabByline } from "@/components/enjab/enjab-byline";

/**
 * Required footer for EVERY Enjab dashboard sidebar. Pin it to the very bottom.
 *
 * Two fixed parts, identical across all Enjab dashboards:
 *   1. Account block: circular avatar (initial), name/email, sign out.
 *   2. The "an Enjab product" byline.
 *
 * If there is no display name (e.g. the auth system has only the email), the
 * email becomes the primary line so it still looks intentional. Do not restyle.
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
  const mark = (initial ?? email.charAt(0)).toUpperCase();
  return (
    <div className={cn("mt-auto border-t border-line-soft", className)}>
      {/* Account */}
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy text-xs font-bold text-white">
          {mark}
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          {name ? (
            <>
              <div className="truncate text-[13px] font-semibold text-foreground">{name}</div>
              <div className="truncate text-[11px] text-muted-foreground">{email}</div>
            </>
          ) : (
            <div className="truncate text-[13px] font-semibold text-foreground">{email}</div>
          )}
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
