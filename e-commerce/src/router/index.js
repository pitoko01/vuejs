import { createRouter, createWebHistory } from 'vue-router'
import SiteView from '@/views/SiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: SiteView
    },
    {
    }
  ]
})

export default router
