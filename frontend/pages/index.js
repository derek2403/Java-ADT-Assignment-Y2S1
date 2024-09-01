import { useState } from 'react';
import { useRouter } from 'next/router';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundImage: "url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    color: 'white',
    maxWidth: '600px',
    padding: '20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1.1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  },
  modalButton: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleUserTypeSelection = (userType) => {
    setShowModal(false);
    switch(userType) {
      case 'donor':
        router.push('/donor-dashboard');
        break;
      case 'donee':
        router.push('/donee-dashboard');
        break;
      case 'admin':
        router.push('/admin-dashboard');
        break;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Our Donation Platform</h1>
        <p style={styles.description}>Join us in making a difference. Whether you're here to give or receive, your journey starts here.</p>
        <button 
          style={styles.button} 
          onClick={() => setShowModal(true)}
        >
          Get Started
        </button>
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>Choose Your Role</h2>
            <button 
              style={{...styles.modalButton, backgroundColor: '#4CAF50', color: 'white'}}
              onClick={() => handleUserTypeSelection('donor')}
            >
              I'm a Donor
            </button>
            <button 
              style={{...styles.modalButton, backgroundColor: '#2196F3', color: 'white'}}
              onClick={() => handleUserTypeSelection('donee')}
            >
              I'm a Donee
            </button>
            <button 
              style={{...styles.modalButton, backgroundColor: '#FFC107', color: 'black'}}
              onClick={() => handleUserTypeSelection('admin')}
            >
              I'm an Admin
            </button>
            <button 
              style={{...styles.modalButton, backgroundColor: '#f0f0f0', color: 'black', marginTop: '1rem'}}
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}