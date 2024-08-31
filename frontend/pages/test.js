import React, { useState } from 'react';
import DoneeList from '../components/DoneeList';
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
        case 'donerList':
            return <DonerList />;
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