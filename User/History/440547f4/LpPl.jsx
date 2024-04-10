import React, { useEffect, useRef, useState } from "react";
import "./layout.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  const layoutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    console.log(layoutRef);
    // if (typeof window !== "undefined") {
    if (layoutRef.current.scrollY > lastScrollY) {
      // Si el scroll actual es mayor que el último, ocultar el header.
      setIsVisible(false);
    } else {
      // Si el scroll actual es menor, mostrar el header.
      setIsVisible(true);
    }
    // Actualiza el último scroll.
    setLastScrollY(layoutRef.current.scrollY);
    // }
  };

  // useEffect(() => {
  //   if (layoutRef.current) {
  //     layoutRef.current.addEventListener("scroll", controlNavbar);

  //     // Limpiar el event listener al desmontar el componente.
  //     return () => {
  //       layoutRef.current.removeEventListener("scroll", controlNavbar);
  //     };
  //   }
  // }, [layoutRef.current, lastScrollY]);

  return (
    <main className="layout" ref={layoutRef} onScroll={controlNavbar}>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
