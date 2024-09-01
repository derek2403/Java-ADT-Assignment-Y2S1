import React, { useState } from 'react';
import CreateEvent from './CreateEvent';
import DeleteEvent from './DeleteEvent';
import EventList from './EventList';
import RegisteredEvents from './RegisteredEvents';
import RegisterEvent from './RegisterEvent';
import RemoveVolunteerFromEvent from './RemoveVolunteerFromEvent';
import SearchEvent from './SearchEvent';
import UpdateEvent from './UpdateEvent';
import Popup from '../Popup';

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
  },
};

const EventManagement = () => {
  const [selectedView, setSelectedView] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(prevState => !prevState);

  const renderView = () => {
    switch (selectedView) {
      case 'create':
        return <CreateEvent />;
      case 'delete':
        return <DeleteEvent />;
      case 'list':
        return <EventList />;
      case 'registered':
        return <RegisteredEvents />;
      case 'register':
        return <RegisterEvent />;
      case 'remove':
        return <RemoveVolunteerFromEvent />;
      case 'search':
        return <SearchEvent />;
      case 'update':
        return <UpdateEvent />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Event Management</h2>
      <select 
        style={styles.select}
        value={selectedView} 
        onChange={(e) => setSelectedView(e.target.value)}
      >
        <option value="">Select an action</option>
        <option value="create">Create Event</option>
        <option value="delete">Delete Event</option>
        <option value="list">Event List</option>
        <option value="registered">Registered Events</option>
        <option value="register">Register Event</option>
        <option value="remove">Remove Volunteer</option>
        <option value="search">Search Event</option>
        <option value="update">Update Event</option>
      </select>
      
      {selectedView && (
        <div>
          {renderView()}
        </div>
      )}
      {showPopup && (
        <Popup onClose={togglePopup}>
          {/* Include any additional information or components */}
        </Popup>
      )}
    </div>
  );
};

export default EventManagement;