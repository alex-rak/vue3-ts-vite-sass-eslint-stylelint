import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Main",
    component: () => import(/* webpackChunkName: "home" */"@pages/HomePage.vue"),
  },
  {
    path: "/about-us",
    component: () => import(/* webpackChunkName: "about" */"@pages/AboutUs.vue"),
  },
];

export default routes;