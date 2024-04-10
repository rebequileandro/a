import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Main } from './pages/Main';
import { Suspense } from 'react';
function App() {
  return (
    <>
      <Routes>
        <Suspense fallback={null}>
          <Route path='/' element={<Landing />} />
          <Route path='/app' element={<Main />} />
        </Suspense>
      </Routes>
    </>
  );
}

export default App;
