# AGENT.md — thecueRoom_V2 Automation Contract

**Purpose**: Automate implementation tasks and enforce project non-negotiables.

## Rules
1. Output contract:
   - Return ONLY:
   - `git diff --patch` for files changed/created
    - Trimmed logs from `npm i`, `npm run dev`, `npm run build`
    - Final line: `NEXT_STEPS: {"remaining": []}` JSON for unfinished tasks
   - No prose or placeholders

2. Non-negotiables:
   - Sticky header DOM/classes unchanged
   - Inline animated SVG logo everywhere; reduced motion respected
   - Brand tokens: bg `#0B0D0F/#0F1216`, text `#E6E8EB/#9BA1A6`, accents `#B2FF00/#8C4BFF`
   - Fonts: Space Grotesk + Inter; lime focus rings
   - Login modal: Google, Apple, Instagram SSO; focus trap; ESC + click-outside; triggers `#cta-join`, `.js-login-link`
   - Feature flags: `ai_feed`, `meme_tools`, `stage_plot`, `epk_export`, `gig_radar`, `news_rail`, `reactions_particles`, `dm_encryption_badge`
   - Audio fallback: AnalyserNode when Worklet/COEP unavailable

3. Code quality:
   - TypeScript strict, ESLint/Prettier clean
   - Modular, accessible, performant

## Steps
```bash
npm i
npm run dev -- --port 5173
# implement changes
npm run build
```
Then return diffs + logs.
