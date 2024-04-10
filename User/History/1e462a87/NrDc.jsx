import React from "react";
import "./layout.scss";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
const Layout = ({ children, active }) => {
  return (
    <>
      <Sidebar active={active} />
      <main className="layout">
        <Searchbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
