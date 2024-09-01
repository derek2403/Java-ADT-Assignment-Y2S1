import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext'; // Assuming this is where your AuthContext is located
import { useRouter } from 'next/router'; // If you are using Next.js

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
    backgroundColor: '#f0f0f0', // Make input background gray to indicate it's not editable
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

export default function DeleteAccount() {
  const { currentUser, logout } = useAuth(); // Get currentUser and logout from AuthContext
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.username); // Set username to the logged-in user's username
    }
  }, [currentUser]);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/donees/delete/${username}`);
        alert(response.data);
        logout(); // Log the user out after deleting the account
        router.push('/donee/signin'); // Redirect to the sign-in page or homepage
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('Error deleting account: ' + (error.response?.data || error.message));
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
          readOnly // Prevent editing by making the input read-only
          placeholder="Username"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Delete Account</button>
      </form>
    </div>
  );
}
