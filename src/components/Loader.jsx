import { Space, Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export default function Loader({ children, status }) {
  if (status !== "loading") {
    return children;
  } else {
    return (
      <Spin tip="Loading" size="large">
        {children}
      </Spin>
    );
  }
}
