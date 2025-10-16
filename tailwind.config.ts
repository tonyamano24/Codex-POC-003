import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1e293b',
          accent: '#f97316',
          subtle: '#e2e8f0',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        gallery: '0 10px 40px -15px rgba(15, 23, 42, 0.6)',
      },
    },
  },
  plugins: [],
} satisfies Config;
