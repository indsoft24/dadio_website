import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'HeyyPal - All the Experts You Need, All in One Place' }
  },
  {
    path: '/about-us',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About Us - HeyyPal' }
  },
  {
    path: '/terms-of-use',
    name: 'terms',
    component: () => import('../views/TermsView.vue'),
    meta: { title: 'Terms of Use - HeyyPal' }
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact Us - HeyyPal' }
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
  document.title = to.meta.title || 'HeyyPal - Audio Social Network'
  next()
})

export default router
