import { lazy } from "react";

const routes = [
  { path: "/login", component: lazy(() => import("@/pages/login")) },
  { path: "/404", component: lazy(() => import("@/pages/404")) },
  {
    path: "/",
    component: lazy(() => import("@/layout")),
    children: [
      {
        path: "/home",
        component: lazy(() => import("@/pages/home")),
        children: [
          {
            path: "/home/countView",
            component: lazy(() => import("@/pages/home/count-view")),
          },
        ],
        redirect: { from: "/home", to: "/home/countView" },
      },
      {
        path: "/promotion",
        component: lazy(() => import("@/pages/promotion")),
        children: [
          {
            path: "/promotion/list",
            component: lazy(() => import("@/pages/promotion/list")),
          },
        ],
        redirect: { from: "/promotion", to: "/promotion/list" },
      },
    ],
  },
];

export default routes;
