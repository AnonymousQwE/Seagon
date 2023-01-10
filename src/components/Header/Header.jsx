import React from "react";

import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

import { useLocation } from "react-router-dom";

import { createNavItem } from "./createNavItem";
import UserComponent from "../User/UserComponent";
import "../../styles/header.css";

export default function HeaderComponent() {
  let location = useLocation();
  return (
    <>
      <Header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Menu
          className={"headerMenu"}
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname.split("/")[1]]}
          defaultSelectedKeys={[location.pathname.split("/")[1]]}
          items={createNavItem()}
        />
        <UserComponent />
      </Header>
    </>
  );
}
