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
    transition: 'background-color 0.3s',
  },
  iconButtonActive: {
    scale: '1.5',
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
          {/* Placeholder Icon for Update */}
          <img src="/update.png" alt="Update" style={styles.icon} />
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'request' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('request')}
        >
          {/* Placeholder Icon for Request Donation */}
          <img src="/add.png" alt="Request" style={styles.icon} />
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'delete' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('delete')}
        >
          {/* Placeholder Icon for Delete Donee */}
          <img src="/rmv.png" alt="Delete" style={styles.icon} />
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'delete-req' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('delete-req')}
        >
          {/* Placeholder Icon for Delete Request */}
          <img src="/delete.png" alt="Delete Request" style={styles.icon} />
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
