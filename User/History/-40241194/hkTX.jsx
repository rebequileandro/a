import React from 'react'
import '../App.css';
import { MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export function Map() {
  return (
    <div className='container'>
      <div id='map'></div>
    </div>
  );
}
