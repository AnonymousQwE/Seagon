import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotify } from "../slices/userSlice";

export default function Notify() {
  const dispatch = useDispatch();
  const { notify, status } = useSelector((state) => state.user);
  const [messageApi, contextHolder] = message.useMessage();

  function showMessageHandler() {}

  useEffect(() => {
    for (let i = 0; i < notify.length; i++) {
      messageApi.open(notify[i]);
    }
    dispatch(clearNotify());
  }, [status]);
  return <>{contextHolder}</>;
}
