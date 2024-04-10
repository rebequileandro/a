import { useEffect, useState } from "react";
import ClassicPizza from "./pages/ClassicPizza/ClassicPizza";
import Coffee from "./pages/Coffee/Coffee";
import Desserts from "./pages/Desserts/Desserts";
import Drinks from "./pages/Drinks/Drinks";
import Entree from "./pages/Entree/Entree";
import EspecialPizza from "./pages/EspecialPizza/EspecialPizza";
import Footer from "./pages/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Loading from "./pages/Loading/Loading";
import AuthorsPizza from "./pages/authorsPizza/AuthorsPizza";
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
