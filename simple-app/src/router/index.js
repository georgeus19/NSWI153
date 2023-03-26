import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import About from '../About.vue'
import Increase from '../Increase.vue'
import Decrease from '../Decrease.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/inc',
      name: 'increase',
      component: Increase
    },
    {
      path: '/dec',
      name: 'decrease',
      component: Decrease
    }
  ]
})

export default router
