import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type Column<T> = {
  header: ReactNode;
  cell: (row: T) => ReactNode;
  /** className for this column's body cells */
  className?: string;
  /** className for this column's header cell */
  headClassName?: string;
};

/**
 * The Enjab data table: a bordered card, mono uppercase headers, an optional
 * titled header row, and an empty state. Pass column definitions + rows, the
 * chrome stays identical across every Enjab tool while cells stay flexible.
 *
 * Data cells should use `font-data` for IDs/times/numbers and `@enjab-ui/status-pill`
 * for status (never color alone).
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
        <div className="flex items-center justify-between border-b px-5 py-3.5">
          {title ? <div className="font-heading font-bold text-navy">{title}</div> : <span />}
          {action}
        </div>
      ) : null}
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((c, i) => (
              <TableHead
                key={i}
                className={cn(
                  "font-data text-[11px] font-normal uppercase tracking-[0.06em] text-muted-foreground",
                  c.headClassName
                )}
              >
                {c.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="py-10 text-center text-muted-foreground"
              >
                {empty}
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, i) => (
              <TableRow key={getRowKey(row, i)}>
                {columns.map((c, ci) => (
                  <TableCell key={ci} className={c.className}>
                    {c.cell(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
