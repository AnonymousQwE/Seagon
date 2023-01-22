import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export default function RequireAuth({children}) {
  const location = useLocation();
  const currentUser = useSelector((state) => state.user);

  currentUser.email ? "" : "";

  return children;
}
