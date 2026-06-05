import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Enjab logo. Per the brand rule, the logo is only ever placed on light
 * backgrounds (no reversed/white version exists).
 */
export function Logo({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/enjab-logo.png"
      alt="Enjab"
      width={size}
      height={size}
      priority
      className={cn("h-auto w-auto select-none", className)}
      style={{ height: size }}
    />
  );
}
