import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Props',
    name: 'Props',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: false */ '../views/Props/Props.vue')
  },
  {
    path: '/Repeat01',
    name: 'Repeat01',
    component: () => import( '../views/Repeat01.vue')
  },
  {
    path: '/다중이벤트',
    name: '다중이벤트',
    component: () => import( '../views/다중이벤트.vue')
  },
  {
    path: '/DataBindingList',
    name: 'DataBindingList',
    component: () => import( '../views/DataBindingList.vue')
  },
  {
    path: '/Parent',
    name: 'Parent',
    component: () => import( '../views/Props/Parent.vue')
  },
]


    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
