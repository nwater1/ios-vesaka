import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [{ src: 'https://static.line-scdn.net/liff/edge/versions/2.6.0/sdk.js', charset: 'utf-8' }, { src: 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v9.0&appId=1093024467833550&autoLogAppEvents=1' }],
    titleTemplate: 'ลงชื่อเพื่อ ร่วมเป็น 1 ในผู้สถาปนา ในวันวิสาขบูชาโลก ออนไลน์ ครั้งที่1',
    title: 'ลงชื่อเพื่อ ร่วมเป็น 1 ในผู้สถาปนา ในวันวิสาขบูชาโลก ออนไลน์ ครั้งที่1',
    htmlAttrs: {
      lang: 'th'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ลงชื่อเพื่อ ร่วมเป็น 1 ในผู้สถาปนา ในวันวิสาขบูชาโลก ออนไลน์ ครั้งที่1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/ico.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-lazyload'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/cloudinary',
    '@nuxtjs/gtm',
    'vue-social-sharing/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyA30TRUyk1EjzWlKuZSPt7LQa-M_O8HqGY',
          authDomain: 'vesak-reserva.firebaseapp.com',
          databaseURL: 'https://vesak-reserva-default-rtdb.asia-southeast1.firebasedatabase.app/',
          projectId: 'vesak-reserva',
          storageBucket: 'vesak-reserva.appspot.com',
          messagingSenderId: '1074897994375',
          appId: '1:1074897994375:web:cf5150276cf9d75734ee22',
          measurementId: 'G-J88BGTB2GN'
        },
        services: {
          firestore: true
        }
      }
    ]

  ],

  firestore: {
    memoryOnly: false, // default
    chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
    enablePersistence: true,
    emulatorPort: 8080,
    emulatorHost: 'localhost',
    settings: {
      // Firestore Settings - currently only works in SPA mode
    }
  },
  services: {
    auth: true,
    firestore: true,
    functions: true,
    storage: true,
    database: true,
    messaging: true,
    performance: true,
    analytics: true,
    remoteConfig: true
  },
  // seo: {
  //  image: 'https://res.cloudinary.com/dz4zph4bl/image/upload/v1612948848/web_qjelic.jpg',
  //  baseUrl: 'https://master.d35xisgv6y1ahr.amplifyapp.com/',
  //  name: 'จองโคมจุดประทีปออนไลน์',
  //  description: 'ร่วมจองโคมจุดประทีปออนไลน์ ในวันมาฆบูชา',
  //  canonical: 'auto'
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  cloudinary: {
    cloudName: 'dda7dxqvr',
    apiKey: '999178946584953',
    apiSecret: 'DCnW_dN08C2FgDOkmlLDpJtDcck',
    useComponent: true
    // Cloudinary configuration options
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }

      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
