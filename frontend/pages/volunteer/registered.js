import React, { useState } from 'react';
import DeleteAccount from '../../components/Volunteer/DeleteAccount';
import UpdateVolunteer from '../../components/Volunteer/UpdateVolunteer';
import RegisterEvent from '../../components/Volunteer/RegisterEvent';
import RegisteredEvents from '../../components/Volunteer/RegisteredEvent';
// Import any additional components here as needed

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
    width: '20%',
    backgroundColor: '#FCD7FF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2rem',
  },
  iconButton: {
    width: '150px',
    height: '50px',
    margin: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    paddingLeft: '10px',
  },
  iconButtonActive: {
    backgroundColor: '#E8A2FF',
    transform: 'scale(1.2)',
  },
  icon: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
  title: {
    fontSize: '16px',
    color: '#333',
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

export default function RegisteredVolunteerDashboard() {
  const [activeComponent, setActiveComponent] = useState('update');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'update':
        return <UpdateVolunteer />;
      case 'delete':
        return <DeleteAccount />;
      case 'registerEvent':
        return <RegisterEvent />;
      case 'registeredEvents':
        return <RegisteredEvents />;
      default:
        return <UpdateVolunteer />;
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
          style={{ ...styles.iconButton, ...(activeComponent === 'delete' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('delete')}
        >
          <img src="/delete.png" alt="Delete" style={styles.icon} />
          <span style={styles.title}>Delete</span>
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'registerEvent' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('registerEvent')}
        >
          <img src="/register.png" alt="Register Event" style={styles.icon} />
          <span style={styles.title}>Register Event</span>
        </div>
        <div
          style={{ ...styles.iconButton, ...(activeComponent === 'registeredEvents' && styles.iconButtonActive) }}
          onClick={() => setActiveComponent('registeredEvents')}
        >
          <img src="/registered.png" alt="Registered Events" style={styles.icon} />
          <span style={styles.title}>Registered Events</span>
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
