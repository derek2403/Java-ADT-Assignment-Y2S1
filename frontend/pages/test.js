import { useState, useEffect } from 'react'
import axios from 'axios'

export default function UpdateDetails({ currentUser }) {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    age: '',
    type: '',
    criteria: '',
    password: ''
  })

  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser)
    }
  }, [currentUser])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put('http://localhost:3001/api/donors/update', formData)
      alert(response.data)
    } catch (error) {
      console.error('Error updating details:', error)
      alert('Error updating details: ' + (error.response?.data || error.message))
    }
  }

  if (!currentUser) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Update Details</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name || ''} onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" value={formData.email || ''} onChange={handleChange} required />
        <input name="age" placeholder="Age" type="number" value={formData.age || ''} onChange={handleChange} required />
        <select name="type" value={formData.type || ''} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="individual">Individual</option>
          <option value="organisation">Organisation</option>
        </select>
        <input name="criteria" placeholder="Criteria" value={formData.criteria || ''} onChange={handleChange} required />
        <input name="password" placeholder="New Password (leave blank to keep current)" type="password" onChange={handleChange} />
        <button type="submit">Update Details</button>
      </form>
    </div>
  )
}