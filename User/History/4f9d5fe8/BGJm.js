import { useEffect, useState } from "react";

import Landing from "./pages/Landing/Landing";

import { useRoutes } from "react-router-dom";
import SectionOne from "./pages/SectionOne/SectionOne";
import SectionTwo from "./pages/SectionTwo/SectionTwo";


function App() {
  const rootRouter = useRoutes([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/carnes",
      element: <SectionOne />
    },
    {
      path: "/entradas",
      element: <SectionTwo />
    }
  ])
  return rootRouter;
}

export default App;
