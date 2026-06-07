import type { Metadata } from "next";
import { Fragment_Mono, Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

// Headings use Inter (Display optical size), matching enjab.ae. Body uses Satoshi (Fontshare).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-enjab-heading",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-enjab-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Browser tab titles read "Page - Enjab UI"; the home page uses the bare service name.
  title: { default: "Enjab UI", template: "%s - Enjab UI" },
  description:
    "The Enjab design system in code. Themed shadcn/ui for employee-facing dashboards and internal tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <head>
        {/* Satoshi (primary UI typeface) from Fontshare. Fragment Mono is self-hosted via next/font. */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
      </head>
      <body className="min-h-full bg-canvas font-sans text-foreground">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
