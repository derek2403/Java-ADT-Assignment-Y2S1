import React, { useState } from 'react';
import DoneeList from '../Donee/DoneeList';
import DonorList from '../Donor/DonorList';
import ExecuteDonation from './ExecuteDonation';
import GenerateReport from './GenerateReport';

const ADMIN_USERNAME = 'XXX';
const ADMIN_PASSWORD = 'XXX';

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
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  loginContainer: {
    textAlign: 'center',
  },
  loginButton: {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLogin = () => {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAdminLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'donorList':
        return <DonorList />;
      case 'doneeList':
        return <DoneeList />;
      case 'executeDonation':
        return <ExecuteDonation />;
      case 'generateReport':
        return <GenerateReport />;
      default:
        return null;
    }
  };

  if (!isAdminLoggedIn) {
    return (
      <div style={styles.container}>
        <div style={styles.loginContainer}>
          <h1 style={styles.title}>Admin Dashboard</h1>
          <p>Please log in as an administrator to access this page.</p>
          <button style={styles.loginButton} onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>
      <nav style={styles.nav}>
        <button style={styles.button} onClick={() => setActiveComponent('donorList')}>Donor List</button>
        <button style={styles.button} onClick={() => setActiveComponent('doneeList')}>Donee List</button>
        <button style={styles.button} onClick={() => setActiveComponent('executeDonation')}>Execute Donation</button>
        <button style={styles.button} onClick={() => setActiveComponent('generateReport')}>Generate Report</button>
      </nav>
      {activeComponent && (
        <>
          <div style={styles.overlay} onClick={() => setActiveComponent(null)}></div>
          <div style={styles.modal}>
            {renderComponent()}
          </div>
        </>
      )}
    </div>
  );
}