import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../pages/UsersPage.vue")
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "user" */ "../pages/NotFoundErrorPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
