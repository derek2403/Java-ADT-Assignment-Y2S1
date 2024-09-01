import React, { useState, useEffect } from 'react';

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
  filterContainer: {
    marginBottom: '20px',
  },
  filterInput: {
    marginRight: '10px',
    padding: '5px',
  },
  noResults: {
    textAlign: 'center',
    padding: '20px',
    fontStyle: 'italic',
  },
};

const DoneeList = () => {
  const [donees, setDonees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

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

  const filteredDonees = donees.filter(donee => 
    donee.type.toLowerCase().includes(typeFilter.toLowerCase()) &&
    donee.category.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  const renderTable = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (filteredDonees.length === 0) {
      return <p style={styles.noResults}>No matching donees found.</p>;
    }

    return (
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
          {filteredDonees.map(donee => (
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
    );
  };

  return (
    <div style={styles.container}>
      <h2>Donee List</h2>
      <div style={styles.filterContainer}>
        <input
          type="text"
          placeholder="Filter by Type"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          style={styles.filterInput}
        />
        <input
          type="text"
          placeholder="Filter by Category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={styles.filterInput}
        />
      </div>
      {renderTable()}
    </div>
  );
};

export default DoneeList;
