import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import TF2View from "@/views/TF2Page.vue";
import WebView from "@/views/WebPage.vue";
import DefaultPage from "@/views/DefaultPage.vue";
import ErrorPage from "@/views/ErrorPage.vue";



const routes = [
    { path: "/", name: "default", component: DefaultPage, },
    { path: "/tf2", name: "tf2", component: TF2View },
    { path: "/web", name: "web", component: WebView },
    { path: "/:pathMatch(.*)*", name: "404", component: ErrorPage, },
];

const router = createRouter({
    history: createWebHistory(""),
    routes,
});

export default router;
