import { resolve } from 'path'
import { defineNuxtModule, extendPages, loadNuxtConfig, useLogger } from '@nuxt/kit'

export interface ModuleOptionsRoute {
[key: string]: {
    file: string
    path: string
}
}
export interface ModuleOptions {
  routes: ModuleOptionsRoute
}

const logger = useLogger('nuxt:named-routes')

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: '@nuxtjs/named-routes',
        configKey: 'namedRoutes'
    },
    defaults: {
        routes: {}
    },
    setup (options, nuxt) {
        extendPages((pages) => {
            // named routes configured?
            const routesKeys = Object.keys(options.routes)
            if (!routesKeys.length) {
                logger.warn('No named routes defined. Please add a named route in nuxt.config.ts file')
                return
            }
            // add name routes to the nuxt config
            routesKeys.forEach((key) => {
                pages.push({
                    name: key,
                    path: options.routes[key].path,
                    file: resolve(__dirname, `${nuxt.options.srcDir}${options.routes[key].file}`)
                })
            })
        })
    }
})
