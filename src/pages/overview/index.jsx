import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { increment, incrementAsync } from "@/store/module/overview";
import { Button } from "antd";

class Overview extends PureComponent {
  handleClickBtn = async () => {
    const { dispatch } = this.props;
    dispatch(increment(2));
    await dispatch(incrementAsync(2));
  };
  render() {
    return (
      <div>
        <h3>Overview</h3>
        <Button type="primary" onClick={this.handleClickBtn}>
          点击
        </Button>
        <div>{this.props.count}</div>
      </div>
    );
  }
}
export default connect((state) => state.overview)(Overview);
