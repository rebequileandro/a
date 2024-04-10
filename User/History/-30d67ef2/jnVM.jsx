import Nav from "components/Nav/Nav";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
