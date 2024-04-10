import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import shooza from "../../assets/shooza-icon.svg";

const Navbar = ({ setIsOpen }) => {
  const [media, setMedia] = useState({
    matches: window.innerWidth > 992 ? false : true,
  });
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navigation a[href^="#"]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.getAttribute("id");
          const link = document.querySelector(`.navigation a[href="#${id}"]`);
          const icon = document.querySelector(
            `.navigation a[href="#${id}"] .icon-container .icon-nav`
          );
          if (e.isIntersecting) {
            link.classList.add("selected");
            if (media.matches) {
              icon.classList.add("selected");
            }
          } else {
            link.classList.remove("selected");
            if (media.matches) {
              icon.classList.remove("selected");
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );
    navLinks.forEach((e) => {
      const hash = e.getAttribute("href");
      const target = document.querySelector(hash);
      if (target) {
        observer.observe(target);
      }
    });
  }, []);
  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 992px)");
    mediaQuery.addListener(setMedia);
    return () => mediaQuery.removeListener(setMedia);
  }, []);
  return (
    <nav className="navbar-container">
      <img className="logo-nav" src={shooza} alt="wedrink" loading="lazy" />
      <div className="navigation desktop">
        <a href="#inicio">
          {media.matches ? (
            <div className="icon-container">
              <span className="icon-nav home" />
              <span>Inicio</span>
            </div>
          ) : (
            "Inicio"
          )}
        </a>
        <a href="#functionalities">
          {media.matches ? (
            <div className="icon-container">
              <span className="icon-nav wedrink" />
              <span>Shooza</span>
            </div>
          ) : (
            "Funcionalidades"
          )}
        </a>
        <a href="#download">
          {media.matches ? (
            <div className="icon-container">
              <span className="icon-nav beneficios" />
              <span>Contacto</span>
            </div>
          ) : (
            "Contacto"
          )}
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="navbar-container__btn btn btn--primary"
        >
          "Empieza ahora"
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
