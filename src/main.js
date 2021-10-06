// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/index.css'
import './assets/css/styles.css'
import './assets/js/scripts.js'

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.mixin({
        data() {
            return {
                GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
            }
        }
    })
}
