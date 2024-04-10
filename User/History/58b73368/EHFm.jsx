import { useCallback, useRef, useState } from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "../components/Nav";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const [view, setView] = useState();
  const ref = useRef();
  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0.5,
    rootMargin: "0px 0px 0px 0px",
  });
  // useEffect(() => {
  //   if (inView) {
  //     setView("home");
  //   }
  // }, [inView]);
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );
  console.log(inView);
  return (
    <div className="main">
      <Home reference={setRefs} setInView={setView} />
      <AboutMe reference={setRefs} setInView={setView} />
      <Projects setInView={setView} />
      <Contact setInView={setView} />
      <Nav inView={inView} />
    </div>
  );
};
export default Main;
