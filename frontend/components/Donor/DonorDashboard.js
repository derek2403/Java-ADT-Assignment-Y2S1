import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Register from './Register';
import SearchDonors from './SearchDonors';
import SignIn from './SignIn';

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
};

export default function DonorDashboard() {
  const [activeComponent, setActiveComponent] = useState(null);
  const router = useRouter();

  const renderComponent = () => {
    switch (activeComponent) {
      case 'register':
        return <Register />;
      case 'search':
        return <SearchDonors />;
      case 'signin':
        return <SignIn onSignIn={() => router.push('/donor/registered')} />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Donor Dashboard</h1>
      <nav style={styles.nav}>
        <button style={styles.button} onClick={() => setActiveComponent('register')}>Register</button>
        <button style={styles.button} onClick={() => setActiveComponent('search')}>Search Donors</button>
        <button style={styles.button} onClick={() => setActiveComponent('signin')}>Sign In</button>
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