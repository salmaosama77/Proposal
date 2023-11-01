import React, { useState } from 'react';
import './Canada.css';

const Canada = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'CANBM', label: 'Bell Mobility', dataCost: '$0.00825', five:'5G', three:'3G', two: ' ', LTE_M:'', NB_IoT:'' , LTE: 'LTE',LTE_M: 'LTE-M-GSMA' },
    { value: 'CANTS', label: 'Telus', dataCost: '$0.00825', five:'5G', three:'3G', two: ' ', LTE_M:'', NB_IoT:'' , LTE: 'LTE' , LTE_M: 'LTE-M-GSMA'},
    { value: 'CANRW', label: 'Rogers', dataCost: '$0.00782',five:' ', three:'3G', two: ' ', LTE_M:'LTE-M-GSMA', LTE: 'LTE', NB_IoT:'NB-IoT-GSMA', note:'Approval required based on number of devices to be deployed in Canada on a permanent basis' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Canada-page">
      <table className="Canada-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Canada</td>
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

export default Canada;
