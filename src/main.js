// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import {
  currency
} from './util/currency'
import Vuex from 'vuex'
import 'babel-polyfill'

Vue.config.productionTip = false

Vue.use(infiniteScroll)

Vue.use(VueLazyLoad, {
  loading: "/static/loading-svg/loading-bars.svg"
});

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    cacheName: '',
    cartCount: 0
  },
  mutations: {
    updateCacheName(state, cacheName) {
      state.cacheName = cacheName
    },
    updateCartCount(state, cartCount) {
      state.cartCount = cartCount
    }
  }
})

Vue.filter('currency', currency)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
