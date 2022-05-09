import React, { PureComponent } from "react";

export default class Promotion extends PureComponent {
  render() {
    return (
      <div>
        <h1>Promotion</h1>
        {this.props.children}
      </div>
    );
  }
}
