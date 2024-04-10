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

const Nav = ({ inView }) => {
  return (
    <nav className="navbar">
      <a href="#home)">
        <div className="navbar__icon-container">
          {inView === "home" ? (
            <Lottie
              animationData={homeAnimation}
              loop={false}
              className="navbar__icon"
            />
          ) : (
            <img className="navbar__icon" src={home} alt="home" />
          )}
        </div>
      </a>
      <a href="#about-me)">
        <div className="navbar__icon-container">
          {inView === "about-me" ? (
            <Lottie
              animationData={aboutMeAnimation}
              loop={false}
              className="navbar__icon"
            />
          ) : (
            <img className="navbar__icon" src={aboutMe} alt="about me" />
          )}
        </div>
      </a>
      <a href="#projects)">
        <div className="navbar__icon-container">
          {inView === "projects" ? (
            <Lottie
              animationData={projectsAnimation}
              loop={false}
              className="navbar__icon"
            />
          ) : (
            <img className="navbar__icon" src={projects} alt="about me" />
          )}
        </div>
      </a>
      <a href="#contact)">
        <div className="navbar__icon-container">
          {inView === "contact" ? (
            <Lottie
              animationData={contactAnimation}
              loop={false}
              className="navbar__icon"
            />
          ) : (
            <img className="navbar__icon" src={contact} alt="about me" />
          )}
        </div>
      </a>
    </nav>
  );
};
export default Nav;
