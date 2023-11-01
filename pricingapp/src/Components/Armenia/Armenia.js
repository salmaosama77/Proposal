import React, { useState } from 'react';
import './Armenia.css';
import Afghanistan from '../Afghanistan/Afghanistan';

const Armenia = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ARMO5', label: '(Vivacell) K Telecom CJSC', dataCost: '$0.00517', two:'2G', three:'3G', LTE: ' ' , LTE_M:'', NB_IoT:''},
    { value: 'ARMO1', label: 'Albania-One', dataCost: '$0.00616', two:'2G', three:'3G', LTE: ' '  },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Armenia-page">
      <table className="Armenia-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Armenia</td>
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
              <td>3</td>
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
      {/* {selectedNetwork && (
        <Afghanistan network={selectedNetwork} />
      )} */}
    </div>
  );
};

export default Armenia;