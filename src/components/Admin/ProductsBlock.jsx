import React from "react";

import { Content } from "antd/es/layout/layout";

import AdminTable from "./AdminTable";

export default function ProductsBlock() {
  return (
    <Content
      style={{
        padding: "0 24px",
        minHeight: 280,
      }}
    >
      <AdminTable />
    </Content>
  );
}
