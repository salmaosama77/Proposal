import React, { useState } from 'react';
import './Albania.css';
import Afghanistan from '../Afghanistan/Afghanistan';

const Albania = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ALBVF', label: 'Albania-Vodafone', dataCost: '$0.00297',  three:'3G', two: '2G', LTE_M:'', NB_IoT:'', LTE: 'LTE' },
    { value: 'ALBAM', label: 'Albania-One', dataCost: '$0.17864',  three:'3G', two: '2G', LTE_M:'', NB_IoT:'', LTE: 'in process' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="albania-page">
      <table className="albania-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Albania</td>
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
              <td>5</td>
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

export default Albania;
