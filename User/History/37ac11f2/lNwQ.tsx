import { useState } from "react";
import { Home, Login } from "./pages";
import "./sass/main.scss";
function App() {
  const [user] = useState(false);

  return user ? <Home /> : <Login />;
}

export default App;
