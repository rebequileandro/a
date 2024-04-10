import React, { useState } from 'react'
import './Barman.scss'
import { TabBarBarman } from '../../components/TabBarBarman/TabBarBarman'
import {HeaderBarman} from '../../components/HeaderBarman/HeaderBarman'
export const Barman = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='barman-container'>
        <HeaderBarman/>
        <TabBarBarman 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}/>
    </div>
  )
}
