
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [input, setInput] = useState()
  const [fileName, setFileName] = useState('')
  const inputRef = useRef()
  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file && file.type.substring(0, 5) === 'image') {
      const reader = new FileReader()
      reader.onloadend = () => {
        setInput(reader.result)
      }
      reader.readAsDataURL(file)
    }
    setFileName(file.name)
  }
  console.log(fileName)
  return (
    <div className="App">
      <input
        accept='image/*'
        type="file"
        ref={inputRef}
        onChange={handleChange} />
      <div>
        <button className='add-file' onClick={() => inputRef.current.click()}>+</button>
        <p>{fileName}</p>
      </div>
      <textarea value={input} />
    </div>
  );
}

export default App;
