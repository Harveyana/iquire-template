export default {
   // Global page headers: https://go.nuxtjs.dev/config-head
   head: {
      title: 'iQuire | Students',
      
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { hid: 'description', name: 'description', content: 'Discover endless learning possibilities with our online courses from top tutors' },
         { hid: 'keywords', name: 'keywords', content: ' ' },

         { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
         { hid: 'og:type', property: 'og:type', content: 'webapp' },
         { hid: 'og:title', property: 'og:title', content: 'iQuire | Students' },
         { hid: 'og:description', property: 'og:description', content: 'Discover endless learning possibilities with our online courses from top tutors' },
         { hid: 'og:url', property: 'og:url', content: 'https://student.iquire.io' },
         { hid: 'og:image', property: 'og:image', content: '/student_og.png' },
         { hid: 'og:width', property: 'og:width', content: '1200' },
         { hid: 'og:height', property: 'og:height', content: '600' },
         { hid: 'og:alt', property: 'og:alt', content: 'iQuire Image Snippet' },

         { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
         { hid: 'twitter:title', name: 'twitter:title', content: 'iQuire | Students' },
         { hid: 'twitter:description', name: 'twitter:description', content: 'Discover endless learning possibilities with our online courses from top tutors' },
         { hid: 'twitter:url', name: 'twitter:url', content: 'https://student.iquire.io' },
         { hid: 'twitter:image', name: 'twitter:image', content: '/student_og.png' },
      ],

      link: [
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
   },
   target: 'static',

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: [
      '@/style/pages/root'
   ],

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [
   ],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: [
      {
         path: '~/components',
         pathPrefix: false,
      },
   ],

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [
   ],

   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      // https://go.nuxtjs.dev/pwa
      '@nuxtjs/pwa',
      // https://go.nuxtjs.dev/content
      '@nuxt/content',

   ],

   // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {
      // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      baseURL: '/',
   },

   // PWA module configuration: https://go.nuxtjs.dev/pwa
   pwa: {
      manifest: {
         lang: 'en'
      }
   },

   // Content module configuration: https://go.nuxtjs.dev/config-content
   content: {},

   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {
      loaders: {
         sass: {
            implementation: require('sass'),
         },
         scss: {
            implementation: require('sass'),
         },
      },
   }
}
