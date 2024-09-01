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

const DonatedReport = () => {
    const [donatedCounts, setDonatedCounts] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchDonatedReport();
    }, []);
  
    const fetchDonatedReport = async () => {
      try {
        const response = await fetch('/api/donated');
        const data = await response.json();
        setDonatedCounts(data);
      } catch (error) {
        console.error('Failed to fetch donated report:', error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div style={tableStyles.container}>
        <h3 style={tableStyles.title}>Donated Report</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table style={tableStyles.table}>
            <thead>
              <tr>
                <th style={tableStyles.th}>Username</th>
                <th style={tableStyles.th}>Donation Count</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(donatedCounts).map(([username, count]) => (
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
  
export default DonatedReport;