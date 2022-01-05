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
    component: () => import(/* webpackPrefetch: 0 */ '../views/Props/Props.vue')
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
  {
    path: '/Calculator',
    name: 'Calculator',
    component: () => import( '../views/CompositionAPI/Calculator.vue')
  },
  {
    path: '/Composition',
    name: 'Composition',
    component: () => import( '../views/CompositionAPI/CompositionAPI.vue')
  },
  {
    path: '/Composition2',
    name: 'Composition2',
    component: () => import( '../views/CompositionAPI/CompositionAPI2.vue')
  },
  {
    path: '/Provide',
    name: 'Provide',
    component: () => import( '../views/CompositionAPI/Provide.vue')
  },
  {
    path: '/Directives',
    name: 'Directives',
    component: () => import( '../views/Directives/Directives.vue')
  },
]


    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
