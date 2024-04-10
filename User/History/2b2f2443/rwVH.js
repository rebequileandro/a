import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import { currentUser } from "redux/slices/user.slice";
import ROUTES from "models/routes.models";
import { Home, Landing, Login, Settings } from "pages";

function App() {
  const user = useSelector(currentUser)
  const userRoutes = useRoutes([
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
    {
      path: ROUTES.SETTINGS,
      element: <Settings />,
    },
    {
      path: '*',
      element: <Navigate to="/" />
    }
  ]);
  const loginRoutes = useRoutes([
    {
      path: ROUTES.HOME,
      element: <Landing />,
    },
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: '*',
      element: <Navigate to="/" />
    }
  ]);
  if (Object.keys(user).length) {
    return userRoutes;
  } else {
    return loginRoutes;
  }
}

export default App;
