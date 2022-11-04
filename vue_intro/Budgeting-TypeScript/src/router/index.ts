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
      path: '/summary',
      name: 'summary',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SummaryView.vue'),
    },
    {
      path: '/income_history',
      name: 'income history',
      component: () => import('../views/IncomeHistoryView.vue')
    },
    {
      path: '/expense_history',
      name: 'expense history',
      component: () => import('../views/ExpenseHistoryView.vue')
    }
  ]
})

export default router
