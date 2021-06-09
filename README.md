# Vue Storefront with Shopify

Vue Storefront with Shopify.

A basic storefront that can leverage any backend, CMS, and e-commerce platform

## Setup

1. Fill in the project credentials in `middleware.config.js` (env. variables suggested)

```js
module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: '<SHOPIFY_DOMAIN>',
          storefrontAccessToken: '<SHOPIFY_ACCESS_TOKEN>'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
```

2. Run the project

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org) / [Vue Storefront Docs](https://docs.vuestorefront.io/v2/).
