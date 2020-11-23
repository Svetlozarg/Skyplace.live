import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Fortune from '../views/Fortune.vue';
import About from '../views/About.vue';
import FAQ from '../views/FAQ.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/fortune',
    component: Fortune,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/FAQ',
    component: FAQ,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
