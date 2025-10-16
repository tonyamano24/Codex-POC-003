// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      title: 'Ton Yamano Gallery',
      meta: [
        {
          name: 'description',
          content: 'A serene photo gallery showcasing the photography of Ton Yamano.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      photographer: 'Ton Yamano'
    }
  }
})
