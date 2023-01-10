import React from "react";

import { Breadcrumb, Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

import { Navigate, Route, Routes } from "react-router-dom";

import ProductsComponent from "../components/Admin/ProductsTab/ProductsComponent";
import AdminMenu from "../components/Admin/AdminMenu";
import UsersBlock from "../components/Admin/UsersBlock";

export default function AdminPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout
        style={{
          padding: "24px 0",
          background: colorBgContainer,
        }}
      >
        <AdminMenu />
        <Routes>
          <Route index element={<Navigate to="products" />} />
          <Route path="categories" element={<ProductsComponent />} />
          <Route path="products" element={<ProductsComponent />} />
          <Route path="users" element={<UsersBlock />} />
        </Routes>
      </Layout>
    </Content>
  );
}
