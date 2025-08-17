# CODEX_START_PROMPT — thecueRoom_V2 (Replit/GitHub Models Ready)

You are an expert full‑stack engineer.

Objective
- Analyze and fix the repository so it builds and runs cleanly.
- Implement missing pieces per non‑negotiables.
- Deploy via GitHub Pages using the provided workflow.

Source repos
- Current app repo (target): https://github.com/dejayillegal/thecueRoom_V2
- Baseline reference (design/header/logo only): https://github.com/dejayillegal/thecueroom

Output contract (strict)
- Return ONLY:
  1) Unified diffs (`git diff --patch`) for each file changed/created
  2) Trimmed logs from: `npm ci` (or `npm i`), first `npm run dev`, and `npm run build`
- No prose, no placeholders. All code must run.

Non‑negotiables
- Sticky header DOM/classes unchanged; body scrolls under.
- Inline animated SVG logo on every page; respect `prefers-reduced-motion`.
- Rainforest tokens:
  - bg: #0B0D0F/#0F1216, text: #E6E8EB/#9BA1A6, accents: #B2FF00/#8C4BFF
- Fonts: Space Grotesk + Inter; AA+ accessibility with visible lime focus rings.
- Login modal: SSO only (Google primary, Apple secondary, Instagram tertiary), focus trap, ESC + click‑outside; triggers `#cta-join` and `.js-login-link`.
- Feature flags (typed, wrap UI+logic): ai_feed, meme_tools, stage_plot, epk_export, gig_radar, news_rail, reactions_particles, dm_encryption_badge.
- Safari/Replit: if AudioWorklet/COEP unavailable, auto‑fallback to AnalyserNode; visuals/meters remain functional.

Required fixes/validations
1) Build hygiene
   - Ensure TypeScript strict and ESLint produce **no warnings**.
   - Ensure `vite.config.ts` has correct **base** for GH Pages:
     - Dynamic base: `process.env.GITHUB_ACTIONS ? "/thecueRoom_V2/" : "/"`
   - Ensure Tailwind tokens and fonts are wired; AA+ contrast.
2) Pages deploy
   - Include `.github/workflows/gh-pages.yml` per below.
   - Ensure output dir is `dist`.
3) Auth modal
   - Implement SSO modal (buttons in order: Google > Apple > Instagram), focus trap, ESC + click‑outside, bound to `#cta-join` and `.js-login-link`.
4) Feature flags
   - Provide typed flag provider & `useFlag()` hook; gate UI/logic.
5) Visuals
   - Visualizers render under Worklet and degrade to AnalyserNode.
6) Docs
   - Ensure README.md and docs/ reflect thecueRoom only (no other project).

Files to add/update (if missing or incorrect)
- `.github/workflows/gh-pages.yml` (use YAML below verbatim if absent)
- `vite.config.ts` (ensure dynamic base)
- `src/app/flags/*` (typed flags + provider + hook)
- `src/app/auth/LoginModal.*` (SSO modal with a11y behaviors)
- `src/app/layout/AppShell.*` (sticky header + inline logo)
- `src/styles/tokens.css` + `tailwind.config.js` (brand tokens + focus rings)
- `README.md` + `docs/*`

YAML to use for GH Pages (if not present)
-----------------------------------------
# .github/workflows/gh-pages.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install
        run: npm ci || npm i

      - name: Build
        env:
          GITHUB_ACTIONS: "true"
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

Acceptance
- After implementing, ensure `npm run dev` and `npm run build` are clean.
- Return diffs + logs only.
