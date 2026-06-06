import { cn } from "@/lib/utils";

/**
 * The dashboard topbar. Same height + border as the sidebar brand header so the
 * top of the app reads as one connected bar. Title is Inter Display, subtitle is
 * mono. `action` is a slot for buttons, search, etc.
 */
export function PageHeader({
  title,
  subtitle,
  action,
  className,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex h-15 shrink-0 items-center justify-between gap-3 border-b bg-card px-4 sm:px-6",
        className
      )}
    >
      <div className="min-w-0">
        <div className="truncate font-heading font-bold text-navy">{title}</div>
        {subtitle ? (
          <div className="truncate font-data text-[11px] text-muted-foreground">{subtitle}</div>
        ) : null}
      </div>
      {action ? <div className="flex shrink-0 items-center gap-2 sm:gap-3">{action}</div> : null}
    </header>
  );
}
