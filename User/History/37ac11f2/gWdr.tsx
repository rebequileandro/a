import { useRoutes } from "react-router-dom";
import { BzrpTour, Home, Login, Recap } from "./pages";
import ROUTES from "./models/routes.models";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const root = useRoutes([
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
    {
      path: ROUTES.BZRP_TOUR,
      element: <BzrpTour />,
    },
    {
      path: ROUTES.RECAP,
      element: <Recap />,
    },
  ]);
  useEffect(() => {
    window.sessionStorage.getItem("user") &&
      setUser(JSON.parse(window.sessionStorage.getItem("user")));
  }, [window.sessionStorage.getItem("user")]);

  if (user) {
    return root;
  } else {
    return <Login />;
  }
}

export default App;
