import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Main } from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/app#' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
