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
        'custom-key': {
            path: '/custom-url-for-homepage',
            file: '/pages/homepage.vue'
        }
    }
  }
}
```

3. Use the named route
```js
<NuxtLink :to={name: 'custom-key'}>Link to to homepage</NuxtLink>
```

The code above will generate HTML link

```html
<a href="/custom-url-for-homepage">Link to to homepage</a>
```

## Options

### routes

- Type: `Object`
- Default: `{}`

```js
routes: {
  'named-route-key': {
    path: '/url-path',
    file: '/pages/homepage.vue'
}
}
```

## License

[MIT License](./LICENSE)

Copyright (c) - Tibor Piňo