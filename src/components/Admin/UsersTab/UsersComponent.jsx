import React from "react";

import { Content } from "antd/es/layout/layout";

import TablePagination from "./TablePagination";

export default function UsersComponent() {
  return (
    <Content
      style={{
        padding: "0 24px",
        minHeight: 280,
      }}
    >
      <TablePagination />
    </Content>
  );
}
