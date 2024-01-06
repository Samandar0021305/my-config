import { createRouter, createWebHistory, type RouteRecordRaw, RouterView } from 'vue-router';

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;