import { Home, Login } from "./pages";

function App() {
  const user = true;

  return user ? <Home /> : <Login />;
}

export default App;
