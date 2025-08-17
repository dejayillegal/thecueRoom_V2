// tailwind.config.js — tokens prewired
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          alt: 'var(--color-bg-alt)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          mute: 'var(--color-text-mute)',
        },
        accent: {
          lime: 'var(--color-accent-lime)',
          purple: 'var(--color-accent-purple)',
        },
      },
      ringColor: {
        focus: 'var(--color-focus)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.24)',
      },
    },
  },
  plugins: [],
}
