import API_RESOURCE from "./api/API_RESOURCE";

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usagethis->$axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },


  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/',
      rewriteRedirects: true
    },

    strategies: {
      local: {
        token: {
          name: 'Authorization',
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 1800,
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: API_RESOURCE.USER_LOGIN, method: 'post' },
          logout: { url: API_RESOURCE.USER_LOGOUT, method: 'post' },
          user: { url: API_RESOURCE.USER_GET_INFO, method: 'get' }
        },
        clientId: true,
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday'
        },
        clientId: '...', // liên kết nhà phát triền
        scope: ['public_profile', 'email', 'user_birthday']
      },
      google: {
        clientId: '...'
      },
    }
  },

  router: {
    middleware: ['auth']
  }
}
