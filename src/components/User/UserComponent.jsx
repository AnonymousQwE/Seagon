import React, { useEffect, useState } from "react";

import { Avatar, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { clearNotify } from "../../slices/currentUserSlice";

import UserModal from "./UserModal";

export default function UserComponent() {
  const dispatch = useDispatch();
  const { notify, status, currentUser } = useSelector(
    (state) => state.currentUser
  );
  const [messageApi, contextHolder] = message.useMessage();

  function statusChangedHandler(notify) {
    const errorNotify = { type: "error", content: notify?.error };
    const successNotify = { type: "success", content: notify?.complete };

    if (notify.error) {
      messageApi.open(errorNotify);
    } else if (notify.complete) {
      messageApi.open(successNotify);
    }
    dispatch(clearNotify());
  }

  useEffect(() => {
    statusChangedHandler(notify);
  }, [status]);

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
