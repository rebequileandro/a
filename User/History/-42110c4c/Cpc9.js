import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './pages';
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getToken, onMessage } from 'firebase/messaging'
import { messaging } from './firebase'

function App({ socket }) {
  const log = () => {
    signInAnonymously(getAuth()).then(() => console.log("anonymously"))
  }
  const createToken = async () => {
    const token = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_PUBLIC_VAPID_KEY_FIREBASE
    }).catch(error => console.log("error token"))
    if (token) {

    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <RootRouter socket={socket} />
      </BrowserRouter>
    </div>
  );
}
export default App;
