import { Home, Login } from "./pages";

function App() {
  const user = false;

  return user ? <Home /> : <Login />;
}

export default App;
