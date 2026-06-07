import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AppMark } from "@/components/enjab/app-mark";
import { BrushGlyph } from "@/components/brush-glyph";
import { Button } from "@/components/ui/button";
import { EnjabByline } from "@/components/enjab/enjab-byline";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <AppMark name="Enjab UI" glyph={<BrushGlyph />} size={44} showName={false} />
      <p className="mt-6 font-data text-sm uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="mt-2 text-2xl font-black tracking-tight text-navy sm:text-3xl">Page not found</h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button className="mt-6" nativeButton={false} render={<Link href="/" />}>
        <ArrowLeft className="size-4" /> Back to Enjab UI
      </Button>
      <EnjabByline className="mt-10" />
    </div>
  );
}
