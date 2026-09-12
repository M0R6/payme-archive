import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...

  nitro: {
    preset: 'github-pages',
  },
  
  app: {
    baseURL: '/payme', 
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: '2024-10-19',
})
