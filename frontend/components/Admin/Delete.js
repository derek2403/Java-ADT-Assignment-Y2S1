import React, { useState } from 'react';
import DeleteDonor from '../Donor/DeleteDonor';
import DeleteDonee from '../Donee/DeleteDonee';
import DeleteVolunteer from '../Volunteer/DeleteVolunteer';

const DeleteEntity = () => {
  const [selectedEntity, setSelectedEntity] = useState('');

  const renderDeleteComponent = () => {
    switch (selectedEntity) {
      case 'donor':
        return <DeleteDonor />;
      case 'donee':
        return <DeleteDonee />;
      case 'volunteer':
        return <DeleteVolunteer />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Delete Entity</h2>
      <select 
        value={selectedEntity} 
        onChange={(e) => setSelectedEntity(e.target.value)}
      >
        <option value="">Select an entity to delete</option>
        <option value="donor">Donor</option>
        <option value="donee">Donee</option>
        <option value="volunteer">Volunteer</option>
      </select>
      
      {selectedEntity && (
        <div>
          {renderDeleteComponent()}
        </div>
      )}
    </div>
  );
};

export default DeleteEntity;
