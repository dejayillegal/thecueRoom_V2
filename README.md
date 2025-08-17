# thecueRoom_V2

TheCueRoom is a next-generation platform for artists, DJs, and creators — built with performance, accessibility, and design precision in mind.  
This V2 release upgrades the [original repo](https://github.com/dejayillegal/thecueroom) with a modernized UI/UX, feature flags, AI-powered enhancements, and a future-proof architecture.

---

## 🚀 Tech Stack

- **Frontend:** Vite • React 18 • TypeScript (strict) • TailwindCSS • Radix UI • wouter  
- **Graphics/Audio:** three.js • twgl.js • AudioWorklet (with AnalyserNode fallback for Safari/Replit)  
- **AI/Processing:** onnxruntime-web • lamejs • flac-encoder-typescript • browser-id3-writer • fflate  

---

## 🎨 Design System

Non-negotiables for brand and accessibility:

- **Colors (Rainforest tokens):**  
  - Background: `#0B0D0F` / `#0F1216`  
  - Text: `#E6E8EB` / `#9BA1A6`  
  - Accents: `#B2FF00` / `#8C4BFF`

- **Typography:**  
  - Space Grotesk (headlines)  
  - Inter (body, UI)

- **Accessibility:**  
  - WCAG AA+ contrast compliance  
  - Lime focus rings for clear keyboard navigation  
  - `prefers-reduced-motion` respected in all animations  

- **Logo:**  
  - Inline animated SVG embedded globally  
  - Animation halts when `prefers-reduced-motion` is enabled  

- **Header:**  
  - DOM/classes remain unchanged  
  - Sticky header; body scrolls underneath  

---

## 🔐 Authentication

Login modal spec:

- **SSO only:**  
  - Google (primary)  
  - Apple (secondary)  
  - Instagram (tertiary)  

- **Accessibility:**  
  - Focus trap  
  - ESC to close  
  - Click-outside to close  

- **Triggers:**  
  - `#cta-join`  
  - `.js-login-link`

---

## 🧩 Feature Flags

All major modules are controlled via typed feature flags:

- `ai_feed`  
- `meme_tools`  
- `stage_plot`  
- `epk_export`  
- `gig_radar`  
- `news_rail`  
- `reactions_particles`  
- `dm_encryption_badge`

Flags allow safe rollout, A/B testing, and controlled deployments.

---

## ⚡ Getting Started

```bash
# clone repo
git clone https://github.com/dejayillegal/thecueRoom_V2.git
cd thecueRoom_V2

# install dependencies
npm install

# start dev server
npm run dev -- --port 5173

# run production build
npm run build
```

---

## 🛠 Development Notes

- Always return **clean TS/ESLint builds** — no warnings or errors.  
- Inline animated logo is **never replaced**, only reused.  
- Performance budget: minimize bundle size, lazy-load non-critical assets.  
- Test fallback paths: if AudioWorklet unavailable, ensure AnalyserNode drives visuals/meters.  
- Accessibility and responsiveness are mandatory.  

---

## 🧪 Testing

- Unit tests for feature flag provider, login modal accessibility, and sticky header.  
- Exploratory testing for:  
  - AI features (`ai_feed`, `epk_export`)  
  - Audio visualization performance (WebGL + AnalyserNode fallback)  
- Manual accessibility audits (keyboard navigation, reduced motion).  

---

## 📦 Deployment

- Built for Vercel / Netlify static hosting.  
- GitHub Actions can be added for CI/CD (lint + build).  

---

## 🤝 Contributing

1. Fork the repo and create a new branch.  
2. Follow coding standards — typed, modular, accessible.  
3. Ensure feature flags wrap new functionality.  
4. Submit a PR with screenshots or video of new features.  

---

## 🪐 Credits

- V1 Source: [thecueroom](https://github.com/dejayillegal/thecueroom)  
- V2 Upgrade: Enhanced UI/UX, feature flag system, AI tooling, accessibility compliance.  

---
