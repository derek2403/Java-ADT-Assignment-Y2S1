import React, { useState, useEffect } from 'react';

const DoneeList = () => {
  const [donees, setDonees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonees = async () => {
      try {
        const response = await fetch('/api/admin/donees');
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
    <div>
      <h2>Donee List</h2>
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
              <th className="border px-4 py-2">Needs</th>
            </tr>
          </thead>
          <tbody>
            {donees.map(donee => (
              <tr key={donee.username}>
                <td className="border px-4 py-2">{donee.username}</td>
                <td className="border px-4 py-2">{donee.name}</td>
                <td className="border px-4 py-2">{donee.email}</td>
                <td className="border px-4 py-2">{donee.age}</td>
                <td className="border px-4 py-2">{donee.type}</td>
                <td className="border px-4 py-2">{donee.needs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DoneeList;
