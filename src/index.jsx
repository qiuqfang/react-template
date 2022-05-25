import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

import { Provider } from "react-redux";

import store from "@/store";
import RouteView from "./router/RouteView";

import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
import { ThemeContext } from "./config";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <ThemeContext.Provider value={"dark"}>
          <RouteView></RouteView>
        </ThemeContext.Provider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
