import React, { useEffect, useState } from "react";

import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { MenuOutlined } from "@ant-design/icons";

import { useLocation } from "react-router-dom";

import { createAuthNavItem, createNavItem } from "./createNavItem";
import UserComponent from "../User/UserComponent";
import { useSelector } from "react-redux";

import "../../styles/header.css";
import Cart from "../Cart/Cart";

export default function HeaderComponent() {
  const { user } = useSelector((state) => state.user);
  let location = useLocation();
  const [current, setCurrent] = useState(location.pathname.split("/")[1]);

  useEffect(() => {
    setCurrent(location.pathname.split("/")[1]);
  }, [location.pathname]);

  return (
    <>
      <Header
        className="header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Menu
          className={"headerMenu"}
          theme="dark"
          mode="horizontal"
          overflowedIndicator={
            <MenuOutlined
              style={{
                fontSize: "20px",
              }}
            />
          }
          selectedKeys={current}
          defaultSelectedKeys={current}
          items={user?.email ? createAuthNavItem() : createNavItem()}
        />
        <UserComponent />
      </Header>
    </>
  );
}
