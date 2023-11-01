// you need to make npm install react-select,npm install react-select-country-list 
// the classname css is css-b62m3t-container




import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './App.css'

function Conutries() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return <Select options={options} value={value} onChange={changeHandler} />


}

export default Conutries
