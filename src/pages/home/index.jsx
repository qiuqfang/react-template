import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, incrementAsync } from "@/store/module/home";

import { Button } from "antd";

class Home extends Component {
  handleClickBtn = async () => {
    const { dispatch } = this.props;
    dispatch(increment(2));
    const result = await dispatch(incrementAsync(2));
    console.log(result);
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClickBtn}>
          点击
        </Button>
        <p>{this.props.count}</p>
      </div>
    );
  }
}

export default connect((state) => state.home)(Home);
