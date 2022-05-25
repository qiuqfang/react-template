import { LockOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu } from "antd";

export function getMenu(data) {
  return (
    <Menu
      items={[
        {
          type: "group",
          label: "账户信息",
          children: [
            {
              key: "account",
              label: (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "150px",
                  }}
                >
                  <img src={require("./portrait.png").default} alt="" height="50px" />
                  <div
                    style={{
                      marginLeft: "5px",
                      fontSize: "12px",
                      color: "rgba(2, 4, 13, 0.85)",
                    }}
                  >
                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>{data.username}</div>
                    <div>{data.number}</div>
                  </div>
                </div>
              ),
            },
          ],
        },
        {
          type: "group",
          label: "系统操作",
          children: [
            {
              key: "3",
              label: (
                <div style={{ color: "rgba(2, 4, 13, 0.85)" }}>
                  <LockOutlined />
                  <span style={{ marginLeft: "5px" }}>修改密码</span>
                </div>
              ),
            },
            {
              key: "4",
              label: (
                <div style={{ color: "rgba(2, 4, 13, 0.85)" }}>
                  <LogoutOutlined />
                  <span style={{ marginLeft: "5px" }}>退出登陆</span>
                </div>
              ),
            },
          ],
        },
      ]}
    />
  );
}
