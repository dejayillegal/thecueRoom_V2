# Developer Guide — thecueRoom_V2

## Overview
**thecueRoom_V2** is the upgraded platform for DJs and creators. It builds on the [original repo](https://github.com/dejayillegal/thecueroom) with improved UI/UX, feature flags, and AI-enhanced modules.

## Architecture
- **App**: Vite + React 18 + TypeScript (strict) + Tailwind + Radix + wouter
- **Graphics/Audio**: three.js, twgl.js, Web Audio (AudioWorklet → AnalyserNode fallback)
- **AI/Processing**: onnxruntime-web, lamejs, flac-encoder-typescript, browser-id3-writer, fflate

### Suggested Directory Layout
```
src/
  app/         # routes, layout shell, feature flags, auth
  components/  # UI components
  visuals/     # spectrum, waveform, 3D orbital visualizers
  audio/       # audio nodes, worklets, analyser fallback
  styles/      # tokens, Tailwind config extensions
  lib/         # utils, api clients
  tests/       # vitest + @testing-library/react
```

## Design Tokens
- Background: `#0B0D0F` / `#0F1216`
- Text: `#E6E8EB` / `#9BA1A6`
- Accents: `#B2FF00` / `#8C4BFF`
- Fonts: Space Grotesk + Inter
- Focus: lime rings

## Layout
- Sticky header (DOM/classes unchanged from V1).
- Inline animated SVG logo; motion disabled under `prefers-reduced-motion`.
- Body scrolls under header.

## Auth Modal
- SSO-only (Google primary, Apple secondary, Instagram tertiary).
- Focus trap, ESC + click-outside close.
- Triggered by `#cta-join` and `.js-login-link`.

## Feature Flags
Flags: `ai_feed`, `meme_tools`, `stage_plot`, `epk_export`, `gig_radar`, `news_rail`, `reactions_particles`, `dm_encryption_badge`.

## Audio
- Detect AudioWorklet support; fallback to AnalyserNode if blocked.
- Visuals remain functional under fallback.

## Testing
- Unit: flags, auth modal, header.
- Performance: 60fps visualizers, bundle budgets.
- Accessibility: keyboard, contrast AA+, reduced motion.

## Commands
```bash
npm i
npm run dev -- --port 5173
npm run build
npm run test
npm run lint
```
