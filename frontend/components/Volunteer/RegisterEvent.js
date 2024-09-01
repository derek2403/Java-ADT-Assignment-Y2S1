// components/RegisterEvent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import EventList from '../Admin/EventList'; // Import the EventList component

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#D6D7FD',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
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
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '10px', // Add margin-bottom for spacing
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default function RegisterEvent() {
  const { isVolunteerLoggedIn, currentUser } = useAuth();
  const [eventId, setEventId] = useState('');
  const [message, setMessage] = useState('');
  const [showEvents, setShowEvents] = useState(false); // State to toggle event list visibility

  useEffect(() => {
    if (!isVolunteerLoggedIn) {
      setMessage('Please log in to register for an event.');
    } else {
      setMessage('');
    }
  }, [isVolunteerLoggedIn]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isVolunteerLoggedIn) {
      setMessage('Please log in to register for an event.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3001/api/volunteers/${currentUser.username}/register/${eventId}`
      );
      setMessage(`Registration successful. Registration ID: ${response.data}`);
    } catch (error) {
      console.error('Error registering for event:', error);
      setMessage('Failed to register for the event: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register for Event</h2>
      
      {/* Button to toggle event list visibility */}
      <button 
        onClick={() => setShowEvents(!showEvents)} 
        style={styles.button}
      >
        {showEvents ? 'Hide Events' : 'Show Events'}
      </button>

      {/* Conditionally render the EventList component */}
      {showEvents && <EventList />}

      {isVolunteerLoggedIn && (
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            placeholder="Enter event ID"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
      )}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}
