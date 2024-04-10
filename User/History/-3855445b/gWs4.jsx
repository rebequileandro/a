import { Navigate, useRoutes } from "react-router-dom";
import { IntroSlider, Login, Home, ClinicalSimulator } from "./pages";
import ROUTES from "@/models/routes.models";
import { useSelector } from "react-redux";
import { currentUser } from "./store/slice/user.slice";
import { Layout } from "./components";

function App() {
  const userAuth = useSelector(currentUser);

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
      path: "/s",
      element: <ClinicalSimulator />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  if (userAuth) {
    return <Layout>{appRoutes}</Layout>;
  } else {
    return loginRoutes;
  }
}

export default App;
