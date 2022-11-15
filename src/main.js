import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
// Vue.config.productionTip = false
const app = createApp(App)
app.use(Vant)

axios.defaults.baseURL = 'https://www.escook.cn/api/cart'
app.config.globalProperties.$http = axios

app.mount('#app')
