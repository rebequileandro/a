import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './pages';
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getToken, onMessage } from 'firebase/messaging'
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
