import { createRouter, createWebHistory } from 'vue-router'

import Home from './../pages/Home.vue'
import About from './../pages/About.vue'
import Posts from './../pages/Posts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/posts', component: Posts }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
