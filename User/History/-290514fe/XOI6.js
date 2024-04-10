import "./global/css/boilerplate.css";
import "./global/fonts/fonts.scss";
import "./global/css/global_styles.scss";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import SliderBoliches from "./pages/SliderBoliches/SliderBoliches";
import Wedrink from "./pages/Wedrink/Wedrink";
import WeDrinkHDIW from "./pages/WeDrinkHDIW/WeDrinkHDIW";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Wedrink />
      <WeDrinkHDIW/>
      <SliderBoliches />
      <Footer />
    </div>
  );
}

export default App;
