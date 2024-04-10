import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { currentUser } from "redux/slices/user.slice";
import ROUTES from "models/routes.models";
import { Landing } from "pages";

function App() {
  const user = useSelector(currentUser)
  console.log(ROUTES)
  const userRoutes = useRoutes([
    {
      path: ROUTES.HOME,
      element: <Landing />,
    }
  ]);
  const loginRoutes = useRoutes([
    {
      path: ROUTES.HOME,
      element: <Landing />,
    }
  ]);

  if (Object.keys(user).length) {
    return userRoutes;
  } else {
    return loginRoutes;
  }
}

export default App;
