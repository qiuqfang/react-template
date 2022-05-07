import React from "react";
import ReactDOM from "react-dom";
import Home from "@/pages/home";
import "./index.less";

import { Provider } from "react-redux";

import store from "@/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home></Home>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
