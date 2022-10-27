import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: [
        'nuxtjs-named-routes'
    ],
    namedRoutes: {
        routes: {
            home: {
                path: '/home',
                file: '/pages/homepage.vue'
            }
        }
    }
})
