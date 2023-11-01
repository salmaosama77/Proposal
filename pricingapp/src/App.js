import React, { useState } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Afghanistan from './Components/Afghanistan/Afghanistan';
import Agreement from './Components/ContractForm/ContractForm';
import './App.css';


function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <HomePage onCountryChange={handleCountryChange} />
      <div className="content">
        {selectedCountry && selectedCountry.value === 'afghanistan' && <Afghanistan />}
      </div>
      {/* <Agreement/> */}
    </div>
  );
}

export default App;

