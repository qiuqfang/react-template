import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { increment, incrementAsync } from "@/store/module/home";

import { Button } from "antd";

class Home extends PureComponent {
  handleClickBtn = async () => {
    const { dispatch } = this.props;
    dispatch(increment(2));
    const result = await dispatch(incrementAsync(2));
    console.log(result);
  };

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Button type="primary" onClick={this.handleClickBtn}>
          点击
        </Button>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default connect((state) => state.home)(Home);
