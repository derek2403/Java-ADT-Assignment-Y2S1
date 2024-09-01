import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';

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
  message: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#666',
  },
};

export default function RegisteredEvents() {
  const { isVolunteerLoggedIn, currentUser } = useAuth();
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isVolunteerLoggedIn && currentUser) {
      fetchEvents();
    }
  }, [isVolunteerLoggedIn, currentUser]);

  const fetchEvents = async () => {
    setMessage('Fetching events...');
    try {
      const response = await axios.get(`/api/registered-events?username=${encodeURIComponent(currentUser.username)}`);
      console.log('API Response:', response.data);
      setEvents(response.data);
      setMessage(response.data.length === 0 ? 'No registered events found.' : '');
    } catch (error) {
      console.error('Error fetching registered events:', error);
      setMessage('Failed to fetch registered events: ' + (error.response?.data?.error || error.message));
      setEvents([]);
    }
  };

  if (!isVolunteerLoggedIn) {
    return <div style={styles.message}>Please log in to view your registered events.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Registered Events</h2>
      {message && <p style={styles.message}>{message}</p>}
      <div style={styles.eventList}>
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} style={styles.eventItem}>
              <h3>{event.eventName}</h3>
              <p><strong>Event ID:</strong> {event.eventId}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Date:</strong> {event.date}</p>
            </div>
          ))
        ) : (
          <p style={styles.message}>No registered events found.</p>
        )}
      </div>
    </div>
  );
}