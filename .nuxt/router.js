import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a66826e = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _0893eb11 = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _1a93d35d = () => interopDefault(import('../pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _8d79b530 = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _77a0cebc = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _612e9a63 = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _0caf2faa = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _4503bd26 = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _2fa1e4a0 = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _0bd47d26 = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _b6ff7bc4 = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _e6e888d8 = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _57e2c5f4 = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _7fc5637f = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _7476172b = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _32e34118 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _6a66826e,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _0893eb11,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _1a93d35d,
      name: "billing___en"
    }, {
      path: "payment",
      component: _8d79b530,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _77a0cebc,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _612e9a63,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _0893eb11,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _1a93d35d,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _8d79b530,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _77a0cebc,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _612e9a63,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _0caf2faa,
    name: "home___de"
  }, {
    path: "/Home",
    component: _0caf2faa,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _4503bd26,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _2fa1e4a0,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _0bd47d26,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _b6ff7bc4,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _e6e888d8,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _57e2c5f4,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _7fc5637f,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _7476172b,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _32e34118,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _6a66826e,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _0893eb11,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _1a93d35d,
      name: "billing___de"
    }, {
      path: "payment",
      component: _8d79b530,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _77a0cebc,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _612e9a63,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _0893eb11,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _1a93d35d,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _8d79b530,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _77a0cebc,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _612e9a63,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _0caf2faa,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _4503bd26,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _2fa1e4a0,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _0bd47d26,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _b6ff7bc4,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _e6e888d8,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _57e2c5f4,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _7fc5637f,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _7476172b,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _32e34118,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _4503bd26,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _32e34118,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _6a66826e,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _4503bd26,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _32e34118,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _6a66826e,
    name: "category___en"
  }, {
    path: "/",
    component: _0caf2faa,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
