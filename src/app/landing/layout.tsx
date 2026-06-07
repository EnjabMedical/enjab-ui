import type { Metadata } from "next";

// "landing" is a client component, so its tab title ("Landing - Enjab UI") is set here.
export const metadata: Metadata = { title: "Landing" };

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
