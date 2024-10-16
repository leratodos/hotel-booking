import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "enter-page",
            beforeEnter: () => {
                return "/app/scheduler";
            },
        },
        {

            path: "/app",
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