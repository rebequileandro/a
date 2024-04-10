import { useEffect, useState } from "react";

import Landing from "./pages/Landing/Landing";

import { useRoutes } from "react-router-dom";
import SectionOne from "./pages/Entree/SectionOne";


function App() {
  const rootRouter = useRoutes([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/carnes",
      element: <SectionOne />
    }
  ])
  return rootRouter;
}

export default App;
