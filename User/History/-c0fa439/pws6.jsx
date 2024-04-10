import React, { useState } from 'react'
import './Barman.scss'
import { TabBarBarman } from '../../components/TabBarBarman/TabBarBarman'
import {HeaderBarman} from '../../components/HeaderBarman/HeaderBarman'
import { QrScanner } from '../../components/QrCode/QrScanner/QrScanner'
export const Barman = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='barman-container'>
        <HeaderBarman/>
        {isOpen && 
        <QrScanner setIsOpen={setIsOpen}/>}
        <TabBarBarman 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}/>
    </div>
  )
}
