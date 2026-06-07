"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Bell, Info, Plus, Settings, Trash2, ChevronDown } from "lucide-react";
import { ShowcaseNav } from "@/components/enjab/showcase-nav";
import { StatusPill } from "@/components/enjab/status-pill";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert } from "@/components/enjab/alert";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable, type Column } from "@/components/enjab/data-table";
import { appointments, type Appointment } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

const tableColumns: Column<Appointment>[] = [
  {
    header: "Patient",
    sortValue: (a) => a.patient,
    cell: (a) => a.patient,
    className: "font-semibold text-foreground",
  },
  { header: "File ID", sortValue: (a) => a.file, cell: (a) => a.file, className: "font-data text-navy" },
  { header: "Department", sortValue: (a) => a.department, cell: (a) => a.department },
  { header: "Time", sortValue: (a) => a.time, cell: (a) => a.time, className: "font-data" },
  {
    header: "Status",
    sortValue: (a) => a.statusLabel,
    cell: (a) => <StatusPill status={a.status}>{a.statusLabel}</StatusPill>,
  },
];

function Block({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-2xl border bg-card p-6", className)}>
      <h3 className="font-data text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function ComponentsPage() {
  const [progress] = useState(64);
  return (
    <div className="min-h-full">
      <ShowcaseNav />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-black tracking-tight text-navy">Components</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          The Enjab UI library, every block themed on the brand. Built on shadcn/ui, icons by Lucide.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Block title="Buttons">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="navy">Navy</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">
                <Trash2 /> Delete
              </Button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" variant="outline" aria-label="Settings">
                <Settings />
              </Button>
              <Button disabled>Disabled</Button>
              <Button loading>Saving</Button>
              <Button>
                <Plus /> New
              </Button>
            </div>
          </Block>

          <Block title="Status & badges">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status="success">Confirmed</StatusPill>
              <StatusPill status="info">In Progress</StatusPill>
              <StatusPill status="warning">Pending</StatusPill>
              <StatusPill status="danger">Cancelled</StatusPill>
              <StatusPill status="neutral">Draft</StatusPill>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Block>

          <Block title="Form fields">
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="pn">Patient name</Label>
                <Input id="pn" placeholder="e.g. Mariam Nasser" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="fid">File ID</Label>
                <Input id="fid" defaultValue="EJ-04821" className="font-data" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="dept">Department</Label>
                <Select
                  defaultValue="obgyn"
                  items={[
                    { value: "obgyn", label: "Ob / Gyn" },
                    { value: "peds", label: "Pediatrics" },
                    { value: "derma", label: "Dermatology" },
                    { value: "dental", label: "Dentistry" },
                  ]}
                >
                  <SelectTrigger id="dept" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="obgyn">Ob / Gyn</SelectItem>
                    <SelectItem value="peds">Pediatrics</SelectItem>
                    <SelectItem value="derma">Dermatology</SelectItem>
                    <SelectItem value="dental">Dentistry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="note">Note</Label>
                <Textarea id="note" placeholder="Add a note" />
              </div>
            </div>
          </Block>

          <Block title="Selection controls">
            <div className="flex flex-col gap-5">
              <label className="flex items-center gap-3 text-sm">
                <Checkbox defaultChecked /> Send appointment reminder
              </label>
              <label className="flex items-center gap-3 text-sm">
                <Switch defaultChecked /> Auto-confirm bookings
              </label>
              <RadioGroup defaultValue="day" className="flex gap-6">
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem value="day" /> Day
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem value="week" /> Week
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem value="month" /> Month
                </label>
              </RadioGroup>
            </div>
          </Block>

          <Block title="Tabs">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="visits">Visits</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-4 text-sm text-muted-foreground">
                Summary of the patient record and recent activity.
              </TabsContent>
              <TabsContent value="visits" className="pt-4 text-sm text-muted-foreground">
                A timeline of past and upcoming visits.
              </TabsContent>
              <TabsContent value="billing" className="pt-4 text-sm text-muted-foreground">
                Invoices, payments, and insurance.
              </TabsContent>
            </Tabs>
          </Block>

          <Block title="Overlays & feedback">
            <div className="flex flex-wrap items-center gap-3">
              <Dialog>
                <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Cancel appointment?</DialogTitle>
                    <DialogDescription>
                      This will notify the patient. You can rebook later.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose render={<Button variant="ghost">Keep it</Button>} />
                    <DialogClose render={<Button variant="destructive">Cancel appointment</Button>} />
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="outline">
                      Actions <ChevronDown />
                    </Button>
                  }
                />
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Appointment</DropdownMenuLabel>
                  <DropdownMenuItem>Open record</DropdownMenuItem>
                  <DropdownMenuItem>Reschedule</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Cancel</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="outline" size="icon" aria-label="Info">
                      <Info />
                    </Button>
                  }
                />
                <TooltipContent>Patient file reference</TooltipContent>
              </Tooltip>

              <Button
                variant="secondary"
                onClick={() =>
                  toast.success("Appointment confirmed", {
                    description: "Mariam Nasser, today 09:30",
                  })
                }
              >
                <Bell /> Show toast
              </Button>
            </div>
          </Block>

          <Block title="Alert">
            <div className="flex flex-col gap-3">
              <Alert tone="success" title="Patient record saved">
                All changes are synced across Enjab tools.
              </Alert>
              <Alert tone="info" title="17 lab results pending review">
                Three are flagged as urgent and need a doctor sign-off.
              </Alert>
              <Alert tone="warning" title="2FA not enabled">
                Add an authenticator to keep this account secure.
              </Alert>
              <Alert tone="danger" title="Couldn't save changes">
                The server rejected the update. Check the fields and try again.
              </Alert>
            </div>
          </Block>

          <Block title="Progress, avatar, skeleton">
            <div className="flex flex-col gap-5">
              <Progress value={progress} className="w-full" />
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>MN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>HA</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <Separator orientation="vertical" className="h-8" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-3 w-40" />
                  <Skeleton className="h-3 w-28" />
                </div>
              </div>
            </div>
          </Block>
        </div>

        <Block title="Table" className="mt-5">
          <p className="mb-3 text-sm text-muted-foreground">
            Click a column header to sort: ascending, descending, then back to the original
            order. Works for text, numbers, dates, and addition time.
          </p>
          <DataTable
            columns={tableColumns}
            rows={appointments.slice(0, 5)}
            getRowKey={(a) => a.file}
          />
        </Block>
      </main>
    </div>
  );
}
