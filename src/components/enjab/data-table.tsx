import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Column<T> = {
  header: ReactNode;
  cell: (row: T) => ReactNode;
  /** className for this column's body cells */
  className?: string;
  /** className for this column's header cell */
  headClassName?: string;
};

/**
 * The Enjab data table. Fully self-styled (does NOT use the base shadcn table
 * primitive) so the look is ENFORCED and identical in every Enjab tool: bordered
 * card, mono uppercase headers, comfortable rows with `line-soft` separators and
 * a `canvas` hover, an optional title strip, and an empty state.
 *
 * Pass column definitions + rows. Cell content stays flexible: use `font-data`
 * for IDs/times/numbers and `@enjab-ui/status-pill` for status (never color alone).
 */
export function DataTable<T>({
  columns,
  rows,
  getRowKey,
  title,
  action,
  empty = "Nothing here yet.",
  className,
}: {
  columns: Column<T>[];
  rows: T[];
  getRowKey: (row: T, index: number) => string;
  title?: ReactNode;
  action?: ReactNode;
  empty?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border bg-card", className)}>
      {title || action ? (
        <div className="flex items-center justify-between gap-4 border-b px-5 py-3.5">
          {title ? <div className="font-heading font-bold text-navy">{title}</div> : <span />}
          {action}
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b">
              {columns.map((c, i) => (
                <th
                  key={i}
                  className={cn(
                    "px-5 py-3 font-data text-[11px] font-normal whitespace-nowrap text-muted-foreground uppercase tracking-[0.06em]",
                    c.headClassName
                  )}
                >
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-muted-foreground"
                >
                  {empty}
                </td>
              </tr>
            ) : (
              rows.map((row, i) => (
                <tr
                  key={getRowKey(row, i)}
                  className="border-b border-line-soft transition-colors last:border-0 hover:bg-canvas"
                >
                  {columns.map((c, ci) => (
                    <td
                      key={ci}
                      className={cn("px-5 py-3 align-middle text-foreground", c.className)}
                    >
                      {c.cell(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
