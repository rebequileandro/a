import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import shooza from "../../assets/wedrink_logo.svg";

import { links } from "../../data/links";

const Navbar = ({ inView }) => {
  const [media, setMedia] = useState({
    matches: window.innerWidth > 992 ? false : true,
  });
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
  console.log(inView);
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
              <span className={inView === "home" ? "selected" : null}>
                Inicio
              </span>
            </div>
          ) : (
            "Inicio"
          )}
        </a>
        <a
          href="#que-es-shooza"
          className={inView === "shooza" ? "selected" : null}
        >
          {media.matches ? (
            <div className="icon-container">
              <span
                className={`icon-nav wedrink ${
                  inView === "shooza" ? "selected" : null
                }`}
              />
              <span className={inView === "shooza" ? "selected" : null}>
                Funcionalidades
              </span>
            </div>
          ) : (
            "Funcionalidades"
          )}
        </a>
        <a href="#download" className={inView === "how" ? "selected" : null}>
          {media.matches ? (
            <div className="icon-container">
              <span
                className={`icon-nav beneficios ${
                  inView === "how" ? "selected" : null
                }`}
              />
              <span className={inView === "how" ? "selected" : null}>
                Beneficios
              </span>
            </div>
          ) : (
            "Contacto"
          )}
        </a>
        {/* <a href="#contacto" className="soporte-discoteca">
          {media.matches ? (
            <div className="icon-container">
              <span className="icon-nav party" />
              <span>Fiestas</span>
            </div>
          ) : (
            "Soporte"
          )}
        </a> */}
        <a
          href={links.shoozaApp}
          target="_blank"
          rel="noreferrer"
          className={
            media.matches ? "" : `navbar-container__btn btn btn--primary`
          }
        >
          {media.matches ? (
            <div className="icon-container">
              <span className="icon-nav download" />
              <span className={inView === "download" ? "selected" : null}>
                Descargar
              </span>
            </div>
          ) : (
            "Descargar APP"
          )}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
