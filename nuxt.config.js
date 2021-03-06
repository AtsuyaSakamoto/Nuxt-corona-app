export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'らくらくコロナ',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/plugin.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap'
  ],
  'google-gtag': {
    id: 'G-NTBQTF1376',
    debug: true, // Enable to track in dev mode.
  },
  sitemap: {
    hostname: 'https://rakucoro-sakaaaa.vercel.app/',
    routes:[
      {
        url:"/data/pcrcorona",
        lastmod: new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
      },
      {
        url:"/data/bedusage",
        lastmod: new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
      },
      {
        url:"/data/prefectures",
        lastmod: new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
      },
      {
        url:"/data/wholecountry",
        lastmod: new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
      },
      {
        url:"/about",
        lastmod: "2021-09-01"
      },
      {
        url:"/",
        lastmod: new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-final-modal'],
    // analyze: true
  },
}
