import { cn } from "@/lib/utils";

/**
 * The dashboard layout. RESPONSIVE: on desktop (lg+) the sidebar is a fixed rail
 * beside a scrollable main column; on phones/tablets it stacks, the sidebar renders
 * its own mobile top bar (hamburger) above the main column.
 * Pass `<Sidebar />` as `sidebar`; put `<PageHeader />` and the scroll area in
 * `children`. Keeps every Enjab tool's shell identical.
 *
 *   <DashboardShell sidebar={<Sidebar ... />}>
 *     <PageHeader title="Users" action={<Button>Add</Button>} />
 *     <div className="flex-1 overflow-auto p-4 sm:p-6">...</div>
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
    <div className={cn("flex h-dvh flex-col overflow-hidden bg-canvas lg:flex-row", className)}>
      {sidebar}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">{children}</div>
    </div>
  );
}
