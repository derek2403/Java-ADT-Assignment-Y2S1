import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'

const styles = {
  container: {
    maxWidth: '300px',
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

export default function SignIn() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const router = useRouter()
  const { loginDonor } = useAuth()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/api/donors/signin', formData)
      loginDonor(response.data)
      router.push('/donor/registered')
    } catch (error) {
      console.error('Error signing in:', error)
      alert('Error signing in: ' + (error.response?.data || error.message))
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign In Donor</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          name="username" 
          placeholder="Username" 
          onChange={handleChange} 
          required 
          style={styles.input}
        />
        <input 
          name="password" 
          placeholder="Password" 
          type="password" 
          onChange={handleChange} 
          required 
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
    </div>
  )
}