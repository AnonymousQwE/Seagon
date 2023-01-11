import React from "react";

import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";

import { useLocation } from "react-router-dom";

import { createAdminNavItem } from "../Header/createNavItem";

export default function AdminMenu() {
  let location = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      width={200}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname.split("/")[2]]}
        defaultSelectedKeys={[location.pathname.split("/")[2]]}
        style={{
          height: "100%",
        }}
        items={createAdminNavItem()}
      ></Menu>
    </Sider>
  );
}
