import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './src/components/**/*.{vue,js,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['\"Playfair Display\"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        accent: '#f97316',
        dark: '#1f2937',
        light: '#f3f4f6'
      }
    }
  }
}
