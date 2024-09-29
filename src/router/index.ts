import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { LoginPage } from "@/views";

import { Layout, RouteName, RouteTo } from "@/shared/constants/enums";

const routes: Array<RouteRecordRaw> = [
  {
    path: RouteTo.login,
    name: RouteName.login,
    component: LoginPage,
    meta: {
      layout: Layout.auth,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
