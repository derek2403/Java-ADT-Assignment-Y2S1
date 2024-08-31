// File: pages/AdminDashboard.js
import React, { useState } from 'react';
import DoneeList from '../components/DoneeList';
import DonorList from '../components/DonorList';
import ExecuteDonation from '../components/ExecuteDonation';
import GenerateReport from '../components/GenerateReport';

const ADMIN_USERNAME = 'XXX';
const ADMIN_PASSWORD = 'XXX';

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState('doneeList');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLogin = () => {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAdminLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'donorList':
        return <DonorList />;
      case 'doneeList':
        return <DoneeList />;
      case 'executeDonation':
        return <ExecuteDonation />;
      case 'generateReport':
        return <GenerateReport />;
      default:
        return <DoneeList />;
    }
  };

  if (!isAdminLoggedIn) {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <p>Please log in as an administrator to access this page.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <button onClick={() => setActiveComponent('donorList')}>Donor List</button>
        <button onClick={() => setActiveComponent('doneeList')}>Donee List</button>
        <button onClick={() => setActiveComponent('executeDonation')}>Execute Donation</button>
        <button onClick={() => setActiveComponent('generateReport')}>Generate Report</button>
      </nav>
      <main>
        {renderComponent()}
      </main>
    </div>
  );
}

// File: components/DonorList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DonorList() {
  const [donors, setDonors] = useState([]);
  const [filter, setFilter] = useState({ criteria: '', type: '' });

  useEffect(() => {
    fetchDonors();
  }, [filter]);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/admin/donors', {
        params: filter
      });
      setDonors(response.data);
    } catch (error) {
      console.error('Error fetching donors:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Donor List</h2>
      <div>
        <input
          name="criteria"
          type="text"
          placeholder="Filter by criteria"
          value={filter.criteria}
          onChange={handleFilterChange}
        />
        <select name="type" value={filter.type} onChange={handleFilterChange}>
          <option value="">All Types</option>
          <option value="individual">Individual</option>
          <option value="organisation">Organisation</option>
        </select>
      </div>
      <ul>
        {donors.map((donor, index) => (
          <li key={index}>
            {donor.name} - {donor.type} - Criteria: {donor.criteria}
          </li>
        ))}
      </ul>
    </div>
  );
}

// File: components/DoneeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DoneeList() {
  const [donees, setDonees] = useState([]);
  const [filter, setFilter] = useState({ criteria: '', type: '' });

  useEffect(() => {
    fetchDonees();
  }, [filter]);

  const fetchDonees = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/admin/donees', {
        params: filter
      });
      setDonees(response.data);
    } catch (error) {
      console.error('Error fetching donees:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Donee List</h2>
      <div>
        <input
          name="criteria"
          type="text"
          placeholder="Filter by criteria"
          value={filter.criteria}
          onChange={handleFilterChange}
        />
        <select name="type" value={filter.type} onChange={handleFilterChange}>
          <option value="">All Types</option>
          <option value="individual">Individual</option>
          <option value="organisation">Organisation</option>
        </select>
      </div>
      <ul>
        {donees.map((donee, index) => (
          <li key={index}>
            {donee.name} - {donee.type} - Needs: {donee.needs}
          </li>
        ))}
      </ul>
    </div>
  );
}