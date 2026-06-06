import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * A tool's OWN brand mark: the gradient "favicon" square + the tool name. Use this
 * (not the Enjab logo) at the top of the sidebar and on a landing navbar, so each
 * tool shows ITS identity. The Enjab logo belongs only in the "an Enjab product"
 * byline (@enjab-ui/enjab-byline / sidebar-footer).
 *
 * `glyph` MUST match your favicon's GLYPH (same icon/letter) so the browser-tab icon
 * and this on-screen mark are identical, pass the same SVG/icon you used in
 * app/icon.tsx. Defaults to the first letter of `name`. AppMark sizes + whitens the
 * glyph for you, so just pass `<MyIcon />` or your inline `<svg>`.
 */
export function AppMark({
  name,
  glyph,
  size = 28,
  showName = true,
  href,
  className,
}: {
  name: string;
  glyph?: ReactNode;
  size?: number;
  showName?: boolean;
  href?: string;
  className?: string;
}) {
  const inner = (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        style={{ width: size, height: size }}
        className="flex shrink-0 items-center justify-center rounded-[25%] bg-[linear-gradient(135deg,#057C8B_0%,#1B3766_100%)] text-white"
      >
        {glyph ? (
          <span className="flex size-full items-center justify-center [&_svg]:size-[55%]">
            {glyph}
          </span>
        ) : (
          <span className="font-heading font-bold leading-none" style={{ fontSize: size * 0.5 }}>
            {name.charAt(0).toUpperCase()}
          </span>
        )}
      </span>
      {showName ? (
        <span className="truncate font-heading text-[15px] font-bold tracking-tight text-navy">
          {name}
        </span>
      ) : null}
    </span>
  );

  return href ? (
    <Link href={href} className="inline-flex min-w-0">
      {inner}
    </Link>
  ) : (
    inner
  );
}
