import { Navigate, useRoutes } from "react-router-dom";
import { IntroSlider, Login } from "./pages";

function App() {
  const loginRoutes = useRoutes([
    {
      path: "/",
      element: <IntroSlider />,
    },
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  return loginRoutes;
}

export default App;
