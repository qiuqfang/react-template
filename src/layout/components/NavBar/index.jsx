import React, { PureComponent } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { mockMenus } from "./config";
import DropdownMenu from "./DropdownMenu";

const logoUrl =
  "http://www.qiuqfang.top/upload/2021/08/fecoder-3078a03d285a4d8eb76a794b8f05eae1.png";

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
          <Logo logoUrl={logoUrl} height={25} title="后台管理系统"></Logo>
          <NavMenu menus={menus ? menus : this.state.mockMenus}></NavMenu>
        </div>
        <div className="head-right">
          <DropdownMenu></DropdownMenu>
        </div>
      </header>
    );
  }
}
