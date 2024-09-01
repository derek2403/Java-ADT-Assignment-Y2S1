import { useState } from 'react';
import { useRouter } from 'next/router';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundImage: "url('/bg1.png')", // Update with your background image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 5%',
  },
  logo: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '120px',
    height: 'auto',
  },
  nav: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    gap: '20px',
    fontSize: '1.1rem',
  },
  content: {
    maxWidth: '600px',
    textAlign: 'left',
    color: '#333',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#3a3a8a',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2rem',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1.1rem',
    backgroundColor: '#E4A1FF', // Light purplish-pink color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  buttonHover: {
    backgroundColor: '#D18AE0', // Darker purplish-pink on hover
    transform: 'scale(1.05)',
  },
  birdhouse: {
    maxWidth: '500px',
    height: 'auto',
    zoom: '1.3',
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
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#333',
  },
  modalButton: {
    width: '100%',
    padding: '12px',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '5px 0',
    position: 'relative',
    color: 'white',
    backgroundColor: '#E4A1FF', // Light purplish-pink for all buttons
  },
  modalButtonVolunteer: {
    backgroundColor: '#E4A1FF',
  },
  modalButtonDonor: {
    backgroundColor: '#E4A1FF',
  },
  modalButtonDonee: {
    backgroundColor: '#E4A1FF',
  },
  modalButtonAdmin: {
    backgroundColor: '#E4A1FF',
  },
  modalButtonClose: {
    backgroundColor: '#E4A1FF',
  },
  buttonHoverVolunteer: {
    backgroundColor: '#D18AE0', // Darker purplish-pink on hover for volunteer
  },
  buttonHoverDonor: {
    backgroundColor: '#D18AE0',
  },
  buttonHoverDonee: {
    backgroundColor: '#D18AE0',
  },
  buttonHoverAdmin: {
    backgroundColor: '#D18AE0',
  },
  buttonHoverClose: {
    backgroundColor: '#D18AE0',
  },
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null); // Track the hovered button
  const router = useRouter();

  const handleUserTypeSelection = (userType) => {
    setShowModal(false);
    switch(userType) {
      case 'donor':
        router.push('/donor/dashboard');
        break;
      case 'donee':
        router.push('/donee/dashboard');
        break;
      case 'admin':
        router.push('/admin/login');
        break;
      case 'volunteer':
        router.push('/volunteer/dashboard');
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container}>
      <img src="/d.png" alt="Logo" style={styles.logo} /> {/* Update with your logo path */}
      <div style={styles.content}>
        <h1 style={styles.title}>Empowering Lives, Every Season.</h1>
        <p style={styles.description}>
          Support those in need and make a difference year-round with our donation platform. Connect with individuals and families, provide essential resources, and contribute to positive change. Join us in building a compassionate community and empowering lives every day.
        </p>
        <button 
          style={styles.button} 
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
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
              style={{...styles.modalButton, ...styles.modalButtonDonor, ...(hoveredButton === 'donor' ? styles.buttonHoverDonor : {})}}
              onMouseEnter={() => setHoveredButton('donor')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleUserTypeSelection('donor')}
            >
              I'm a Donor
            </button>
            <button 
              style={{...styles.modalButton, ...styles.modalButtonDonee, ...(hoveredButton === 'donee' ? styles.buttonHoverDonee : {})}}
              onMouseEnter={() => setHoveredButton('donee')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleUserTypeSelection('donee')}
            >
              I'm a Donee
            </button>
            <button 
              style={{...styles.modalButton, ...styles.modalButtonAdmin, ...(hoveredButton === 'admin' ? styles.buttonHoverAdmin : {})}}
              onMouseEnter={() => setHoveredButton('admin')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleUserTypeSelection('admin')}
            >
              I'm an Admin
            </button>
            <button 
              style={{...styles.modalButton, ...styles.modalButtonVolunteer, ...(hoveredButton === 'volunteer' ? styles.buttonHoverVolunteer : {})}}
              onMouseEnter={() => setHoveredButton('volunteer')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleUserTypeSelection('volunteer')}
            >
              I'm a Volunteer
            </button>
            <button 
              style={{...styles.modalButton, ...styles.modalButtonClose, ...(hoveredButton === 'close' ? styles.buttonHoverClose : {})}}
              onMouseEnter={() => setHoveredButton('close')}
              onMouseLeave={() => setHoveredButton(null)}
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
