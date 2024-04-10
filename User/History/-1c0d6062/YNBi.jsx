import React from 'react'
import './PdfButton.scss'
import download from '../../assets/icons/Organizer/download.svg'
const PdfButton = () => {
  return (
    <button className='download-pdf-container'>
        <img src={download} alt="descargar" />
        Descargar PDF
    </button>
  )
}

export default PdfButton