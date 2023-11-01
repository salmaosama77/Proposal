import React, { useState } from 'react';
import './UAE.css';

const UAE = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'AREDU', label: 'DU', dataCost: '$0.01485',  five:' ', three:'3G', two: '2G', LTE: 'LTE', LTE_M: ' ', NB_IoT:'NB-IoT GSMA' , note:'Approval required based on number of devices to be deployed in UAE on a permanent basis' },
    { value: 'ARETC', label: 'Etisalat', dataCost: '$0.08470', five:' ', three:'3G', two: '2G', LTE: 'LTE', LTE_M: 'LTE-M', NB_IoT:'NB-IoT GSMA' , note:'Approval required based on number of devices to be deployed in UAE on a permanent basis' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="UAE-page">
      <table className="UAE-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="11">UAE</td>
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
            <td>Notes</td>
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
              <td>6</td>
              <td>{network.dataCost}</td>
              <td>{network.five}</td>
              <td>{network.LTE}</td>
              <td>{network.LTE_M}</td>
              <td>{network.NB_IoT}</td>
              <td>{network.three}</td>
              <td>{network.two}</td>
              <td>{network.note}</td>
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

export default UAE;
