import React, { useState } from 'react';
import UpdateDonorDetails from '../../components/Donor/UpdateDetails';
import AddDonation from '../../components/Donor/AddDonation';
import RemoveDonation from '../../components/Donor/RemoveDonation';
import DeleteAccount from '../../components/Donor/DeleteAccount';

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
    width: '20%', // Increased width to accommodate the titles
    backgroundColor: '#FCD7FF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2rem',
  },
  iconButton: {
    width: '150px', // Adjust width to fit the icon and title
    height: '50px',
    margin: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align icon and text to the start
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    paddingLeft: '10px', // Add padding for better spacing
  },
  iconButtonActive: {
    backgroundColor: '#E8A2FF',
    transform: 'scale(1.2)',
  },
  icon: {
    width: '30px',
    height: '30px',
    marginRight: '10px', // Space between icon and title
  },
  title: {
    fontSize: '16px',
    color: 'derek',
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
        return <DeleteAccount />;
      default:
        return <UpdateDonorDetails />;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'update' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('update')}
        >
          <img src="/update.png" alt="Update" style={styles.icon} />
          <span style={styles.title}>Update</span>
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'add' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('add')}
        >
          <img src="/add.png" alt="Add" style={styles.icon} />
          <span style={styles.title}>Add</span>
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'remove' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('remove')}
        >
          <img src="/rmv.png" alt="Remove" style={styles.icon} />
          <span style={styles.title}>Remove</span>
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'delete' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('delete')}
        >
          <img src="/delete.png" alt="Delete" style={styles.icon} />
          <span style={styles.title}>Delete</span>
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
