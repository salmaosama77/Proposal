import React, { useState } from 'react';
import './Qatar.css';

const Qatar = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'QATQT', label: 'Qatar Telecom (Ooredoo) Q.S.C', dataCost: '$0.01023', five:' ', three:'3G', two: '2G', LTE_M:'', NB_IoT:'NB-IoT-GSMA' , LTE: 'LTE', LTE_M: ' ' },
    { value: 'QATB1', label: 'Vodafone Qatar', dataCost: '$0.05082',five:' ', three:'3G', two: '2G', LTE_M:'', NB_IoT:'' , LTE: 'LTE', LTE_M: ' ' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Qatar-page">
      <table className="Qatar-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Qatar</td>
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

export default Qatar;
