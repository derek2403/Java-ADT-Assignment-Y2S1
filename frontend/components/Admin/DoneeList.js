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

const DoneeList = () => {
  const [donees, setDonees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonees = async () => {
      try {
        const response = await fetch('/api/donee_details');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDonees(data);
      } catch (error) {
        console.error('Failed to fetch donees:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDonees();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Donee List</h2>
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
              <th style={styles.th}>Needs</th>
            </tr>
          </thead>
          <tbody>
            {donees.map(donee => (
              <tr key={donee.username}>
                <td style={styles.td}>{donee.username}</td>
                <td style={styles.td}>{donee.name}</td>
                <td style={styles.td}>{donee.email}</td>
                <td style={styles.td}>{donee.age}</td>
                <td style={styles.td}>{donee.type}</td>
                <td style={styles.td}>{donee.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DoneeList;
