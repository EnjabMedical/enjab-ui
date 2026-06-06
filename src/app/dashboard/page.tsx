"use client";

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
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from "recharts";
import { DashboardShell } from "@/components/enjab/dashboard-shell";
import { Sidebar, type SidebarNavGroup } from "@/components/enjab/sidebar";
import { PageHeader } from "@/components/enjab/page-header";
import { DataTable, type Column } from "@/components/enjab/data-table";
import { StatCard } from "@/components/enjab/stat-card";
import { StatusPill } from "@/components/enjab/status-pill";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { appointments, departments, visits, type Appointment } from "@/lib/demo-data";

const groups: SidebarNavGroup[] = [
  {
    label: "Overview",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "#", label: "Appointments", icon: CalendarDays },
      { href: "#", label: "Patients", icon: Users },
      { href: "#", label: "Lab Results", icon: FlaskConical },
    ],
  },
  {
    label: "Operations",
    items: [
      { href: "#", label: "Automations", icon: Workflow },
      { href: "#", label: "Reports", icon: BarChart3 },
      { href: "#", label: "Settings", icon: Settings },
    ],
  },
];

const deptColors = ["#057C8B", "#1B3766", "#0099FF", "#42AF48", "#89AAD9"];

const columns: Column<Appointment>[] = [
  {
    header: "Patient",
    cell: (a) => (
      <div className="flex items-center gap-2.5">
        <Avatar className="size-7">
          <AvatarFallback className="bg-gradient-to-br from-teal to-navy text-[11px] text-white">
            {a.initials}
          </AvatarFallback>
        </Avatar>
        <span className="font-bold text-foreground">{a.patient}</span>
      </div>
    ),
  },
  { header: "File ID", cell: (a) => a.file, className: "font-data text-navy" },
  { header: "Department", cell: (a) => a.department },
  { header: "Time", cell: (a) => a.time, className: "font-data" },
  { header: "Status", cell: (a) => <StatusPill status={a.status}>{a.statusLabel}</StatusPill> },
  {
    header: "Action",
    headClassName: "text-right",
    className: "text-right",
    cell: () => (
      <button className="text-sm font-semibold text-teal hover:underline">Open</button>
    ),
  },
];

export default function DashboardPage() {
  return (
    <DashboardShell
      sidebar={
        <Sidebar
          appName="Enjab Medical Centre"
          appIcon={<Activity strokeWidth={2.4} />}
          activeHref="/dashboard"
          groups={groups}
          user={{ name: "Layla Ahmed", email: "layla@enjab.ae", initial: "L" }}
        />
      }
    >
      <PageHeader
        title="Dashboard"
        subtitle="Tuesday, 04 June 2026"
        action={
          <>
            <div className="hidden items-center gap-2 rounded-full border bg-canvas px-3.5 py-2 text-sm text-muted-foreground sm:flex">
              <Search className="size-4" /> Search patients, files
            </div>
            <Button>
              <Plus /> New Appointment
            </Button>
          </>
        }
      />

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
        <div className="mt-4">
          <DataTable
            title="Today's appointments"
            action={
              <button className="text-sm font-semibold text-teal hover:underline">View all</button>
            }
            columns={columns}
            rows={appointments}
            getRowKey={(a) => a.file}
          />
        </div>

        <div className="flex items-center justify-center gap-2 py-6 text-xs text-muted-foreground">
          <Bell className="size-3.5" /> Calm by design. No animation in employee tools.
        </div>
      </div>
    </DashboardShell>
  );
}
