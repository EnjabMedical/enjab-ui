import { cn } from "@/lib/utils";

/**
 * Enjab logo. Light backgrounds only (no reversed/white version exists).
 * Loads from the hosted URL, so it works in any repo with no local asset.
 */
export function Logo({ size = 32, className }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://ui.enjab.ae/enjab-logo.png"
      alt="Enjab"
      style={{ height: size }}
      className={cn("w-auto select-none", className)}
    />
  );
}
