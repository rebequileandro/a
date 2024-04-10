import { useState } from 'react';
import './App.css';
import { MapView } from './components/MapView';
import { MarkerPulse } from './components/Marker/MarkerPulse';

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
     <MarkerPulse/>
     <MapView coords={coords}/>
    </div>
  );
}

export default App;
