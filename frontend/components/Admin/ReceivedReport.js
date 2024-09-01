import React, { useState, useEffect } from 'react';

// Define some basic styles for the tables
const tableStyles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
  },
  th: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    border: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
  container: {
    padding: '20px',
  },
  title: {
    margin: '10px 0',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

const ReceivedReport = () => {
  const [receivedCounts, setReceivedCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReceivedReport();
  }, []);

  const fetchReceivedReport = async () => {
    try {
      const response = await fetch('/api/received');
      const data = await response.json();
      setReceivedCounts(data);
    } catch (error) {
      console.error('Failed to fetch received report:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={tableStyles.container}>
      <h3 style={tableStyles.title}>Received Report</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={tableStyles.table}>
          <thead>
            <tr>
              <th style={tableStyles.th}>Username</th>
              <th style={tableStyles.th}>Received Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(receivedCounts).map(([username, count]) => (
              <tr key={username}>
                <td style={tableStyles.td}>{username}</td>
                <td style={tableStyles.td}>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default ReceivedReport ;