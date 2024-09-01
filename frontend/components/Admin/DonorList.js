import React, { useState, useEffect } from 'react';

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonors = async () => {
      try {
        const response = await fetch('/api/admin/donors');
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
    <div>
      <h2>Donor List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Criteria</th>
            </tr>
          </thead>
          <tbody>
            {donors.map(donor => (
              <tr key={donor.username}>
                <td className="border px-4 py-2">{donor.username}</td>
                <td className="border px-4 py-2">{donor.name}</td>
                <td className="border px-4 py-2">{donor.email}</td>
                <td className="border px-4 py-2">{donor.age}</td>
                <td className="border px-4 py-2">{donor.type}</td>
                <td className="border px-4 py-2">{donor.criteria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DonorList;
