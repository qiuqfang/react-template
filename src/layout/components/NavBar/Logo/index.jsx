import React, { PureComponent } from "react";

export default class Logo extends PureComponent {
  render() {
    const { logoUrl, width, height, title } = this.props;
    console.log(this.props, width);
    return (
      <div className="root-layout-head-logo">
        <img src={logoUrl} alt="Company Logo" width={width} height={height} />
        <h1 className="title">{title}</h1>
      </div>
    );
  }
}
