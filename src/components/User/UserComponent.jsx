import React, { useState } from "react";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";

import UserModal from "./UserModal";

export default function UserComponent() {
  const { user } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const showUserModal = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Avatar onClick={showUserModal} size={50} className="headerUserIcon">
        {user.displayName || <UserOutlined />}
      </Avatar>

      <UserModal open={open} onClose={onClose} />
    </>
  );
}
