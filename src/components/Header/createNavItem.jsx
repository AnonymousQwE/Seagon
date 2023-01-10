import CustomNavLink from "./CustomNavLink";
import "../../styles/header.css";

export function createNavItem() {
  // type: 'group', // Must have
  // label: 'My Group',
  // children: [],

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
  return ["Products", "Categories", "Users"].map((key) => ({
    key: key.toLowerCase(),
    label: (
      <CustomNavLink label={key} to={key.toLowerCase()}>
        {key}
      </CustomNavLink>
    ),
  }));
}
