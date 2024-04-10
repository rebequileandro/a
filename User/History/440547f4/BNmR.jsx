import React, { useEffect, useRef, useState } from "react";
import "./layout.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  const layoutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (layoutRef.current) {
      const currentScrollY = layoutRef.current.scrollTop;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  return (
    <main className="layout" ref={layoutRef} onScroll={controlNavbar}>
      <Header isVisible={isVisible} />
      {children}
    </main>
  );
};

export default Layout;
