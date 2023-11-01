import React, { useState } from 'react';
import './France.css';

const France = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'FRAFM', label: 'Free Mobile', dataCost: '$0.00154', five:' ', three:'3G', two: '2G', LTE_M:'', NB_IoT:'' , LTE: 'LTE' },
    { value: 'FRAF3', label: 'Bouygues Telecom', dataCost: '$0.00209', five:' ', three:'3G', two: '2G', LTE_M:'', NB_IoT:'' , LTE: 'LTE'},
    { value: 'FRAF1', label: 'Orange', dataCost: '$0.00594', five:' ', three:'3G', two: '2G', LTE_M:'LTE-M', NB_IoT:'' , LTE: 'LTE', },
    { value: 'FRAF2', label: 'Societe Francaise du Radiotelephone S.A.', dataCost: '$0.00594', five:' ', three:'3G', two: '2G', LTE_M:'', NB_IoT:'NB-IoT-GSMA' , LTE: 'LTE'},
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="France-page">
      <table className="France-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">France</td>
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

export default France;
