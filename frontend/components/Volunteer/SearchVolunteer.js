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
  volunteerDetails: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
};

export default function SearchVolunteer() {
  const [username, setUsername] = useState('');
  const [volunteer, setVolunteer] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/volunteers/search?username=${username}`);
      setVolunteer(response.data);
    } catch (error) {
      console.error('Error searching volunteer:', error);
      alert('Error searching volunteer: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Search Volunteer</h2>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>
      {volunteer && (
        <div style={styles.volunteerDetails}>
          <h3>Volunteer Details</h3>
          <p>Username: {volunteer.username}</p>
          <p>Name: {volunteer.name}</p>
          <p>Email: {volunteer.email}</p>
          <p>Age: {volunteer.age}</p>
          {/* Add additional volunteer properties if needed */}
        </div>
      )}
    </div>
  );
}
