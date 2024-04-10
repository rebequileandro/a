import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { currentUser } from "redux/slices/user.slice";
import ROUTES from "models/routes.models";
import { Home, Landing, Login } from "pages";

function App() {
  const user = useSelector(currentUser)
  const userRoutes = useRoutes([
    {
      path: ROUTES.HOME,
      element: <Home />,
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
    }
  ]);
  if (Object.keys(user).length) {
    return userRoutes;
  } else {
    return loginRoutes;
  }
}

export default App;
