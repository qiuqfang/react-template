import React, { PureComponent } from "react";
import { connect } from "react-redux";

class CountView extends PureComponent {
  render() {
    return (
      <div>
        <h3>CountView</h3>
        {this.props.count}
      </div>
    );
  }
}
export default connect((state) => state.home)(CountView);
