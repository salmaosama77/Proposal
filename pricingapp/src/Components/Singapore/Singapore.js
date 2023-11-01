import React, { useState } from 'react';
import './Singapore.css';

const Singapore = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'SGPML', label: 'Singtel', dataCost: '$0.00341', five:'5G', three:'3G', two: ' ', LTE: 'LTE', LTE_M: 'LTE-M-GSMA', NB_IoT: 'NB-IoT-GSMA' },
    { value: 'SGPST', label: 'Singtel', dataCost: '$0.00341',five:'5G', three:'3G', two: ' ', LTE: 'LTE', LTE_M: 'LTE-M-GSMA', NB_IoT: 'NB-IoT-GSMA' },
    { value: 'SGPSH', label: 'StarHub', dataCost: '$0.00583',five:'5G', three:'3G', two: ' ', LTE: 'LTE', LTE_M: ' ', NB_IoT: 'NB-IoT-GSMA' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Singapore-page">
      <table className="Singapore-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Singapore</td>
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
              <td>10</td>
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
        <AlandIslands network={selectedNetwork} />
      )} */}
    </div>
  );
};

export default Singapore;
