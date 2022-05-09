import React, { PureComponent } from "react";

import "./index.less";

export default class RootLayout extends PureComponent {
  componentDidMount() {
    const { location } = this.props;
    location.pathname === "/" && this.props.history.push("/home");
  }
  render() {
    return (
      <div className="root-layout">
        <h1>Layout</h1>
        <section className="section-box">{this.props.children}</section>
      </div>
    );
  }
}
