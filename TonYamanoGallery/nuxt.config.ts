// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  runtimeConfig: {
    public: {
      siteName: "TonYamanoGallery",
      tagline: "Capturing life in brilliant colors"
    }
  },
  app: {
    head: {
      titleTemplate: "%s · TonYamanoGallery",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Ton Yamano's personal photo gallery showcasing travel adventures, portrait sessions, and behind-the-scenes stories."
        }
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
        }
      ]
    }
  },
  tailwindcss: {
    viewer: false
  },
  devtools: { enabled: true }
});
