import { cn } from "@/lib/utils";

/**
 * "an Enjab product" byline. REQUIRED on every Enjab dashboard.
 *
 * Placement:
 *   - If the dashboard has a sidebar, it lives at the very bottom of the sidebar
 *     (use SidebarFooter, which includes this).
 *   - If there is no sidebar, place this anywhere sensible (a footer or a corner).
 *
 * The logo loads from the hosted URL, so this works in any repo with no local asset.
 * Fixed size and weight on purpose. Do not restyle.
 */
export function EnjabByline({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground",
        className
      )}
    >
      an
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://ui.enjab.ae/enjab-logo.png" alt="Enjab" className="h-4 w-auto" />
      product
    </div>
  );
}
