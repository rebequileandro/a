import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/(' element={<Main />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
