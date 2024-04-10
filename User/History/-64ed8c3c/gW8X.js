
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <input 
          accept='image/*'
          type="file" ref={fileRef} 
          style={{display: 'none'}}
          onChange={(e) => {
          const file = e.target.files[0];
            if(file && file.type.substring(0, 5) === 'image'){
              const reader = new FileReader()
              reader.onloadend = () => {
                setInput(reader.result)
                }
                  reader.readAsDataURL(file)
            }
          }}/>
        <textarea>{input}</textarea>
      </header>
    </div>
  );
}

export default App;
