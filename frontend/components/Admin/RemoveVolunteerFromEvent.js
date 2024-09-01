import React, { useState } from 'react';
import axios from 'axios';

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
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default function RemoveVolunteerFromEvent() {
  const [volunteerId, setVolunteerId] = useState('');
  const [eventId, setEventId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemove = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `http://localhost:3001/api/volunteers/${volunteerId}/events/${eventId}`
      );
      setMessage(response.data);
    } catch (error) {
      console.error('Error removing volunteer from event:', error);
      setMessage('Failed to remove volunteer from the event: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Remove Volunteer From Event</h2>
      <form onSubmit={handleRemove} style={styles.form}>
        <input
          type="text"
          value={volunteerId}
          onChange={(e) => setVolunteerId(e.target.value)}
          placeholder="Enter volunteer ID"
          required
          style={styles.input}
        />
        <input
          type="text"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          placeholder="Enter event ID"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Remove Volunteer
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}
