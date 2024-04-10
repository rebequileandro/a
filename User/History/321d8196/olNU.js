import "./global/css/boilerplate.css";
import "./global/fonts/fonts.scss";
import "./global/css/global_styles.scss";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import WhatIsWeDrink from "./pages/WhatIsWeDrink/WhatIsWeDrink";
import ShoozaInformation from "./pages/ShoozaInformation/ShoozaInformation";
import Wedrink from "./pages/Wedrink/Wedrink";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <WhatIsWeDrink />
      <Wedrink/>
      <ShoozaInformation />
    </div>
  );
}

export default App;
