import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../contexts/AuthContext'

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
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default function AddDonation() {
  const { currentUser } = useAuth()
  const [formData, setFormData] = useState({
    category: '',
    items: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!currentUser) {
      alert('Please sign in to add a donation')
      return
    }

    try {
      const donation = {
        username: currentUser.username,
        category: formData.category,
        items: formData.items.split('+').map(item => item.trim())
      }
      const response = await axios.post('http://localhost:3001/api/donations/add', donation)
      alert(response.data)
      setFormData({ category: '', items: '' })
    } catch (error) {
      console.error('Error adding donation:', error)
      alert('Error adding donation: ' + (error.response?.data || error.message))
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add Donation</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <select name="category" value={formData.category} onChange={handleChange} required style={styles.select}>
          <option value="">Select Category</option>
          <option value="goods">Goods</option>
          <option value="food">Food</option>
          <option value="money">Money</option>
          <option value="electronics">Electronics</option>
        </select>
        <input
          name="items"
          placeholder="Items (separated by +)"
          value={formData.items}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Donation</button>
      </form>
    </div>
  )
}