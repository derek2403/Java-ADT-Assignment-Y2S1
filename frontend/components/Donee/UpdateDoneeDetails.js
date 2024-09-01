import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f4f8',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  select: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
};

export default function UpdateDoneeDetails() {
  const { isDoneeLoggedIn, currentUser } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    age: '',
    type: '',
    needs: '',
    password: '',
  });

  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3001/api/donees/update', formData);
      alert(response.data);
    } catch (error) {
      console.error('Error updating details:', error);
      alert('Error updating details: ' + (error.response?.data || error.message));
    }
  };

  if (!isDoneeLoggedIn || !currentUser) {
    return <div>Please log in to update your details.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Update Donee Details</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name || ''}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email || ''}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="age"
          placeholder="Age"
          type="number"
          value={formData.age || ''}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select
          name="type"
          value={formData.type || ''}
          onChange={handleChange}
          required
          style={styles.select}
        >
          <option value="">Select Type</option>
          <option value="individual">Individual</option>
          <option value="organisation">Organisation</option>
        </select>
        <input
          name="needs"
          placeholder="Needs"
          value={formData.needs || ''}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="password"
          placeholder="New Password (leave blank to keep current)"
          type="password"
          onChange={handleChange}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Update Details
        </button>
      </form>
    </div>
  );
}
