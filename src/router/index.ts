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
    path: "/users/:id",
    component: () =>
      import(/* webpackChunkName: "user" */ "../pages/UserPage.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
