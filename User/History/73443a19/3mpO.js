import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/app' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
