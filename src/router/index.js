import { lazy } from "react";
import RootLayout from "@/layout";

const routes = [
  { path: "/login", component: lazy(() => import("@/pages/login")) },
  { path: "/404", component: lazy(() => import("@/pages/404")) },
  {
    path: "/",
    component: RootLayout,
    children: [
      {
        path: "/overview",
        component: lazy(() => import("@/pages/overview")),
        redirect: { from: "/", to: "/overview" },
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
      {
        path: "/finance",
        component: lazy(() => import("@/pages/finance")),
      },
    ],
  },
];

export default routes;
