import ClassicPizza from "./pages/ClassicPizza/ClassicPizza";
import Desserts from "./pages/Desserts/Desserts";
import Drinks from "./pages/Drinks/Drinks";
import Entree from "./pages/Entree/Entree";
import EspecialPizza from "./pages/EspecialPizza/EspecialPizza";
import Landing from "./pages/Landing/Landing";
import AuthorsPizza from "./pages/authorsPizza/AuthorsPizza";


function App() {
  return (
    <>
      <Landing />
      <Entree />
      <ClassicPizza />
      <EspecialPizza />
      <AuthorsPizza />
      <Desserts />
      <Drinks />
    </>
  );
}

export default App;
