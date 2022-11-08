import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '@/views/User/UserView.vue'
import Home from '@/views/Home/HomeView.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/user', component: User }
  ]
})

export default router
