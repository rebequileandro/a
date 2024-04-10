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
      // Calcular la posición actual del scroll
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Definir la velocidad de desplazamiento deseada (en píxeles por segundo)
      var scrollSpeed = 100;

      // Calcular el desplazamiento para el próximo frame
      var scrollAmount = scrollTop + (scrollSpeed / 60); // 60 representa la cantidad de frames por segundo

      // Aplicar el desplazamiento al elemento window
      window.scrollTo(0, scrollAmount);
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
