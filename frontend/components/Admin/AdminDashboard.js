import React, { useState } from 'react';
import ExecuteDonation from './ExecuteDonation';
import GenerateReport from './GenerateReport';
import DeleteDonee from '../Donee/DeleteDonee'; // Import the DeleteDonee component
import DeleteDonor from '../Donor/DeleteDonor'; // Import the DeleteDonor component
import DeleteEntity from './Delete';

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: "url('/background.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#FCD7FF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2rem',
  },
  iconButton: {
    width: '180px',
    height: '50px',
    margin: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    paddingLeft: '10px',
  },
  iconButtonActive: {
    backgroundColor: '#E8A2FF',
    transform: 'scale(1.1)',
  },
  icon: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
  iconText: {
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '800px',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState(null);

  const renderComponent = () => {
    switch (activeTab) {
      case 'execution':
        return <ExecuteDonation />;
      case 'reports':
        return <GenerateReport />;
      case 'delete-donee':
        return <DeleteEntity />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div
          style={{ ...styles.iconButton, ...(activeTab === 'execution' && styles.iconButtonActive) }}
          onClick={() => setActiveTab('execution')}
        >
          <img src="/execution.png" alt="Execute Donation" style={styles.icon} />
          <span style={styles.iconText}>Execute Donation</span>
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeTab === 'reports' && styles.iconButtonActive) }}
          onClick={() => setActiveTab('reports')}
        >
          <img src="/report.png" alt="Reports" style={styles.icon} />
          <span style={styles.iconText}>Generate Reports</span>
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeTab === 'delete-donee' && styles.iconButtonActive) }}
          onClick={() => setActiveTab('delete-donee')}
        >
          <img src="/delete.png" alt="Delete Donee" style={styles.icon} />
          <span style={styles.iconText}>Delete Entity</span>
        </div>

      </div>
      <div style={styles.mainContent}>
        <div style={styles.card}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
