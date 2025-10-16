// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: "TonYamanoGallery",
      meta: [
        { name: "description", content: "Personal photo gallery for Ton Yamano with version previews" }
      ]
    }
  }
});
