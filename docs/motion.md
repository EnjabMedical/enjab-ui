# Motion

Approved 2026-06-04. All animation is implemented with **Framer Motion**. No second animation library.

## The boundary (most important rule)

- **Landing / marketing pages:** expressive motion is allowed and encouraged (hover lifts, scroll reveals, count-ups, image zooms). Premium and calm, never bouncy.
- **Dashboards and all employee-facing tools:** no fancy motion. Feedback is limited to instant color, focus ring, and state changes. Never animate the position or size of a control someone clicks repeatedly. It slows the user and adds error.
- **Reduced motion:** when the user requests reduced motion, entrances become instant fades and hovers become color-only. Respect `prefers-reduced-motion` everywhere.

## Tokens

One fixed set. Every landing animation uses these, nothing custom per component.

| Token | Value | Use |
|---|---|---|
| Micro | 120ms, `cubic-bezier(.4,0,.2,1)` | Toggles, tiny state flips, icon nudges |
| Hover | 220ms, `cubic-bezier(.4,0,.2,1)` | Buttons, cards, links on hover |
| Entrance | 560ms, `cubic-bezier(.22,1,.36,1)` | Scroll reveals, on-load fades |
| Stagger | 70ms between children | List / grid reveals |

```ts
// Framer Motion presets
export const hover    = { duration: 0.22, ease: [0.4, 0, 0.2, 1] }
export const entrance = { duration: 0.56, ease: [0.22, 1, 0.36, 1] }
export const stagger  = { staggerChildren: 0.07 }
```

## Patterns (landing only)

- **Buttons:** `whileHover={{ y: -3 }}`, `whileTap={{ y: -1 }}`, plus a CTA arrow sliding `x: 5`. Shadow grows on hover.
- **Feature cards:** `whileHover={{ y: -6 }}`, shadow grows, a teal-to-blue top bar reveals (scaleX 0 to 1), icon nudges (`scale: 1.08`).
- **Media:** image scales `1.07` inside an `overflow:hidden` frame.
- **Links:** underline grows from the left (scaleX 0 to 1, origin left).
- **Scroll reveal:** `initial={{ opacity:0, y:24 }}`, `whileInView={{ opacity:1, y:0 }}`, `viewport={{ once:true, margin:"-80px" }}`, staggered by index.
- **Stat count-up:** numbers animate from zero on view, once. Always in Fragment Mono.

## Distances & feel
- Hover lift: 3px (buttons), 6px (cards). Never more.
- Entrance rise: 24px.
- Easing is always ease-out (decelerate). No ease-in-out wobble, no spring overshoot.
