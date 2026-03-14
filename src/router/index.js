import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Dadio - Find Friends, Love, and Meaningful Connections' }
  },
  {
    path: '/about-us',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About Us - Dadio' }
  },
  {
    path: '/terms-of-use',
    name: 'terms',
    component: () => import('../views/TermsView.vue'),
    meta: { title: 'Terms of Use - Dadio' }
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact Us - Dadio' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Dadio - Dating & Friend-Making App'
  next()
})

export default router
