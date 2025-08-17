# UI/UX Design — thecueRoom_V2

This guide reflects the V2 SVG aesthetic: cinematic HUD/terminal vibes with crisp geometry, subtle glows, and disciplined motion.

## Brand & Tokens
- Background: `#0B0D0F` / `#0F1216`
- Text: `#E6E8EB` / `#9BA1A6`
- Accents: `#B2FF00` / `#8C4BFF`
- Fonts: Space Grotesk (display), Inter (UI/body)
- Focus rings: lime, 2–3px; offset to avoid clipping.

## Layout Principles
- Sticky header, unchanged DOM/classes; body scrolls under.
- Twelve‑column fluid grid; 16/24px gutters; clamp() for responsive type.
- Card chrome: soft shadows, 2xl radius, minimal borders (rgba surfaces).
- Terminal window aesthetic for key panels; **traffic light buttons (🟢🟡🔴)** right‑aligned in card headers for tool panes.

## Motion
- Default transitions 120–240ms ease‑out; 320ms for large panels.
- Tailwind transitions; no JS timers for simple opacity/transform.
- Respect `prefers-reduced-motion`: disable nonessential animations; freeze logo blink/sweep.
- Small parallax/particles only behind content and under flags (`reactions_particles`).

## Components
- **Buttons**: solid (accent), outline, ghost. Keyboard target ≥ 44px.
- **Cards**: header with right‑aligned traffic lights; content area uses 12‑grid.
- **Modals**: center, dim backdrop; focus trap; ESC + click‑outside.
- **Forms**: labels always visible; error text with role="alert"; avoid placeholder-only.
- **Tables**: sticky header row; zebra optional; keyboard sortable.
- **Chips/Tags**: low-contrast neutral with accent outline for active.

## Visualizers
- **Spectrum**: hybrid bar+line; low latency; clamp FPS to 60.
- **Waveform A/B**: dual overlay with subtle offset; sync cursors; correlation stripe.
- **3D Orbital**: low‑poly; glow accents #B2FF00/#8C4BFF; degrade gracefully on low‑end GPUs.
- **Meters**: LUFS, dBTP, PLR tri‑meter; micro‑dynamics ΔRMS sparkline.

## Accessibility
- AA+ contrast; never rely on color alone.
- All interactive elements receive visible focus.
- Provide text alternatives for visualizers (numeric readouts).
- Keyboard operable: tabs cycle logically; modals trap focus.
- Reduce motion mode: switch visuals to calm, low‑frequency updates.

## Breakpoints
- sm: 360–639px (single column)
- md: 640–1023px (2–6 columns)
- lg: 1024–1439px (8–12 columns)
- xl: 1440px+ (wide densities)

## Do / Don’t
- ✅ Use tokens via CSS variables/Tailwind theme.
- ✅ Keep header DOM intact; embed inline logo.
- ✅ Gate experimental visuals behind flags.
- ❌ Don’t introduce new brand colors.
- ❌ Don’t rely on motion for meaning.
