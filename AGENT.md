# AGENT.md — Automation & Code Agent Contract

**Objective**: Implement changes directly in code and return only `git diff --patch` plus trimmed dev/build logs.

## Source of Truth
- Use the live repo as reference for header + logo and baseline behavior:
  - https://github.com/dejayillegal/thecueroom

## Hard Rules
1) Output contract:
   - Return ONLY:
     - Unified diffs for every file changed/created.
     - Trimmed logs from `npm i`, first `npm run dev`, and `npm run build`.
   - No prose or placeholders.
2) Non‑negotiables:
   - Sticky header DOM/classes **unchanged**; body scrolls under.
   - Inline animated SVG logo everywhere; obey `prefers-reduced-motion`.
   - Brand tokens: bg `#0B0D0F/#0F1216`, text `#E6E8EB/#9BA1A6`, accents `#B2FF00/#8C4BFF`.
   - Fonts: Space Grotesk + Inter; AA+ accessibility with lime focus rings.
   - SSO‑only modal (Google/Apple/Instagram) with focus trap, ESC, click‑outside; triggers `#cta-join`, `.js-login-link`.
   - Feature flags: `ai_feed`, `meme_tools`, `stage_plot`, `epk_export`, `gig_radar`, `news_rail`, `reactions_particles`, `dm_encryption_badge`.
   - Audio fallback: if AudioWorklet/COEP unavailable, use AnalyserNode, keep visuals live.
3) Code quality:
   - TS strict; ESLint/Prettier clean; no warnings.
   - Production‑grade; accessible; responsive.

## Steps to Perform
0) Install & run:
```bash
npm i
npm run dev -- --port 5173
```
1) If needed, clone live reference into `external/thecueroom_src` (read‑only) to copy header + logo and compare behavior.
2) Implement requested feature; guard with flags as appropriate.
3) Ensure accessibility + performance targets.
4) Build:
```bash
npm run build
```
5) Return diffs + trimmed logs. Done.
