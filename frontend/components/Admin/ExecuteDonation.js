import React, { useState } from 'react';

const ExecuteDonation = () => {
  const [donationId, setDonationId] = useState('');
  const [requestId, setRequestId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/execute-donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ donationId, requestId }),
      });
      const result = await response.text();
      setMessage(result);
    } catch (error) {
      console.error('Failed to execute donation:', error);
      setMessage('Failed to execute donation');
    }
  };

  return (
    <div>
      <h2>Execute Donation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="donationId" className="block text-gray-700">Donation ID</label>
          <input
            type="text"
            id="donationId"
            value={donationId}
            onChange={(e) => setDonationId(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requestId" className="block text-gray-700">Request ID</label>
          <input
            type="text"
            id="requestId"
            value={requestId}
            onChange={(e) => setRequestId(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Execute</button>
      </form>
      {message && (
        <div className="mt-4">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default ExecuteDonation;
