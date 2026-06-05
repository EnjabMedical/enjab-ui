# Enjab Brand Kit (verified source data)

Raw, confirmed brand data extracted from the live site **enjab.ae** (Framer) and verified by pixel-sampling the logo. Accepted by Mohamed on 2026-06-04. This is the factual source the design system will be built from. It is NOT the token system yet.

## Logo

Files in `brand-assets/`:
- `enjab-logo-primary.png` (800px) — primary wordmark
- `enjab-logo-footer.webp`
- `enjab-icon-1080.png` — square icon
- `enjab-og-reference.png` — live homepage screenshot, reference only

Description: "Enjab" wordmark in deep navy. The "j" is a water-drop / womb cradling a teal baby, with three swooshes (teal, green, light blue) rising off it. Fertility / maternity origin is built into the mark.

**Asset gaps (still needed from Mohamed):**
- Original vector (SVG) of the logo. Site only has raster.
- Mark-only version (drop + swooshes, no wordmark) for favicons / app icons.
- Reversed white version for dark backgrounds.

## Color (verified)

### Brand
| Name | Hex | Notes |
|---|---|---|
| Enjab Teal (UI primary) | `#057C8B` | Primary across the live UI: buttons, headlines, accents. Accepted as primary. |
| Logo Teal (mark) | `#03A7B2` | Brighter cyan-teal used inside the logo. Distinct from the UI teal. |
| Deep Navy | `#1B3766` | Logo wordmark (samples ~`#1C3865`), deepest brand tone. |
| Logo Green | `#42AF48` | Swoosh accent. Pixel-sampled from the logo. |
| Bright Blue | `#0099FF` | High frequency in site code, quiet in the UI. Role UNCONFIRMED (accent / link / gradient noise). |

### Blue ramp (gradients / support)
`#2053AB` · `#367BE3` · `#89AAD9` · tint `#E9F2FF`

### Neutrals & surfaces
| Name | Hex |
|---|---|
| Ink (primary text) | `#0D0D0D` |
| Gray 600 | `#5E5E5E` |
| Gray 500 | `#787878` |
| Gray 300 | `#B5B5B5` |
| Surface | `#FAFAFA` |
| White | `#FFFFFF` |
| Teal tint | `#E6F3F4` |

## Type (verified per element 2026-06-04)
Re-analyzed enjab.ae: it uses a THREE-font system, not Satoshi-for-everything.
- **Inter Display** (Inter, Display optical size) — HEADINGS / titles (h1, h2, h6). Style selector decoded as `InterDisplay-Medium`.
- **Satoshi** (Fontshare) — BODY / paragraphs and general UI text. Weights 400/500/700/900.
- **Fragment Mono** (Google Fonts) — mono accent for labels, eyebrows, and data. Not for body.
- Plain "Inter" also appears as Framer's fallback; the intentional heading face is Inter Display.

## Aesthetic
Soft, premium, calm-clinical. Pill-shaped buttons, large rounded cards (~18px radius), generous white space with pale teal / blue gradient washes. Teal is the hero, gray carries body copy. Warm but clean. Real doctor photography over stock.

## Still open before building the system (NOT yet answered)
1. Role of bright blue `#0099FF`.
2. Vector / mark-only / reversed logo assets.
3. Language: English-only vs English-first with Arabic. (Affects RTL.)
4. Which products the system dresses (marketing site, booking/portal, IVF funnel, internal tools).
