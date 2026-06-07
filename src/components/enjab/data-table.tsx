"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SortValue = string | number | Date | null | undefined;

export type Column<T> = {
  header: ReactNode;
  cell: (row: T) => ReactNode;
  /** className for this column's body cells */
  className?: string;
  /** className for this column's header cell */
  headClassName?: string;
  /**
   * Make this column sortable: return the value to sort by for a row. Provide it
   * and the header becomes a clickable sort toggle. Cells can render anything
   * (JSX); sorting always uses this raw value, never the rendered markup.
   */
  sortValue?: (row: T) => SortValue;
  /**
   * How to compare sortValue. Inferred from the value when omitted: numbers sort
   * numerically, Dates chronologically, everything else alphabetically (locale +
   * numeric aware, so "Item 2" < "Item 10"). For an "added on / created at"
   * column, return the timestamp and it sorts by addition time.
   */
  sortType?: "text" | "number" | "date";
};

type Dir = "asc" | "desc";

function isBlank(v: SortValue): boolean {
  return v === null || v === undefined || v === "";
}

function compare(a: SortValue, b: SortValue, type?: Column<unknown>["sortType"]): number {
  if (type === "number" || (type === undefined && typeof a === "number" && typeof b === "number")) {
    return Number(a) - Number(b);
  }
  if (type === "date" || a instanceof Date || b instanceof Date) {
    const ta = a instanceof Date ? a.getTime() : new Date(a as string | number).getTime();
    const tb = b instanceof Date ? b.getTime() : new Date(b as string | number).getTime();
    return (Number.isNaN(ta) ? 0 : ta) - (Number.isNaN(tb) ? 0 : tb);
  }
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
}

function SortIcon({ active, dir }: { active: boolean; dir: Dir }) {
  if (!active) {
    return (
      <ChevronsUpDown className="size-3 shrink-0 opacity-40 transition-opacity group-hover/sort:opacity-70" />
    );
  }
  return dir === "asc" ? (
    <ChevronUp className="size-3 shrink-0 text-teal" />
  ) : (
    <ChevronDown className="size-3 shrink-0 text-teal" />
  );
}

/**
 * The Enjab data table. Fully self-styled (does NOT use the base shadcn table
 * primitive) so the look is ENFORCED and identical in every Enjab tool: bordered
 * card, mono uppercase headers, comfortable rows with `line-soft` separators and
 * a `canvas` hover, an optional title strip, and an empty state.
 *
 * Sorting is built in: give a column a `sortValue` and its header toggles
 * ascending -> descending -> off (back to the original addition order) on click,
 * with an arrow showing the active column and direction. Works for text, numbers,
 * dates, and addition time. Columns without `sortValue` (e.g. an action column)
 * stay static.
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
  const [sort, setSort] = useState<{ index: number; dir: Dir } | null>(null);

  function toggle(i: number) {
    if (!columns[i].sortValue) return;
    setSort((cur) => {
      if (!cur || cur.index !== i) return { index: i, dir: "asc" };
      if (cur.dir === "asc") return { index: i, dir: "desc" };
      return null; // third click: back to the original (addition) order
    });
  }

  // Sort a decorated copy so it's stable (equal rows keep their addition order)
  // and blanks always sit at the bottom regardless of direction.
  let ordered = rows;
  if (sort) {
    const col = columns[sort.index];
    const get = col.sortValue!;
    const factor = sort.dir === "asc" ? 1 : -1;
    ordered = rows
      .map((row, i) => ({ row, i, v: get(row) }))
      .sort((x, y) => {
        const xb = isBlank(x.v);
        const yb = isBlank(y.v);
        if (xb && yb) return x.i - y.i;
        if (xb) return 1;
        if (yb) return -1;
        return compare(x.v, y.v, col.sortType) * factor || x.i - y.i;
      })
      .map((d) => d.row);
  }

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
              {columns.map((c, i) => {
                const active = sort?.index === i;
                const dir = active ? sort!.dir : "asc";
                return (
                  <th
                    key={i}
                    aria-sort={active ? (dir === "asc" ? "ascending" : "descending") : "none"}
                    className={cn(
                      "px-5 py-3 font-data text-[11px] font-normal whitespace-nowrap text-muted-foreground uppercase tracking-[0.06em]",
                      c.headClassName
                    )}
                  >
                    {c.sortValue ? (
                      <button
                        type="button"
                        onClick={() => toggle(i)}
                        className="group/sort -mx-1 inline-flex items-center gap-1 rounded px-1 uppercase tracking-[0.06em] transition-colors select-none hover:text-foreground aria-[current=true]:text-foreground"
                        aria-current={active}
                      >
                        {c.header}
                        <SortIcon active={active} dir={dir} />
                      </button>
                    ) : (
                      c.header
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {ordered.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-muted-foreground"
                >
                  {empty}
                </td>
              </tr>
            ) : (
              ordered.map((row, i) => (
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
