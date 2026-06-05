import { cn } from "@/lib/utils";

export type StatusTone = "success" | "warning" | "danger" | "info" | "neutral";

const tone: Record<string, string> = {
  success: "bg-success/12 text-[#2c7a33]",
  warning: "bg-warning/15 text-[#9a7400]",
  danger: "bg-danger/12 text-[#b23b3b]",
  info: "bg-info/12 text-[#0a6fb5]",
  neutral: "bg-muted text-muted-foreground",
};

const dot: Record<string, string> = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info",
  neutral: "bg-muted-foreground",
};

/**
 * Status pill: a colored dot plus a label. Status is never color alone, it is
 * always paired with text (per the design system rules).
 */
export function StatusPill({
  status = "neutral",
  children,
  className,
}: {
  status?: StatusTone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        tone[status],
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", dot[status])} />
      {children}
    </span>
  );
}
