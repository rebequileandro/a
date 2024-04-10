import { useState } from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "../components/Nav";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const [view, setView] = useState();
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    rootMargin: "0px 0px 0px 0px",
  });
  // useEffect(() => {
  //   if (inView) {
  //     setView("home");
  //   }
  // }, [inView]);
  // console.log(entry);
  return (
    <div className="main">
      <Home reference={ref} setInView={setView} />
      <AboutMe reference={ref} setInView={setView} />
      <Projects setInView={setView} />
      <Contact setInView={setView} />
      <Nav inView={inView} />
    </div>
  );
};
export default Main;
