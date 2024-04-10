
import Home from "./pages/Home/Home";
import { useRoutes } from "react-router-dom";
import NextDates from "./pages/NextDates/NextDates";
import routes from "./models/routes";
import { useEffect, useState } from "react";
import Error404 from "./pages/Error404/Error404";
import SelectDate from "./pages/SelectDate/SelectDate";
import Recap from "./pages/Recap/Recap";
import { AppProvider, useAppContext } from "./context/AppProvider";
import { getNextDates } from "./services/nextDates.services";
import { ACTION_TYPE } from "./models/action.type.models";


function App() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("visited", true)
    }, 6000);
    return () => {
      localStorage.removeItem("visited")
    }
  }, [])
  const nextDates = async () => {
    const result = await getNextDates()
    console.log(result)
    dispatch({
      type: ACTION_TYPE.NEXT_DATES,
      value: result,
    });
  }
  useEffect(() => {
    nextDates()
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
