import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './pages';
const socket = io(REACT_APP_SOCKET);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </div>
  );
}
export default App;
