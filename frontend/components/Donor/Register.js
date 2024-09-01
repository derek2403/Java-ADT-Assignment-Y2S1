import { useState } from 'react'
import axios from 'axios'

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
    backgroundColor: 'white',
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

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    age: '',
    type: '',
    criteria: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/api/donors/create', formData)
      alert(response.data)
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Error creating account: ' + (error.response?.data || error.message))
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create Account</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="username" placeholder="Username" onChange={handleChange} required style={styles.input} />
        <input name="name" placeholder="Name" onChange={handleChange} required style={styles.input} />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required style={styles.input} />
        <input name="age" placeholder="Age" type="number" onChange={handleChange} required style={styles.input} />
        <select name="type" onChange={handleChange} required style={styles.select}>
          <option value="">Select Type</option>
          <option value="individual">Individual</option>
          <option value="organisation">Organisation</option>
        </select>
        <input name="criteria" placeholder="Criteria" onChange={handleChange} required style={styles.input} />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required style={styles.input} />
        <button type="submit" style={styles.button}>Create Account</button>
      </form>
    </div>
  )
}