import React, { useEffect, useState } from "react";

import { Avatar, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { clearNotify } from "../../slices/currentUserSlice";

import UserModal from "./UserModal";

export default function UserComponent() {
  const { currentUser } = useSelector((state) => state.currentUser);

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
        {currentUser ? currentUser.username : <UserOutlined />}
      </Avatar>
      <UserModal open={open} onClose={onClose} />
    </>
  );
}
