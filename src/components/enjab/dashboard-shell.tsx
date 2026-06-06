import { cn } from "@/lib/utils";

/**
 * The dashboard layout: a fixed sidebar + a scrollable main column.
 * Pass `<Sidebar />` as `sidebar`; put `<PageHeader />` and the scroll area in
 * `children`. Keeps every Enjab tool's shell identical.
 *
 *   <DashboardShell sidebar={<Sidebar ... />}>
 *     <PageHeader title="Users" action={<Button>Add</Button>} />
 *     <div className="flex-1 overflow-auto p-6">...</div>
 *   </DashboardShell>
 */
export function DashboardShell({
  sidebar,
  children,
  className,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex h-dvh overflow-hidden bg-canvas", className)}>
      {sidebar}
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
