# Contributing to thecueRoom_V2

Thanks for helping evolve **thecueRoom_V2**. This project emphasizes performance, accessibility, and design precision.

## Ground Rules (Non‑Negotiables)
- **Header**: DOM/classes unchanged. Sticky; body scrolls underneath.
- **Logo**: Inline animated SVG on every page; must respect `prefers-reduced-motion`.
- **Brand tokens**: 
  - Background: `#0B0D0F` / `#0F1216`
  - Text: `#E6E8EB` / `#9BA1A6`
  - Accents: `#B2FF00` / `#8C4BFF`
- **Typography**: Space Grotesk + Inter.
- **Accessibility**: WCAG AA+ minimum. Lime focus rings. Keyboard nav everywhere.
- **Auth**: SSO-only modal (Google primary, Apple secondary, Instagram tertiary) with focus trap, ESC, click-outside; triggers `#cta-join` and `.js-login-link`.
- **Feature flags** (typed, wrap UI + logic): `ai_feed`, `meme_tools`, `stage_plot`, `epk_export`, `gig_radar`, `news_rail`, `reactions_particles`, `dm_encryption_badge`.
- **Audio**: Auto-fallback to `AnalyserNode` when AudioWorklet/COEP unavailable; visuals/meters must keep running.

## Tech
Vite • React 18 • TypeScript (strict) • TailwindCSS • Radix UI • wouter • three.js • twgl.js • onnxruntime-web.

## Dev Setup
```bash
npm i
npm run dev -- --port 5173
npm run build
```

## Branching & Commits
- Branch names: `feat/…`, `fix/…`, `chore/…`, `docs/…`, `refactor/…`.
- **Conventional Commits**: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`.

## Coding Standards
- TypeScript **strict**; no `any` without justification.
- ESLint + Prettier must pass cleanly (no warnings).
- Reusable, modular components; tree-shakeable.
- Respect `prefers-reduced-motion` for all animations.
- No DOM shape changes to header; reuse the inline logo component.
- Use Tailwind tokens + CSS variables for brand colors and focus rings.

## Tests (Required)
- Unit tests: 
  - Feature flag provider and hooks.
  - Login modal (focus trap, ESC, click‑outside).
  - Sticky header behavior (layout shell).
- Exploratory
  - AI features (`ai_feed`, `epk_export`) flow and error handling.
  - Audio visualization performance with **AudioWorklet** and **AnalyserNode** fallback.
- Accessibility: keyboard nav; reduced motion; contrast AA+.

## Performance
- Code-split routes and heavy visualizations.
- Lazy-load non-critical modules; prefer `import()`.
- Avoid layout thrashing; batch DOM reads/writes; prefer CSS transforms.
- Ensure WebGL effects degrade gracefully on low‑end devices.

## PR Checklist
- [ ] Conventional commit title.
- [ ] All flags wrap new UI/logic as needed.
- [ ] Header DOM/classes untouched; sticky verified.
- [ ] Inline logo present; respects reduced motion.
- [ ] ESLint/TS clean; unit tests added/updated; build passes.
- [ ] Accessibility verified (keyboard, focus, reduced motion).
- [ ] Performance budget respected (bundle size + runtime).

## Submitting a PR
1. Fork and create a feature branch.
2. Implement changes with tests.
3. Run lint/build locally; attach screenshots or short clips.
4. Open PR; link issues; describe feature flags affected.
