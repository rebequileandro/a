import React from 'react'
import '../App.css';
import {MapView} from '@aws-amplify/ui-react'

export const Map = (props) => {
  return (
    <div className='container'>
     <MapView/>
    </div>
  )
}
