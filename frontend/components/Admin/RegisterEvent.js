import { useState } from 'react';
import axios from 'axios';

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
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
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default function RegisterEvent() {
  const [username, setUsername] = useState('');
  const [eventId, setEventId] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/api/volunteers/${username}/register/${eventId}`);
      setMessage(`Registration successful. Registration ID: ${response.data}`);
    } catch (error) {
      console.error('Error registering for event:', error);
      setMessage('Failed to register for the event: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register for Event</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
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
        <button type="submit" style={styles.button}>Register</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}
