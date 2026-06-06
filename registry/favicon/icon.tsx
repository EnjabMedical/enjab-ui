import { ImageResponse } from "next/og";
import type { ReactNode } from "react";

// ── Brand the favicon here ──────────────────────────────────────────────────
// Default: the letter "E" on the Enjab gradient. Keep the gradient + rounding the
// same so every Enjab tool stays visually consistent; only change the glyph.
//
//   • Different letter:  const GLYPH = "W";
//   • An icon instead:   import { Stethoscope } from "lucide-react";
//                        const GLYPH = <Stethoscope width={36} height={36}
//                                        color="#fff" strokeWidth={2.5} />;
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
