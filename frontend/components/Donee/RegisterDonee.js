import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

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
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  select: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default function RegisterDonee() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    age: '',
    type: '',
    needs: '',
    password: ''
  });

  const [error, setError] = useState(''); // For displaying error messages

  const router = useRouter();  // Initialize the router

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkUsername = async (username) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/check-donee-username?username=${username}`);
      return response.data.exists;
    } catch (error) {
      console.error('Error checking username:', error);
      alert('Error checking username: ' + (error.response?.data || error.message));
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if username already exists
    const usernameExists = await checkUsername(formData.username);
    if (usernameExists) {
      setError('Username is already taken.');
      return;
    }

    // Clear any previous errors
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/donees/create', formData);
      alert('Account created successfully!');
      // Optionally redirect to another page or clear form
      router.push('/some-page'); // Uncomment if using Next.js
      // setFormData({
      //   username: '',
      //   name: '',
      //   email: '',
      //   age: '',
      //   type: '',
      //   needs: '',
      //   password: ''
      // });
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Error creating account: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register Donee</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="username"
          placeholder="Username"
          value={formData.username || ''} // Ensure value is always a string
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="name"
          placeholder="Name"
          value={formData.name || ''} // Ensure value is always a string
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email || ''} // Ensure value is always a string
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="age"
          placeholder="Age"
          type="number"
          value={formData.age || ''} // Ensure value is always a string
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select
          name="type"
          value={formData.type || ''} // Ensure value is always a string
          onChange={handleChange}
          required
          style={styles.select}
        >
          <option value="">Select Type</option>
          <option value="individual">Individual</option>
          <option value="organisation">Organisation</option>
          <option value="family">Family</option>
        </select>
        <input
          name="needs"
          placeholder="Needs"
          value={formData.needs || ''} // Ensure value is always a string
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password || ''} // Ensure value is always a string
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
        >
          Register
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
