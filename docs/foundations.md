# Foundations (tokens)

The canonical token values for the Enjab system. This is the source the Tailwind theme and CSS variables are generated from. Source brand data: [brand-kit.md](brand-kit.md). Never hardcode a value that exists here.

## Color

### Brand
| Token | Hex | Use |
|---|---|---|
| `brand.teal` | `#057C8B` | Primary. Actions, active nav, brand. |
| `brand.teal.hover` | `#066170` | Hover/pressed for teal. |
| `brand.teal.dark` | `#054E59` | Deep teal. |
| `brand.teal.tint` | `#E6F3F4` | Active states, soft fills. |
| `brand.navy` | `#1B3766` | Depth, headings, data emphasis. |
| `brand.navy.soft` | `#2A4B82` | Navy hover/secondary. |

### Status & data
| Token | Hex | Use |
|---|---|---|
| `status.success` | `#42AF48` | Confirmed, healthy, done. (Brand green.) |
| `status.warning` | `#E0A100` | Pending, attention. |
| `status.danger` | `#D64545` | Error, cancelled, destructive. |
| `status.info` | `#0099FF` | Info, links, the brand's bright blue. |
| `data.1..5` | `#057C8B` · `#1B3766` · `#0099FF` · `#42AF48` · `#89AAD9` | Chart series order. |

Rule: status color is always paired with text or an icon, never color alone.

### Neutrals
| Token | Hex |
|---|---|
| `ink` | `#0D0D0D` |
| `gray.700` | `#3A3F44` |
| `gray.600` | `#5E5E5E` |
| `gray.500` | `#787878` |
| `gray.400` | `#9BA1A6` |
| `gray.300` | `#B5B5B5` |
| `line` | `#E9ECEF` |
| `line.soft` | `#F1F3F5` |

### Surfaces
| Token | Hex | Use |
|---|---|---|
| `surface` | `#FFFFFF` | Cards, panels. |
| `canvas` | `#F6F8F9` | App background. |
| `brand.teal.tint` | `#E6F3F4` | Tinted sections. |

> Light mode only. There are no dark surface tokens by design.

## Type

| Family | Token | Use |
|---|---|---|
| Inter (Display optical size) | `font.heading` | Headings and page titles. Matches enjab.ae. |
| Satoshi (Fontshare) | `font.sans` | Body, labels, and all other UI text. |
| Fragment Mono (Google) | `font.mono` | All data: numbers, IDs, timestamps, table figures, code. |

Three-font system, verified per element on enjab.ae (2026-06-04): headings = Inter Display, body = Satoshi, data = Fragment Mono. Headings render with `font-optical-sizing: auto`. Weights: 400, 500, 700, 900.

Scale (base 14px, dashboard density):
| Token | Size | Use |
|---|---|---|
| `text.xs` | 11px | Eyebrows, table headers (mono, uppercase) |
| `text.sm` | 12px | Labels, captions |
| `text.sd` | 13px | Dense secondary |
| `text.base` | 14px | Body / UI default |
| `text.md` | 16px | Emphasis, panel headings |
| `text.lg` | 20px | Section headings |
| `text.xl` | 24px | Page titles |
| `text.2xl` | 30px | Large headings |
| `text.display` | 40px | Landing hero |

Line height: body 1.5, headings 1.1 to 1.25.

## Spacing (4px base)
`space.1`=4 · `space.2`=8 · `space.3`=12 · `space.4`=16 · `space.5`=20 · `space.6`=24 · `space.7`=32 · `space.8`=40 · `space.9`=48 · `space.10`=64

## Radius
| Token | Value | Use |
|---|---|---|
| `radius.sm` | 8px | Inputs, small controls |
| `radius.md` | 12px | Cards, panels |
| `radius.lg` | 16px | Modals, large surfaces |
| `radius.pill` | 999px | Buttons, pills, badges |

## Elevation
Borders first, shadows subtle. No heavy drop shadows.
| Token | Value |
|---|---|
| `shadow.sm` | `0 1px 2px rgba(13,13,13,.05)` |
| `shadow.md` | `0 1px 2px rgba(13,13,13,.04), 0 8px 24px rgba(6,125,140,.06)` |
| Focus ring | `0 0 0 3px rgba(5,124,139,.15)` |

## Motion
Summary, full rules in [motion.md](motion.md). Hover 220ms `cubic-bezier(.4,0,.2,1)`, entrance 560ms `cubic-bezier(.22,1,.36,1)`, micro 120ms, stagger 70ms. Landing only. Dashboards: instant state changes, no motion.
