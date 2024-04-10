import "./global/css/boilerplate.css";
import "./global/fonts/fonts.scss";
import "./global/css/global_styles.scss";
import "./App.scss";

import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
// import SliderBoliches from "./pages/SliderBoliches/SliderBoliches";
import Functionalities from "./pages/Functionalities/Functionalities";
// import WedrinkHDIW from "./pages/WeDrinkHDIW/WeDrinkHDIW";
import { animations } from "./components/Animations";

function App() {
  useEffect(() => {
    animations()
    window.addEventListener('scroll', function (event) {
      console.log(event)
    });
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Functionalities />
      <Footer />
    </div>
  );
}

export default App;
