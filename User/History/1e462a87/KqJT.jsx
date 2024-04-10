import React from "react";
import "./layout.scss";
const Layout = ({ children, active }) => {
  return (
    <>
      <Sidebar active={active} />
      <Searchbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
