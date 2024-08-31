import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../contexts/AuthContext'

export default function UpdateDoneeDetails() {
  const { isDoneeLoggedIn, currentDonee } = useAuth()
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    age: '',
    type: '',
    needs: '',
    password: ''
  })

  useEffect(() => {
    if (currentDonee) {
      setFormData(currentDonee)
    }
  }, [currentDonee])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put('http://localhost:3001/api/donees/update', formData)
      alert(response.data)
    } catch (error) {
      console.error('Error updating details:', error)
      alert('Error updating details: ' + (error.response?.data || error.message))
    }
  }

  if (!isDoneeLoggedIn || !currentDonee) {
    return <div>Please log in to update your details.</div>
  }

  return (
    <div>
      <h2>Update Donee Details</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name || ''} onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" value={formData.email || ''} onChange={handleChange} required />
        <input name="age" placeholder="Age" type="number" value={formData.age || ''} onChange={handleChange} required />
        <select name="type" value={formData.type || ''} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="individual">Individual</option>
          <option value="organisation">Organisation</option>
        </select>
        <input name="needs" placeholder="Needs" value={formData.needs || ''} onChange={handleChange} required />
        <input name="password" placeholder="New Password (leave blank to keep current)" type="password" onChange={handleChange} />
        <button type="submit">Update Details</button>
      </form>
    </div>
  )
}