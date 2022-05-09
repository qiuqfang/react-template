import React, { PureComponent } from "react";
import NavBar from "./components/NavBar";

import "./index.less";

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
        <section className="root-layout-section">{this.props.children}</section>
      </div>
    );
  }
}
