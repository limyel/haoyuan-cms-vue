import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../components/Home.vue'),
        redirect: 'welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                component: () => import('../components/Welcome.vue')
            },
            {
                name: 'login',
                path: '/login',
                component: () => import('../components/Login.vue')
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router