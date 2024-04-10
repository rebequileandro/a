import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './pages';
import ReactGA from 'react-ga';
const TRACKING_ID = 'G-1G7ZVC4CN7';
ReactGA.initialize(TRACKING_ID);
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
