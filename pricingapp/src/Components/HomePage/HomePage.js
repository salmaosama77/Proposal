// import React, { useState } from 'react';
// import Select from 'react-select';
// import './HomePage.css';
// // import '../Afghanistan/Afghanistan.css';
// // import '../AlandIsland/Aland.css';
// import Afghanistan from '../Afghanistan/Afghanistan';
// import AlandIslands from '../AlandIsland/AlandIslands';
// import Albania from '../Albania/Albania';
// import Algeria from '../Algeria/Algeria';
// import Andorra from '../Andorra/Andorra';
// import Angola from '../Angola/Angola';
// import Anguilla from '../Anguilla/Anguilla';
// import AntiguaAndBarbuda from '../AntiguaAndBarbuda/AntiguaAndBarbuda';
// import Argentina from '../Argentina/Argentina';
// import Armenia from '../Armenia/Armenia';
// import Aruba from '../Aruba/Aruba';
// import Australia from '../Australia/Australia';
// import Austria from '../Austria/Austria';
// import Bahrain from '../Bahrain/Bahrain';
// import Canada from '../Canada/Canada';
// import France from '../France/France';
// import Germany from '../Germany/Germany';
// import Nigeria from '../Nigeria/Nigeria';
// import Oman from '../Oman/Oman';
// import Philippines from '../Philippines/Philippines';
// import Qatar from '../Qatar/Qatar';
// import SaudiArabia from '../SaudiArabia/SaudiArabia';
// import Singapore from '../Singapore/Singapore';
// import Turkey from '../Turkey/Turkey';
// import UAE from '../UAE/UAE';
// import UnitedKingdom from '../UnitedKingdom/UnitedKingdom';
// import UnitedStates from '../UnitedStates/UnitedStates';
// import Kuwait from '../Kuwait/Kuwait';
// import { Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col } from 'react-bootstrap';


// const countryOptions = [
//   { value: 'afghanistan', label: 'Afghanistan' },
//   { value: 'aland-islands', label: 'Aland Islands' },
//   { value: 'albania', label: 'Albania' },
//   { value: 'algeria', label: 'Algeria' },
//   { value: 'andorra', label: 'Andorra' },
//   { value: 'angola', label: 'Angola' },
//   { value: 'anguilla', label: 'Anguilla' },
//   { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
//   { value: 'argentina', label: 'Argentina' },
//   { value: 'armenia', label: 'Armenia' },
//   { value: 'aruba', label: 'Aruba' },
//   { value: 'australia', label: 'Australia' },
//   { value: 'austria', label: 'Austria' },
//   { value: 'bahrain', label: 'Bahrain' },
//   { value: 'canada', label: 'Canada' },
//   { value: 'france', label: 'France' },
//   { value: 'germany', label: 'Germany' },
//   { value: 'kuwait', label: 'Kuwait' },
//   { value: 'nigeria', label: 'Nigeria' },
//   { value: 'oman', label: 'Oman' },
//   { value: 'philippines', label: 'Philippines' },
//   { value: 'qatar', label: 'Qatar' },
//   { value: 'saudi', label: 'Saudi Arabia' },
//   { value: 'singapore', label: 'Singapore' },
//   { value: 'turkey', label: 'Turkey' },
//   { value: 'uae', label: 'UAE' },
//   { value: 'unitedkingdom', label: 'United Kingdom' },
//   { value: 'unitedstates', label: 'United States' },
// ];

// const customStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     border: state.isFocused ? '1.5px solid #29386c' : provided.border,
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isFocused ? '#29386c' : '#bbc6e3',
//     color: state.isFocused ? 'white' : 'black',
//     '&:hover': {
//       backgroundColor: '#354581',
//       color: 'white',
//     },
//   }),
// };

// const HomePage = () => {
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//   };

//   const handleSubmit = () => {
//     if (selectedCountry && selectedCountry.value === 'afghanistan') {
//       // Redirect to the Afghanistan page using window.location
//       window.location.href = '/afghanistan';
//     }
//     if (selectedCountry && selectedCountry.value === 'aland-islands') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'albania') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'algeria') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'andorra') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'angola') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'anguilla') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'antigua-and-barbuda') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'argentina') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'armenia') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'aruba') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'australia') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'austria') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'bahrain') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'canada') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'france') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'kuwait') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'germany') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'nigeria') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'oman') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'philippines') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'qatar') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'saudi') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'singapore') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'turkey') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'uae') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'unitedkingdom') {
//       return;
//     }
//     if (selectedCountry && selectedCountry.value === 'unitedstates') {
//       return;
//     }
   
   
//   };

//   return (
//     <div className="homepage-container">
//       <div className="homepage">
//         <div className="form-container">
//           <h1 className='h'>WELCOME!</h1>
//           <p className='p'>Please Pick The Desired Country</p>         
//             <Select
//             options={countryOptions}
//             placeholder="Country"
//             className="custom-select"
//             styles={customStyles}
//             value={selectedCountry} 
//             onChange={handleCountryChange} />  

//         </div>
//       </div> 
//       {selectedCountry && selectedCountry.value === 'afghanistan' && (
//         <Afghanistan />
//       )}
//         {selectedCountry && selectedCountry.value === 'aland-islands' && (
//         <AlandIslands /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'albania' && (
//         <Albania /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'algeria' && (
//         <Algeria /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'andorra' && (
//         <Andorra /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'angola' && (
//         <Angola /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'anguilla' && (
//         <Anguilla /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'antigua-and-barbuda' && (
//         <AntiguaAndBarbuda /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'argentina' && (
//         <Argentina /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'armenia' && (
//         <Armenia /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'aruba' && (
//         <Aruba /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'australia' && (
//         <Australia /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'austria' && (
//         <Austria /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'bahrain' && (
//         <Bahrain /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'canada' && (
//         <Canada /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'france' && (
//         <France /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'kuwait' && (
//         <Kuwait /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'germany' && (
//         <Germany /> 
//       )}
//      {selectedCountry && selectedCountry.value === 'nigeria' && (
//         <Nigeria /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'oman' && (
//         <Oman /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'philippines' && (
//         <Philippines /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'qatar' && (
//         <Qatar /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'saudi' && (
//         <SaudiArabia /> 
//       )}
//       {selectedCountry && selectedCountry.value === 'singapore' && (
//         <Singapore /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'turkey' && (
//         <Turkey /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'uae' && (
//         <UAE /> 
//       )}
//        {selectedCountry && selectedCountry.value === 'unitedkingdom' && (
//         <UnitedKingdom /> 
//       )} 
//       {selectedCountry && selectedCountry.value === 'unitedstates' && (
//         <UnitedStates /> 
//       )} 
  
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import Select from 'react-select';
import './HomePage.css';
import Afghanistan from '../Afghanistan/Afghanistan';
import AlandIslands from '../AlandIsland/AlandIslands';
import Albania from '../Albania/Albania';
import Algeria from '../Algeria/Algeria';
import Andorra from '../Andorra/Andorra';
import Angola from '../Angola/Angola';
import Anguilla from '../Anguilla/Anguilla';
import AntiguaAndBarbuda from '../AntiguaAndBarbuda/AntiguaAndBarbuda';
import Argentina from '../Argentina/Argentina';
import Armenia from '../Armenia/Armenia';
import Aruba from '../Aruba/Aruba';
import Australia from '../Australia/Australia';
import Austria from '../Austria/Austria';
import Bahrain from '../Bahrain/Bahrain';
import Canada from '../Canada/Canada';
import France from '../France/France';
import Germany from '../Germany/Germany';
import Nigeria from '../Nigeria/Nigeria';
import Oman from '../Oman/Oman';
import Philippines from '../Philippines/Philippines';
import Qatar from '../Qatar/Qatar';
import SaudiArabia from '../SaudiArabia/SaudiArabia';
import Singapore from '../Singapore/Singapore';
import Turkey from '../Turkey/Turkey';
import UAE from '../UAE/UAE';
import UnitedKingdom from '../UnitedKingdom/UnitedKingdom';
import UnitedStates from '../UnitedStates/UnitedStates';
import Kuwait from '../Kuwait/Kuwait';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const countryOptions = [
  { value: 'afghanistan', label: 'Afghanistan' },
  { value: 'aland-islands', label: 'Aland Islands' },
  { value: 'albania', label: 'Albania' },
  { value: 'algeria', label: 'Algeria' },
  { value: 'andorra', label: 'Andorra' },
  { value: 'angola', label: 'Angola' },
  { value: 'anguilla', label: 'Anguilla' },
  { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'armenia', label: 'Armenia' },
  { value: 'aruba', label: 'Aruba' },
  { value: 'australia', label: 'Australia' },
  { value: 'austria', label: 'Austria' },
  { value: 'bahrain', label: 'Bahrain' },
  { value: 'canada', label: 'Canada' },
  { value: 'france', label: 'France' },
  { value: 'germany', label: 'Germany' },
  { value: 'kuwait', label: 'Kuwait' },
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'oman', label: 'Oman' },
  { value: 'philippines', label: 'Philippines' },
  { value: 'qatar', label: 'Qatar' },
  { value: 'saudi', label: 'Saudi Arabia' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'uae', label: 'UAE' },
  { value: 'unitedkingdom', label: 'United Kingdom' },
  { value: 'unitedstates', label: 'United States' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1.5px solid #29386c' : provided.border,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#29386c' : '#bbc6e3',
    color: state.isFocused ? 'white' : 'black',
    '&:hover': {
      backgroundColor: '#354581',
      color: 'white',
    },
  }),
};

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="homepage-container">
      <div className="homepage">
        <div className="form-container">
          <h1 className='h'>WELCOME!</h1>
          <p className='p'>Please Pick The Desired Country</p>
  
          <Form.Select
            className="custom-select"
            styles={customStyles}
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countryOptions}
            placeholder="Country"
          > 
            {countryOptions.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </Form.Select>
          {selectedCountry === 'afghanistan' && <Afghanistan />}
          {selectedCountry === 'aland-islands' && <AlandIslands />}
          {selectedCountry === 'albania' && <Albania />}
          {selectedCountry === 'algeria' && <Algeria />}
          {selectedCountry === 'andorra' && <Andorra />}
          {selectedCountry === 'angola' && <Angola />}
          {selectedCountry === 'anguilla' && <Anguilla />}
          {selectedCountry === 'antigua-and-barbuda' && <AntiguaAndBarbuda />}
          {selectedCountry === 'argentina' && <Argentina />}
          {selectedCountry === 'armenia' && <Armenia />}
          {selectedCountry === 'aruba' && <Aruba />}
          {selectedCountry === 'australia' && <Australia />}
          {selectedCountry === 'austria' && <Austria />}
          {selectedCountry === 'bahrain' && <Bahrain />}
          {selectedCountry === 'canada' && <Canada />}
          {selectedCountry === 'france' && <France />}
          {selectedCountry === 'germany' && <Germany />}
          {selectedCountry === 'kuwait' && <Kuwait />}
          {selectedCountry === 'nigeria' && <Nigeria />}
          {selectedCountry === 'oman' && <Oman />}
          {selectedCountry === 'philippines' && <Philippines />} 
          {selectedCountry === 'qatar' && <Qatar />}
          {selectedCountry === 'saudi' && <SaudiArabia />}
          {selectedCountry === 'singapore' && <Singapore />}
          {selectedCountry === 'turkey' && <Turkey />}
          {selectedCountry === 'uae' && <UAE />} 
          {selectedCountry === 'unitedkingdom' && <UnitedKingdom />}
          {selectedCountry === 'unitedstates' && <UnitedStates />}
           

        </div>
      </div> 
  
    </div>
  );
};

export default HomePage;
