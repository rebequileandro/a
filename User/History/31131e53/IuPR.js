import logo from './logo.svg';
import './App.scss';
import Comp from './Comp';
// import { Button } from 'xnod-ui';
// import { Button } from 'xnod-ui';
// import { Button } from 'xnod-ui';
// import { Button } from 'xnod-ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Comp />
        {/* <Button label={"Hellow World!"} /> */}
      </header>
    </div>
  );
}

export default App;
