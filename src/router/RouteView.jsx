import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "./index";

function renderRoutes(routes) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => {
              // 如果有子路由，则递归调用
              return route?.children ? (
                <>
                  <route.component {...props}>{renderRoutes(route.children)}</route.component>
                  {route.redirect && (
                    <Redirect from={route.redirect.from} to={route.redirect.to}></Redirect>
                  )}
                </>
              ) : (
                <route.component {...props} />
              );
            }}
          ></Route>
        );
      })}
      <Redirect to={"/404"}></Redirect>
    </Switch>
  );
}

export default class RouteView extends PureComponent {
  render() {
    return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
  }
}
