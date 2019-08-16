module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/tailwind.css',
    'ant-design-vue/dist/antd.less',
    '~/assets/scss/main.scss', // any custom styling for global configuration
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/antd-ui',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            // libraryDirectory: 'es'
            // style: true
          },
          'ant-design-vue',
        ],
      ],
    },
    splitChunks: {
      layouts: true,
    },
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#78C360',
          'link-color': '#78C360',
          'component-background': '#ffffff',
        },
      },
    },
    extend(config, { loaders: { scss } }) {
      // eslint-disable-next-line no-param-reassign
      scss.includePaths = ['node_modules'];
    },
  },
};
