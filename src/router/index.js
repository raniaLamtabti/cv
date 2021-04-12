import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cv from "../views/Cv.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Cv",
        name: "Cv",
        component: Cv,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;