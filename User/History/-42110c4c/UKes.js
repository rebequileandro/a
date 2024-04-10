import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import RootRouter from './pages';
import axios from 'axios';
import { logInUser } from './redux/slices/global/user';
import { useDispatch } from 'react-redux';

const { REACT_APP_API } = process.env;
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
