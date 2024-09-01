import React, { useState } from 'react';
import DeleteDonor from '../Donor/DeleteDonor';
import DeleteDonee from '../Donee/DeleteDonee';
import DeleteVolunteer from '../Volunteer/DeleteVolunteer';

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
};

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
    <div style={styles.container}>
      <h2 style={styles.title}>Delete Entity</h2>
      <select 
        style={styles.select}
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
