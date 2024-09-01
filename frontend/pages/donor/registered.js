import React, { useState } from 'react';
import UpdateDonorDetails from '../../components/Donor/UpdateDetails';
import AddDonation from '../../components/Donor/AddDonation';
import RemoveDonation from '../../components/Donor/RemoveDonation';
import DeleteDonor from '../../components/Donor/DeleteDonor';
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
  icon: {
    width: '30px',
    height: '30px',
    color: 'white',
  },
  iconButtonActive: {
    scale: '1.5',
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
          {/* Placeholder Icon for Update */}
          <img src="/update.png" alt="Update" style={styles.icon} />
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'add' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('add')}
        >
          {/* Placeholder Icon for Add Donation */}
          <img src="/add.png" alt="Add" style={styles.icon} />
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'remove' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('remove')}
        >
          {/* Placeholder Icon for Remove Donation */}
          <img src="/rmv.png" alt="Remove" style={styles.icon} />
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'delete' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('delete')}
        >
          {/* Placeholder Icon for Delete Donor */}
          <img src="/delete.png" alt="Delete" style={styles.icon} />
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
