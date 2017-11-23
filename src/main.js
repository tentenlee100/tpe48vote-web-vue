// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueScrollTo from 'vue-scrollto';
import store from './store'
import VueYoutube from 'vue-youtube'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueScrollTo)
Vue.use(VueYoutube)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
