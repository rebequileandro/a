import React from "react";
import "./layout.scss";

const Layout = ({ children }) => {
  return <main className="layout">{children}</main>;
};

export default Layout;
