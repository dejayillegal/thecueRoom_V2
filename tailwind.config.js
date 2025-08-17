import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0D0F',
          subtle: '#0F1216'
        },
        text: {
          DEFAULT: '#E6E8EB',
          muted: '#9BA1A6'
        },
        accent: {
          lime: '#B2FF00',
          purple: '#8C4BFF'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
