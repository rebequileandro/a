import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import RootRouter from './pages';
import axios from 'axios';

const { REACT_APP_API } = process.env;
function App() {
  const getUser = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API}/auth/login/success`, {
        withCredentials: true
      });
      console.log('LOGIN SUCCESS', response);
      dispatch(logInUser(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </div>
  );
}
export default App;
