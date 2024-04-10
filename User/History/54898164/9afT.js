import './App.scss';
import { Landing } from './components/Landing';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
