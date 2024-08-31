import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'

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
    <div>
      <h2>Add Donation</h2>
      <form onSubmit={handleSubmit}>
        <select name="category" value={formData.category} onChange={handleChange} required>
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
        />
        <button type="submit">Add Donation</button>
      </form>
    </div>
  )
}