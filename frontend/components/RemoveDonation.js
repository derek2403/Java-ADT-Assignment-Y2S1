import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

export default function RemoveDonation() {
  const { currentUser } = useAuth();
  const [donationId, setDonationId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleRemove = async (e) => {
    e.preventDefault();
    if (!donationId) {
      setError('Please enter a donation ID');
      return;
    }

    setIsLoading(true);
    setError(null);
    setMessage(null);
    try {
      const response = await axios.delete(`http://localhost:3001/api/donations/remove/${donationId}`);
      setMessage(response.data);
      setDonationId('');
    } catch (error) {
      console.error('Error removing donation:', error);
      setError('Error removing donation: ' + (error.response?.data || error.message));
    } finally {
      setIsLoading(false);
    }
  };

  if (!currentUser) {
    return <div>Please sign in to remove donations</div>;
  }

  return (
    <div>
      <h2>Remove Donation</h2>
      <form onSubmit={handleRemove}>
        <input
          type="text"
          value={donationId}
          onChange={(e) => setDonationId(e.target.value)}
          placeholder="Enter Donation ID"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          Remove Donation
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}