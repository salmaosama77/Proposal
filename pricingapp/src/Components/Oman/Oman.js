import React, { useState } from 'react';
import './Oman.css';

const Oman = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'OMNNT', label: 'Omani Qatari Tele.Com. S.A.O.G', dataCost: '$0.00847', five:' ', three:'3G', two: '2G', LTE_M:'', NB_IoT:'' , LTE: 'LTE', LTE_M: ' ' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Oman-page">
      <table className="Oman-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Oman</td>
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
              <td>4</td>
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

export default Oman;
