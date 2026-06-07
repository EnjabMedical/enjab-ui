import { ImageResponse } from "next/og";
import type { ReactNode } from "react";

// ── Brand the favicon here ──────────────────────────────────────────────────
// Default: the letter "E" on the Enjab gradient. Keep the gradient + rounding the
// same so every Enjab tool stays visually consistent; only change the glyph.
//
//   • Different letter:  const GLYPH = "W";
//   • An icon instead:   paste the icon's raw SVG (grab the markup from lucide.dev
//                        or any icon set). Use an inline <svg> - Lucide React
//                        components do NOT render inside this generator. Example:
//                        const GLYPH = (
//                          <svg width={36} height={36} viewBox="0 0 24 24" fill="none"
//                               stroke="#fff" strokeWidth={2.2} strokeLinecap="round"
//                               strokeLinejoin="round">
//                            <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L21 4" />
//                            <path d="m21 2-9.6 9.6" />
//                            <circle cx="7.5" cy="15.5" r="5.5" />
//                          </svg>
//                        );
const GLYPH: ReactNode = "E";
// ────────────────────────────────────────────────────────────────────────────

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "linear-gradient(135deg, #057C8B 0%, #1B3766 100%)",
          color: "#fff",
          fontSize: 40,
          fontWeight: 700,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {GLYPH}
      </div>
    ),
    size
  );
}
