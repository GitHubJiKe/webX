import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "main",
        component: () => import("../pages/WebMain.vue"),
    },
    {
        path: "/preview/:id",
        name: "preview",
        component: () => import("../pages/WebPreview.vue"),
    },
];
export const router = createRouter({
    routes,
    history: createWebHashHistory(),
});
