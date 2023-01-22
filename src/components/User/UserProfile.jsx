import React from "react";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const currentUser = useSelector((state) => state.user.user);

  return (
    <>
      {" "}
      <Avatar
        src={currentUser.photoURL}
        shape="square"
        size={64}
        icon={<UserOutlined />}
      />
    </>
  );
}
