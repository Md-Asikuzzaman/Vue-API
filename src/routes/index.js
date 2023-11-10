import { createRouter, createWebHistory } from 'vue-router'

import Home from './../pages/Home.vue'
import About from './../pages/About.vue'
import Posts from './../pages/Posts.vue'
import PostDetail from './../pages/PostDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: PostDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "option--active"
})

export default router
