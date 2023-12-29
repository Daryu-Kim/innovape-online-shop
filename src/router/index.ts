import { createRouter, createWebHistory } from 'vue-router'
import UserHomeView from '@/views/User/UserHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UserHome',
      component: UserHomeView
    }
  ]
})

export default router
