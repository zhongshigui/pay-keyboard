import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuePayKeyboard from './components/lib/index.js'
// import vuePayKeyboard from './lib/indexvue-pay-keyboard'
Vue.use(vuePayKeyboard)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
