import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Landing } from './components/Landing';
import { Nav } from './components/Nav';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/app' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
