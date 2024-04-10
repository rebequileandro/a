import React from "react";
import "./layout.scss";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
const Layout = ({ children, active }) => {
  return (
    <>
      <Sidebar active={active} />
      {/* <div className="layout"> */}
      <Searchbar />
      <main>{children}</main>
      {/* </div> */}
    </>
  );
};

export default Layout;
