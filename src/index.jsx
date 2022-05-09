import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.less";

import { Provider } from "react-redux";

import store from "@/store";
import RouteView from "./router/RouteView";

import { Skeleton } from "antd";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Skeleton loading />}>
        <RouteView></RouteView>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
