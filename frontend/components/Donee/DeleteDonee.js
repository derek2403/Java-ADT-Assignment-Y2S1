import { useState } from 'react';
import axios from 'axios';

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
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default function DeleteDonee() {
  const [username, setUsername] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this donee?')) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/donees/delete/${username}`);
        alert(response.data);
        setUsername('');
        router.push('/donee/dashboard');
      } catch (error) {
        console.error('Error deleting donee:', error);
        alert('Error deleting donee: ' + (error.response?.data || error.message));
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Delete Donee</h2>
      <form onSubmit={handleDelete} style={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username to delete"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Delete</button>
      </form>
    </div>
  );
}
