import { useState } from 'react';
import './App.css';
import { MapView } from './components/MapView';

function App() {

const [coords, setCoords] = useState({
  latitud:'',
  longitud:''
})


  if(navigator.geolocation){
    var success = function(position){
      setCoords({
        latitud: position.coords.latitude,
        longitud:position.coords.longitude
      })
    }
    navigator.geolocation.getCurrentPosition(success, function(msg){
    console.error( msg );
    });
    }

  return (
    <div className="App">
     <MapView/>
    </div>
  );
}

export default App;
