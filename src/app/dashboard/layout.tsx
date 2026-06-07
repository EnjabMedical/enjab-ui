import type { Metadata } from "next";

// "dashboard" is a client component, so its tab title ("Dashboard - Enjab UI") is set here.
export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
