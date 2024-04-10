import React from "react";
import Lottie from "lottie-react";
import home from "../assets/icons/nav/home-static-icon.svg";
import aboutMe from "../assets/icons/nav/about-me-static-icon.svg";
import projects from "../assets/icons/nav/porfolio-static-icon.svg";
import contact from "../assets/icons/nav/contact-static-icon.svg";
import homeAnimation from "../assets/lottie-files/icons/nav/home-gradient-icon.json";
import aboutMeAnimation from "../assets/lottie-files/icons/nav/about-me-gradient-icon.json";
import projectsAnimation from "../assets/lottie-files/icons/nav/portfolio-gradient-icon.json";
import contactAnimation from "../assets/lottie-files/icons/nav/contact-gradient-icon.json";

export const Nav = ({ inView }) => {
  return (
    <nav className="navbar">
      <a href="#home">
        {inView === "home" ? (
          <Lottie
            animationData={homeAnimation}
            loop={false}
            className="navbar__icon"
          />
        ) : (
          <img className="navbar__icon" src={home} alt="home" />
        )}
      </a>
      <a href="#about-me">
        {inView === "about-me" ? (
          <Lottie
            animationData={aboutMeAnimation}
            loop={false}
            className="navbar__icon"
          />
        ) : (
          <img className="navbar__icon" src={aboutMe} alt="about me" />
        )}
      </a>
      <a href="#projects">
        {inView === "projects" ? (
          <Lottie
            animationData={projectsAnimation}
            loop={false}
            className="navbar__icon"
          />
        ) : (
          <img className="navbar__icon" src={projects} alt="about me" />
        )}
      </a>
      <a href="#contact">
        {inView === "contact" ? (
          <Lottie
            animationData={contactAnimation}
            loop={false}
            className="navbar__icon"
          />
        ) : (
          <img className="navbar__icon" src={contact} alt="about me" />
        )}
      </a>
    </nav>
  );
};
