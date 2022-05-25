import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

import { getMenu } from "./config";

import "./index.less";

export default function DropdownMenu() {
  const userInfo = { username: "admin", number: 1 };
  const menu = getMenu(userInfo);
  return (
    <Dropdown overlay={menu} arrow>
      <div className="dropdown-menu-label">
        <img src={require("./portrait.png").default} alt="" />
        <span>{userInfo.username}</span>
        <DownOutlined></DownOutlined>
      </div>
    </Dropdown>
  );
}
