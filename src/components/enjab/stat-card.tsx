import { TrendingDown, TrendingUp, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * KPI / stat card. Value is rendered in Fragment Mono (data is always mono).
 */
export function StatCard({
  label,
  value,
  delta,
  trend = "up",
  icon: Icon,
  className,
}: {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down";
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border bg-card p-4", className)}>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {Icon ? <Icon className="size-4 text-teal" /> : null}
        <span>{label}</span>
      </div>
      <div className="mt-2.5 font-data text-[27px] leading-none tracking-tight text-navy">
        {value}
      </div>
      {delta ? (
        <div
          className={cn(
            "mt-2.5 inline-flex items-center gap-1 text-xs font-semibold",
            trend === "down" ? "text-danger" : "text-success"
          )}
        >
          {trend === "down" ? (
            <TrendingDown className="size-3.5" />
          ) : (
            <TrendingUp className="size-3.5" />
          )}
          {delta}
        </div>
      ) : null}
    </div>
  );
}
