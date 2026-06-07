import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnjabByline } from "@/components/enjab/enjab-byline";

// The Enjab 404 page. REQUIRED in every Enjab project (never the framework default).
// Customize: replace GLYPH with your favicon's glyph (the SAME inline <svg> you put in
// app/icon.tsx), and set the tool name + home href below. Keep the layout, so every
// Enjab tool's 404 looks the same.
const GLYPH = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <span className="flex size-12 items-center justify-center rounded-[25%] bg-[linear-gradient(135deg,#057C8B_0%,#1B3766_100%)] [&_svg]:size-[55%]">
        {GLYPH}
      </span>
      <p className="mt-6 font-data text-sm uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="mt-2 text-2xl font-black tracking-tight text-navy sm:text-3xl">Page not found</h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        This page doesn&apos;t exist or has moved.
      </p>
      <Button className="mt-6" nativeButton={false} render={<Link href="/" />}>
        <ArrowLeft className="size-4" /> Back home
      </Button>
      <EnjabByline className="mt-10" />
    </div>
  );
}
