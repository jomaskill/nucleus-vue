import { createRouter, createWebHistory } from 'vue-router'
import DashboardIndex from '@/views/dashboard/DashboardIndex.vue'
import DonorsIndex from '@/views/crm/donors/DonorsIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardIndex
    },
    {
      path: '/donors',
      name: 'donors',
      component: () => DonorsIndex
    }
  ]
})

export default router
