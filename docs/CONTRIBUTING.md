# Contributing to thecueRoom_V2

Thanks for helping evolve **thecueRoom_V2**. This project emphasizes performance, accessibility, and design precision.

## Ground Rules (Non-Negotiables)
- **Header**: DOM/classes unchanged. Sticky; body scrolls underneath.
- **Logo**: Inline animated SVG on every page; must respect `prefers-reduced-motion`.
- **Brand tokens**: 
  - Background: `#0B0D0F` / `#0F1216`
  - Text: `#E6E8EB` / `#9BA1A6`
  - Accents: `#B2FF00` / `#8C4BFF`
- **Typography**: Space Grotesk + Inter.
- **Accessibility**: WCAG AA+ minimum. Lime focus rings. Keyboard nav everywhere.
- **Auth**: SSO-only modal (Google primary, Apple secondary, Instagram tertiary) with focus trap, ESC, click-outside; triggers `#cta-join` and `.js-login-link`.
- **Feature flags**: `ai_feed`, `meme_tools`, `stage_plot`, `epk_export`, `gig_radar`, `news_rail`, `reactions_particles`, `dm_encryption_badge`.

## Tech
Vite • React 18 • TypeScript (strict) • TailwindCSS • Radix UI • wouter • three.js • twgl.js • onnxruntime-web.

## Dev Setup
```bash
npm i
npm run dev -- --port 5173
npm run build
```

## Coding Standards
- TypeScript **strict**; no `any` without justification.
- ESLint + Prettier must pass cleanly (no warnings).
- Reusable, modular components; tree-shakeable.
- Respect `prefers-reduced-motion` for all animations.
- Use Tailwind tokens + CSS variables for brand colors and focus rings.

## Tests
- Unit: feature flag provider, login modal, sticky header.
- Exploratory: AI feed, gig radar, EPK export.
- Accessibility: keyboard nav, focus visibility, reduced motion, contrast AA+.

## PR Checklist
- [ ] Conventional commit title.
- [ ] All flags wrap new UI/logic as needed.
- [ ] Header DOM/classes untouched; sticky verified.
- [ ] Inline logo present; respects reduced motion.
- [ ] ESLint/TS clean; unit tests added/updated; build passes.
- [ ] Accessibility verified.
- [ ] Performance budget respected.
