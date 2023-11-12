import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/largeScreen',
      name: 'LargeScreen',
      component: () => import('@/views/visualLargeScreen/largeScreen.vue')
    }
  ]
})

export default router
