import { createRouter, createWebHistory } from 'vue-router'
import DashboardIndex from '@/views/dashboard/DashboardIndex.vue'
import DonorsIndex from '@/views/crm/donors/DonorsIndex.vue'
import LoginView from '@/views/auth/LoginView.vue'
import { useAuthStore } from '@/stores/auth.js'
import BlankPage from '@/layouts/BlankPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardIndex
    },
    {
      path: '/crm/donors',
      name: 'donors',
      component: () => DonorsIndex
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: BlankPage },
    },
  ]
})

router.beforeEach(async (to) => {
  console.log(!useAuthStore().isAuthenticated);

  if (!useAuthStore().isAuthenticated){
    await useAuthStore().fetchUser();
  }

  if (
    !useAuthStore().isAuthenticated &&
    to.name !== 'login'
  ) {
    return { name: 'login' }
  }

  if (
    useAuthStore().isAuthenticated && to.name === 'login'

  ) {
    return { name: 'dashboard' }
  }
})
export default router
