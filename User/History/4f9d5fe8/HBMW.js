import Landing from "./pages/Landing/Landing";
import { useRoutes } from "react-router-dom";
import SectionOne from "./pages/SectionOne/SectionOne";
import SectionTwo from "./pages/SectionTwo/SectionTwo";
import SectionThree from "./pages/SectionThree/SectionThree";
import SectionFour from "./pages/SectionFour/SectionFour";
import SectionFive from "./pages/SectionFive/SectionFive";




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
    },
    {
      path: "/guarniciones",
      element: <SectionThree />
    },
    {
      path: "/bebidas",
      element: <SectionFour />
    },
    {
      path: "/postres",
      element: <SectionFive />
    }
  ])
  return rootRouter;
}

export default App;
