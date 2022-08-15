import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#00e79c",
  logo,
  logoWidth: "20vmax",
  navColor1: "black",
  logoHoverSize: "10px",
  logoHoverColor: "#00e79c",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "2.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-end",
  nav4justifyContent: "flex-end",
  link1ColorHover: "#00e79c",
  link1Margin: "2vmax",
  link2Margin: "2vmax",
  profileIconUrl: "/login",
  profileIconColor: "white",
  searchIconColor: "white",
  cartIconColor: "white",
  profileIconColorHover: "#00e79c",
  searchIconColorHover: "#00e79c",
  cartIconColorHover: "#00e79c",
  cartIconMargin: "3vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
