
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState()
  console.log(input)
  return (
    <div className="App">
      <input
        accept='image/*'
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file && file.type.substring(0, 5) === 'image') {
            const reader = new FileReader()
            reader.onloadend = () => {
              setInput(reader.result)
            }
            reader.readAsDataURL(file)
          }
        }} />
      <textarea value={input} />
    </div>
  );
}

export default App;
