import React from "react";
import "./layout.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
