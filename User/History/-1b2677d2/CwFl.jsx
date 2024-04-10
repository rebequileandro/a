import React from "react";
import Lottie from "lottie-react";
import home from "../assets/lottie-files/icons/gradient/home-gradient-icon.json";
import aboutMe from "../assets/lottie-files/icons/gradient/about-me-gradient-icon.json";
import proyect from "../assets/lottie-files/icons/gradient/portfolio-gradient-icon.json";
import contact from "../assets/lottie-files/icons/gradient/contact-gradient-icon.json";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="#home"
        className={(navigation) =>
          navigation.isActive ? console.log("Active") : null
        }
      >
        <Lottie animationData={home} loop={false} />
      </NavLink>

      <a href="#about">
        <Lottie animationData={aboutMe} loop={false} />
      </a>
      <a href="#proyects">
        <Lottie animationData={proyect} loop={false} />
      </a>
      <a href="#contact">
        <Lottie animationData={contact} loop={false} />
      </a>
    </nav>
  );
};
