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
      path: '/ResturantTwoColumn',
      name: 'ResturantTwoColumn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResturantTwoColumn.vue')
    },
    {
      path: '/FoodMenu',
      name: 'FoodMenu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FoodMenu.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  // 每次路由切換的時後回到頂部
  window.scrollTo(0, 0);
  next();
});
export default router
