import React, { useEffect, useState } from "react";

import { Avatar, message } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage } from "../../slices/currentUserSlice";

import UserPopUp from "./UserPopUp";

export default function UserComponent() {
  const dispatch = useDispatch();
  const { error, status, completeMessage, currentUser } = useSelector(
    (state) => state.currentUser
  );
  const [messageApi, contextHolder] = message.useMessage();

  function statusChangedHandler(status) {
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
    (error || completeMessage) && statusChangedHandler(status);
  }, [error, completeMessage]);

  const [open, setOpen] = useState(false);
  const showUserPopUp = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Avatar onClick={showUserPopUp} size={50} className="headerUserIcon">
        {currentUser ? currentUser.username : "LOGIN"}
      </Avatar>
      <UserPopUp open={open} onClose={onClose} />
    </>
  );
}
