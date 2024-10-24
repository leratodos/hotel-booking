import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../layouts/AuthLayout.vue"),
            beforeEnter: () => {
                return "/auth/login";
            },
        },
        {
            path: "/auth",
            component: () => import("../layouts/AuthLayout.vue"),
            children: [
                {
                    path: "login",
                    name: "auth-login",
                    component: () => import("../views/auth/LoginView.vue"),
                },
                // {
                //     path: "login",
                //     name: "auth-login",
                //     component: () => import("../views/LoginView.vue"),
                // },
            ],
        },
        {

            path: "/app",
            component: () => import("../layouts/BaseLayout.vue"),
            children: [
                {
                    path: "scheduler",
                    name: "app-scheduler",
                    component: () => import("../views/SchedulerView.vue")
                }
            ]
        }
    ]
})

export default router;