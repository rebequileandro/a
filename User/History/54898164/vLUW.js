import './App.scss';
import { Home } from './components/Home';
import { Landing } from './components/Landing';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Nav/>
    </div>
  );
}

export default App;
