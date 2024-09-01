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
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #ddd',
    borderRight: 'none',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
  donorDetails: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
};

export default function SearchDonor() {
  const [username, setUsername] = useState('')
  const [donor, setDonor] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`http://localhost:3001/api/donors/search?username=${username}`)
      setDonor(response.data)
    } catch (error) {
      console.error('Error searching donor:', error)
      alert('Error searching donor: ' + (error.response?.data || error.message))
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Search Donor</h2>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>
      {donor && (
        <div style={styles.donorDetails}>
          <h3>Donor Details</h3>
          <p>Name: {donor.name}</p>
          <p>Email: {donor.email}</p>
          <p>Age: {donor.age}</p>
          <p>Type: {donor.type}</p>
          <p>Criteria: {donor.criteria}</p>
        </div>
      )}
    </div>
  )
}