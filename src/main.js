import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

import Vant from 'vant'
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
