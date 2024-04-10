import { useState } from "react";
import Nav from "../components/Nav";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  const [inView, setInView] = useState();
  return (
    <div className="main">
      <Home setInView={setInView} />
      <AboutMe setInView={setInView} />
      <Projects setInView={setInView} />
      <Contact setInView={setInView} />
      <Nav inView={inView} />
    </div>
  );
};
export default Main;
