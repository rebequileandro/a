import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { currentUser } from "redux/slices/user.slice";
import ROUTES from "models/routes.models";
import { Home, Landing, Login } from "pages";
import axios from "axios";
import { useEffect } from "react";



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
  useEffect(() => {
    (async () => {
      const response = await axios("https://backend-production-9427.up.railway.app/api/user/profile/6510a4d5175cd8491bf699aa")
      console.log(response)
    })
  }, [])

  if (Object.keys(user).length) {
    return userRoutes;
  } else {
    return loginRoutes;
  }
}

export default App;
