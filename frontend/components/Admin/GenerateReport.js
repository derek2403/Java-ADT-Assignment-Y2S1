import React, { useState } from 'react';
import DonorList from './DonorList';
import DoneeList from './DoneeList';
import TransactionReport from './TransactionReport';
import DonatedReport from './DonatedReport';
import ReceivedReport from './ReceivedReport';

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
};

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
    <div style={styles.container}>
      <h2 style={styles.title}>Generate Report</h2>
      <select 
        style={styles.select}
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
