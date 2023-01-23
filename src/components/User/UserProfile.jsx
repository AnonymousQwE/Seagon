import React from "react";

import { Avatar, Button, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const currentUser = useSelector((state) => state.user.user);
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      <Button
        onClick={() => {
          notification.open({
            message: "Notification Title",
            description:
              "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
            onClick: () => {
              console.log("Notification Clicked!");
            },
            placement: "bottomLeft",
            duration: 3,
          });
        }}
      />
      <Avatar
        src={currentUser?.photoURL}
        shape="square"
        size={64}
        icon={<UserOutlined />}
      />
    </>
  );
}
