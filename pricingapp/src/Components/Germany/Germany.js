import React, { useState } from 'react';
import './Germany.css';

const Germany = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'DEUE2', label: 'Telefonice O2', dataCost: '$0.00176', five:' ', three:'3G', two: '2G', NB_IoT:'NB-IoT-GSMA' , LTE: 'LTE', LTE_M: 'LTE-M' },
    { value: 'DEUE1', label: 'Telefonica Germany GmbH & Co. OHG', dataCost: '$0.00176', five:' ', three:'3G', two: '2G', LTE_M:'', NB_IoT:'' , LTE: ' ' },
    { value: 'DUED1', label: 'Telekom Deutschland GmbH', dataCost: '$0.00594', five:' ', three:'3G', two: '2G', LTE: ' ', LTE_M: 'LTE-M-GSMA', NB_IoT:'NB-IoT-GSMA' },
    { value: 'DUED2', label: 'Vodafone', dataCost: '$0.00594', five:' ', three:'3G', two: '2G', LTE_M:'', NB_IoT:'' , LTE: 'LTE', LTE_M: 'LTE-M-GSMA', NB_IoT:'NB-IoT-GSMA' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Germany-page">
      <table className="Germany-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Germany</td>
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
        <AlandIslands network={selectedNetwork} />
      )} */}
    </div>
  );
};

export default Germany;
