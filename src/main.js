// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/bootstrap.min.css'
import '~/assets/css/base.css'



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Major+Mono+Display'
  })

  Vue.component('Layout', DefaultLayout)
}

