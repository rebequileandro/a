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

function App() {
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    animations()
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Functionalities />
      <Footer />
      <Form isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
