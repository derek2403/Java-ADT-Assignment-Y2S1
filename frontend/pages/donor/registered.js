import React, { useState } from 'react';
import UpdateDonorDetails from '../../components/Donor/UpdateDetails';
import AddDonation from '../../components/Donor/AddDonation';
import RemoveDonation from '../../components/Donor/RemoveDonation';
import DeleteDonor from '../../components/Donor/DeleteDonor';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f4f8',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '2rem',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonActive: {
    backgroundColor: '#2980b9',
  },
  main: {
    flex: 1,
    width: '100%',
    maxWidth: '800px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
  }
};

export default function RegisteredDonorDashboard() {
  const [activeComponent, setActiveComponent] = useState('update');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'update':
        return <UpdateDonorDetails />;
      case 'add':
        return <AddDonation />;
      case 'remove':
        return <RemoveDonation />;
      case 'delete':
        return <DeleteDonor />;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Registered Donor Dashboard</h1>
      <nav style={styles.nav}>
        <button
          style={{ ...styles.button, ...(activeComponent === 'update' && styles.buttonActive) }}
          onClick={() => setActiveComponent('update')}
        >
          Update Details
        </button>
        <button
          style={{ ...styles.button, ...(activeComponent === 'add' && styles.buttonActive) }}
          onClick={() => setActiveComponent('add')}
        >
          Add Donation
        </button>
        <button
          style={{ ...styles.button, ...(activeComponent === 'remove' && styles.buttonActive) }}
          onClick={() => setActiveComponent('remove')}
        >
          Remove Donation
        </button>
        <button
          style={{ ...styles.button, ...(activeComponent === 'delete' && styles.buttonActive) }}
          onClick={() => setActiveComponent('delete')}
        >
          Delete Donor
        </button>
      </nav>
      <main style={styles.main}>
        {renderComponent()}
      </main>
    </div>
  );
}
