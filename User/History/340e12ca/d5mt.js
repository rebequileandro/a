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


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])

  return (
    <>
      {loading ?
        <Loading />
        :
        <>
          <Landing />
          <Entree />
          <ClassicPizza />
          <EspecialPizza />
          <AuthorsPizza />
          <Desserts />
          <Drinks />
          <Coffee />
          <Footer />
        </>
      }
    </>
  );
}

export default App;
