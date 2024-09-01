import React, { useState } from 'react';
import UpdateDonorDetails from '../../components/Donor/UpdateDonorDetails';
import AddDonation from '../../components/Donor/AddDonation';
import RemoveDonation from '../../components/Donor/RemoveDonation';

export default function RegisteredDonorDashboard() {
  const [activeComponent, setActiveComponent] = useState('update');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'update':
        return <UpdateDonorDetails />;
      case 'add':
        return <AddDonation />;
      case 'remove':
        return <RemoveDonation />;
      default:
        return <UpdateDonorDetails />;
    }
  };

  return (
    <div>
      <h1>Registered Donor Dashboard</h1>
      <nav>
        <button onClick={() => setActiveComponent('update')}>Update Details</button>
        <button onClick={() => setActiveComponent('add')}>Add Donation</button>
        <button onClick={() => setActiveComponent('remove')}>Remove Donation</button>
      </nav>
      <main>
        {renderComponent()}
      </main>
    </div>
  );
}