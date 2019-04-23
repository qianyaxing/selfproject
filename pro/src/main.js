// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import vueParticles from 'vue-particles'
import axios from 'axios'

Vue.config.productionTip = false
// 
Vue.prototype.$axios = axios
Vue.use(vueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
