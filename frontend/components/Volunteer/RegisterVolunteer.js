import { useState } from 'react';
import axios from 'axios';

const styles = {
  container: {
    maxWidth: '400px',
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
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

const CreateVolunteer = () => {
    const [volunteer, setVolunteer] = useState({
        username: '',
        name: '',
        email: '',
        age: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVolunteer({ ...volunteer, [name]: value });
    };

    const checkUsername = async (username) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/check-username?username=${username}`);
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
        const usernameExists = await checkUsername(volunteer.username);
        if (usernameExists) {
            setError('Username is already taken.');
            return;
        }

        // Clear any previous errors
        setError('');

        try {
            const response = await axios.post('http://localhost:3001/api/volunteers/create', volunteer);
            setMessage('Volunteer created successfully!');
        } catch (error) {
            setMessage('Failed to create volunteer');
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Create Volunteer</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={volunteer.username}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={volunteer.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={volunteer.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={volunteer.age}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={volunteer.password}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Create Volunteer</button>
                {message && <p>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default CreateVolunteer;
