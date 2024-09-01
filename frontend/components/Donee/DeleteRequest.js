// components/Donee/DeleteRequest.js
import React, { useState } from 'react';
import axios from 'axios';
import ShowRequests from './ShowRequest';
import { useAuth } from '../../contexts/AuthContext'; // Adjust path to your AuthContext

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
  message: {
    marginTop: '10px',
    padding: '10px',
    borderRadius: '4px',
    textAlign: 'center',
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

export default function DeleteRequest() {
  const { currentUser } = useAuth(); // Get currentUser from context
  const [requestId, setRequestId] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:3001/api/donees/remove-request/${requestId}`);
      setMessage(response.data);
      setIsError(false);
      setRequestId('');
    } catch (error) {
      setMessage(error.response?.data || 'An error occurred');
      setIsError(true);
    }
  };

  if (!currentUser) {
    return <div style={styles.container}>Please sign in to delete donation requests</div>;
  }

  return (
    <div style={styles.container}>
      <ShowRequests username={currentUser.username} />
      <h2 style={styles.title}>Delete Donation Request</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={requestId}
          onChange={(e) => setRequestId(e.target.value)}
          placeholder="Enter Request ID"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Delete Request</button>
      </form>
      {message && (
        <div style={{
          ...styles.message,
          ...(isError ? styles.error : styles.success),
        }}>
          {message}
        </div>
      )}
    </div>
  );
}
