import "./global/css/boilerplate.css";
import "./global/fonts/fonts.scss";
import "./global/css/global_styles.scss";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ShoozaInformation from "./pages/ShoozaInformation/ShoozaInformation";
import WeDrinkPros from "./pages/WeDrinkPros/WeDrinkPros";
import Footer from "./pages/Footer/Footer";
import SliderBoliches from "./pages/SliderBoliches/SliderBoliches";
import Wedrink from "./pages/Wedrink/Wedrink";
import { useEffect } from "react";
import { animations } from "./components/Animations";
import { useState } from "react";

function App() {
  const [inView, setInView] = useState()
  useEffect(() => {
    animations()
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Wedrink />
      <ShoozaInformation />
      <WeDrinkPros />
      {/* <SliderBoliches /> */}
      <Footer />
    </div>
  );
}

export default App;
