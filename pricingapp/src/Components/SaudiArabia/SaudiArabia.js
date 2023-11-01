import React, { useState } from 'react';
import './SaudiArabia.css';

const SaudiArabia = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'SAUZN', label: 'Mobile Telecom Company SA', dataCost: '$0.00847', five:' ', three:'3G', two: '2G', LTE: 'LTE', LTE_M: ' ', NB_IoT: ' ', imsi: 5 },
    { value: 'SAUAJ', label: 'Saudi Telecom Company (STC)', dataCost: '$0.02541', five:'5G', three:'3G', two: '2G', LTE: 'LTE', LTE_M: ' ', NB_IoT: ' NB-IoT-GSMA ', imsi: 4 },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="SaudiArabia-page">
      <table className="SaudiArabia-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Saudi Arabia</td>
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
              <td>{network.imsi}</td>
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

export default SaudiArabia;
