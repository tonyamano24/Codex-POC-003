import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        night: {
          50: '#f5f7fb',
          100: '#e2e7f5',
          200: '#c8d3eb',
          300: '#a1b3de',
          400: '#738bcc',
          500: '#536ab5',
          600: '#404f98',
          700: '#35407b',
          800: '#313767',
          900: '#1c213f'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
