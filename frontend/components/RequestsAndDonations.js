import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#F8F9FA',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f4f4f4',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  section: {
    marginBottom: '40px',
  },
};

const RequestsAndDonations = () => {
  const [requests, setRequests] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [requestsResponse, donationsResponse] = await Promise.all([
          fetch('/api/donation-requests'),
          fetch('/api/donations'),
        ]);

        if (!requestsResponse.ok || !donationsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const requestsData = await requestsResponse.json();
        const donationsData = await donationsResponse.json();

        setRequests(requestsData);
        setDonations(donationsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Donation Requests and Donations</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div style={styles.section}>
            <h3 style={styles.title}>Donation Requests</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Request ID</th>
                  <th style={styles.th}>Items</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(request => (
                  <tr key={request.requestId}>
                    <td style={styles.td}>{request.requestId}</td>
                    <td style={styles.td}>{request.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={styles.section}>
            <h3 style={styles.title}>Donations</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Donation ID</th>
                  <th style={styles.th}>Items</th>
                </tr>
              </thead>
              <tbody>
                {donations.map(donation => (
                  <tr key={donation.donationid}>
                    <td style={styles.td}>{donation.donationid}</td>
                    <td style={styles.td}>{donation.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestsAndDonations;
