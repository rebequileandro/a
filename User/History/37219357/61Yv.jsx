import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import shooza from "../../assets/wedrink_logo.svg";

import { links } from "../../data/links";

const Navbar = ({ inView }) => {
  const [media, setMedia] = useState({
    matches: window.innerWidth > 992 ? false : true,
  });
  // useEffect(() => {
  //   const navLinks = document.querySelectorAll('.navigation a[href^="#"]');
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((e) => {
  //         const id = e.target.getAttribute("id");
  //         const link = document.querySelector(`.navigation a[href="#${id}"]`);
  //         const icon = document.querySelector(
  //           `.navigation a[href="#${id}"] .icon-container .icon-nav`
  //         );
  //         if (e.isIntersecting) {
  //           link.classList.add("selected");
  //           if (media.matches) {
  //             icon.classList.add("selected");
  //           }
  //         } else {
  //           link.classList.remove("selected");
  //           if (media.matches) {
  //             icon.classList.remove("selected");
  //           }
  //         }
  //       });
  //     },
  //     {
  //       rootMargin: "-50% 0px -50% 0px",
  //     }
  //   );
  //   navLinks.forEach((e) => {
  //     const hash = e.getAttribute("href");
  //     const target = document.querySelector(hash);
  //     if (target) {
  //       observer.observe(target);
  //     }
  //   });
  // }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMedia({
        ...media,
        matches: window.innerWidth > 992 ? false : true,
      });
    });
    return () =>
      window.removeEventListener("resize", () => {
        setMedia({
          ...media,
          matches: window.innerWidth > 992 ? false : true,
        });
      });
  }, []);
  return (
    <div className="navbar-container">
      <img className="logo-nav" src={shooza} alt="shooza" />
      <nav className="navigation desktop">
        <a href="#inicio" className={inView === "home" ? "selected" : null}>
          {media.matches ? (
            <div className="icon-container">
              <span
                className={`icon-nav home ${
                  inView === "home" ? "selected" : null
                }`}
              />
              <span>Inicio</span>
            </div>
          ) : (
            "Inicio"
          )}
        </a>
        <a
          href="#que-es-shoooza"
          className={inView === "shooza" ? "selected" : null}
        >
          {media.matches ? (
            <div className="icon-container">
              <span className="icon-nav wedrink" />
              <span>Shooza</span>
            </div>
          ) : (
            "Que es Shooza"
          )}
        </a>
        <a href="#como-funciona">
          {media.matches ? (
            <div className="icon-container">
              <span className="icon-nav beneficios" />
              <span>Beneficios</span>
            </div>
          ) : (
            "Como funciona"
          )}
        </a>
        <a href="#contacto" className="soporte-discoteca">
          {media.matches ? (
            <div className="icon-container">
              <span className="icon-nav party" />
              <span>Fiestas</span>
            </div>
          ) : (
            "Soporte"
          )}
        </a>
        <a
          href={links.shoozaApp}
          target="_blank"
          rel="noreferrer"
          className={media.matches ? "" : "btn btn--primary"}
        >
          {media.matches ? (
            <div className="icon-container">
              <span className="icon-nav download" />
              <span>Descargar</span>
            </div>
          ) : (
            "Descargar Shooza"
          )}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
