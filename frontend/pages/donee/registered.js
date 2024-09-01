import React, { useState } from 'react';
import UpdateDoneeDetails from '../../components/Donee/UpdateDoneeDetails';
import RequestDonation from '../../components/Donee/RequestDonation';
import DeleteDonee from '../../components/Donee/DeleteDonee';
import DeleteRequest from '../../components/Donee/DeleteRequest';
import DeleteAccount from '../../components/Donee/DeleteAccount';

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
    color: 'black',
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

export default function RegisteredDoneeDashboard() {
  const [activeComponent, setActiveComponent] = useState('update');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'update':
        return <UpdateDoneeDetails />;
      case 'request':
        return <RequestDonation />;
      case 'delete':
        return <DeleteAccount />;
      case 'delete-req':
        return <DeleteRequest />;
      default:
        return <UpdateDoneeDetails />;
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
          style={{ ...styles.iconButton, ...(activeComponent === 'request' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('request')}
        >
          <img src="/add.png" alt="Request" style={styles.icon} />
          <span style={styles.title}>Request</span>
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'delete-req' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('delete-req')}
        >
          <img src="/delete.png" alt="Delete Request" style={styles.icon} />
          <span style={styles.title}>Delete Request</span>
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'delete' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('delete')}
        >
          <img src="/rmv.png" alt="Delete" style={styles.icon} />
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
