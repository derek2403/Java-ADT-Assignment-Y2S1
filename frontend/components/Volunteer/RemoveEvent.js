import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import RegisteredEvents from './RegisteredEvent'; // Import RegisteredEvents component

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#F8D7DA',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#721C24',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  toggleButton: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default function RemoveEvent() {
  const { isVolunteerLoggedIn, currentUser } = useAuth();
  const [eventId, setEventId] = useState('');
  const [message, setMessage] = useState('');
  const [showRegisteredEvents, setShowRegisteredEvents] = useState(false);

  const handleRemove = async (e) => {
    e.preventDefault();
    console.log('Current User:', currentUser);
    console.log('Event ID:', eventId);
    
    if (!isVolunteerLoggedIn || !currentUser) {
      setMessage('You need to be logged in to remove yourself from an event.');
      return;
    }
  
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/volunteers/${currentUser.username}/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      setMessage(`Successfully removed from event. Message: ${response.data}`);
    } catch (error) {
      console.error('Error removing volunteer from event:', error);
      setMessage('Failed to remove from the event: ' + (error.response?.data || error.message));
    }
  };

  const toggleRegisteredEvents = () => {
    setShowRegisteredEvents((prev) => !prev);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Remove Yourself From Event</h2>
      {isVolunteerLoggedIn ? (
        <>
          <form onSubmit={handleRemove} style={styles.form}>
            <input
              type="text"
              value={eventId}
              onChange={(e) => setEventId(e.target.value)}
              placeholder="Enter event ID"
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Remove From Event
            </button>
          </form>

          <button onClick={toggleRegisteredEvents} style={styles.toggleButton}>
            {showRegisteredEvents ? 'Hide Registered Events' : 'Show Registered Events'}
          </button>

          {showRegisteredEvents && <RegisteredEvents />} {/* Conditionally render RegisteredEvents */}
        </>
      ) : (
        <p style={styles.message}>Please log in to remove yourself from an event.</p>
      )}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}
