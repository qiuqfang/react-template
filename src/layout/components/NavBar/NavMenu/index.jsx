import { Menu } from "antd";
import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

export default withRouter(
  class NavMenu extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        defaultSelectedKeys: ["/overview"],
      };
    }
    componentDidMount() {
      this.setState({
        defaultSelectedKeys: [this.props.location.pathname],
      });
    }
    handleMenuClick = (e) => {
      console.log(e);
      const { history } = this.props;
      history.push(e.key);
    };
    render() {
      const { menus } = this.props;
      const { defaultSelectedKeys } = this.state;
      return (
        <>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={defaultSelectedKeys}
            items={menus}
            style={{ border: "none", fontSize: "16px", fontWeight: "bold" }}
            onClick={this.handleMenuClick}
          ></Menu>
        </>
      );
    }
  }
);
