import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/InicioView.vue')
    },  
    {
      path: '/primeira',
      name: 'primeira',
      component: () => import('../views/PrimeiraParteView.vue')
    },  
    {
      path: '/segunda',
      name: 'segunda',
      component: () => import('../views/SegundaParteView.vue')
    },
    {
      path: '/terceira',
      name: 'terceira',
      component: () => import('../views/TerceiraParteView.vue')
    },
    {
      path: '/quarta',
      name: 'quarta',
      component: () => import('../views/QuartaParteView.vue')
    },
  ]
})

export default router
