# Developer Guide — thecueRoom_V2

## Overview
- **Purpose**: A performant, accessible platform for artists/DJs with modern HUD/terminal aesthetics inspired by our V2 SVG style.
- **Baseline**: Start from the live V1 repository for reference of header + logo: https://github.com/dejayillegal/thecueroom

## Architecture
- **App**: Vite + React 18 + TS (strict) + Tailwind + Radix + wouter.
- **Graphics/Audio**: three.js, twgl.js, WebAudio (AudioWorklet → AnalyserNode fallback).
- **AI/Processing**: onnxruntime-web, lamejs, flac-encoder-typescript, browser-id3-writer, fflate.

### Directory Layout (suggested)
```
src/
  app/
    routes/             # wouter routes
    layout/             # AppShell (sticky header + inline SVG logo)
    flags/              # FeatureFlagProvider, types, hooks
    auth/               # SSO modal (Google/Apple/Instagram), hooks
  components/           # UI components (Radix + Tailwind)
  visuals/              # spectrum, waveform, 3D orbital, HUD widgets
  audio/                # worklets, analyser fallback, nodes, utils
  styles/               # tokens.css, tailwind config extensions
  lib/                  # utils (a11y, perf), api clients
  tests/                # vitest + @testing-library/react
```

## Design Tokens
- Background: `#0B0D0F` / `#0F1216`
- Text: `#E6E8EB` / `#9BA1A6`
- Accents: `#B2FF00` / `#8C4BFF`
- Fonts: Space Grotesk + Inter
- Focus: lime rings; tokens exposed as CSS variables.
Use Tailwind config to surface tokens as utilities.

## Layout Shell
- **Sticky header** with original DOM/classes from V1; do not mutate structure.
- **Inline animated SVG logo** in header; guard animations with `prefers-reduced-motion`.
- Body content scrolls underneath header; no double scrollbars.

## Auth Modal
- SSO-only providers: Google (primary), Apple (secondary), Instagram (tertiary).
- Accessibility: focus trap; close on ESC and click‑outside.
- Triggers: `#cta-join` and `.js-login-link` live anywhere in DOM via delegated listener.

## Feature Flags
Typed flags:
`ai_feed | meme_tools | stage_plot | epk_export | gig_radar | news_rail | reactions_particles | dm_encryption_badge`

Implement:
```ts
export type FeatureFlag =
  | "ai_feed" | "meme_tools" | "stage_plot" | "epk_export"
  | "gig_radar" | "news_rail" | "reactions_particles" | "dm_encryption_badge";
```
Provide `useFlag("ai_feed")` and `<Flag name="ai_feed">...</Flag>` helpers.

## Audio Pipeline
- Detect **AudioWorklet** support; if unsupported or COEP blocked, switch to **AnalyserNode**.
- Keep visuals responsive under fallback (FFT, RMS, crest, correlation).
- Avoid blocking main thread; use workers where heavy transforms are needed.

## Visuals
- Spectrum/waveform/3D orbital align to V2 SVG HUD style.
- Motion: 120–240ms ease-out micro‑interactions; no motion under `prefers-reduced-motion`.
- Avoid pure color dependence; pair with shape/contrast for accessibility.

## Testing
- **Unit**: flags provider; modal a11y; header stickiness.
- **Visual perf**: frame budget at 60fps target; test on low‑end devices.
- **A11y**: keyboard paths; focus visible; reduced motion respects tokens; contrast AA+.

## Commands
```bash
npm i
npm run dev -- --port 5173
npm run build
npm run test
npm run lint
```

## Troubleshooting
- Worklet errors in Safari/Replit → verify fallback path enabled.
- Sticky header overlap → ensure body top padding equals header height.
- Janky visuals → throttle FFT size; requestAnimationFrame; collapse layout shifts.
