import "./global/css/boilerplate.css";
import "./global/fonts/fonts.scss";
import "./global/css/global_styles.scss";
import "./App.scss";

import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Functionalities from "./pages/Functionalities/Functionalities";
import Form from "./components/Form/Form";
import { animations } from "./components/Animations";
import { useState } from "react";
import useScript from "./hooks/useScript";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  useScript("//js-na1.hs-scripts.com/40862153.js", "Hubspot", "hs-script-loader")

  useEffect(() => {
    animations()
  }, [])
  return (
    <div className="App">
      <Navbar setIsOpen={setIsOpen} />
      <Home setIsOpen={setIsOpen} />
      <Functionalities setIsOpen={setIsOpen} />
      <Footer setIsOpen={setIsOpen} />
      <Form isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
