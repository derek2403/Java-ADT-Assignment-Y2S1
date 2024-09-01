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

const TransactionReport = () => {
    const [transactions, setTransactions] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchTransactions();
    }, [selectedMonth]);
  
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/transaction${selectedMonth ? `?month=${selectedMonth}` : ''}`);
        const data = await response.json();
        setTransactions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div style={tableStyles.container}>
        <h3 style={tableStyles.title}>Transaction Report</h3>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="">All Months</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table style={tableStyles.table}>
            <thead>
              <tr>
                <th style={tableStyles.th}>Transaction ID</th>
                <th style={tableStyles.th}>Request ID</th>
                <th style={tableStyles.th}>Donation ID</th>
                <th style={tableStyles.th}>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td style={tableStyles.td}>{transaction.transid}</td>
                    <td style={tableStyles.td}>{transaction.requestid}</td>
                    <td style={tableStyles.td}>{transaction.donationid}</td>
                    <td style={tableStyles.td}>{new Date(transaction.date).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={tableStyles.td} colSpan="4">No transactions available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    );
  };
  export default TransactionReport ;