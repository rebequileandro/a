import { Navigate, useRoutes } from "react-router-dom";
import { IntroSlider, Login, Home } from "@/pages";
import ROUTES from "@/models/routes.models";
import { useSelector } from "react-redux";

import { useLoginMutation } from "./store/servicesSlice/login.services";
function App() {
  // const userAuth = useSelector(currentUser);
  const [{ data: userAuth }] = useLoginMutation();
  console.log(userAuth);
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
  const appRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return userAuth ? appRoutes : loginRoutes;
}

export default App;
