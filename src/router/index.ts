import { createRouter, createWebHistory } from 'vue-router'
import UserHomeView from '@/views/User/UserHomeView.vue'
import SplashView from '@/views/SplashView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: SplashView
    },
    {
      path: '/shop',
      name: 'UserHome',
      component: UserHomeView
    }
  ]
})

export default router
