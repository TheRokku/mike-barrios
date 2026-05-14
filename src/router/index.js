import { createRouter, createWebHistory } from 'vue-router';
import { useLang } from '../composables/useLang.js';

const routes = [
  {
    path: '/',
    name: 'lang',
    component: () => import('../pages/LangSelect.vue'),
  },
  { path: '/home', name: 'home', component: () => import('../pages/Home.vue') },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../pages/Services.vue'),
  },
  {
    path: '/academy',
    name: 'academy',
    component: () => import('../pages/Academy.vue'),
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../pages/Events.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/Contact.vue'),
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, top: 100, behavior: 'smooth' });
        }, 100);
      });
    }
    return { top: 0, behavior: 'smooth' };
  },
});

router.beforeEach((to) => {
  const { lang } = useLang();
  if (to.name !== 'lang' && !lang.value) return { name: 'lang' };
});
