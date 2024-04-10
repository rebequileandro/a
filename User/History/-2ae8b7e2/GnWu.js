import './App.css';
import { useEffect, useState } from 'react';
import { Map } from './components/Map';
import { createMap } from "maplibre-gl-js-amplify";

import "maplibre-gl/dist/maplibre-gl.css";
import "maplibre-gl-js-amplify/dist/public/amplify-map.css";
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  const[map, setMap] = useState()

  

  return (
    <div className="App">
      <Map/>
    </div>
  );
}

export default App;
