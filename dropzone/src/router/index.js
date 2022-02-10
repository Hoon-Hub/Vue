import { createRouter, createWebHistory } from 'vue-router'
import DropZone from '../views/DropZone.vue'

const routes = [
  {
    path: '/',
    name: 'DropZone',
    component: DropZone
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
