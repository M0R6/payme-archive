import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#334155',
          },
        },
      },
    },
    defaults: {
      VBtn: { style: 'text-transform: none; font-weight: 600;' },
    },
  })
  app.vueApp.use(vuetify)
})