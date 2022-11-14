import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'

const app = createApp(App)
app.use(Vant)

axios.defaults.baseURL = 'http://api.com'
app.config.globalProperties.$http = axios

app.mount('#app')
