import type { Metadata } from "next";

// "components" is a client component, so its tab title ("Components - Enjab UI") is set here.
export const metadata: Metadata = { title: "Components" };

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
