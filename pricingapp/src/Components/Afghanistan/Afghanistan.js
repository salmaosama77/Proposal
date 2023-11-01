import React, { useState } from 'react';
import './Afghanistan.css';
import AlandIslands from '../AlandIsland/AlandIslands';

const Afghanistan = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'AFGAR', label: 'MTN Afghanistan', dataCost: '$0.01650', two: '2G', NB_IoT:'' },
    { value: 'AFGTD', label: 'Roshan', dataCost: '$0.20724',five:'', three: ' ', two: '2G', LTE: 'LTE', LTE_M:'' , NB_IoT:'' },
    { value: 'AFGAW', label: 'Afghan Wireless Communication', dataCost: '$0.38797', three:'3G', two: '2G', LTE: 'LTE', LTE_M:'', NB_IoT:''  },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="afghanistan-page">
      <table className="afghanistan-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Afghanistan</td>
          </tr>
          <tr className="orange-background">
            <td>Network</td>
            <td>VPMN</td>
            <td>IMSI</td>
            <td>Data Cost/MB</td>
            <td>5G</td>
            <td>LTE</td>
            <td>LTE-M</td>
            <td>NB-IoT</td>
            <td>3G</td>
            <td>2G</td>
          </tr>
          {networkOptions.map((network) => (
            <tr key={network.value}>
              <td
                className="clickable-cell"
                onClick={() => handleNetworkClick(network)}
              >
                {network.label}
              </td>
              <td>{network.value}</td>
              <td>8</td>
              <td>{network.dataCost}</td>
              <td>{network.five}</td>
              <td>{network.LTE}</td>
              <td>{network.LTE_M}</td>
              <td>{network.NB_IoT}</td>
              <td>{network.three}</td>
              <td>{network.two}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedNetwork && (
        <AlandIslands network={selectedNetwork} />
      )}
    </div>
  );
};

export default Afghanistan;

// import React, { useState } from 'react';
// import './Afghanistan.css';
// import AlandIslands from '../AlandIsland/AlandIslands';

// const Afghanistan = () => {
//   const [selectedNetwork, setSelectedNetwork] = useState(null);

//   const networkOptions = [
//     { value: 'AFGAR', label: 'MTN Afghanistan', dataCost: '$0.01650', two: '2G', NB_IoT:'' },
//     { value: 'AFGTD', label: 'Roshan', dataCost: '$0.20724',five:'', three: ' ', two: '2G', LTE: 'LTE', LTE_M:'' , NB_IoT:'' },
//     { value: 'AFGAW', label: 'Afghan Wireless Communication', dataCost: '$0.38797', three:'3G', two: '2G', LTE: 'LTE', LTE_M:'', NB_IoT:''  },
//   ];

//   const handleNetworkClick = (network) => {
//     setSelectedNetwork(network);
//   };

//   return (
//     <div className="afghanistan-page container">
//       <h1 className="text-center mt-4 mb-4">Afghanistan</h1>
//       <table className="afghanistan-table table table-bordered">
//         <tbody>
//           <tr className="blue-background">
//             <td colSpan="10">Afghanistan</td>
//           </tr>
//           <tr className="orange-background">
//             <td>Network</td>
//             <td>VPMN</td>
//             <td>IMSI</td>
//             <td>Data Cost/MB</td>
//             <td>5G</td>
//             <td>LTE</td>
//             <td>LTE-M</td>
//             <td>NB-IoT</td>
//             <td>3G</td>
//             <td>2G</td>
//           </tr>
//           {networkOptions.map((network) => (
//             <tr key={network.value}>
//               <td
//                 className="clickable-cell"
//                 onClick={() => handleNetworkClick(network)}
//               >
//                 {network.label}
//               </td>
//               <td>{network.value}</td>
//               <td>8</td>
//               <td>{network.dataCost}</td>
//               <td>{network.five}</td>
//               <td>{network.LTE}</td>
//               <td>{network.LTE_M}</td>
//               <td>{network.NB_IoT}</td>
//               <td>{network.three}</td>
//               <td>{network.two}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedNetwork && (
//         <AlandIslands network={selectedNetwork} />
//       )}
//     </div>
//   );
// };

// export default Afghanistan;
