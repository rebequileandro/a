import { useState } from "react";
import { Home, Login } from "./pages";

function App() {
  const [user, setUser] = useState(false);

  return user ? <Home /> : <Login />;
}

export default App;
