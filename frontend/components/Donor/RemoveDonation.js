import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext'
import ShowDonations from './ShowDonations';

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
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
  message: {
    padding: '10px',
    borderRadius: '4px',
    marginTop: '10px',
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  success: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
};

export default function RemoveDonation() {
  const { currentUser } = useAuth();
  const [donationId, setDonationId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleRemove = async (e) => {
    e.preventDefault();
    if (!donationId) {
      setError('Please enter a donation ID');
      return;
    }

    setIsLoading(true);
    setError(null);
    setMessage(null);
    try {
      const response = await axios.delete(`http://localhost:3001/api/donations/remove/${donationId}`);
      setMessage(response.data);
      setDonationId('');
    } catch (error) {
      console.error('Error removing donation:', error);
      setError('Error removing donation: ' + (error.response?.data || error.message));
    } finally {
      setIsLoading(false);
    }
  };

  if (!currentUser) {
    return <div style={styles.container}>Please sign in to remove donations</div>;
  }

  return (
    <div style={styles.container}>
      <ShowDonations username={currentUser.username} />
      <h2 style={styles.title}>Remove Donation</h2>
      <form onSubmit={handleRemove} style={styles.form}>
        <input
          type="text"
          value={donationId}
          onChange={(e) => setDonationId(e.target.value)}
          placeholder="Enter Donation ID"
          disabled={isLoading}
          style={styles.input}
        />
        <button type="submit" disabled={isLoading} style={styles.button}>
          Remove Donation
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{...styles.message, ...styles.error}}>{error}</p>}
      {message && <p style={{...styles.message, ...styles.success}}>{message}</p>}
    </div>
  );
}