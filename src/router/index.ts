import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { LoginPage, MainPage } from "@/views";

import {
  Layout,
  LocalStorageName,
  RouteName,
  RouteTo,
} from "@/shared/constants/enums";

const routes: Array<RouteRecordRaw> = [
  {
    path: RouteTo.login,
    name: RouteName.login,
    component: LoginPage,
    meta: {
      layout: Layout.auth,
    },
  },
  {
    path: RouteTo.main,
    name: RouteName.main,
    component: MainPage,
    meta: {
      layout: Layout.default,
      isAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuth = to.matched.some((record) => record.meta.isAuth);

  const token = localStorage.getItem(LocalStorageName.token);

  if (token && !isAuth) {
    next({ name: RouteName.main });
  } else if (!token && isAuth) {
    next({ name: RouteName.login });
  }

  next();
});

export default router;
