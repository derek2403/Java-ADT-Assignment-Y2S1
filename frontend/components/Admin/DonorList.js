import React, { useState, useEffect } from 'react';

// Define your CSS-in-JS styles
const styles = {
  container: {
    padding: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
};

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonors = async () => {
      try {
        const response = await fetch('/api/donor_details');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDonors(data);
      } catch (error) {
        console.error('Failed to fetch donors:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDonors();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Donor List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Username</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Age</th>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Criteria</th>
            </tr>
          </thead>
          <tbody>
            {donors.map(donor => (
              <tr key={donor.username}>
                <td style={styles.td}>{donor.username}</td>
                <td style={styles.td}>{donor.name}</td>
                <td style={styles.td}>{donor.email}</td>
                <td style={styles.td}>{donor.age}</td>
                <td style={styles.td}>{donor.type}</td>
                <td style={styles.td}>{donor.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DonorList;
