import ClassicPizza from "./pages/ClassicPizza/ClassicPizza";
import Entree from "./pages/Entree/Entree";
import EspecialPizza from "./pages/EspecialPizza/EspecialPizza";
import Landing from "./pages/Landing/Landing";


function App() {
  return (
    <>
      <Landing />
      <Entree />
      <ClassicPizza />
      <EspecialPizza />
    </>
  );
}

export default App;
