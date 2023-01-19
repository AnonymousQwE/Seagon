import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotify } from "../slices/currentUserSlice";

export default function Notify() {
  const dispatch = useDispatch();
  const { notify, status } = useSelector((state) => state.currentUser);
  const [messageApi, contextHolder] = message.useMessage();

  function statusChangedHandler(data) {
    const errorNotify = { type: "error", content: data?.error };
    const successNotify = { type: "success", content: data?.complete };

    if (data.error) {
      messageApi.open(errorNotify);
      dispatch(clearNotify());
    } else if (data.complete) {
      messageApi.open(successNotify);
      dispatch(clearNotify());
    }
  }

  useEffect(() => {
    statusChangedHandler(notify);
    console.log("NOTIFY", notify);
  }, [notify]);
  return <>{contextHolder}</>;
}
