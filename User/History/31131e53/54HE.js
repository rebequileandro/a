
import './App.scss';
import { Button } from 'xnod-ui';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Comp backgroundColor={{ backgroundColor: "red" }} /> */}

        <Button>Hellow World!</Button>
        <br />
        <Button type="secondary">Hellow World!</Button>
      </header>
    </div>
  );
}

export default App;
