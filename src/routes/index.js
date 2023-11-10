import { createRouter, createWebHistory } from 'vue-router'
import Contact from "./../pages/Contact.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router
