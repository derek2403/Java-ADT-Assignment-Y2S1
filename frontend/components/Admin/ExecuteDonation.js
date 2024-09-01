import React, { useState } from 'react';
import RequestsAndDonations from '../RequestsAndDonations';
import Popup from '../Popup';

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
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
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  secondaryButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  message: {
    marginTop: '20px',
    color: '#2ecc71',
  },
  error: {
    marginTop: '20px',
    color: '#e74c3c',
  },
};

const ExecuteDonation = () => {
  const [donationId, setDonationId] = useState('');
  const [requestId, setRequestId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      // Execute donation transaction
      const response = await fetch('http://localhost:3001/api/admin/create-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ donationId, requestId }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.text();
      setMessage(result);

      // Perform post-transaction processing
      const postProcessingResponse = await fetch('/api/post-transaction-processing', {
        method: 'POST',
      });
      if (!postProcessingResponse.ok) {
        throw new Error(`Post-processing error! status: ${postProcessingResponse.status}`);
      }
      const postProcessingResult = await postProcessingResponse.json();
      setMessage(prevMessage => `${prevMessage}\n${postProcessingResult.message}`);
    } catch (error) {
      console.error('Failed to execute donation:', error);
      setError(`Failed to execute donation: ${error.message}`);
    }
  };

  const togglePopup = () => {
    setShowPopup(prevState => !prevState);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Execute Donation</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="donationId" style={{ display: 'block', color: '#333' }}>Donation ID</label>
          <input
            type="text"
            id="donationId"
            value={donationId}
            onChange={(e) => setDonationId(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="requestId" style={{ display: 'block', color: '#333' }}>Request ID</label>
          <input
            type="text"
            id="requestId"
            value={requestId}
            onChange={(e) => setRequestId(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Execute</button>
        <button type="button" onClick={togglePopup} style={styles.secondaryButton}>
          {showPopup ? 'Hide Details' : 'View Supply/Demand'}
        </button>
      </form>
      {message && (
        <div style={styles.message}>
          <p>{message}</p>
        </div>
      )}
      {error && (
        <div style={styles.error}>
          <p>{error}</p>
        </div>
      )}
      {showPopup && (
        <Popup onClose={togglePopup}>
          <RequestsAndDonations />
        </Popup>
      )}
    </div>
  );
};

export default ExecuteDonation;
