import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2478a200 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _623fce48 = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _22608f94 = () => interopDefault(import('../pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _7de03cc2 = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _696b9965 = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _52f9650c = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _10434661 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _20d440cf = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _70b30c52 = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _1eb90f96 = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _1446b915 = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _36ce7ffd = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _7e51616f = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _20e84b14 = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _45f7ae58 = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _54cdb95d = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))

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
    component: _2478a200,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _623fce48,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _22608f94,
      name: "billing___en"
    }, {
      path: "payment",
      component: _7de03cc2,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _696b9965,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _52f9650c,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _623fce48,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _22608f94,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _7de03cc2,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _696b9965,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _52f9650c,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _10434661,
    name: "home___de"
  }, {
    path: "/Home",
    component: _10434661,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _20d440cf,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _70b30c52,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _1eb90f96,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _1446b915,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _36ce7ffd,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _7e51616f,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _20e84b14,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _45f7ae58,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _54cdb95d,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _2478a200,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _623fce48,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _22608f94,
      name: "billing___de"
    }, {
      path: "payment",
      component: _7de03cc2,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _696b9965,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _52f9650c,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _623fce48,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _22608f94,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _7de03cc2,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _696b9965,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _52f9650c,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _10434661,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _20d440cf,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _70b30c52,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _1eb90f96,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _1446b915,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _36ce7ffd,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _7e51616f,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _20e84b14,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _45f7ae58,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _54cdb95d,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _20d440cf,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _54cdb95d,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _2478a200,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _20d440cf,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _54cdb95d,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _2478a200,
    name: "category___en"
  }, {
    path: "/",
    component: _10434661,
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
