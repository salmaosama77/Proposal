import React, { useState } from 'react';
import './Nigeria.css';

const Nigeria = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'NGAGM', label: 'Glo Mobile LIMITED NIGERIA', dataCost: '$0.00770', five:' ', three:'3G', two: '2G', LTE_M:'', NB_IoT:'' , LTE: ' ', LTE_M: ' ' },
    { value: 'NGAET', label: 'Airtel Nigeria', dataCost: '$0.00825', five:' ', three:'3G', two: ' ', LTE_M:'', NB_IoT:'' , LTE: 'LTE', LTE_M: ' ' },
    { value: 'NGAMN', label: 'MTN', dataCost: '$0.02794', five:' ', three:' ', two: '2G', LTE_M:'', NB_IoT:'' , LTE: ' ', LTE_M: ' ' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Nigeria-page">
      <table className="Nigeria-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Nigeria</td>
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

export default Nigeria;
