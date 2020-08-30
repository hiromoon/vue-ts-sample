import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/users",
    component: () =>
      import(/* webpackChunkName: "user" */ "../pages/users/index.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../pages/users/UsersIndexPage.vue"
          )
      },
      {
        path: "new",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../pages/users/UsersCreatePage.vue"
          )
      },
      {
        path: ":id",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../pages/users/UsersEditPage.vue"
          ),
        props: true
      },
      {
        path: ":id/edit",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../pages/users/UsersEditPage.vue"
          ),
        props: true
      }
    ]
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
