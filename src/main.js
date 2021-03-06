// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import service from './fetch/index'
import store from './store/index'


Vue.config.productionTip = false
Vue.prototype.$axios = service



import loadingPlugin from './plugins/loading'
Vue.use(loadingPlugin)
import lazyImg from './plugins/lazyImg'
Vue.use(lazyImg)

import Lazyload from "vue-lazyload-img"
Vue.use(Lazyload,{
   fade: true,
   time: 300,
   preload: 0,
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
