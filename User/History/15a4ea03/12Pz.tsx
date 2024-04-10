import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/App" element={<Main/>}>
    </Routes>
  );
};

export default App;
