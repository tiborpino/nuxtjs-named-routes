# nuxtjs-named-routes

> A Nuxt.js module that sets router named routes from nuxt.config file
## Features

- Nuxt 3 support
- Sets router named routes from nuxt.config file
## Setup

1. Add `nuxtjs-named-routes` dependency to your project
```bash
yarn add nuxtjs-named-routes # or npm install nuxtjs-named-routes
```

2. Add `nuxtjs-named-routes` to the `modules` section of `nuxt.config.ts`

```js
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
}
```
## Options

### routes

- Type: `Object`
- Default: `{}`

```js
routes: {
  path: '/home',
  file: '/pages/homepage.vue'
}
```

## License

[MIT License](./LICENSE)

Copyright (c) - Tibor Piňo