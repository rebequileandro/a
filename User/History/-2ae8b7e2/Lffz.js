import './App.css';
import { useEffect, useState } from 'react';
import { Map } from './components/Map';


import "maplibre-gl/dist/maplibre-gl.css";

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
const { createMap } = AmplifyMapLibre;

function App() {
  const[map, setMap] = useState()
  useEffect(() => {
    const initializeMap = async () => {
      const map = await createMap({
        container: "map",
        center: [-123.1187, 49.2819],
        zoom: 11,
      })
      setMap(map)
    }
    initializeMap()
  }, [])

  return (
    <div className="App">
      <Map map={map}/>
    </div>
  );
}

export default App;
