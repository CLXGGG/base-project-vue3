import { createRouter, createWebHistory } from 'vue-router'
import SwitchTool from '@/views/SwitchTool.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SwitchTool
    },
  ]
})

export default router
