import React, { useEffect, useState } from "react";

import { Button, Drawer, Space } from "antd";

import { useDispatch, useSelector } from "react-redux";

import UserAutorization from "./UserAutorization";
import UserRegistration from "./UserRegistration";
import UserProfile from "./UserProfile";
import { serverLogoutUser } from "../../hooks/authHook";
import { logoutUser } from "../../hooks/userHook";

export default function UserModal({ onClose, open }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user);

  const [modalType, setModalType] = useState("Login");

  const userLogOutHandler = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    currentUser?.email ? setModalType("UserPanel") : setModalType("Login");
  }, [currentUser]);

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
        {modalType === "Login" ? (
          <UserAutorization />
        ) : modalType === "Registration" ? (
          <UserRegistration />
        ) : (
          <UserProfile />
        )}
      </Drawer>
    </>
  );
}
