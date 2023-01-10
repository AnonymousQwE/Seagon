import React from "react";

import { NavLink } from "react-router-dom";

export default function CustomNavLink({ className, label, to }) {
  return <NavLink className={className} to={to}>{label}</NavLink>;
}
