import CustomNavLink from "./CustomNavLink";
import "../../styles/header.css";

const adminNavItem = [
  { title: "Products", link: "products" },
  { title: "Categories", link: "categories" },
  { title: "Users", link: "users" },
];
const authNavItem = [
  { title: "Seagon", link: "/", class: "headerLogo" },
  { title: "Setting", link: "setting" },
  { title: "Admin", link: "admin" },
  { title: "About", link: "about" },
];
const navItem = [{ title: "Seagon", link: "/", class: "headerLogo" }];

export function createAuthNavItem() {
  return authNavItem.map((item, i) => ({
    key: item.title.toLowerCase(),
    label: (
      <CustomNavLink
        className={item.class ? item.class : "headerNavItem"}
        label={item.title}
        to={item.link}
      >
        {item.title}
      </CustomNavLink>
    ),
  }));
}
export function createNavItem() {
  return navItem.map((item, i) => ({
    key: item.title.toLowerCase(),
    label: (
      <CustomNavLink
        inlineIndent={10}
        className={item.class ? item.class : "headerNavItem"}
        label={item.title}
        to={item.link}
      >
        {item.title}
      </CustomNavLink>
    ),
  }));
}
export function createAdminNavItem() {
  return adminNavItem.map((item) => ({
    key: item.title,
    label: (
      <CustomNavLink label={item.title} to={item.link}>
        {item.title}
      </CustomNavLink>
    ),
  }));
}
