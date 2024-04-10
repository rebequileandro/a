import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../../../components/Header/Header'
import InputDiv from '../../../../components/InputDiv/InputDiv'
import SelectDiv from '../../../../components/SelectDiv/SelectDiv'
import '../UnitManagerSettings.scss'
export const EditRol = () => {
  const { id, bar } = useParams() 
  const navigate = useNavigate()
  const [options, setOptions] = useState([])
  const [input, setInput] = useState({
    name: '',
    email: '',
    bar: '',
    id:'',
  })
  const handleChange = (type) => (value) => {
    setInput({
      ...input,
      [type]: value
    })
  }

  const barmans = [
    {
        name: 'tincho',
        email: 'tincho@gmail.com',
        bar: '1',
        id: '123443345345'
    },
    {
        name: 'alan',
        email: 'alan@gmail.com',
        bar: '1',
        id: '12344352534gf5345'
    },
    {
        name: 'tincho',
        email: 'tincho@gmail.com',
        bar: '2',
        id: '123443a525345345'
    },
    {
        name: 'tincho',
        email: 'tincho@gmail.com',
        bar: '1',
        id: '123125345345'
    },
    {
        name: 'tincho',
        email: 'tincho@gmail.com',
        bar: '2',
        id: '1234'
    }
]
  useEffect(() => {
    const barman = barmans.filter(e => e.id === id)
    if(barman.length){
      setInput({
        ...input,
        name: barman[0].name,
        email: barman[0].email,
        bar: barman[0].bar,
        id: barman[0].id
      })
    }
    if(options.length < bar) {
      setOptions([...options, options.length + 1])
    }
  }, [options])
  const optionsFormat = () => {
    let format = {}
    options.forEach(e => {
      format = {...format, [`barra${e}`]: `barra ${e}`}
    })
    return format
  }
  return (
    <div className='unit-manager-settings-container'>
        <Header backbutton={() => navigate(-1)}/>
        <InputDiv
          inputProps={{
            type: 'text',
            value: input.name
          }}
          setState={handleChange('name')}
        />
         <InputDiv
          inputProps={{
            type: 'text',
            value: input.email
          }}
          setState={handleChange('email')}
        />
        <SelectDiv
          selectProps={{
            name: 'bar'
          }}
          options={optionsFormat()}
        />
    </div>
  )
}
