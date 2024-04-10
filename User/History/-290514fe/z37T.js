import "./global/css/boilerplate.css";
import "./global/fonts/fonts.scss";
import "./global/css/global_styles.scss";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import WeDrinkPros from "./pages/WeDrinkWork/WeDrinkPros";
import Footer from "./pages/Footer/Footer";
import SliderBoliches from "./pages/SliderBoliches/SliderBoliches";
import Wedrink from "./pages/Wedrink/Wedrink";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Wedrink />
      <WeDrinkPros />
      <SliderBoliches />
      <Footer />
    </div>
  );
}

export default App;
