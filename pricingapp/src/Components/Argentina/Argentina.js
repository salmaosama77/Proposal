import React, { useState } from 'react';
import './Argentina.css';

const Argentina = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ARGTM', label: 'Telefonica Moviles Argentina', dataCost: '$0.00800', two:'2G', three:'3G', LTE: 'LTE' , LTE_M: 'LTE-M' , NB_IoT:''},
    { value: 'ARGCM', label: 'CTI Movil', dataCost: '$0.01320', networkType: '2G & 3G', LTE: 'LTE' },
    { value: 'ARGTP', label: 'Telecom Personal S.A. ,Argen.', dataCost: '$0.02310', two:'2G', three:'3G', LTE: 'LTE' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Argentina-page">
      <table className="Argentina-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="10">Argentina</td>
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
              <td>7</td>
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

export default Argentina;