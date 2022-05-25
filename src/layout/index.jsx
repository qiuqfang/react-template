import React, { PureComponent, Suspense } from "react";
import NavBar from "./components/NavBar";

import "./index.less";

import Skeleton from "@ant-design/pro-skeleton";

export default class RootLayout extends PureComponent {
  componentDidMount() {
    const { location } = this.props;
    location.pathname === "/" &&
      this.props.history.push(localStorage.getItem("defaultRoutePath") || "/overview");
  }
  render() {
    return (
      <div className="root-layout">
        <NavBar></NavBar>
        <Suspense fallback={<Skeleton type="list" />}>
          <section className="root-layout-section">{this.props.children}</section>
        </Suspense>
      </div>
    );
  }
}
