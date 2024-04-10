
import './App.scss';
import { Button, CheckBox, Input, Radio, ToggleSwitch, Tooltip } from 'xnod-ui';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Hellow World!</Button>
        <br />
        <Button type="secondary">Hellow World!</Button>
        <br />
        <CheckBox onChange={() => console.log("A")} />
        <br />
        <CheckBox type="secondary" onChange={() => console.log("A")} />
        <br />
        <Radio />
        <br />
        <ToggleSwitch onChange={() => console.log("A")} />
        <br />
        <Input size='l' />
        <br />
        <Tooltip text="HOLA">ToolTip</Tooltip>
      </header>
    </div>
  );
}

export default App;
