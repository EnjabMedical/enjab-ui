import type { ReactNode } from "react";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type AlertTone = "success" | "info" | "warning" | "danger";

const styles: Record<AlertTone, { box: string; icon: string; Icon: LucideIcon }> = {
  success: { box: "border-success/25 bg-success/8 text-success-strong", icon: "text-success", Icon: CheckCircle2 },
  info: { box: "border-info/25 bg-info/8 text-info-strong", icon: "text-info", Icon: Info },
  warning: { box: "border-warning/30 bg-warning/10 text-warning-strong", icon: "text-warning", Icon: AlertTriangle },
  danger: { box: "border-danger/25 bg-danger/8 text-danger-strong", icon: "text-danger", Icon: AlertCircle },
};

/**
 * The Enjab alert: a persistent, in-page message tied to the current view
 * (a form error, a warning before a destructive action, a success notice, an
 * informational note). One look across every Enjab tool.
 *
 * Status is NEVER color alone: every tone ships a matching icon, and the title
 * carries the meaning in words. For transient "it worked" feedback after an
 * action use a toast (sonner); for per-row status use @enjab-ui/status-pill.
 */
export function Alert({
  tone = "info",
  title,
  children,
  icon = true,
  action,
  className,
}: {
  tone?: AlertTone;
  /** Bold heading line. Carries the meaning in words (don't rely on color). */
  title?: ReactNode;
  /** Optional longer description / body. */
  children?: ReactNode;
  /** Hide the leading status icon (default: shown). */
  icon?: boolean;
  /** Optional trailing slot, e.g. a button or link. */
  action?: ReactNode;
  className?: string;
}) {
  const s = styles[tone];
  const Icon = s.Icon;
  return (
    <div role="alert" className={cn("flex gap-3 rounded-xl border p-4", s.box, className)}>
      {icon ? <Icon className={cn("mt-0.5 size-5 shrink-0", s.icon)} aria-hidden /> : null}
      <div className="min-w-0 flex-1">
        {title ? <div className="font-semibold leading-snug">{title}</div> : null}
        {children ? (
          <div className={cn("text-sm text-foreground/75", title && "mt-1")}>{children}</div>
        ) : null}
      </div>
      {action ? <div className="shrink-0 self-center">{action}</div> : null}
    </div>
  );
}
