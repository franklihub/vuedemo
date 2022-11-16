import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import router from '@/router/index'
import ElementPlus, { Loading } from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.productionTip = false
app.use(Vant)
app.use(router)
app.use(ElementPlus)
axios.defaults.baseURL = 'https://www.escook.cn/api/cart'
let loadingInstance = null
axios.interceptors.request.use(config => {
  config.headers.Authorization = 'token'
  loadingInstance = Loading.service({ fullscreen: true })
  return config
})
axios.interceptors.response.use(response => {
  loadingInstance.close()
  return response
})
app.config.globalProperties.$http = axios

app.mount('#app')
