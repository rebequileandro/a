import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Landing } from './components/Landing';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='app'>
          <Nav/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
