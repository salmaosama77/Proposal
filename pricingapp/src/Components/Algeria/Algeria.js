import React, { useState } from 'react';
import './Algeria.css';
import Afghanistan from '../Afghanistan/Afghanistan';

const Algeria = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'DZAOT', label: 'Optimum Telecom Algeria Spa', dataCost: '$0.00616',  three:'3G', two: '2G', LTE_M:'', NB_IoT:'', },
    { value: 'DZAA1', label: 'Ministere Des Postes et Telecom', dataCost: '$0.01837', three:'3G', two: '2G', LTE_M:'', NB_IoT:'', LTE: 'LTE' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="algeria-page">
      <table className="algeria-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Algeria</td>
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
      {selectedNetwork && (
        <Afghanistan network={selectedNetwork} />
      )}
    </div>
  );
};

export default Algeria;
