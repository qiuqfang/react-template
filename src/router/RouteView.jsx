import React, { PureComponent } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

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
      <Redirect path="*" to={routes[0].path}></Redirect>
    </Switch>
  );
}

export default class RouteView extends PureComponent {
  render() {
    return <HashRouter>{renderRoutes(routes)}</HashRouter>;
  }
}
