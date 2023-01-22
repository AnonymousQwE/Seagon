import React from "react";

import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

import { Navigate, Route, Routes } from "react-router-dom";

import ProductsComponent from "../components/Admin/ProductsTab/ProductsComponent";
import AdminMenu from "../components/Admin/AdminMenu";
import UsersComponent from "../components/Admin/UsersTab/UsersComponent";

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
          <Route path="users" element={<UsersComponent />} />
        </Routes>
      </Layout>
    </Content>
  );
}
