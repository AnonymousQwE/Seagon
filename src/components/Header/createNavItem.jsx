import CustomNavLink from "./CustomNavLink";
import "../../styles/header.css";
import { useDispatch } from "react-redux";

const adminNavItem = ["Products", "Categories", "Users"];

export function createNavItem() {
  const NavItem = ["Seagon", "Setting", "Admin"].map((key, i) =>
    i === 0
      ? {
          key,
          label: (
            <CustomNavLink className={"headerLogo"} label={key} to="/">
              {key}
            </CustomNavLink>
          ),
        }
      : {
          key: key.toLowerCase(),
          label: (
            <CustomNavLink
              label={key}
              className={"headerNavItem"}
              to={key === "SEAGON" ? "/" : "/" + key.toLowerCase()}
            >
              {key}
            </CustomNavLink>
          ),
        }
  );

  return NavItem;
}
export function createAdminNavItem() {
  return adminNavItem.map((key) => ({
    key: key.toLowerCase(),
    label: (
      <CustomNavLink label={key} to={key.toLowerCase()}>
        {key}
      </CustomNavLink>
    ),
  }));
}
