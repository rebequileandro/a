import { Home, Login } from "./pages";

function App() {
  const user = true;
  if (user) {
    return <Home />;
  } else {
    return <Login />;
  }
}

export default App;
