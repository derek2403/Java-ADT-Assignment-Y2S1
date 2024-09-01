import React, { useState } from 'react';
import DonorList from './DonorList';
import DoneeList from './DoneeList';
import TransactionReport from './TransactionReport';
import DonatedReport from './DonatedReport';
import ReceivedReport from './ReceivedReport';

const GenerateReport = () => {
  const [selectedReport, setSelectedReport] = useState('');

  const renderReport = () => {
    switch (selectedReport) {
      case 'donor':
        return <DonorList />;
      case 'donee':
        return <DoneeList />;
      case 'transaction':
        return <TransactionReport />;
      case 'donated':
        return <DonatedReport />;
      case 'received':
        return <ReceivedReport />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Generate Report</h2>
      <select 
        value={selectedReport} 
        onChange={(e) => setSelectedReport(e.target.value)}
      >
        <option value="">Select a report</option>
        <option value="donor">Donor Report</option>
        <option value="donee">Donee Report</option>
        <option value="transaction">Transaction Report</option>
        <option value="donated">Donated Report</option>
        <option value="received">Received Report</option>
      </select>
      
      {selectedReport && (
        <div>
          {renderReport()}
        </div>
      )}
    </div>
  );
};

export default GenerateReport;