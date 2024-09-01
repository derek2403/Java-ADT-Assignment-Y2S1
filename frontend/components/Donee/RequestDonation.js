import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#D6D7FD',
    borderRadius: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    margin: '20px 0',
    padding: '10px',
    fontSize: '18px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default function RequestDonation() {
  const [category, setCategory] = useState('');
  const [items, setItems] = useState('');
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/donees/request-donation', {
        username: currentUser.username, // Use currentUser's username
        category,
        items,
      });
      alert(response.data);
      setCategory('');
      setItems('');
    } catch (error) {
      setError('Failed to submit donation request. Please try again.');
      console.error('Error submitting donation request:', error);
    }
  };

  if (!currentUser) {
    return <div style={styles.container}>Please sign in to request a donation</div>;
  }

  return (
    <div style={styles.container}>
      <h2>Request Donation</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          value={currentUser.username} // Display the username
          readOnly // Make it read-only
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Donation Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Requested Items (separate with +)"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">Submit Request</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}
