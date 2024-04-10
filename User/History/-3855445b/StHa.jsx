import { Navigate, useRoutes } from "react-router-dom";
import { IntroSlider, Login } from "@/pages";
import ROUTES from "@/models/routes.models";
import { useSelector } from "react-redux";
import { currentUser } from "./store/slice/user.slice";
function App() {
  const userAuth = useSelector(currentUser);
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
  return loginRoutes;
}

export default App;
