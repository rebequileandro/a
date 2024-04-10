import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './pages';

function App({ socket }) {
  return (
    <div className="App">
      <BrowserRouter>
        <RootRouter socket={socket} />
      </BrowserRouter>
    </div>
  );
}
export default App;
