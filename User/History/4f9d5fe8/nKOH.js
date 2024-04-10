import { useEffect, useState } from "react";

import Landing from "./pages/Landing/Landing";

import { useRoutes } from "react-router-dom";


function App() {
  const rootRouter = useRoutes([
    {
      path: "/",
      element: <Landing />
    }
  ])
  return rootRouter;
}

export default App;
