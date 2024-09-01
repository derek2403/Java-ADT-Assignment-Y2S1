import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#D6D7FD',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default function DeleteEvent() {
  const [eventId, setEventId] = useState('');
  const router = useRouter();

  const handleDelete = async (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/events/remove/${eventId}`);
        alert(response.data);
        setEventId('');
        router.push('/events'); // Redirect to the events page or any other page after deletion
      } catch (error) {
        console.error('Error deleting event:', error);
        alert('Error deleting event: ' + (error.response?.data || error.message));
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Delete Event</h2>
      <form onSubmit={handleDelete} style={styles.form}>
        <input
          type="text"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          placeholder="Enter Event ID to delete"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Delete</button>
      </form>
    </div>
  );
}
