
import { Home } from "./pages/Home/Home";
import { useRoutes } from "react-router-dom";
import { NextDates } from "./pages/NextDates/NextDates";
import routes from "./models/routes";
import { BzrpTour } from "./pages/BzrpTour/BzrpTour";
import { useEffect, useState } from "react";
import Mantenance from "./pages/Mantenance/Mantenance";
function App() {

  const [fs, setfs] = useState(false);
  const [fullWindowHeight] = useState(window.innerHeight);
  const [maintenance] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("visited", true)
    }, 6000);
    return () => {
      localStorage.removeItem("visited")
    }
  }, [])

  function checkNavigationBar() {
    if (window.innerHeight === fullWindowHeight) {
      setfs(false);
    } else {
      setfs(true);
    }
  }

  useEffect(() => {
    checkNavigationBar()
    if ('ResizeObserver' in window) {
      window.addEventListener("resize", checkNavigationBar);
    } else {
      setfs(true);
    }

    let userAgent = navigator.userAgent;
    if (/Firefox/i.test(userAgent)) {
      setfs(true)
    } else if (/Chrome/i.test(userAgent)) {
      setfs(false)
    } else if (/Safari/i.test(userAgent)) {
      setfs(true)
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setfs(true)
    }

    return () => {
      if ('ResizeObserver' in window) {
        window.addEventListener("resize", checkNavigationBar);
      } else {
        setfs(true);
      }
    };
  }, []);

  const root = useRoutes([
    {
      path: routes.HOME,
      element: <Home fs={fs} />,
    },
    {
      path: routes.CAP,
      element: <Home fs={fs} capPopup={true} />,
    },
    {
      path: routes.TOUR,
      element: <NextDates />,
    },
    {
      path: routes.EXCLUSIVE_MATERIAL,
      element: <BzrpTour />,
    }
  ]);
  const maintenanceRoot = useRoutes([
    {
      path: "/",
      element: <Mantenance />,
    }
  ]);
  return maintenance ? maintenanceRoot : root;
}

export default App;
