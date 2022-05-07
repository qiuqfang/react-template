import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";

export default class Toast extends Component {
  text = "";
  imgUrl = "";
  toast = "";
  constructor(props) {
    super(props);
    if (typeof props === "string") {
      this.text = props;
    }
    if (Object.prototype.toString.call(props) === "[object Object]") {
      this.text = props.text;
      this.imgUrl = props.imgUrl;
    }
    this.state = {};
    this.toast = (
      <div className="toast">
        <div className="toast-content">
          {this.imgUrl !== "" ? (
            <div className="img-box">
              <img className="img" src={this.imgUrl} alt="" />
            </div>
          ) : (
            ""
          )}
          <div>{this.text}</div>
        </div>
      </div>
    );
    ReactDOM.render(this.toast, document.getElementById("root"));
  }
  render() {
    return this.toast;
  }
}
