import React, { useEffect, useState } from "react";

import { Avatar, message } from "antd";
import { UserOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage } from "../../slices/currentUserSlice";

import UserModal from "./UserModal";

export default function UserComponent() {
  const dispatch = useDispatch();
  const { error, status, completeMessage, currentUser } = useSelector(
    (state) => state.currentUser
  );
  const [messageApi, contextHolder] = message.useMessage();

  function statusChangedHandler() {
    const message =
      status === "rejected"
        ? { type: "error", content: error }
        : status === "loaded"
          ? { type: "success", content: completeMessage }
          : {};

    messageApi.open(message);
    dispatch(clearMessage());
    dispatch(clearError());
  }

  useEffect(() => {
    (error || completeMessage) && statusChangedHandler();
  }, [error, completeMessage]);

  const [open, setOpen] = useState(false);
  const showUserModal = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Avatar onClick={showUserModal} size={50} className="headerUserIcon">
        {currentUser ? currentUser.username : <UserOutlined />}
      </Avatar>
      <UserModal open={open} onClose={onClose} />
    </>
  );
}
