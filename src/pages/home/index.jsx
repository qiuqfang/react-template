import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, incrementAsync } from "@/store/module/home";

import { Button } from "antd";

class Home extends Component {
  handleClickBtn = () => {
    this.props.increment();
    this.props.incrementAsync();
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClickBtn}>
          点击
        </Button>
      </div>
    );
  }
}

export default connect(
  (state) => state.home,
  (dispatch) => ({
    increment: () => {
      dispatch(increment(2));
    },
    incrementAsync: () => {
      dispatch(incrementAsync(2)).then((res) => {
        console.log(res);
      });
    },
  })
)(Home);
