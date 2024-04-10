import "./App.css";
import { Navigate, useRoutes } from "react-router-dom";
import { IntroSlider } from "./pages";

function App() {
  const loginRoutes = useRoutes([
    {
      path: "/",
      element: <IntroSlider />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  return loginRoutes;
}

export default App;
