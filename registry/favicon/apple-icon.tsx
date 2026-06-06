import { ImageResponse } from "next/og";
import type { ReactNode } from "react";

// The Apple touch icon. Keep GLYPH in sync with app/icon.tsx. iOS rounds the
// corners itself, so this one is full-bleed (no border radius).
const GLYPH: ReactNode = "E";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #057C8B 0%, #1B3766 100%)",
          color: "#fff",
          fontSize: 110,
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
