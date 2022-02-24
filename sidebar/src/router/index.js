import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),    // 괄호를 넣어 함수로
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: () => import('../views/About.vue')
        }
    ]
})

export default router