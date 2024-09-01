import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext'; 

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#D6D7FD',
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

export default function UpdateVolunteer() {
  const { isVolunteerLoggedIn, currentUser } = useAuth(); // Adjust if needed
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    age: '',
    password: '',
    events: [],
  });

  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3001/api/volunteers/update', formData);
      alert(response.data);
    } catch (error) {
      console.error('Error updating details:', error);
      alert('Error updating details: ' + (error.response?.data || error.message));
    }
  };

  if (!isVolunteerLoggedIn || !currentUser) {
    return <div>Please log in to update your details.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Update Volunteer Details</h2>
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
