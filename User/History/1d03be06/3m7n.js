import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Profile from "./pages/Profile/Profile";
import Drinks from "./pages/Drinks/Drinks";
import Party from "./pages/Party/Party";
import { useEffect, useState } from "react";
import Login from "./pages/Login/Login";

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {

  }, [])

  if (user && user.rol === "adminShooza") {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historial" element={<History />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/bebidas" element={<Drinks />} />
        <Route path="/party" element={<Party />} />
      </Routes>
    );

  } else {
    return <Login />
  }
}

export default App;
