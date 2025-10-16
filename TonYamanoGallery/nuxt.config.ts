// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  app: {
    head: {
      title: 'Ton Yamano Gallery',
      meta: [
        { name: 'description', content: 'Ton Yamano\'s personal photo gallery showcasing travels and creative explorations.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  tailwindcss: {
    viewer: false
  },
  css: [
    '@/assets/css/tailwind.css'
  ],
  runtimeConfig: {
    public: {
      siteOwner: 'Ton Yamano'
    }
  }
})
