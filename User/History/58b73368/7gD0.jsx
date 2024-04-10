import React from "react";
import { Home } from "./Home";
import { Nav } from "../components/Nav";
import { useState } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
export const Main = () => {
  const [inView, setInView] = useState();
  return (
    <div className="main">
      <Nav inView={inView} />
      <Home setInView={setInView} />
      <AboutMe setInView={setInView} />
      <Projects setInView={setInView} />
      <Contact setInView={setInView} />
    </div>
  );
};
