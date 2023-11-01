// import React, { useState } from 'react';
// import './ContractForm.css';
// import { FaEnvelope } from 'react-icons/fa'; // Import icons

// const ContractForm = () => {
//   const [formData, setFormData] = useState({
//     deplofy: {
//       address: '',
//       phone: '',
//       email: '',
//       name: '',
//       title: '',
//       date: '',
//       signature: '',
//     },
//     client: {
//       address: '',
//       phone: '',
//       email: '',
//       name: '',
//       title: '',
//       date: '',
//       signature: '',
//     },
//   });

//   const handleInputChange = (side, field, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [side]: {
//         ...prevData[side],
//         [field]: value,
//       },
//     }));
//   };

//   return (
//     <div className="contract-form">
//       <table>
//         <thead>
//           <tr>
//             <th>Fields</th>
//             <th>Deplofy</th>
//             <th>Client</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Address</td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.deplofy.address}
//                 onChange={(e) => handleInputChange('deplofy', 'address', e.target.value)}
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.client.address}
//                 onChange={(e) => handleInputChange('client', 'address', e.target.value)}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>Phone</td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.deplofy.phone}
//                 onChange={(e) => handleInputChange('deplofy', 'phone', e.target.value)}
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.client.phone}
//                 onChange={(e) => handleInputChange('client', 'phone', e.target.value)}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>Email</td>
//             <td>
//               <div className="email-input">
//                 <FaEnvelope />
//                 <input
//                   type="text"
//                   value={formData.deplofy.email}
//                   onChange={(e) => handleInputChange('deplofy', 'email', e.target.value)}
//                 />
//               </div>
//             </td>
//             <td>
//               <div className="email-input">
//                 <FaEnvelope />
//                 <input
//                   type="text"
//                   value={formData.client.email}
//                   onChange={(e) => handleInputChange('client', 'email', e.target.value)}
//                 />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Name</td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.deplofy.name}
//                 onChange={(e) => handleInputChange('deplofy', 'name', e.target.value)}
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.client.name}
//                 onChange={(e) => handleInputChange('client', 'name', e.target.value)}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>Title</td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.deplofy.title}
//                 onChange={(e) => handleInputChange('deplofy', 'title', e.target.value)}
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.client.title}
//                 onChange={(e) => handleInputChange('client', 'title', e.target.value)}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>Date</td>
//             <td>
//               <div className="date-input">
//                 <input
//                   type="date"
//                   value={formData.deplofy.date}
//                   onChange={(e) => handleInputChange('deplofy', 'date', e.target.value)}
//                 />
//               </div>
//             </td>
//             <td>
//               <div className="date-input">
//                 <input
//                   type="date"
//                   value={formData.client.date}
//                   onChange={(e) => handleInputChange('client', 'date', e.target.value)}
//                 />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Signature</td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.deplofy.signature}
//                 onChange={(e) => handleInputChange('deplofy', 'signature', e.target.value)}
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={formData.client.signature}
//                 onChange={(e) => handleInputChange('client', 'signature', e.target.value)}
//               />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ContractForm;
