import { useState } from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "../components/Nav";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const [view, setView] = useState();
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "0px 0px 0px 0px",
  });
  // useEffect(() => {
  //   if (inView) {
  //     setView("home");
  //   }
  // }, [inView]);
  return (
    <div className="main">
      <Home ref={ref} setInView={setView} />
      <AboutMe ref={ref} setInView={setView} />
      <Projects setInView={setView} />
      <Contact setInView={setView} />
      <Nav inView={inView} />
    </div>
  );
};
export default Main;
