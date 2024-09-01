import { useState } from 'react';
import axios from 'axios';

const styles = {
  container: {
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
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
};

export default function UpdateEventDetails() {
  const [formData, setFormData] = useState({
    eventId: '',
    eventName: '',
    venue: '',
    time: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3001/api/events/amend', formData);
      alert(response.data);
    } catch (error) {
      console.error('Error updating event details:', error);
      alert('Error updating event details: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Update Event Details</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="eventId"
          placeholder="Event ID"
          value={formData.eventId || ''}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName || ''}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="venue"
          placeholder="Venue"
          value={formData.venue || ''}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="time"
          placeholder="Time (HH:mm)"
          value={formData.time || ''}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="date"
          placeholder="Date (YYYY-MM-DD)"
          type="date"
          value={formData.date || ''}
          onChange={handleChange}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Update Event
        </button>
      </form>
    </div>
  );
}
