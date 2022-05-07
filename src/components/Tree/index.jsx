import React, { Component } from "react";

import "./index.css";

export default class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      node: this.props.node,
      searchText: "",
    };
  }

  render() {
    const { node } = this.state;
    const { onClick } = this.props;
    const recursionOpenNode = (n, node) => {
      return node.map((item) => {
        if (n.id === item.id) {
          item.isOpen = !item.isOpen;
        }
        if (item?.children) {
          item.children = recursionOpenNode(n, item.children);
        }
        return item;
      });
    };
    const openNode = (n, node = this.state.node) => {
      onClick(n);
      recursionOpenNode(n, node);
      console.log(node);
      this.setState({ node });
    };
    // 节点遍历
    const nodeErgodic = (node) => {
      return node.map((item) => {
        return (
          <li
            key={item.id}
            onClick={(e) => {
              e.stopPropagation();
              openNode(item);
            }}
            style={item.styleText}
          >
            <i
              style={{
                marginRight: "5px",
                display: "inline-block",
                transform: item.isOpen && "rotate(90deg)",
              }}
              className={
                item.children && item.children.length > 0 ? "iconfont icon-youjiantou" : ""
              }
            ></i>
            <span>{item.text}</span>
            {item.children && item.children.length > 0 ? (
              <ul style={{ marginLeft: "50px", display: !item.isOpen && "none" }}>
                {nodeErgodic(item.children)}
              </ul>
            ) : null}
          </li>
        );
      });
    };

    const recursionSearchText = (text, node = this.state.node) => {
      return node.map((item) => {
        if (text && item.text.indexOf(text) > -1) {
          item.styleText = { color: "blue" };
        } else {
          item.styleText = {};
        }
        if (item?.children) {
          item.children = recursionSearchText(text, item.children);
        }
        return item;
      });
    };
    const handleInputChange = (e) => {
      console.log(e.target.value);
      this.setState({ searchText: e.target.value });
      recursionSearchText(e.target.value);
      this.setState({ node });
    };
    return (
      <div className="tree">
        <div className="search_box">
          <i className="iconfont icon-sousuo"></i>
          <input
            className="tree_search"
            placeholder="搜索"
            value={this.state.searchText}
            onChange={handleInputChange}
          ></input>
        </div>

        <ul>{nodeErgodic(node)}</ul>
      </div>
    );
  }
}
