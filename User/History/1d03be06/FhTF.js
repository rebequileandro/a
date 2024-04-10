import "./global/css/boilerplate.css";
import "./global/fonts/fonts.scss";
import "./global/css/global_styles.scss";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/historial" element={<History/>}/>
        <Route path="/perfil" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
