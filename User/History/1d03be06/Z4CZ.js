
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Profile from "./pages/Profile/Profile";
import Drinks from "./pages/Drinks/Drinks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historial" element={<History />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/bebidas" element={<Drinks />} />
      </Routes>
    </div>
  );
}

export default App;
