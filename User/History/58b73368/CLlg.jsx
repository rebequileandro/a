import React from "react";
import { Home } from "./Home";
import { Nav } from "../components/Nav";
import { useState } from "react";
import AboutMe from "./AboutMe";
export const Main = () => {
  const [inView, setInView] = useState();
  return (
    <div className="main">
      <Nav inView={inView} />
      <Home setInView={setInView} />
      <AboutMe setInView={setInView} />
    </div>
  );
};
