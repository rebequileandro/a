import React from 'react'
import { TabBarBarman } from '../../components/TabBarBarman/TabBarBarman'
import {HeaderBarman} from '../../components/HeaderBarman/HeaderBarman'
export const Barman = () => {
  return (
    <div className='barman-container'>
        <HeaderBarman/>
        <TabBarBarman/>
    </div>
  )
}
