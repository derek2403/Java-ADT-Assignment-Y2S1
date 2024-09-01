import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext'

export default function DonationList({ username }) {
  const { currentUser } = useAuth();
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      fetchDonations();
    }
  }, [currentUser, username]);

  const fetchDonations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const userToFetch = username || currentUser.username;
      const response = await axios.get(`http://localhost:3001/api/donations/list/${userToFetch}`);
      const data = response.data;

      console.log('Received data:', data);

      let donationsArray = [];
      if (data && typeof data === 'object' && 'head' in data) {
        let current = data.head;
        while (current) {
          donationsArray.push(current.data);
          current = current.next;
        }
      } else if (Array.isArray(data)) {
        donationsArray = data;
      } else if (typeof data === 'object') {
        donationsArray = [data];
      } else {
        throw new Error('Unexpected data format');
      }

      setDonations(donationsArray);
    } catch (error) {
      console.error('Error fetching donations:', error);
      setError('Failed to fetch donations. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!currentUser) {
    return <div>Please sign in to view donations</div>;
  }

  return (
    <div>
      <h2>Donations List for {username || currentUser.username}</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <ul>
          {donations.map((donation) => (
            <li key={donation.donationId}>
              <strong>ID:</strong> {donation.donationId}<br />
              <strong>Category:</strong> {donation.category}<br />
              <strong>Items:</strong> {Array.isArray(donation.items) ? donation.items.join(', ') : 'No items'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}