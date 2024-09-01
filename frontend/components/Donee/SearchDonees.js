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
  doneeDetails: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
};

export default function SearchDonee() {
  const [username, setUsername] = useState('');
  const [donee, setDonee] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/donees/search?username=${username}`);
      setDonee(response.data);
    } catch (error) {
      console.error('Error searching donee:', error);
      alert('Error searching donee: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Search Donee</h2>
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
      {donee && (
        <div style={styles.doneeDetails}>
          <h3>Donee Details</h3>
          <p>Name: {donee.name}</p>
          <p>Email: {donee.email}</p>
          <p>Age: {donee.age}</p>
          <p>Type: {donee.type}</p>
          <p>Needs: {donee.needs}</p>
        </div>
      )}
    </div>
  );
}
