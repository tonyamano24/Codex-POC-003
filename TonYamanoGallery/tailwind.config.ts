import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-noise': "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 60%)"
      }
    }
  },
  plugins: []
}
