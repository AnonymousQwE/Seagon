import React, { useEffect, useState } from "react";

import { Button, Drawer, Space } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { serverLogoutUser } from "../../slices/currentUserSlice";

import UserAutorization from "./UserAutorization";
import UserRegistration from "./UserRegistration";

export default function UserPopUp({ onClose, open }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const [popUpType, setPopUpType] = useState("Login");

  const userLogOutHandler = () => {
    dispatch(serverLogoutUser());
  };

  useEffect(() => {
    currentUser ? setPopUpType("UserPanel") : setPopUpType("Login");
  }, [currentUser]);

  return (
    <>
      <Drawer
        title={popUpType}
        placement="right"
        size={"default"}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button
              onClick={() => {
                popUpType === "Login"
                  ? setPopUpType("Registration")
                  : popUpType === "Registration"
                  ? setPopUpType("Login")
                  : userLogOutHandler();
              }}
            >
              {popUpType === "Login"
                ? "Registration"
                : popUpType === "Registration"
                ? "Login"
                : "LogOut"}
            </Button>
          </Space>
        }
      >
        {popUpType === "Login" ? (
          <UserAutorization />
        ) : popUpType === "Registration" ? (
          <UserRegistration />
        ) : (
          "User Profile"
        )}
      </Drawer>
    </>
  );
}
