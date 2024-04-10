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
  const reques = async () => {
    try {
      const response = await axios.get("https://odontologiaapi.xnod.tech/api/user/profile/6510a4d5175cd8491bf699aa", { withCredentials: true })
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    reques()
  }, [])

  if (Object.keys(user).length) {
    return userRoutes;
  } else {
    return loginRoutes;
  }
}

export default App;
