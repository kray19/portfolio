import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    // Uncomment these as you build each page:
    { path: '/about', component: () => import('../views/About.vue') },
    { path: '/experience', component: () => import('../views/Experience.vue') },
    { path: '/projects', component: () => import('../views/Projects.vue') },
    { path: '/contact', component: () => import('../views/Contact.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router