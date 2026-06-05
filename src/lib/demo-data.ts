import type { StatusTone } from "@/components/enjab/status-pill";

export const visits = [
  { day: "Mon", value: 52 },
  { day: "Tue", value: 68 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 84 },
  { day: "Fri", value: 95 },
  { day: "Sat", value: 40 },
  { day: "Sun", value: 30 },
];

export const departments = [
  { name: "Ob / Gyn", value: 42 },
  { name: "Pediatrics", value: 23 },
  { name: "Dermatology", value: 18 },
  { name: "Dentistry", value: 11 },
  { name: "Surgery", value: 6 },
];

export type Appointment = {
  patient: string;
  initials: string;
  file: string;
  department: string;
  time: string;
  status: StatusTone;
  statusLabel: string;
};

export const appointments: Appointment[] = [
  { patient: "Mariam Nasser", initials: "MN", file: "EJ-04821", department: "Ob / Gyn", time: "09:30", status: "success", statusLabel: "Confirmed" },
  { patient: "Hamda Ali", initials: "HA", file: "EJ-04822", department: "Dermatology", time: "10:00", status: "info", statusLabel: "In Progress" },
  { patient: "Sara Khalid", initials: "SK", file: "EJ-04823", department: "Pediatrics", time: "10:30", status: "warning", statusLabel: "Pending" },
  { patient: "Fatima Rashid", initials: "FR", file: "EJ-04824", department: "Dentistry", time: "11:15", status: "danger", statusLabel: "Cancelled" },
  { patient: "Aisha Omar", initials: "AO", file: "EJ-04825", department: "Ob / Gyn", time: "11:45", status: "success", statusLabel: "Confirmed" },
  { patient: "Noura Salem", initials: "NS", file: "EJ-04826", department: "Pediatrics", time: "12:10", status: "success", statusLabel: "Confirmed" },
];
