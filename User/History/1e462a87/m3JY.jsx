import React from "react";
import "./layout.scss";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
const Layout = ({ children, active }) => {
  return (
    <div className="layout">
      <Sidebar active={active} />
      <Searchbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
