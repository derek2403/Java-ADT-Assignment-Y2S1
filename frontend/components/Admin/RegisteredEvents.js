import { useState } from 'react';
import axios from 'axios';

const styles = {
  container: {
    maxWidth: '600px',
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
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #ddd',
    borderRight: 'none',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
  eventList: {
    marginTop: '20px',
  },
  eventItem: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
  },
};

export default function RegisteredEvents() {
  const [username, setUsername] = useState('');
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    setMessage('Searching...');
    try {
      const response = await axios.get(`/api/registered-events?username=${encodeURIComponent(trimmedUsername)}`);
      console.log('API Response:', response.data);
      setEvents(response.data);
      setMessage(response.data.length === 0 ? 'No registered events found.' : '');
    } catch (error) {
      console.error('Error fetching registered events:', error);
      setMessage('Failed to fetch registered events: ' + (error.response?.data?.error || error.message));
      setEvents([]);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registered Events</h2>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>
      {message && <p>{message}</p>}
      <div style={styles.eventList}>
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} style={styles.eventItem}>
              <h3>{event.eventName}</h3>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Date:</strong> {event.date}</p>
            </div>
          ))
        ) : (
          <p>No registered events found.</p>
        )}
      </div>
    </div>
  );
}