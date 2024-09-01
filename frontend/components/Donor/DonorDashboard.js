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
    backgroundImage: "url('/background.png')", // Make sure to place background.png in your public directory
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '0 2rem',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#3a3a8a',
    marginBottom: '1.5rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',  /* Ensures the animation works */
    borderRight: '2px solid #3a3a8a', /* Cursor effect */
    animation: 'typing 3.5s steps(40, end) 1s 1 normal both, blink-caret 500ms step-end infinite'
  },
  
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    backgroundColor: '#3a3a8a',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  buttonHover: {
    backgroundColor: '#3a3a70',
    transform: 'scale(1.05)',
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    zIndex: 1000,
    maxWidth: '600px',
    width: '90%',
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
      <h1 className="typing-effect" style={styles.title}>Hi Donor! Choose your action.</h1>
      <nav style={styles.nav}>
        <button 
          style={styles.button} 
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => setActiveComponent('register')}
        >
          Register
        </button>
        <button 
          style={styles.button} 
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => setActiveComponent('search')}
        >
          Search Donors
        </button>
        <button 
          style={styles.button} 
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => setActiveComponent('signin')}
        >
          Sign In
        </button>
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
