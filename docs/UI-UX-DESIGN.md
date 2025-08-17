# UI/UX Design — thecueRoom_V2

Visual identity is based on a cinematic HUD/club aesthetic.

## Brand Tokens
- Background: `#0B0D0F` / `#0F1216`
- Text: `#E6E8EB` / `#9BA1A6`
- Accents: `#B2FF00` / `#8C4BFF`
- Fonts: Space Grotesk (display), Inter (UI)

## Layout
- Sticky header with inline animated SVG logo.
- Grid-based layout; responsive with clamp() typography.
- Body scrolls under header.

## Components
- **Buttons**: solid, outline, ghost — with 44px min target size.
- **Cards**: rounded corners, soft shadows, traffic-light header controls.
- **Modals**: center, dim backdrop, focus trap, ESC + click-outside close.
- **Forms**: labels visible, error roles accessible.
- **Tables**: keyboard sortable, sticky headers.

## Visualizers
- **Spectrum**: hybrid bar+line; smooth transitions.
- **Waveform A/B**: overlay comparison; correlation stripe.
- **3D Orbital**: simplified geometry, glowing accents; degrade gracefully.
- **Meters**: LUFS, dBTP, PLR tri-meter.

## Motion
- 120–240ms transitions; respect `prefers-reduced-motion`.
- Particle/reaction effects gated behind `reactions_particles`.

## Accessibility
- AA+ contrast minimum.
- Keyboard-first navigation, visible lime focus rings.
- Alternative text/numeric readouts for visualizers.
