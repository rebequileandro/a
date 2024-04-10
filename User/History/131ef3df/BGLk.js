import './App.css';
import { MapView } from './components/MapView';

function App() {
  if(navigator.geolocation){
    var success = function(position){
    var latitud = position.coords.latitude,
        longitud = position.coords.longitude;
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
