
import Home from "./pages/Home/Home";
import { useRoutes } from "react-router-dom";
import NextDates from "./pages/NextDates/NextDates";
import routes from "./models/routes";
import { useEffect, useState } from "react";
import Error404 from "./pages/Error404/Error404";
import SelectDate from "./pages/SelectDate/SelectDate";
import Recap from "./pages/Recap/Recap";
import { AppProvider, useAppContext } from "./context/AppProvider";
import Grammy from "./pages/Grammy/Grammy";



function App() {


  useEffect(() => {
    window.addEventListener('pagehide', function (event) {
      window.sessionStorage.removeItem("visited")
    });
  }, [])


  const root = useRoutes([
    {
      path: routes.HOME,
      element: <Home />,
    },
    {
      path: routes.SELECT_DATE,
      element: <SelectDate />,
    },
    {
      path: routes.CAP,
      element: <Home capPopup={true} />,
    },
    {
      path: routes.TOUR,
      element: <NextDates />,
    },
    {
      path: `${routes.EXCLUSIVE_MATERIAL}/:id`,
      element: <Recap />,
    },
    {
      path: routes.GRAMMY,
      element: <Grammy />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]);

  return (
    <AppProvider>
      {root}
    </AppProvider>
  );
}

export default App;
