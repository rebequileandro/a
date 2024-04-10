import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/App" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
