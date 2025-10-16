import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.{vue,js,ts}",
    "./error.{vue,js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans 3", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(16, 185, 129, 0.15), 0 15px 35px -15px rgba(16, 185, 129, 0.3)"
      }
    }
  },
  plugins: []
} satisfies Config;
