import { useRoutes } from "react-router-dom";
import { BzrpTour, Home, Login } from "./pages";
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
  ]);

  if (user) {
    return root;
  } else {
    return <Login />;
  }
}

export default App;
