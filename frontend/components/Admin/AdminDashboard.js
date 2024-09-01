import React, { useState } from 'react';
import DoneeList from './DoneeList';
import DonorList from './DonorList';
import ExecuteDonation from './ExecuteDonation';
import GenerateReport from './GenerateReport';

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: "url('/background.png')", // Make sure to place background.png in your public directory
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Update with your background image path
  },
  sidebar: {
    width: '80px', // Sidebar width
    backgroundColor: '#FCD7FF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2rem',
  },
  iconButton: {
    width: '50px',
    height: '50px',
    margin: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  iconButtonActive: {
    backgroundColor: '#E8A2FF',
    transform: 'scale(1.2)',
  },
  icon: {
    width: '30px',
    height: '30px',
    color: 'white',
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
      case 'donees':
        return <DoneeList />;
      case 'donors':
        return <DonorList />;
      case 'execution':
        return <ExecuteDonation />;
      case 'reports':
        return <GenerateReport />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div
          style={{ ...styles.iconButton, ...(activeTab === 'donees' && styles.iconButtonActive) }}
          onClick={() => setActiveTab('donees')}
        >
          <img src="/donee-icon.png" alt="Donees" style={styles.icon} />
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeTab === 'donors' && styles.iconButtonActive) }}
          onClick={() => setActiveTab('donors')}
        >
          <img src="/donor-icon.png" alt="Donors" style={styles.icon} />
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeTab === 'execution' && styles.iconButtonActive) }}
          onClick={() => setActiveTab('execution')}
        >
          <img src="/execution-icon.png" alt="Execute Donation" style={styles.icon} />
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeTab === 'reports' && styles.iconButtonActive) }}
          onClick={() => setActiveTab('reports')}
        >
          <img src="/reports-icon.png" alt="Reports" style={styles.icon} />
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
