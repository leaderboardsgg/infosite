export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Infosite for leaderboards.gg',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/mixins/mixins.scss',
      '~/assets/scss/settings/variables.scss',
      '~/assets/scss/styles.scss'
    ]
  },

  googleFonts: {
    // https://www.elian.codes/blog/adding-google-fonts-to-your-nuxtjs-site/
    download: true,
    families: {
      Inter: true,
      Monofett: true,
      'Mr+Dafoe': true,
      'Bungee+Shade': true,
    },
    preload: true,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    //  https://codesandbox.io/s/github/nuxt-community/svg-sprite-module/
    '@nuxtjs/svg-sprite',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

// font-family: 'Bungee Shade', cursive;
// font-family: 'Codystar', cursive;
// font-family: 'DotGothic16', sans-serif;
// font-family: 'Knewave', cursive;
// font-family: 'Major Mono Display', monospace;
// font-family: 'Monofett', cursive;
// font-family: 'Monoton', cursive;
// font-family: 'Neonderthaw', cursive;
// font-family: 'Press Start 2P', cursive;
// font-family: 'Special Elite', cursive;
