import React, { PureComponent } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { mockMenus } from "./data";

const logoUrl = require("@/assets/logo.png").default;

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { mockMenus: mockMenus };
  }
  render() {
    const { menus } = this.props;
    return (
      <header className="root-layout-head">
        <div className="head-left">
          <Logo logoUrl={logoUrl} height={25} title="标题"></Logo>
          <NavMenu menus={menus ? menus : this.state.mockMenus}></NavMenu>
        </div>
        <div className="head-right"></div>
      </header>
    );
  }
}
