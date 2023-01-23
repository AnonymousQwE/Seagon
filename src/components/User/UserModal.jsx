import React, { useEffect, useState } from "react";

import { Button, Drawer, Space } from "antd";

import { useDispatch, useSelector } from "react-redux";

import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import UserProfile from "./UserProfile";
import { logoutUser } from "../../hooks/userHook";
import Loader from "../Loader";

export default function UserModal({ onClose, open }) {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);

  const [modalType, setModalType] = useState("Login");

  const userLogOutHandler = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    user.email ? setModalType("UserPanel") : setModalType("Login");
  }, [user]);

  return (
    <>
      <Drawer
        title={modalType}
        placement="right"
        size={"default"}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button
              onClick={() => {
                modalType === "Login"
                  ? setModalType("Registration")
                  : modalType === "Registration"
                  ? setModalType("Login")
                  : userLogOutHandler();
              }}
            >
              {modalType === "Login"
                ? "Registration"
                : modalType === "Registration"
                ? "Login"
                : "LogOut"}
            </Button>
          </Space>
        }
      >
        <Loader status={status}>
          {modalType === "Login" ? (
            <UserLogin />
          ) : modalType === "Registration" ? (
            <UserRegistration />
          ) : (
            <UserProfile />
          )}
        </Loader>
      </Drawer>
    </>
  );
}
