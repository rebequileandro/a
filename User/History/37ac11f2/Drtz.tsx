import { useRoutes } from "react-router-dom";
import { BzrpTour, Home, Login, Recap } from "./pages";
import ROUTES from "./models/routes.models";

function App() {
  const user = true;
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

  if (user) {
    return root;
  } else {
    return <Login />;
  }
}

export default App;
