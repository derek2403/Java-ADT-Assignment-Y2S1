// components/Donee/ShowRequests.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  container: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#e9f5ff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#f0f4f8',
    borderBottom: '2px solid #ddd',
  },
  tableCell: {
    padding: '8px',
    border: '1px solid #ddd',
  },
  tableRow: {
    '&:nth-child(even)': {
      backgroundColor: '#f9f9f9',
    },
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '10px',
  },
};

export default function ShowRequests({ username }) {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('/api/donations');
        const userRequests = response.data.filter(request => request.username === username);
        setRequests(userRequests);
      } catch (error) {
        setError('Error fetching requests: ' + (error.response?.data?.message || error.message));
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, [username]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Donations</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ ...styles.tableCell, backgroundColor: '#f8d7da', color: '#721c24' }}>{error}</p>}
      {requests.length > 0 ? (
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableCell}>Donation ID</th>
              <th style={styles.tableCell}>Category</th>
              <th style={styles.tableCell}>Items</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.donationId} style={styles.tableRow}>
                <td style={styles.tableCell}>{request.donationId}</td>
                <td style={styles.tableCell}>{request.category}</td>
                <td style={styles.tableCell}>
                  {request.items.split('+').map((item, index) => (
                    <div key={index}>{item.trim()}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No donations found.</p>
      )}
    </div>
  );
}