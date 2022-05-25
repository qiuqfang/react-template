import { Menu } from "antd";
import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

export default withRouter(
  class NavMenu extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        selectedKeys: [localStorage.getItem("defaultRoutePath") || "/overview"],
      };
    }
    handleMenuClick = (e) => {
      const { history } = this.props;
      history.push(e.key);
      this.setState({
        selectedKeys: [e.key],
      });
      localStorage.setItem("defaultRoutePath", e.key);
    };
    render() {
      const { menus } = this.props;
      const { selectedKeys } = this.state;
      return (
        <Menu
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={menus}
          style={{
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            width: "calc(100vw - 900px)",
          }}
          onClick={this.handleMenuClick}
        ></Menu>
      );
    }
  }
);
