import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'introduction',
    component: () => import('../views/IntroductionView.vue')
  },
  {
    path: '/waiting',
    name: 'waiting',
    component: () => import('../views/WaitingView.vue')
  },
  {
    path: '/pokemons',
    name: 'pokemons',
    component: () => import('../views/PokemonsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
