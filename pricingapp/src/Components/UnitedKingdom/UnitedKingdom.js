import React, { useState } from 'react';
import './UnitedKingdom.css';

const UnitedKingdom = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'GBRCN', label: 'Telefonica UK Limited', dataCost: '$0.00187', five:' ', three:'3G', two: '2G', LTE: 'LTE', LTE_M: 'LTE-M', NB_IoT:' ' },
    { value: 'GBRME', label: 'EE Limited', dataCost: '$0.00209', five:' ', three:'3G', two: '2G', LTE: ' ', LTE_M: ' ', NB_IoT:' ' },
    { value: 'GBRHU', label: 'Hutchison 3G UK Limited', dataCost: '$0.00209', five:' ', three:'3G', two: '2G', LTE: 'LTE', LTE_M: ' ', NB_IoT:' '},
    { value: 'GBRVF', label: 'Vodafone', dataCost: '$0.00594', five:' ', three:'3G', two: '2G', LTE: 'LTE', LTE_M: 'LTE-M-GSMA', NB_IoT:'NB-IoT-GSMA' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="UnitedKingdom-page">
      <table className="UnitedKingdom-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">United Kingdom</td>
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

export default UnitedKingdom;
