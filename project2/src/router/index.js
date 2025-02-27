import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/configuracoes',
      name: 'configuracoes',
      component: () => import('../views/ConfiguracoesView.vue')
    },

  ]
})

export default router
