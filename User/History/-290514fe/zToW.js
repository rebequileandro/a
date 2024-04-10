import "./global/css/boilerplate.css";
import "./global/fonts/fonts.scss";
import "./global/css/global_styles.scss";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
// import SliderBoliches from "./pages/SliderBoliches/SliderBoliches";
import Wedrink from "./pages/Wedrink/Wedrink";
import WedrinkHDIW from "./pages/WeDrinkHDIW/WeDrinkHDIW";
import lax from 'lax.js'

function App() {
  window.onload = function () {
    lax.init()
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })
    lax.addElements('.selector', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
        ]
      }
    })
  }
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Wedrink />
      <WedrinkHDIW />
      {/* <SliderBoliches /> */}
      <Footer />
    </div>
  );
}

export default App;
