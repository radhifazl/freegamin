import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/explore',
    name: 'ExploreGames',
    component: () => import('../views/Explore.vue')
  },
  {
    path: '/pc-games',
    name: 'DD',
    component: () => import('@/views/PcGames.vue')
  },
  {
    path: '/browser-games',
    name: 'BrowserGames',
    component: () => import('@/views/BrowserGames.vue')
  },
  {
    path: '/game/:id/:name',
    name: 'GameDetails',
    component: () => import('@/views/GameDetails.vue')
  },
  {
    path: '/category',
    name: 'GameCategories',
    component: () => import('@/views/GameCategories.vue')
  },
  {
    path: '/games/category/:genre',
    name: 'GamesGenre',
    component: () => import('@/views/GamesGenre.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
