import { lazy, useState } from "react";
const Nav = lazy(import("../components/Nav"));
const Home = lazy(import("./Home"));
const AboutMe = lazy(import("./AboutMe"));
const Projects = lazy(import("./Projects"));
const Contact = lazy(import("./Contact"));

const Main = () => {
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
export default Main;
