"use client";

import Link from "next/link";
import {
  Activity,
  BarChart3,
  Bell,
  CalendarDays,
  DollarSign,
  FlaskConical,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  Users,
  Workflow,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { Logo } from "@/components/enjab/logo";
import { StatCard } from "@/components/enjab/stat-card";
import { StatusPill } from "@/components/enjab/status-pill";
import { SidebarFooter } from "@/components/enjab/sidebar-footer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { appointments, departments, visits } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

const nav = [
  { section: "Overview", items: [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: CalendarDays, label: "Appointments" },
    { icon: Users, label: "Patients" },
    { icon: FlaskConical, label: "Lab Results" },
  ]},
  { section: "Operations", items: [
    { icon: Workflow, label: "Automations" },
    { icon: BarChart3, label: "Reports" },
    { icon: Settings, label: "Settings" },
  ]},
];

const deptColors = ["#057C8B", "#1B3766", "#0099FF", "#42AF48", "#89AAD9"];

export default function DashboardPage() {
  return (
    <div className="flex h-dvh overflow-hidden bg-canvas">
      {/* sidebar */}
      <aside className="flex w-60 shrink-0 flex-col border-r bg-sidebar">
        {/* Brand header matches the topbar height + border so the top reads as one connected bar. */}
        <div className="flex h-15 shrink-0 items-center justify-between border-b px-4">
          <Logo size={30} />
          <Link
            href="/"
            className="font-data text-[10px] uppercase tracking-[0.12em] text-teal hover:underline"
          >
            UI
          </Link>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-3">
          {nav.map((group) => (
            <div key={group.section}>
              <div className="px-2.5 pt-4 pb-2 font-data text-[10px] uppercase tracking-[0.12em] text-muted-foreground/70">
                {group.section}
              </div>
              <div className="space-y-1.5">
              {group.items.map((item) => (
                <button
                  key={item.label}
                  className={cn(
                    "relative flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors",
                    item.active
                      ? "bg-sidebar-accent font-bold text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-muted"
                  )}
                >
                  {item.active ? (
                    <span className="absolute top-1.5 bottom-1.5 -left-3 w-[3px] rounded-r bg-teal" />
                  ) : null}
                  <item.icon
                    className={cn("size-[18px]", item.active ? "text-teal" : "text-muted-foreground/70")}
                  />
                  {item.label}
                </button>
              ))}
              </div>
            </div>
          ))}
        </nav>
        <SidebarFooter name="Layla Ahmed" email="layla@enjab.ae" initial="L" />
      </aside>

      {/* main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-15 items-center justify-between border-b bg-card px-6 py-3">
          <div>
            <div className="font-heading font-bold text-navy">Dashboard</div>
            <div className="font-data text-[11px] text-muted-foreground">Tuesday, 04 June 2026</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border bg-canvas px-3.5 py-2 text-sm text-muted-foreground sm:flex">
              <Search className="size-4" /> Search patients, files
            </div>
            <Button>
              <Plus /> New Appointment
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6">
          {/* KPIs */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Appointments today" value="128" delta="12% vs last week" trend="up" icon={CalendarDays} />
            <StatCard label="Patients seen" value="94" delta="6% vs last week" trend="up" icon={Users} />
            <StatCard label="Pending lab results" value="17" delta="3 since morning" trend="down" icon={FlaskConical} />
            <StatCard label="Revenue (AED)" value="86,400" delta="9% vs last week" trend="up" icon={DollarSign} />
          </div>

          {/* charts */}
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-xl border bg-card p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-heading font-bold text-navy">
                  <Activity className="size-4 text-teal" /> Visits this week
                </div>
                <span className="rounded-full bg-teal-tint px-2.5 py-1 font-data text-[11px] text-teal">
                  Mon - Sun
                </span>
              </div>
              <ResponsiveContainer width="100%" height={190}>
                <BarChart data={visits} margin={{ top: 6, right: 0, left: 0, bottom: 0 }}>
                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11, fill: "#787878" }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={42}>
                    {visits.map((d, i) => (
                      <Cell key={d.day} fill={i >= 5 ? "#1B3766" : "#057C8B"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-xl border bg-card p-5">
              <div className="mb-4 font-heading font-bold text-navy">By department</div>
              <div className="flex flex-col gap-3.5">
                {departments.map((d, i) => (
                  <div key={d.name}>
                    <div className="mb-1.5 flex justify-between text-[13px]">
                      <span>{d.name}</span>
                      <span className="font-data text-navy">{d.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-line-soft">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${d.value}%`, background: deptColors[i] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* table */}
          <div className="mt-4 rounded-xl border bg-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="font-heading font-bold text-navy">Today&apos;s appointments</div>
              <button className="text-sm font-semibold text-teal hover:underline">View all</button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>File ID</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((a) => (
                  <TableRow key={a.file}>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <Avatar className="size-7">
                          <AvatarFallback className="bg-gradient-to-br from-teal to-navy text-[11px] text-white">
                            {a.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-bold text-foreground">{a.patient}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-data text-navy">{a.file}</TableCell>
                    <TableCell>{a.department}</TableCell>
                    <TableCell className="font-data">{a.time}</TableCell>
                    <TableCell>
                      <StatusPill status={a.status}>{a.statusLabel}</StatusPill>
                    </TableCell>
                    <TableCell className="text-right">
                      <button className="text-sm font-semibold text-teal hover:underline">Open</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-center gap-2 py-6 text-xs text-muted-foreground">
            <Bell className="size-3.5" /> Calm by design. No animation in employee tools.
          </div>
        </div>
      </div>
    </div>
  );
}
