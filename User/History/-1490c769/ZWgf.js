
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [input, setInput] = useState('')
  const [fileName, setFileName] = useState('')
  const inputRef = useRef()
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      const reader = new FileReader()
      reader.onloadend = () => {
        setInput(reader.result)
      }
      reader.readAsDataURL(file)
    }
    setFileName(file.name)
  }
  return (
    <div className="App">
      <h1>Image to base64</h1>
      <input
        accept='image/*'
        type="file"
        ref={inputRef}
        onChange={handleChange} />
      <div className='add-file-container'>
        <button className='file' onClick={() => inputRef.current.click()}>+</button>
        <p>{fileName}</p>
        <button className='file remove' onClick={() => {
          setInput('')
          setFileName('')
        }}>x</button>
      </div>

    </div>
  );
}

export default App;
