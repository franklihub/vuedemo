// import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import User from '@/views/User/UserView.vue'
import Home from '@/views/Home/HomeView.vue'
// Vue.use(VueRouter)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    {
      path: '/user',
      component: User,
      children: [
        { path: 'a', component: User }
      ]
    }
  ]
})

export default router
