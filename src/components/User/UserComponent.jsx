import React, { useState } from "react";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";

import UserModal from "./UserModal";

export default function UserComponent() {
  const currentUser = useSelector((state) => state.user.user);

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
        {currentUser ? currentUser.displayName : <UserOutlined />}
      </Avatar>
      
      
      
      <UserModal open={open} onClose={onClose} />
    </>
  );
}
