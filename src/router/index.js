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
                component: () => import('../views/Welcome.vue')
            }
        ]
    },
    {
        name: "login",
        path: "/login",
        meta: {
            title: "登录"
        },
        component: () => import('../views/Login.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
